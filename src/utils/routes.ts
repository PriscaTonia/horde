/**
 * @publicApi
 */

export const enum ApplicationRoutes {
  LANDING = "/",
  HOME = "/dashboard",
  OVERVIEW = "/dashboard/overview",
  BUDGETS = "/dashboard/budgets",
  TRANSACTIONS = "/dashboard/transactions",
  NOTIFICATIONS = "/dashboard/notifications",
  SETTINGS = "/dashboard/settings",
  SUPPORT = "/dashboard/support",

  CREATE_BUDGET = "/dashboard/budgets/create-budget",
  CREATE_BUDGET_SUCCESS = "/dashboard/budgets/create-budget/success",

  // Auth routes
  AUTH_SIGNIN = "/auth/sign-in",
  AUTH_SIGNUP = "/auth/sign-up",
}
