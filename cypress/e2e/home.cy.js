describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("the button contains the correct text", () => {
    cy.getByData("submit-button").contains("Search");
  });
});
