export default (movies = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;

    default:
      return movies;
  }
};
