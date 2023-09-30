import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
function OverviewPage() {
  return (
    <section className="OverViewPage">
      <div className="OverView_grid_Container">
        <div className="UserInfo">
          <div className="detailed_info">
            <div className="userImage">
              <img
                src="https://avatars.githubusercontent.com/u/119412102?v=4"
                className="userImage"
                alt=""
              />
            </div>
            <div className="MoreBoutUser">
              <h1 className="user_name">Anerico kakai</h1>
              <h2 className="fadeText">AnericoKakai</h2>
            </div>
          </div>
          <div className="Profile_actions">
            <button className="profileBtn "> edit profile</button>
            <button className="profileBtn"> set Status</button>
          </div>
        </div>
        <div className="UserDetails">
          <h2 className="head_text">Popular Apis</h2>
          <div className="AvailableApi_container">
          <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>         <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>         <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>         <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>         <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>         <div className="availableApis">
              <div className="availableApi_upper">
                <Link>
                  <h4 className="blueText textHeading">
                    create account and login api
                  </h4>
                </Link>
                <button className="permitted"> free</button>
              </div>
              <div className="availableApi_Lower">
                <p className="text">
                  this api allows you to intergrate your front end application
                  with a running backend without being concerned how the backend
                  works
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewPage;
