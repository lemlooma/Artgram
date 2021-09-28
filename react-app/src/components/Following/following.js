import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAllUsers } from "../../store/user";
import "./following.css";

function Following() {
  const { userId } = useParams();

  // const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const allUser = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="followingPageBody">
      {allUser.users?.map((user) =>
        user.follows.map((following) =>
          +userId === user.id ? (
            <>
              <div className="followersDetailContainer">
                {allUser.users?.map((user) =>
                  user.id === following.id ? (
                    <div>
                      <NavLink to={`/user/${following.id}`}>
                        <img className="profilePic" src={user.profile_pic} alt={user.id}/>
                      </NavLink>
                    </div>
                  ) : null
                )}

                <div className="followersDetail">
                  <NavLink className="followersDetail" to={`/user/${following.id}`}>
                    <div>{following.username}</div>
                  </NavLink>
                </div>
              </div>
            </>
          ) : null
        )
      )}
    </div>
  );
}

export default Following;
