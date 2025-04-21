describe("Testing Authentication", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // login test

  it("Should show validation errors and allow successful login", () => {
    // Navigate to login
    cy.getByDataTest("login-button").click();
    cy.contains(/login/i).should("exist");

    // Check that validation messages are not shown initially
    cy.contains(/Email is Required/i).should("not.exist");
    cy.contains(/Password must be at least 7 characters/i).should("not.exist");

    // Try submitting empty form
    cy.getByDataTest("login-submit-button").click();

    // Wait for validation errors
    cy.contains(/Email is Required/i, { timeout: 3000 }).should("be.visible");
    cy.contains(/Password must be at least 7 characters/i, {
      timeout: 3000,
    }).should("be.visible");

    cy.wait(3000); // wait for 3 seconds before continuing

    // Ensure dashboard text is not yet shown
    cy.contains(/Track and manage your expenses today!/i).should("not.exist");

    // Fill in form
    cy.getByDataTest("login-email-input").type("priscaebube@gmail.com");
    cy.getByDataTest("login-password-input").type("1234567");

    // Submit form
    cy.getByDataTest("login-submit-button").click();

    // Assert redirection to dashboard
    cy.url().should("include", "/dashboard/overview");
    cy.contains(/Track and manage your expenses today!/i, {
      timeout: 5000,
    }).should("exist");
  });

  // registration test

  it("Should show validation and allow successful registration", () => {
    // Navigate to sign up page from login
    cy.getByDataTest("login-button").click();
    cy.contains(/login/i).should("exist");
    cy.getByDataTest("signup-link").click();
    cy.contains(/Sign Up/i).should("exist");

    // Check that validation messages are not shown initially
    cy.contains(/Please enter your full name/i).should("not.exist");
    cy.contains(/Email is Required/i).should("not.exist");
    cy.contains(/Password must be at least 7 characters/i).should("not.exist");

    // Try submitting empty form
    cy.getByDataTest("signup-submit-button").click();

    // Wait for validation errors
    cy.contains(/Please enter your full name/i).should("be.visible");
    cy.contains(/Email is Required/i, { timeout: 3000 }).should("be.visible");
    cy.contains(/Password must be at least 7 characters/i, {
      timeout: 3000,
    }).should("be.visible");

    cy.wait(3000);

    // Fill in form
    cy.getByDataTest("signup-name-input").type("Prisca Onwudebelu");
    cy.getByDataTest("signup-email-input").type("priscaebube@gmail.com");
    cy.getByDataTest("signup-password-input").type("1234567");

    // Try submitting empty form
    cy.getByDataTest("signup-submit-button").click();

    // Assert redirection to dashboard
    cy.url().should("include", "/dashboard/overview");
    cy.contains(/Track and manage your expenses today!/i, {
      timeout: 5000,
    }).should("exist");
  });
});
