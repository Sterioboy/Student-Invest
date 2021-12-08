import React from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileInterests from "./ProfileInterests";
import ProfileConnect from "./ProfileConnect";
import ProfileEdit from "./ProfileEdit";

function Profile() {

  return (
    <div className="profile">
      <ProfileEdit />
      <div className="image">
        <ProfileImage />
      </div>
      <div className="info">
        <ProfileInfo />
        <ProfileInterests />
        <ProfileConnect />
      </div>
    </div>
  );
}

export default Profile;
