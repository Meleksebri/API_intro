import React from "react";
import "./UserCard.css";

import { Link } from "react-router-dom";

const UserCard = (props) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };
  const images = [
    "https://cdn-icons.flaticon.com/png/512/663/premium/663088.png?token=exp=1651055154~hmac=fdf68228ac950ad3941fdedb10443611",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663086.png?token=exp=1651055189~hmac=5f5e5d74553cca7b774f0d87e512a5ae",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663076.png?token=exp=1651055207~hmac=59296b411d2e788bf6c056932ff6e9a8",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663080.png?token=exp=1651055244~hmac=82032da30e059a955c5faa01a962e56a",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663085.png?token=exp=1651055261~hmac=c132df69ef1674dabab0ece5b6f6a112",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663089.png?token=exp=1651055278~hmac=9326cab1ed5f5c4be9b1ff473ae5fe4a",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663087.png?token=exp=1651055126~hmac=5c97ebb85fda86a6a54310a115d30f98",
    "https://cdn-icons.flaticon.com/png/512/663/premium/663090.png?token=exp=1651055299~hmac=77806c6981dfc3403010d0ca1bd7d0f1",
  ];
  return (
    <Link to={`/description/${props.Users.id}`} state={props.Users.id}>
      <div>
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp",
          }}
        >
          {/* Team Thumb*/}
          <div className="advisor_thumb">
            <img
              src={images[getRandomInt(8)]}
              alt=""
              width="315px"
              height="315px"
            />
            {/* Social Info*/}
            <div className="social-info">
              <i className="fa fa-facebook" />

              <i className="fa fa-twitter" />

              <i className="fa fa-linkedin" />
            </div>
          </div>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>{props.Users.name}</h6>
            <p className="designation">Username : {props.Users.username}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
