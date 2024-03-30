# team-management-react-hook
Team Project Management React App is a comprehensive web application built using React.js, designed to streamline project management for teams. With its user-friendly interface and powerful features, Team Project Management React App enhances productivity and coordination within project teams, ensuring smooth and efficient project execution.

**Project deploy hosting URL: https://team-management-vite-hook.web.app/**

**Project demo video URL: https://www.youtube.com/watch?v=bQCIAiV_JPA**

## Testing

### Use Cases
1. team-management:
   - This test verifies the Team Management Application loads properly
2. createTask:
   - This test verifies the functionality of creating a new task by a leader. It ensures that the user interface for adding a new task is functioning correctly and that the task is successfully created and displayed in the project.
3. editTask:
   - This test validates the capability of a leader to edit an existing task. It ensures that the user interface for editing a task is functional and that the changes made to the task's details are accurately reflected in the project after editing.
4. addComment:
   - This test checks the functionality of adding a comment to a task by a member. It ensures that the user interface for adding comments is working properly and that the comment is successfully added to the task's details.
5. deleteComment:
   - This test verifies the ability to delete a comment from a task by a member or leader. It ensures that the user interface for deleting comments functions correctly and that the comment is removed from the task's details after deletion.
6. deleteTask:
   - This test validates the functionality of deleting a task by a leader. It ensures that the user interface for deleting tasks operates as expected and that the task is removed from the project after deletion.

### Testing Steps
To run Team Project Management React App tests, you can follow these steps:
1. Clone the github repository to your local.
```git clone https://github.com/ZAcoooo/team-management-react-hook.git```
2. Install required node modules:
```npm install```
3. Running the application:
```npm run dev```
4. In another terminal, open the cypress studio:
```npx cypress open```
5. Choose E2E Testing
6. Start E2E Testing in Electron
7. In Specs, click the file ```cypress/e2e/0-team-management/team-management.cy.js```
8. Run the test files by the order of the number in the folder name.
   1. team-management.cy.js
   2. createTask.cy.js
   3. editTask.cy.js
   4. addComment.cy.js
   5. deleteComment.cy.js
   6. deleteTask.cy.js

## Design Document
[Design Document](https://github.com/ZAcoooo/team-management-react-hook/blob/main/design/Project-2-Design.pdf)

## Features
- Task Management: Create, assign, and manage tasks within projects.
- Real-time Collaboration: Team members can collaborate by adding comments and uploading files to tasks.
- Task Status Tracking: Track the status of tasks (completed/uncompleted) to monitor progress.
- Member Management: Add and manage team members involved in the project.
- Responsive Design: User interface optimized for various screen sizes and devices for seamless access.
- Local Data Storage: Utilizes local browser storage to store project data for quick access and offline capabilities.
- Intuitive Interface: User-friendly interface designed for ease of use and efficient project management.
- Project Overview: Provides an overview of project details, including project name, description, and assigned tasks.

## Design Decisions
- Sample Project Inclusion: Users can explore the app's features immediately with a sample project, simplifying onboarding.
- Default User Accounts: Users can quickly access the system using default leader and member user accounts. This streamlines the onboarding process and allows users to explore the application immediately.
- Sample User Profiles: Sample user profiles are included in the system to illustrate different roles and permissions. This helps users understand the differences between leader and member roles and how they interact within the application.

## Getting Started
**Recommend using project deploy hosting url: https://team-management-vite-hook.web.app/** <br>
To run Team Project Management React App locally, you can follow these steps:
1. Clone the github repository to your local.
```git clone https://github.com/ZAcoooo/team-management-react-hook.git``
2. Install required node modules:
```npm install```
3. Running the application:
```npm run dev```
4. Open the web browser and access the app through the localhost link:
```http://localhost:5173```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

