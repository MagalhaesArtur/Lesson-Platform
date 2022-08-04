import {
  DiscordLogo,
  Lightning,
  FileArrowDown,
  ArrowRight,
  Image,
} from "phosphor-react";
import { DefaultUi, Player, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { useEffect, useState } from "react";

function VideoPlayer(props: {
  slug: string;
  open: boolean;
  setOpen: Function;
}) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.slug,
    },
  });
  const [video, setVideo] = useState("");

  if (!data || !data.lesson) {
    return <div className="flex-1">carregando...</div>;
  } else {
    return (
      <div className={props.open ? `hidden` : "flex-1"}>
        <div className="bg-black flex justify-center">
          <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
            <Player>
              <Youtube videoId={data?.lesson.videoId} />

              <DefaultUi />
            </Player>
          </div>
        </div>
        <div className="p-8 max-w-[1400px] mx-auto ">
          <section className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-2 max-w-[100%] md:max-w-[60%]">
              <h1 className="text-2xl font-bold mb-2">{data?.lesson.title}</h1>
              <p className="text-gray-300 leading-relaxed">
                {data?.lesson.description}
              </p>

              {data.lesson.teacher && (
                <div className="flex gap-3 mt-3">
                  <img
                    className="w-[80px] h-[80px] border-[2px] border-white rounded-ball"
                    src={data?.lesson.teacher.avatarURL}
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-xl font-bold">
                      {data?.lesson.teacher.name}
                    </p>
                    <p className="text-base mb-6 md:mb-0 text-gray-200 ">
                      {data?.lesson.teacher.bio}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <a className="flex justify-center items-center  gap-2 rounded-md border-2 border-green-500 font-bold bg-green-500 p-4 hover:bg-gray-200 hover:text-green-500 transition-all hover:cursor-pointer">
                <DiscordLogo size={24} />
                COMUNIDADE NO DISCORD
              </a>
              <a className="flex justify-center items-center  gap-2 rounded-md border-2 border-blue-500 font-bold text-blue-500 p-4 hover:bg-blue-500 hover:text-gray-900 transition-all hover:cursor-pointer">
                <Lightning size={24} />
                Acesse o Desafio
              </a>
              <a></a>
            </div>
          </section>
          <section className="flex flex-col md:flex-col gap-4 mt-10">
            <a className="flex max-h-[300px] w-[100%]  md:w-[50%] rounded-lg hover:cursor-pointer">
              <div className="bg-green-500 flex w-[40%] md:w-[25%]  rounded-l-lg justify-center items-center hover:bg-green-600 transition-all">
                <FileArrowDown size={34} />
              </div>
              <div className="flex justify-center p-4  rounded-r-lg bg-gray-700 items-center">
                <div className="flex pr-2 flex-col">
                  <h2 className="text-xl md:text-2xl  leading-relaxed mb-2 font-bold">
                    Material complementar
                  </h2>
                  <p className="text-gray-200 text-sm">
                    Acesse o material complementar para acelerar o seu
                    desenvolvimento
                  </p>
                </div>
                <ArrowRight className="text-blue-500" size={50} />
              </div>
            </a>
            <a className="flex max-h-[300px] w-[100%]  md:w-[50%] rounded-lg hover:cursor-pointer">
              <div className="bg-green-500 flex w-[40%] md:w-[25%]  rounded-l-lg justify-center items-center hover:bg-green-600 transition-all">
                <Image size={34} />
              </div>
              <div className="flex justify-center p-4  rounded-r-lg bg-gray-700 items-center">
                <div className="flex pr-2 flex-col">
                  <h2 className="text-xl md:text-2xl  leading-relaxed mb-2 font-bold">
                    Wallpapers exclusivos{" "}
                  </h2>
                  <p className="text-gray-200 text-sm">
                    Baixe wallpapers exclusivos do Ignite Lab e personalize a
                    sua máquina
                  </p>
                </div>
                <ArrowRight className="text-blue-500" size={50} />
              </div>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
