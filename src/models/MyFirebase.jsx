// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";


function MyFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAWmop36ObIVGl8Mm1JS8RGVCyfj7lle0M",
    authDomain: "team-management-vite-hook.firebaseapp.com",
    projectId: "team-management-vite-hook",
    storageBucket: "team-management-vite-hook.appspot.com",
    messagingSenderId: "566840299727",
    appId: "1:566840299727:web:c926742b4dd057d7fda7ba",
    measurementId: "G-FVWE0C7N5X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const me = {};
  me.storage = storage;
  async function getProjects() {
    const projectsRef = collection(db, "Projects");
    return (await getDocs(projectsRef)).docs.map((d) => d.data()).sort((a, b) => a.id - b.id);
  };


  async function updateProject({ id, title, description, tasks, members }) {
    try {
      const project = { id, title, description, tasks, members };
      const querySnapshot = await getDocs(
        query(
          collection(db, "Projects"),
          where("id", "==", 1)
        )
      );
      if (!querySnapshot.empty) {
        querySnapshot.forEach(async (doc) => {
          await updateDoc(doc.ref, project);
          console.log("Project updated successfully!");
        });
      }
    } catch (error) {
      console.error("Error updating project: ", error);
    }
  }
  me.getProjects = getProjects;
  me.updateProject = updateProject;
  return me;
}

export const myFirebase = new MyFirebase();