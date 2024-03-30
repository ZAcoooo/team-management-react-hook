/* global cy */

/// <reference types="cypress" />

describe("Leader creates a new task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Leader/Project/CreateTask");
  });

  it("Create a new Task", () => {
    const task = {
      title: "Write a test task for Cypress",
      startDate: "2023-06-01",
      endDate: "2023-06-30",
      description: "This a test description for Cypress."
    };
    cy.get("form input[name='title']").clear().type(task.title);
    cy.get("form input[name='startDate']").clear().type(task.startDate);
    cy.get("form input[name='endDate']").clear().type(task.endDate);
    cy.get("form textarea[name='description']").clear().type(task.description);
    cy.get("form input[name='Joe']").check();
    cy.get("form input[name='Zaco']").check();
    cy.get("form button").click();
  
  
    const lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".card-title").should("have.text", "Title: Write a test task for Cypress");
  });
});