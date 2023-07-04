import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { addProject, uploadImage } from "../../firebase/api";

const AñadirProyectos = () => {
  const fileInputRef = useRef(null);
  const { state } = useLocation();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [proyecto, setProyecto] = useState({
    titulo: "",
    descripcion: "",
    url: "",
    imagen: "",
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      uploadImage(file).then((res) => {
        console.log("res", res);
        const newProject = {
          ...proyecto,
          imagen: res,
        };
        addProject(newProject).then((res) => {
          console.log("res", res);
          navigate(-1);
        });
      });
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="bg-gray-300 w-64 h-64 flex items-center justify-center">
        {image ? (
          <img src={image} alt="Uploaded" className="max-h-full max-w-full" />
        ) : (
          <div
            className="border-2 border-dashed border-gray-500 p-4"
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              Click or drag and drop an image here.
            </label>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white  px-8 pt-6 pb-8  w-full"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="titulo"
          >
            Titulo
          </label>
          <input
            onChange={(e) =>
              setProyecto({ ...proyecto, titulo: e.currentTarget.value })
            }
            type="text"
            id="titulo"
            placeholder={state.titulo}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="descripcion"
          >
            Descripción
          </label>
          <textarea
            onChange={(e) =>
              setProyecto({ ...proyecto, descripcion: e.currentTarget.value })
            }
            id="descripcion"
            placeholder={state.descripcion}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="url"
          >
            URL
          </label>
          <input
            onChange={(e) =>
              setProyecto({ ...proyecto, url: e.currentTarget.value })
            }
            type="text"
            id="url"
            placeholder={state.url}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default AñadirProyectos;
