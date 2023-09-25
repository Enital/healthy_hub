export const handleFulfilledPost = (state, action) => {
  state.user = action.payload;
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

// new reqwests

export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handleUpdateWeightFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user.weight = action.payload.weight;
};

export const handleUpdateGoalAuthFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user.goal = action.payload.goal;
};

export const handleUpdateUserFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user = action.payload;
};

export const handleUpdateAvatarFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.user.avatar = action.payload.avatar;
};
