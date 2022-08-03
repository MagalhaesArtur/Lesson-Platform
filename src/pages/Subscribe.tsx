import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon";
import { useCreateSubscriberMutation } from "../graphql/generated";

function Subscribe() {
  const navigate = useNavigate();

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  const [createSubs, { loading }] = useCreateSubscriberMutation();

  function handleFormSubmit(e: any) {
    e.preventDefault();
    createSubs({
      variables: {
        name,
        email,
      },
    }).then(() => {
      navigate("/event");
    });
  }
  return (
    <div className="min-h-screen bg-blur bg-no-repeat bg-cover flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Icon />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa um{" "}
            <strong className="text-blue-500">aplicação completa</strong> , do
            zero, <strong className="text-blue-500">com React </strong>.
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl block mb-6">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleFormSubmit}
            action=""
            className="flex flex-col w-full gap-2"
          >
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Digite seu nome completo"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
            />
            <button
              disabled={loading}
              type="submit"
              className="bg-green-500 mt-4 uppercase py-4 font-bold rounded text-sm hover:bg-green-700 transition-all"
            >
              Garanta sua vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/public/Group.png" alt="" />
    </div>
  );
}

export default Subscribe;
