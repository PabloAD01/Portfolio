import React from "react";
import { useLocation } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const Web = () => {
  const { state } = useLocation();
  console.log("state", state);

  return (
    <div className="flex w-screen justify-center font-semibold text-white">
      <div className="flex flex-col items-center w-3/4">
        <main className="">
          <div className="flex justify-center py-5 bg-slate-500 p-5">
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
          <div className="p-5 bg-slate-400/[0.8] relative">
            <div className="flex h-max items-start bg-slate-400/[0.6] gap-4 relative rounded p-10">
              <div
                className="post-content w-2/3 border p-10 "
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(JSON.parse(state.content)),
                }}
              />
              <div className=" w-1/3 text-center p-10  flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl">Tecnologias</h1>
                <div className="flex gap-5">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://www.creative-tim.com/assets/icon-react-5eeeb624004330b240f7417ab81305cf6d1d0ad35a03dafdc487b2bd9cf4a0bc.jpg"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://www.creative-tim.com/assets/icon-html-7a445de6be8d1419c86371dddb3b8fb36f25de6e5b084fb777d258062ad1902d.jpg"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg?updated=1687238995960"
                    alt=""
                  />
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://www.creative-tim.com/assets/icon-figma-b45257374374d1bab8149c3b2cfc37b4037b2ce794985a858db3e810b059c64e.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
};

export default Web;
