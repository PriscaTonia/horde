describe("Show home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the homepage correctly", () => {
    cy.contains("Take control of your money one budget at a time").should(
      "be.visible",
    ); // Adjust based on actual text
  });
});
