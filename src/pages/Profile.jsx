import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { image, email, currentUser } = useSelector((state) => state.auth);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-start shadow-2xl pt-6">
      <div className="flex flex-col items-center justify-start gap-3 p-6 shadow-2xl rounded-xl bg-blue-100">
        <img className="max-h-[300px]" src={image} alt="profile-pic" />
        <h2 className="text-xl text-center text-red-700">{currentUser}</h2>
        <p className="text-xl text-center">{email}</p>
      </div>
    </div>
  );
};

export default Profile;
