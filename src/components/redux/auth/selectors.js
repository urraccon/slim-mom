export const selectLoggedIn = state => state.auth.loggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserToken = state => state.auth.user.accessToken;
export const selectAuthStatus = state => state.auth.status;
export const selectAuthError = state => state.auth.error;
