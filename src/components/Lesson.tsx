import { isPast, format } from "date-fns";
import { CheckCircle, Lock } from "phosphor-react";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import { Time } from "@vime/react";

interface LessonProps {
  title: string;
  availableAt: Date;
  slug: string;
  type: "live" | "class";
}

function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const dateFormatted = format(
    props.availableAt,
    "EEEE' • 'd ' de ' MMMM' • 'k'h'mm",
    { locale: ptBR }
  );

  const { slug } = useParams<{ slug: string }>();

  const activeLesson = slug === props.slug;

  return (
    <Link
      className="w-[100%] group"
      onClick={() => {
        setTimeout(() => {
          location.reload();
        }, 500);
      }}
      to={`/event/lesson/${props.slug}`}
    >
      <span className="text-gray-300">{dateFormatted}</span>
      <div
        className={`border w-[100%] border-gray-600 group-hover:border-green-500 transition-all p-4 rounded-md mt-1 ${
          activeLesson ? "bg-green-500" : ""
        }`}
      >
        <header className="flex justify-between">
          {isLessonAvailable ? (
            <span
              className={`text-sm flex justify-center items-center  text-blue-500 font-medium ${
                activeLesson ? "text-white" : ""
              }`}
            >
              <CheckCircle size={20} className="mr-1" />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm flex justify-center items-center  text-orange-500 font-medium">
              <Lock size={20} className="mr-1" />
              Em Breve...
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[2px] text-white border  font-bold ${
              activeLesson ? "border-white" : "border-green-300 "
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={` mt-5 block ${
            activeLesson ? "text-white" : "text-gray-200 "
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}

export default Lesson;
