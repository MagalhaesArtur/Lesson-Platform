import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";

import { Chalkboard } from "phosphor-react";

function LessonPlatform() {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div className="w-full h-[100vh]">
      <div className="flex flex-col min-h-screen">
        <Header open={open} setOpen={setOpen} />
        <main className="flex flex-1 flex-col md:flex-row">
          {slug ? (
            <VideoPlayer open={open} setOpen={setOpen} slug={slug} />
          ) : (
            <div className="flex-1 flex justify-center gap-4 items-center flex-col">
              <strong className="text-3xl">Selecione uma aula</strong>
              <Chalkboard size={60} />
            </div>
          )}
          <Sidebar open={open} setOpen={setOpen} />
        </main>
      </div>
    </div>
  );
}

export default LessonPlatform;
