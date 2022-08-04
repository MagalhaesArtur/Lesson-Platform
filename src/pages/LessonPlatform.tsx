import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";

function LessonPlatform() {
  const { slug } = useParams<{ slug: string }>();

  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen">
        <Header open={open} setOpen={setOpen} />
        <main className="flex flex-1 flex-col md:flex-row">
          {slug ? (
            <VideoPlayer open={open} setOpen={setOpen} slug={slug} />
          ) : (
            <div className="flex-1"></div>
          )}
          <Sidebar open={open} setOpen={setOpen} />
        </main>
      </div>
    </div>
  );
}

export default LessonPlatform;
