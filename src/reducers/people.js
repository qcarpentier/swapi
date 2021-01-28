export default (people = [], action) => {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return action.payload;

    default:
      return people;
  }
};
