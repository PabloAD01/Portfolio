import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateProject } from "../../firebase/api";
const EditarProyectos = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState({ ...state });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Proyectoo", proyecto);
    updateProject(proyecto.id, proyecto).then((res) => {
      console.log("res", res);
      navigate("/admin/proyectos");
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => navigate(-1)}
        className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded w-max"
      >
        Volver
      </button>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
            type="url"
            id="url"
            placeholder={state.url}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="imagen"
          >
            Imagen
          </label>
          <input
            type="file"
            id="imagen"
            accept="image/*"
            placeholder="Imagen del proyecto"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <input
          type="submit"
          className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
          value="Editar proyecto"
        />
      </form>
    </div>
  );
};

export default EditarProyectos;
