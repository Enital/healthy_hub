export const handleFulfilledPost = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshingTrue = state => {
  state.isRefreshing = true;
};

export const handleRefreshingFull = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleRefreshingFalse = state => {
  state.isRefreshing = false;
};
