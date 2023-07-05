import React, { useState, useEffect } from "react";
import {
  getAllProjects,
  deleteProject,
  updateProject,
} from "../../firebase/api";
import { Link } from "react-router-dom";

const Proyectos = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data);
      console.log("data", data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProject(id).then(() => {
      getAllProjects().then((data) => {
        setProjects(data);
      });
    });
  };

  const handleCheckboxChange = (event, projectId) => {
    const isChecked = event.target.checked;

    setProjects((projects) =>
      projects.map((project) =>
        project.id === projectId ? { ...project, activo: isChecked } : project
      )
    );
    console.log("projects1", projects);
    updateProject(projectId, { activo: isChecked });
    console.log("projects2", projects);
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
              <th className="border-b bg-white dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-center">
                Opciones
              </th>
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
                    id={project.id}
                    name={project.titulo}
                    checked={project.activo}
                    onChange={(event) =>
                      handleCheckboxChange(event, project.id)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link
        to={`/admin/proyectos/añadir`}
        state={projects}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Añadir +
      </Link>
    </div>
  );
};

export default Proyectos;
