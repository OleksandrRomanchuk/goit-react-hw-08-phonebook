const selectUserName = state => state.auth.user.name;

const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectToken = state => state.auth.token;

export { selectUserName, selectIsLoggedIn, selectToken };
