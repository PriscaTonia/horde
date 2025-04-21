describe("Show home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays correct header texts", () => {
    cy.getByDataTest("horde-title").contains(
      /Take control of your money one budget at a time/i,
    );
    cy.getByDataTest("horde-subtitle-2").contains(
      /Create a budget that works for you/i,
    );
    cy.getByDataTest("horde-subtitle-3").contains(
      /Elevate your budgeting experience with Horde/i,
    );
    cy.getByDataTest("horde-last-title").contains(
      /Embark on your journey to financial empowerment/i,
    );
  });
});
