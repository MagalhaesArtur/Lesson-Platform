import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoPlayer from "../components/VideoPlayer";

function LessonPlatform() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-full">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {slug ? <VideoPlayer slug={slug} /> : <div className="flex-1"></div>}
          <Sidebar />
        </main>
      </div>
    </div>
  );
}

export default LessonPlatform;
