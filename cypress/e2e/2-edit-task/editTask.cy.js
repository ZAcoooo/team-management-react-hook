/* global cy */

/// <reference types="cypress" />

describe("Leader edits the task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Leader/Project/");
  });

  it("Edit a Task", () => {
    let lastCard = cy.get(".row .card").last().should("exist");
    lastCard.get(".card-body button").first().click();
    
    const updatedTask = {
      title: "Write a test task for Cypress - Updated",
      startDate: "2022-07-05",
      endDate: "2023-08-21",
      description: "This a updated test description for Cypress."
    };
    
    cy.get("form input[name='title']").clear().type(updatedTask.title);
    cy.get("form input[name='startDate']").clear().type(updatedTask.startDate);
    cy.get("form input[name='endDate']").clear().type(updatedTask.endDate);
    cy.get("form textarea[name='description']").clear().type(updatedTask.description);
    cy.get("form input[name='Joe']").uncheck();
    cy.get("form input[name='Jason']").check();
    cy.get("form button").click();
    
    
    lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".card-title").should("have.text", "Title: Write a test task for Cypress - Updated");
  });
});