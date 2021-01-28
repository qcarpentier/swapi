import * as api from "../api";

export const getMovies = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.fetchMovies();

    console.log(results);

    dispatch({ type: "FETCH_MOVIES", payload: results });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPeople = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.fetchPeople();

    console.log(results);

    dispatch({ type: "FETCH_PEOPLE", payload: results });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPlanets = () => async (dispatch) => {
  try {
    const {
      data: { results },
    } = await api.fetchPlanets();

    console.log(results);

    dispatch({ type: "FETCH_PLANETS", payload: results });
  } catch (error) {
    console.log(error.message);
  }
};
