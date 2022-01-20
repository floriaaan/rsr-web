import { AppLayout } from "@components/layouts/AppLayout";
import { ChangePassword } from "@components/user/ChangePassword";
import { ChangeProfilePicture } from "@components/user/ChangeProfilePicture";
import { SessionsViewer } from "@components/user/SessionsViewer";
import { UserResources } from "@components/user/UserResources";
import { Resource } from "@definitions/Resource/Resource";
import { useAuth } from "@hooks/useAuth";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserIndexPage: NextPage = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {
    fetch(
      `${process.env.API_URL || "http://localhost:3000/api"}/user/${
        user?.data.uid
      }`
    )
      .then((res) => res.json())
      .then((body) => {
        setResources(body?.data.attributes.resources);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  return (
    <AppLayout>
      <div className="flex flex-col w-full max-h-full bg-white dark:bg-gray-900 ">
        <div className="flex flex-col w-full px-6 py-6 bg-white shrink-0 lg:px-12 dark:bg-black dark:border-gray-800">
          <div className="inline-flex items-end w-full">
            <div className="w-auto h-auto">
              <Image
                src={user?.data.photoURL || "/uploads/user/default.png"}
                width={64}
                height={64}
                alt={user?.data.fullName}
              />
            </div>
            <h3 className="mb-3 ml-5 text-2xl font-extrabold text-gray-800 font-marianne dark:text-gray-200">
              Votre
              <span className="ml-1 text-yellow-500">profil</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col p-6 overflow-y-auto bg-gray-100 grow xl:rounded-tl-xl">
          {user && (
            <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3 h-fit">
              <UserResources isAuthentifiedUser resources={resources} />
              <ChangeProfilePicture />
              <ChangePassword />
              <SessionsViewer />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default UserIndexPage;

export const getServerSideProps = async (ctx) => {
  const {
    cookies: { user },
  } = ctx.req;
  if (!user)
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
    };
  return { props: {} };
};
