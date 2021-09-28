const GET_FOLLOWING = "followers/GET_FOLLOWING";
const GET_USERS = "/users/GET_USERS";

const getFollowing = (user) => ({
  type: GET_FOLLOWING,
  payload: user,
});

const getUser = (users) => ({
  type: GET_USERS,
  payload: users,
});

// export const getAllFollowing = (id) => async (dispatch) => {
//   const response = await fetch(`/api/users/${id}/following`);

//   if (response.ok) {
//     const following = await response.json();
//     dispatch(getFollowing(following));
//   }
// };

export const getAllUsers = () => async (dispatch) => {
  const response = await fetch("/api/users/all");

  if (response.ok) {
    const users = await response.json();
    dispatch(getUser(users));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWING: {
      return { user: action.payload };
    }
    case GET_USERS: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
}
