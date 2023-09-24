export const selectCharts = state => {
  return {
    graph: state.graph.items,
    isLoading: state.graph.isLoading,
    error: state.graph.error,
  };
};
