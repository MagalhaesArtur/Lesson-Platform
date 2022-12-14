import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

interface sidebarProps {
  open: boolean;
  setOpen: Function;
}

function Sidebar(props: sidebarProps) {
  const { data } = useGetLessonsQuery();
  return (
    <aside
      className={
        props.open
          ? `w-[100%] h-[92vh] border-gray-600 border-l md:flex flex-col    items-center bg-gray-700 p-6`
          : "hidden md:w-[348px] h-[92vh] md:border-gray-600 md:border-l md:flex md:flex-col md:items-center md:bg-gray-700 md:p-6 "
      }
    >
      <div className="text-xl mb-4 font-bold">Cronograma das Aulas</div>
      <div className="bg-gray-400 w-[90%] h-[0.25px] mb-4"></div>
      <div className="flex w-[100%] overflow-y-scroll h-[100%]  scrollbar-thumb-slate-800 scrollbar-track-transparent scrollbar-thin flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
