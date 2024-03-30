/* global cy */

/// <reference types="cypress" />

describe("Team Management loads properly", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("loads basic interface", () => {
    cy.get("h1").should("have.text", "Login Page");

    const btnLeader = cy.get("#root > div > a:nth-child(2) > button").should("exist");

    btnLeader.should("have.text", "Leader");;

    const btnMember = cy.get("#root > div > a:nth-child(3) > button").should("exist");

    btnMember.should("have.text", "Member");;
  });
});