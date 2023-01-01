describe("App Input Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("shows the initial form state", () => {
    cy.getByData("submit-button").should("be.disabled");
    cy.getByData("alert-info")
      .should("exist")
      .contains("Your results will appear below.");
  });

  it("disables the submit button if the text field is empty", () => {
    cy.getByData("submit-button").should("be.disabled");
    cy.getByData("text-field").type("username");
    cy.getByData("submit-button").should("be.enabled");
    cy.getByData("text-field").type("{selectall}{backspace}");
    cy.getByData("submit-button").should("be.disabled");
  });

  it("allows the user to search for a GitHub username", () => {
    cy.getByData("text-field").type("ajduncombe");
    cy.getByData("submit-button").click();
    cy.getByData("loading-button").should("be.disabled");
    cy.getByData("alert-warning").should("exist").contains("Please wait.");
    cy.getByData("alert-success")
      .should("exist")
      .contains('The username "ajduncombe" was found.');
  });

  it("returns an error if the username is not found", () => {
    cy.getByData("text-field").type("-abcd-");
    cy.getByData("submit-button").click();
    cy.getByData("loading-button").should("be.disabled");
    cy.getByData("alert-warning").should("exist").contains("Please wait.");
    cy.getByData("alert-error")
      .should("exist")
      .contains("There was an error. Please check your input and try again.");
  });
});
