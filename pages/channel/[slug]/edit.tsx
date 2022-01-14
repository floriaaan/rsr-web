// import { Sidebar } from "@components/channel/Sidebar";
// import { AppLayout } from "@components/layouts/AppLayout";
// import { GetServerSideProps, NextPage } from "next";
// import { useRouter } from "next/router";
// import { useState } from "react";

// import slugify from "slug";
// import dynamic from "next/dynamic";
// import {
//   InformationCircleIcon,
//   PencilAltIcon,
//   TrashIcon,
//   UsersIcon,
//   XIcon,
// } from "@heroicons/react/outline";

// const Select: any = dynamic(() => import("react-select") as any, {
//   ssr: false,
// });

// const ChannelEditPage: NextPage<any> = ({
//   sideBarChannels,
// }: {
//   sideBarChannels: {
//     slug: string;
//     name: string;
//     messages: {
//       content: string;
//       createdAt: string;
//     }[];
//     members: object[];
//   }[];
// }) => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const [name, setName] = useState<string>("");
//   const [picture, setPicture] = useState<File | null>(null);
//   const [pictureUrl, setPictureUrl] = useState<string | null>(null);

//   const [description, setDescription] = useState<string>("");
//   const [members, setMembers] = useState<string[]>([]); // uidlist
//   const [membersOptions, setMembersOptions] = useState<
//     { fullName: string; uid: string; photoURL: string }[]
//   >([
//     {
//       fullName: "John Doe",
//       uid: "uid-1",
//       photoURL: "https://picsum.photos/200",
//     },
//     {
//       fullName: "Jane Doe",
//       uid: "uid-2",
//       photoURL: "https://picsum.photos/201",
//     },
//     {
//       fullName: "Jack Doe",
//       uid: "uid-3",
//       photoURL: "https://picsum.photos/202",
//     },
//   ]);
//   return (
//     <AppLayout>
//       <div className="flex flex-col w-full h-full max-h-[calc(100vh-4rem)] xl:flex-row">
//         <Sidebar
//           channels={sideBarChannels}
//           canExpand={false}
//           isExpanded={false}
//           canReturn
//           isCreatingChannel
//         />
//         <div className="flex justify-center w-full h-full ">
//           <div className="flex flex-col w-full mx-auto bg-gray-700 ">
//             {/* HEADER */}
//             <div className="inline-flex justify-between w-full p-3 px-6">
//               <div className="flex flex-col ">
//                 <div className="inline-flex items-center">
//                   <p className="text-xl font-medium text-gray-100 font-marianne">
//                     {"#" + (name !== "" ? slugify(name) : "éditer-" + slug)}
//                   </p>
//                 </div>

//                 <p className="text-sm font-light text-gray-300 font-spectral">
//                   {description || "Échangeons tous ensemble."}
//                 </p>
//               </div>
//             </div>

//             {/* BODY */}
//             <div className="flex flex-col flex-grow p-3 space-y-4 overflow-y-auto bg-white xl:ml-6 xl:rounded-l-xl xl:p-6">
//               <div className="relative flex flex-col">
//                 {pictureUrl && (
//                   <div className="relative w-full">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={pictureUrl}
//                       className="object-cover object-center w-full rounded-lg max-h-48"
//                       alt="Event picture"
//                     ></img>
//                     <div
//                       className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 -mt-1 -mr-1 text-red-700 transition duration-300 bg-red-200 rounded-full cursor-pointer hover:bg-red-300"
//                       onClick={() => {
//                         setPictureUrl(null);
//                         setPicture(null);
//                       }}
//                     >
//                       <XIcon className="w-3 h-3 stroke-2"></XIcon>
//                     </div>
//                   </div>
//                 )}
//                 {!pictureUrl && (
//                   <div className="w-full">
//                     <input
//                       id="filePicture"
//                       type="file"
//                       accept="image/*"
//                       onChange={(e) => {
//                         let file =
//                           e.target.files instanceof FileList
//                             ? e.target.files[0]
//                             : null;
//                         if (file) {
//                           setPicture(file);
//                           setPictureUrl(URL.createObjectURL(file));
//                         }
//                       }}
//                       className="hidden"
//                     ></input>
//                     <label
//                       htmlFor="filePicture"
//                       className="relative block w-full p-12 text-center duration-300 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       <svg
//                         className="w-12 h-12 mx-auto text-gray-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>

