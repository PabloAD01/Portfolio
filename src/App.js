import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";
import InfoCard from "./components/InfoCard";
import Lottie from "lottie-react";
import darkModeButton from "./assets/animations/darkModeButton.json";
import { Link } from "react-router-dom";
import { getActiveProjects } from "./firebase/api";
import amplitude from "amplitude-js";

function App() {
  const [projects, setProjects] = useState(true);
  const [info, setInfo] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [posts, setPosts] = useState([]);

  const lottieRef = useRef(null);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    let segments = theme !== "light" ? [1, 60] : [50, 1];
    lottieRef.current.setSpeed(3);
    lottieRef.current.playSegments(segments, true);
  }, [theme]);

  useEffect(() => {
    getActiveProjects().then((response) => {
      console.log("Response", response);
      setPosts(response);
    });
  }, []);

  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      originX: 0,
    },
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  function handleOnClickProjects() {
    setProjects(true);
    setInfo(false);
  }

  function handleOnClickInfo() {
    setInfo(true);
    setProjects(false);
  }

  function handleOnClick() {
    setClickCount(clickCount + 1);

    if (clickCount === 0) {
      setTheme("light");
    } else if (clickCount === 1) {
      setClickCount(0);
      setTheme("dark");
    }
  }

  return (
    <div className="flex h-full w-screen justify-center duration-75 dark:bg-slate-900">
      <div className="w-max h-full text-neutral-300 flex flex-col gap-2.5">
        <header className="header flex flex-col gap-2.5">
          <motion.div
            className="flex justify-between items-center bg-stone-400/[0.13] duration-1000  px-2.5 py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className="text-6xl font-bold">Pablo</h1>
            <div className="flex gap-4 font-semibold">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>

            <Lottie
              animationData={darkModeButton}
              loop={false}
              autoplay={false}
              style={{ width: 100, height: 50 }}
              lottieRef={lottieRef}
              onClick={handleOnClick}
            />
          </motion.div>
          <motion.div
            className="hero-section flex"
            variants={parentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col font-extrabold flex flex-col gap-5 justify-center">
              <p className="text-6xl">Front-End Developer</p>
              <p className="text-8xl">React</p>
              <motion.button
                className="w-80 p-2.5 text-4xl bg-yellow-100 text-yellow-400/[0.8] duration-300 dark:bg-white dark:text-neutral-900 rounded-lg"
                variants={buttonVariants}
                whileHover="hover"
                onClick={handleOnClickProjects}
              >
                Proyectos
              </motion.button>
              <motion.button
                className="w-80 p-2.5 text-4xl bg-yellow-100 text-yellow-400/[0.8] rounded-lg duration-300  dark:bg-white dark:text-neutral-900"
                variants={buttonVariants}
                whileHover="hover"
                onClick={handleOnClickInfo}
              >
                Contacto
              </motion.button>
            </div>
            <img src={require("./assets/images/image_1.png")} alt="Imagen" />
          </motion.div>
        </header>
        <main
          className="main flex flex-col justify-content items-center gap-4 p-2.5"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          {projects && (
            <section className="projects grid gap-3 items-stretch content-center grid-cols-2 auto-rows-auto">
              {posts?.map((post, index) => (
                <motion.a
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                  onClick={() =>
                    amplitude.getInstance().logEvent("click_on_project", {
                      titulo: post.titulo,
                      url: post.url,
                    })
                  }
                  href={post.url || ""}
                >
                  <ProjectCard post={post} />
                </motion.a>
              ))}
            </section>
          )}
          <div className="info flex flex-col">
            {info && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <InfoCard />
              </motion.div>
            )}
          </div>
        </main>
        <footer className="flex justify-center text-sm font-medium py-2.5 bg-slate-800/[0.5] ">
          © 2023 Pablo Araya Díaz
        </footer>
      </div>
    </div>
  );
}

export default App;
