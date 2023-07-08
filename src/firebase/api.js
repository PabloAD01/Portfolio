import { querydb } from "./config";
import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
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
