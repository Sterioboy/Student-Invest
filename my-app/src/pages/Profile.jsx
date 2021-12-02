import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import InfoInterests from "../components/InfoInterests/InfoInterests";
import Connections from "../components/Connections/Connections";
import profile from './profile.scss'

const Profile = () => {
  return (
   <div>
    <div className='profileWrapper'>
     <Sidebar />
     
      
      <InfoInterests />
   
      
    </div>
    <Connections/>
    </div>
  );
};

export default Profile;
