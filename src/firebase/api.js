import { querydb } from "./config";
import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  getDoc,
  addDoc,
  where,
  query,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";

export const getAllProjects = async () => {
  const queryDoc = collection(querydb, "Proyectos");
  const postData = [];
  const response = await getDocs(queryDoc);
  response.docs.forEach((doc) => {
    console.log("Doc", doc.id);
    postData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log("PostData", postData);
  return postData;
};

export const deleteProject = async (id) => {
  const queryDoc = doc(collection(querydb, "Proyectos"), id);
  await deleteDoc(queryDoc);
};

export const updateProject = async (id, data) => {
  const queryDoc = doc(collection(querydb, "Proyectos"), id);
  await updateDoc(queryDoc, data);
};

export const addProject = async (data) => {
  const queryDoc = collection(querydb, "Proyectos");
  await addDoc(queryDoc, data);
};

//create a function to upload an image to firebase storage
export const uploadImage = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `images/${file.name}`);
  const uploadTask = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(uploadTask.ref);
  return downloadURL;
};

//create a function to get all active projects
export const getActiveProjects = async () => {
  const queryDoc = query(
    collection(querydb, "Proyectos"),
    where("activo", "==", true)
  );
  const postData = [];
  const response = await getDocs(queryDoc);
  console.log("ResponseActive", response);
  response.docs.forEach((doc) => {
    postData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  console.log("PostData", postData);
  return postData;

  //create a function to get all true projects
};

// export const registrarClick = async (proyectoId) => {
//   try {
//     const eventoClick = {
//       tipo: "click",
//     };

//     // Obtiene la referencia al documento de eventos del proyecto
//     const eventosDocRef = doc(querydb, "Proyectos", proyectoId);

//     // Obtiene los datos actuales del documento
//     const eventosDocSnap = await getDoc(eventosDocRef);
//     const eventosData = eventosDocSnap.data();
//     let nuevosEventos = [];

//     if (Array.isArray(eventosData?.clicks)) {
//       nuevosEventos = [...eventosData.clicks];
//     }

//     nuevosEventos.push(eventoClick);

//     // Guarda los nuevos datos en el documento
//     await updateDoc(eventosDocRef, {
//       clicks: nuevosEventos,
//     });

//     console.log("Evento de click registrado correctamente");
//     console.log("Número de clicks:", nuevosEventos.length);
//   } catch (error) {
//     console.error("Error al registrar el evento de click:", error);
//   }
// };

// export const registrarVisita = async (proyectoId) => {
//   try {
//     const eventoVisita = {
//       tipo: "visita",
//       fecha: new Date().toISOString(),
//     };

//     // Obtiene la referencia al documento de eventos del proyecto
//     const eventosDocRef = doc(querydb, "Proyectos", proyectoId);

//     // Obtiene los datos actuales del documento
//     const eventosDocSnap = await getDoc(eventosDocRef);
//     const eventosData = eventosDocSnap.data();
//     let nuevosEventos = [];

//     if (Array.isArray(eventosData?.visitas)) {
//       nuevosEventos = [...eventosData.visitas];
//     }

//     nuevosEventos.push(eventoVisita);

//     // Guarda los nuevos datos en el documento
//     await updateDoc(eventosDocRef, {
//       visitas: nuevosEventos,
//     });

//     console.log("Evento de visita registrado correctamente");
//     console.log("Número de visitas:", nuevosEventos.length);
//   } catch (error) {
//     console.error("Error al registrar el evento de visita:", error);
//   }
// };