//                       <span className="block mt-2 text-sm font-medium text-gray-900">
//                         Ajouter une image
//                       </span>
//                     </label>
//                   </div>
//                 )}
//               </div>
//               <div className="relative flex flex-col">
//                 <label
//                   htmlFor="name"
//                   className="text-sm leading-7 text-gray-600 font-marianne dark:text-gray-400"
//                 >
//                   Nom du salon
//                 </label>
//                 <div className="inline-flex items-center space-x-2">
//                   <span className="flex items-center justify-center flex-shrink-0 w-[2.25rem] h-[2.25rem] bg-blue-200 rounded-lg dark:bg-blue-900">
//                     <InformationCircleIcon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
//                   </span>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="input"
//                   />
//                 </div>
//               </div>

//               <div className="relative flex flex-col">
//                 <label
//                   htmlFor="members"
//                   className="text-sm leading-7 text-gray-600 font-marianne dark:text-gray-400"
//                 >
//                   Membre(s) du salon
//                 </label>
//                 <div className="inline-flex items-center space-x-2">
//                   <span className="flex items-center justify-center flex-shrink-0 w-[2.25rem] h-[2.25rem] bg-blue-200 rounded-lg dark:bg-blue-900">
//                     <UsersIcon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
//                   </span>
//                   <Select
//                     name="members"
//                     className="w-full"
//                     isMulti
//                     options={membersOptions.map((member) => ({
//                       value: member.uid,
//                       label: member.fullName,
//                       photoURL: member.photoURL,
//                     }))}
//                     formatOptionLabel={(member: {
//                       value: string;
//                       label: string;
//                       photoURL: string;
//                     }) => (
//                       <div className="inline-flex items-center">
//                         <img
//                           src={member.photoURL}
//                           alt={member.label}
//                           className="w-5 h-5 mr-2 rounded-full"
//                         />
//                         <span className="text-xs font-marianne">
//                           {member.label}
//                         </span>
//                       </div>
//                     )}
//                   />
//                 </div>
//               </div>
//               <div className="relative flex flex-col">
//                 <label
//                   htmlFor="description"
//                   className="text-sm leading-7 text-gray-600 font-marianne dark:text-gray-400"
//                 >
//                   Description du salon
//                 </label>

//                 <textarea
//                   id="description"
//                   name="description"
//                   rows={3}
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="input"
//                 />
//               </div>
//             </div>

//             {/* FOOTER */}
//             <div className="inline-flex justify-end w-full p-3 px-6 space-x-3">
//               <button className="btn-red">
//                 <TrashIcon className="w-4 h-4 mr-1" />
//                 Supprimer
//               </button>
//               <button className="btn-amber">
//                 <PencilAltIcon className="w-4 h-4 mr-1" />
//                 Editer
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </AppLayout>
//   );
// };

// export default ChannelEditPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       sideBarChannels: [
//         {
//           slug: "general",
//           name: "General",
//           photoURL: "https://picsum.photos/200",
//         },
//         {
//           slug: "random",
//           name: "Random",
//           photoURL: "https://picsum.photos/201",
//         },
//         {
//           slug: "cool",
//           name: "Cool",
//           photoURL: "https://picsum.photos/202",
//         },
//         {
//           slug: "fun",
//           name: "Fun",
//           photoURL: "https://picsum.photos/203",
//         },
//       ],
//     },
//   };
// };

import { AppLayout } from "@components/layouts/AppLayout";
import { Channel } from "@definitions/Channel/Channel";
import {
  CheckIcon,
  CloudUploadIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useAuth } from "@hooks/useAuth";
import { classes } from "@utils/classes";
import { fetchRSR } from "@utils/fetchRSR";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import slug from "slug";

