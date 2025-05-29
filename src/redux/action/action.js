export const ADD_FAVOURITE_COMPANY = "ADD_FAVOURITE_COMPANY";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const addToFavourite = (company) => ({
  type: ADD_FAVOURITE_COMPANY,
  payload: company,
});

// export const setSearchResults = (results) => ({
//   type: SET_SEARCH_RESULTS,
//   payload: results,
// });

export const setSearchResults = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        // setJobs(data);
        dispatch({
          type: SET_SEARCH_RESULTS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
