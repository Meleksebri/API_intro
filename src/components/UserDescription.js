import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserDescription.css";

const UserDescription = (props) => {
  const location = useLocation();
  var userinfo = props.Users.find((el) => el.id === +location.state);
  console.log(userinfo.company.catchPhrase);
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://icons-for-free.com/download-icon-avatar+person+profile+user+icon-1320166578424287581_512.png"
            />
            <span className="font-weight-bold">{userinfo.name}</span>
            <span className="text-black-50">
              {userinfo.company.catchPhrase}
            </span>
            <span className="text-black-50">{userinfo.website}</span>

            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">User Info</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Full Name</label>
                <p>{userinfo.name}</p>
              </div>
              <div className="col-md-6">
                <label className="labels">Username</label>
                <p>{userinfo.username}</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <p>{userinfo.phone}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Address Street</label>
                <p>{userinfo.address.street}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Address Suite</label>
                <p>{userinfo.address.suite}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">City</label>
                <p>{userinfo.address.city}</p>
              </div>
              <div className="col-md-12">
                <label className="labels">Zipcode</label>
                <p>{userinfo.address.zipcode}</p>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Link to="/">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Go back home
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span className="border px-3 p-1 add-experience">
                <i className="fa fa-plus" />
                &nbsp;Professional Work
              </span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Compagny Name</label>
              <p>{userinfo.company.name}</p>
            </div>{" "}
            <br />
            <div className="col-md-12">
              <label className="labels">Tasks</label>
              <p>{userinfo.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDescription;
