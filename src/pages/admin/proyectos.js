import React, { useState, useEffect } from "react";
import { getAllProjects, deleteProject } from "../../firebase/api";
import { Link, useNavigate } from "react-router-dom";
const Proyectos = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProject(id).then(() => {
      getAllProjects().then((data) => {
        setProjects(data);
      });
    });
  };

  const handleEdit = (id) => {
    navigate(`/admin/proyectos/editar/${id}`);
  };

  return (
    <div className="bg-white relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border-b bg-white dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Imagen
              </th>
              <th className="border-b bg-white dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Titulo
              </th>
              <th className="border-b bg-white dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Descripción
              </th>
              <th className="border-b bg-white dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                Opciones
              </th>
              <Link
                to={`/admin/proyectos/añadir`}
                state={projects}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Añadir +
              </Link>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <img
                    src={project.imagen}
                    alt="Imagen"
                    width={100}
                    height={50}
                  />
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  {project.titulo}
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  {project.descripcion}
                </td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                  <Link
                    to={`/admin/proyectos/editar/${project.id}`}
                    state={project}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Eliminar
                  </button>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Proyectos;
