/* global cy */

/// <reference types="cypress" />

describe("Member add comments to the task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/Member/Project/");
  });
      
  it("Add the first comment to the Task", () => {
    let lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".card-body button.comment-add").should("have.text", "Add Comment").click();
    
    const comment = {
      comment: "This is a test comment for Cypress."
    };
    
    cy.get("#commentModal > div > div > div.modal-body > textarea").clear().type(comment.comment, { force: true });
    cy.get("#commentModal > div > div > div.modal-body > div > button.btn.btn-outline-success").click();
    
    
    lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".comment-list-wrapper .list-group-item").should("have.length", 1);

    lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".card-body button.comment-add").should("have.text", "Add Comment").click();
    
    const secondComment = {
      comment: "This is the second test comment for Cypress."
    };
    
    cy.get("#commentModal > div > div > div.modal-body > textarea").clear().type(secondComment.comment, { force: true });
    cy.get("#commentModal > div > div > div.modal-body > div > button.btn.btn-outline-success").click();
    
    
    lastCard = cy.get(".row .card").last().should("exist");
    lastCard.find(".comment-list-wrapper .list-group-item").should("have.length", 2);
  });
});