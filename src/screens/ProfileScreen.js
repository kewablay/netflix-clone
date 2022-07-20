import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import avatar from "../images/netflix-avatar.png";
import "../css/ProfileScreen.css";
import NetflixPlan from "../components/NetflixPlan";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <div className="container">
        <h1>Edit Profile</h1>
        <div className="profileScreen__content">
          <img src={avatar} alt="" className="profileScreen__avatar" />
          <div className="profileScreen__details">
            <h3 className="email">{user.email}</h3>
            <div className="profileScreen__plans">
              <h3>Plans(Current Plan: Premium)</h3>
              <p className="profileScreen__renewDate">
                Renewal date: 05/03/2023
              </p>
              <div className="profileScreen__planList">
                <NetflixPlan title={"Netflix Standard"} vidQuality={"1080p"} />
                <NetflixPlan title={"Netflix Basic"} vidQuality={"480"} />
                <NetflixPlan
                  title={"Netflix Premium"}
                  vidQuality={"4K + HDR"}
                />
              </div>
            </div>
            <button
              className="profileScreen__submit"
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
