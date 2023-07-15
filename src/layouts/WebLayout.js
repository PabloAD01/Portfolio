import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { motion } from "framer-motion";
import amplitude from "amplitude-js";
import axios from "axios";
import { querydb } from "../firebase/config";
import {
  collection,
  doc,
  updateDoc,
  increment,
  getDoc,
  setDoc,
} from "firebase/firestore";

const Web = () => {
  const { state } = useLocation();
  console.log("state", state);

  const [lastUpdate, setLastUpdate] = useState("");
  // const [releaseDate, setReleaseDate] = useState("");
  // const [latestVersion, setLatestVersion] = useState("");

  // const [visitCount, setVisitCount] = useState(0);

  const updateVisitCount = async () => {
    const visitDocRef = doc(querydb, "Proyectos", state.id);
    await updateDoc(visitDocRef, { visitas: increment(1) });
  };

  useEffect(() => {
    // const getVisitCount = async () => {
    //   const visitDocRef = doc(querydb, "Proyectos", state.id);
    //   console.log("visitDocRef", visitDocRef);
    //   const visitDocSnap = await getDoc(visitDocRef);
    //   console.log("visitDocSnap", visitDocSnap);
    //   if (visitDocSnap.exists()) {
    //     console.log("Document data:", visitDocSnap.data());
    //     console.log("visitDocSnap.data().visitas", visitDocSnap.data().visitas);
    //     setVisitCount(visitDocSnap.data().visitas);
    //   }
    // };

    // getVisitCount();
    updateVisitCount(); // Llama a la función updateVisitCount después de obtener el valor actual del contador
  }, [state.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoResponse = await axios.get(
          "https://api.github.com/repos/PabloAD01/Portfolio"
        );
        const { pushed_at } = repoResponse.data;
        setLastUpdate(pushed_at);

        // const releasesResponse = await axios.get(
        //   "https://api.github.com/repos/PabloAD01/Portfolio/releases/latest"
        // );
        // const { published_at, tag_name } = releasesResponse.data;

        // console.log("releasesResponse", releasesResponse);
        // setReleaseDate(published_at);
        // setLatestVersion(tag_name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [state.id]);

  return (
    <motion.div
      className="flex w-screen justify-center font-semibold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center w-3/4 ">
        <div className="flex flex-col xl:flex-row justify-around py-5 bg-slate-500 p-5 w-full">
          <div className="flex flex-col gap-5 p-4 items-center">
            <img
              className="rounded-lg w-max max-h-96"
              src={state.imagen || ""}
              alt=""
            />

            <div className="flex gap-4">
              <button>Acción 1</button>
              <button>Acción 2</button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-10  p-10 text-center ">
            <h1 className=" text-5xl">{state.titulo || ""}</h1>
            <p>{state.descripcion}</p>
          </div>
        </div>
        <div className="p-5 bg-slate-400/[0.8] w-full flex flex-col">
          <div className="flex flex-col content-center items-center xl:flex-row h-max xl:items-start bg-slate-400/[0.6] gap-4  rounded p-10">
            <div
              className="post-content  w-full xl:w-2/3  p-10 "
              dangerouslySetInnerHTML={{
                __html: draftToHtml(JSON.parse(state.content)),
              }}
            />
            <div className="  w-full xl:w-1/3 text-center p-10  flex flex-col justify-center items-center gap-5 ">
              <h1 className="text-3xl">Tecnologias</h1>
              <div className="flex  justify-around gap-1 max-w-20">
                <img
                  className="max-h-20 rounded-full"
                  src="https://www.creative-tim.com/assets/icon-react-5eeeb624004330b240f7417ab81305cf6d1d0ad35a03dafdc487b2bd9cf4a0bc.jpg"
                  alt=""
                />
                <img
                  className="max-h-20 rounded-full"
                  src="https://www.creative-tim.com/assets/icon-html-7a445de6be8d1419c86371dddb3b8fb36f25de6e5b084fb777d258062ad1902d.jpg"
                  alt=""
                />
                <img
                  className="max-h-20 rounded-full"
                  src="https://asset.brandfetch.io/idKJ12s-EY/idI9erPtdw.jpeg?updated=1687238995960"
                  alt=""
                />
                <img
                  className="max-h-20 rounded-full"
                  src="https://www.creative-tim.com/assets/icon-figma-b45257374374d1bab8149c3b2cfc37b4037b2ce794985a858db3e810b059c64e.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 w-full">
                <h1 className="text-3xl">Datos</h1>
                <ul className="flex flex-col gap-2 items-start border text-lg  p-5">
                  <li className="flex gap-2">
                    <ion-icon name="eye-outline" size="large"></ion-icon>
                    Views: {state.visitas}
                  </li>
                  <li className="flex gap-2">
                    <ion-icon
                      name="arrow-up-circle-outline"
                      size="large"
                    ></ion-icon>
                    Version: 1.0.0
                  </li>
                  <li className="flex gap-2">
                    <ion-icon name="refresh-outline" size="large"></ion-icon>
                    Last Update: {lastUpdate}
                  </li>
                  <li className="flex gap-2">
                    <ion-icon name="briefcase-outline" size="large"></ion-icon>
                    Released: Yet to be released
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer></footer>
      </div>
    </motion.div>
  );
};

export default Web;
