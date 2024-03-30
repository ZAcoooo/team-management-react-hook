/* global cy */

/// <reference types="cypress" />

describe("Leader edits the task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Leader/Project/");
  });
      
  it("Delete a Task", () => {
    const lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".card-title").should("have.text", "Title: Write a test task for Cypress - Updated");
    lastCard.get(".card-body button").last().click();
    cy.get("#navbarNav > ul > li:nth-child(3) > a").click();
    cy.get("#navbarNav > ul > li:nth-child(2) > a").click();
  });
});