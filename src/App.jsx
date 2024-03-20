// import { myFirebase } from "./models/MyFirebase.jsx";
// import React, { useEffect, useState } from "react";
// export default function App() {
//   const [projects, setProjects] = useState([]);
//   const onUpdateProject = async () => {
//     const project = projects[0];
//     project.tasks.push({name: 0});
//     await myFirebase.updateProject(project);
//     console.log(project);
//     getProjects();
//   };
//     const onAddProject = async () => {
//       try {
//         await myFirebase.addProject({id:1, name: "Test Project", 
//           description: "This is description of the first test project", 
//           tasks: [], 
//           members: [
//             "Joe",
//             "Lee",
//             "Zaco",
//             "Malcolm",
//           ]});
//         const updatedProjects = await myFirebase.getProjects();
//         setProjects(updatedProjects);
//         console.log(projects);
//       } catch (error) {
//         console.error("Error adding project:", error);
//       }
//     };
//   const getProjects = async() => {
//     const projects = await myFirebase.getProjects();
//     setProjects(projects);
//   };
//   useEffect(() => {
//     getProjects();
//   }, []);
//   return(
//     <>
//       <div className="container mt-4">
//         <div className="row">
//           {projects.map((project) => (
//             <div className="col-md-4 mb-4" key={project.id}>
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">{project.name}</h5>
//                   <p className="card-text">{project.description}</p>
//                   <ul className="list-group">
//                     {project.members.map((member, index) => (
//                       <li className="list-group-item" key={index}>
//                         {member}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="btn btn-primary" onClick={() => onUpdateProject()}> update </button>
//     </>
//     // <button className="btn btn-primary" onClick={() => onAddProject()}> add </button>
    
//   );
// }