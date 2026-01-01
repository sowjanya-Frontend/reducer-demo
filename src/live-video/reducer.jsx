export let initialState = {
  ViewersCount: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case "Join":
      return { ViewersCount: state.ViewersCount + 1 };
    case "Exit":
      return { ViewersCount: state.ViewersCount - 1 };
  }
}
