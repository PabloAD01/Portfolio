import React from "react";
import { useLocation } from "react-router-dom";

const Web = () => {
  const { state } = useLocation();
  console.log("state", state);

  return (
    <div className="flex flex-col items-center w-screen h-full font-semibold text-white">
      <header>hola</header>
      <main className="">
        <div className="flex justify-center w-screen py-5 bg-slate-500 p-5">
          <div className="flex flex-col gap-5 p-4 items-center">
            <img
              className="rounded-lg"
              src={state.imagen || ""}
              alt=""
              width={600}
              height={400}
            />
            <div className="flex gap-4">
              <button>Acción 1</button>
              <button>Acción 2</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10  p-10">
            <h1 className=" text-5xl">{state.titulo || ""}</h1>
            <p>{state.descripcion}</p>
          </div>
        </div>

        <div className=" flex flex-col items-center bg-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Web;
