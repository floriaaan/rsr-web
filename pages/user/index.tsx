import { AppLayout } from "@components/layouts/AppLayout";
import { UserLikedResources } from "@components/user/UserLikedResources";
import { UserResources } from "@components/user/UserResources";
import { Resource } from "@definitions/Resource";
import { CogIcon, CollectionIcon } from "@heroicons/react/outline";
import { useAuth } from "@hooks/useAuth";
import { fetchRSR } from "@utils/fetchRSR";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const UserIndexPage: NextPage<any> = ({
  resources,
  likes,
}: {
  resources: Resource[];
  likes: Resource[];
}) => {
  const { user } = useAuth();

  return (
    <AppLayout>
      <div className="flex flex-col w-full h-full bg-white dark:bg-black ">
        <div className="flex flex-col w-full px-6 py-6 space-y-3 bg-white lg:justify-between lg:items-end lg:flex-row shrink-0 lg:px-12 dark:bg-black dark:border-gray-800 lg:space-y-0">
          <div className="inline-flex items-center">
          <Image
              className="rounded-full"
              src={user?.data.photoURL || "/uploads/user/default.png"}
              width={32}
              height={32}
              alt={user?.data.fullName}
            />
            <h3 className="ml-5 text-2xl font-extrabold text-gray-800 font-marianne dark:text-gray-200">
              Mon
              <span className="ml-1 text-bleuFrance-600 dark:text-bleuFrance-300">
                profil
              </span>
            </h3>
          </div>
          <div className="inline-flex items-center space-x-2">
            <Link href="/user/playlists">
              <a className="btn-gray h-fit w-fit">
                <CollectionIcon className="w-4 h-4 mr-2" />
                Playlists
              </a>
            </Link>

            <Link href="/user/settings">
              <a className="btn-gray h-fit w-fit">
                <CogIcon className="w-4 h-4 mr-2" />
                Paramètres
              </a>
            </Link>
          </div>
        </div>
        <div className="flex flex-col p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 grow xl:rounded-tl-xl">
          {user && (
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 h-fit">
              <UserResources resources={resources} />
              <UserLikedResources resources={likes} />
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

  const parsedUser = JSON.parse(user);

  const resources = await (
    await fetchRSR(
      `http://localhost:3000/api/user/${parsedUser.data.uid}`,
      parsedUser?.session
    )
  ).json();

  const likes = await (
    await fetchRSR(
      `http://localhost:3000/api/user/${parsedUser.data.uid}/resources/likes`,
      parsedUser?.session
    )
  ).json();

  return {
    props: {
      ...resources.data.attributes,
      likes: likes?.data?.attributes || [],
    },
  };
};
