/* global cy */

/// <reference types="cypress" />

describe("Member delete a comment from the task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Member/Project/");
  });
      
  it("Delete a comment from the Task", () => {
    let lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".comment-list-wrapper .list-group-item").last().find("button.comment-delete").click();
    lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".comment-list-wrapper .list-group-item").should("have.length", 1);
  });
});