import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

function Sidebar() {
  const { data } = useGetLessonsQuery();
  return (
    <aside className="w-[348px] border-gray-600 border-l flex flex-col   items-center bg-gray-700 p-6">
      <div className="text-xl mb-4 font-bold">Cronograma das Aulas</div>
      <div className="bg-gray-400 w-[90%] h-[0.25px] mb-4"></div>
      <div className="flex w-[100%] flex-col gap-8">
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
