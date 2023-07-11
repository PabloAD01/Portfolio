import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ post }) => {
  return (
    <div className="h-full cursor-pointer flex flex-col justify-center p-2.5 gap-2.5">
      <div className="flex relative">
        <img
          className="rounded-lg  w-full h-96 "
          src={post.imagen || ""}
          alt="Imagen Proyecto"
        />
        <a
          className=" group h-full w-full absolute flex  justify-center items-center gap-1  transition:300ms hover:text-white hover:bg-black/[0.6] rounded-lg"
          href={post.url}
        >
          {post?.links &&
            Object.keys(post.links).map((key, index) => (
              <Link to={`/web/${post.id}`} key={index} state={post}>
                <img
                  src={post.links[key].icon}
                  alt="Icono"
                  className="w-16 h-16 invisible group-hover:visible "
                />
              </Link>
            ))}
        </a>
      </div>
      <div className="flex flex-col justify-start px-2.5">
        <h2 className="text-4xl font-extrabold">{post.titulo || ""}</h2>
        <p className="text-base font-medium  text-ellipsis overflow-hidden">
          {post.descripcion || ""}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
