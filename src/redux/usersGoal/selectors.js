export const selectGoals = state => {
  return {
    items: state.goals.items,
    isLoading: state.goals.isLoading,
    error: state.goals.error,
  };
};