const Select: any = dynamic(() => import("react-select") as any, {
  ssr: false,
});

const ChannelCreate: NextPage<any> = (props) => {
  const router = useRouter();
  const { user } = useAuth();

  const [pictureUrl, setPictureUrl] = useState(null);
  const [pictureFile, setPictureFile] = useState(null);
  const [name, setName] = useState<string>(props.name || "");
  const [description, setDescription] = useState<string | null>(
    props.description
  );
  const [privateGroup, setPrivateGroup] = useState<boolean>(
    props.visibility === "private"
  );

  const [members, setMembers] = useState<
    { value: string; label: string; photoURL: string }[]
  >(props.members.filter((member: { uid: any }) => member.uid !== user?.uid));
  const [membersOptions, setMembersOptions] = useState<
    { value: string; label: string; photoURL: string }[]
  >([]);

  const [validForm, setValidForm] = useState<boolean>(false);
  const [requestOk, setRequestOk] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validForm) {
      setLoading(true);
      try {
        const response = await fetchRSR("/api/channel/create", user?.session, {
          method: "POST",
          body: JSON.stringify({
            name,
            description,
            visibility: privateGroup ? "private" : "public",
            photoURL: pictureUrl,
            members: members.map((member) => ({
              uid: member.value,
              photoURL: member.photoURL,
              fullName: member.label,
            })),
          }),
        });
        setRequestOk(response.ok);
        const body = await response.json();
        console.log(body);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
      // router.push(`/resource/${body.slug}`);
    }
  };

  // Form validations
  useEffect(() => {
    if (name && description && members.length > 0) {
      setValidForm(true);
    } else setValidForm(false);
  }, [pictureUrl, name, description, members]);

  useEffect(() => {
    fetchRSR("/api/user/", user?.session)
      .then((res) => res.json())
      .then((body) =>
        setMembersOptions(
          body?.data?.attributes?.map((user) => ({
            value: user.uid,
            label: user.fullName,
            photoURL: user.photoURL,
          }))
        )
      );
  }, []);

  return (
    <AppLayout>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-h-full bg-white dark:bg-gray-900 grow"
      >
        <div className="flex flex-col w-full px-6 py-6 bg-white shrink-0 lg:px-12 dark:bg-black dark:border-gray-800">
          <div className="inline-flex items-end justify-between w-full">
            <div className="flex flex-col space-y-2">
              <div className="w-auto h-auto">
                <Image src="/img/partypopper.png" width={64} height={64} />
              </div>
              <h3 className="mb-2 text-2xl font-extrabold text-gray-800 font-marianne dark:text-gray-200">
                Éditer
                {name ? (
                  <span className="ml-1 text-amber-600 dark:text-amber-400">
                    {slug(name)}
                  </span>
                ) : (
                  <span className="inline-flex items-center ml-1">
                    un
                    <span className="ml-1 text-amber-600 dark:text-amber-400">
                      salon
                    </span>
                  </span>
                )}
              </h3>
            </div>
            <button
              type="submit"
              className={classes(
                requestOk ? "btn-amber" : validForm ? "btn-amber" : "btn-red",
                "group h-fit"
              )}
            >
              {loading ? (
                <svg
                  className="w-5 h-5 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : requestOk ? (
                <>
                  <CheckIcon className="w-4 h-4 mr-1 duration-300 text-amber-700 group-active:text-white" />{" "}
                  Envoyé
                </>
              ) : validForm ? (
                <>
                  <CloudUploadIcon className="w-4 h-4 mr-1 duration-300 text-amber-700 group-active:text-white" />
                  Envoyer
                </>
              ) : (
                <>
                  <XCircleIcon className="w-4 h-4 mr-1 text-red-700 duration-300 group-active:text-white" />{" "}
                  Non valide
                </>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-grow px-4 py-3 pb-6 bg-gray-100 rounded-tl-xl md:flex-row">
          <div className="flex flex-col w-full px-2 space-y-3 md:w-1/2">
            <label>
              <h4 className="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-semibold text-gray-700 font-marianne">
                Nom du salon
              </h4>
              <input
                type="text"
                className="bg-gray-200 input"
                placeholder="Titre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label>
              <h4 className="mb-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-semibold text-gray-700 font-marianne">
                Membres
              </h4>
              <Select
                name="members"
                className="w-full"
                isMulti
                placeholder={
                  <div className="text-sm font-semibold font-spectral">
                    Qui souhaitez-vous inviter ?
                  </div>
                }
                options={membersOptions}
                formatOptionLabel={(member: {
                  value: string;
                  label: string;
                  photoURL: string;
                }) => (
                  <div className="inline-flex items-center">
                    <img
                      src={member.photoURL}
                      alt={member.label}
                      className="w-5 h-5 mr-2 rounded-full"
                    />
                    <span className="text-xs font-marianne">
                      {member.label}
                    </span>
                  </div>
                )}
                onChange={(value) => setMembers(value)}
              />
            </label>
            <label className="flex flex-col grow">
              <h4 className="mb-1 text-sm font-semibold text-gray-700 font-marianne">
                Image du salon
              </h4>
              {pictureUrl && (
                <div className="relative w-full grow">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={pictureUrl}
                    className="object-cover object-center w-full rounded-lg aspect-video"
                    alt="Event picture"
                  ></img>
                  <div
                    className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 -mt-1 -mr-1 text-red-700 transition duration-300 bg-red-200 rounded-full cursor-pointer hover:bg-red-300"
                    onClick={() => {
                      setPictureUrl(null);
                      setPictureFile(null);
                    }}
                  >
                    <XIcon className="w-3 h-3 stroke-2"></XIcon>
                  </div>
                </div>
              )}
              {!pictureUrl && (
                <div className="w-full grow">
                  <input
                    id="filePicture"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      let file =
                        e.target.files instanceof FileList
                          ? e.target.files[0]
                          : null;
                      if (file) {
                        setPictureFile(file);
                        setPictureUrl(URL.createObjectURL(file));
                      }
                    }}
                    className="hidden"
                  ></input>
                  <label
                    htmlFor="filePicture"
                    className="relative flex flex-col items-center justify-center w-full h-full p-12 duration-300 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg
                      className="w-12 h-12 mx-auto text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="block mt-2 text-sm font-medium text-gray-900">
                      Ajouter une image
                    </span>
                  </label>
                </div>
              )}
            </label>
          </div>
          <div className="flex flex-col w-full px-2 space-y-3 md:w-1/2">
            <label className="flex flex-col">
              <h4 className="mb-1 text-sm font-semibold text-gray-700 font-marianne">
                Confidentialité du salon
              </h4>
              <div className="inline-flex items-center my-2 space-x-3">
                <input
                  type="checkbox"
                  value={privateGroup as unknown as string}
                  onChange={(e) => setPrivateGroup(e.target.checked)}
                  className="w-4 h-4 duration-200 border-0 rounded-md appearance-none bg-amber-200 form-checkbox hover:bg-amber-400 dark:bg-amber-800 dark:hover:bg-amber-700 checked:bg-amber-600 checked:border-transparent focus:outline-none focus:bg-amber-400 dark:focus:bg-amber-900 ring-amber-500"
                />
                <span className="text-sm font-semibold text-gray-700 font-spectral dark:text-gray-300">
                  Salon restreint
                </span>
              </div>
            </label>
            <label className="flex flex-col grow">
              <h4 className="mb-1 text-sm font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-700 font-marianne">
                Description du salon
              </h4>
              <textarea
                className="bg-gray-200 input grow"
                onChange={(e) => setDescription(e.target.value)}
                rows={10}
                value={description}
                placeholder="Description"
              ></textarea>
            </label>
          </div>
        </div>
      </form>
    </AppLayout>
  );
};

export default ChannelCreate;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    "http://localhost:3000/api/channel/" + context.params.slug
  );
  const body = await res.json();

  const channel: Channel = body?.data?.attributes;

  return {
    props: { ...channel },
  };
};
