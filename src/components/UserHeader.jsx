import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "../redux/authApi";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

const UserHeader = () => {
  const token = useSelector((state) => state.auth.token);
  const { data: profileData, refetch } = useGetUserProfileQuery(token, { skip: !token });
  const [editMode, setEditMode] = useState(false);

  const firstName = profileData?.body?.firstName;
  const lastName = profileData?.body?.lastName;

  if (editMode) {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <EditProfileForm
        onClose={() => setEditMode(false)}
        firstName={firstName}
        lastName={lastName}
        refetchProfile={refetch}
      />
      </div>
    );
  }

  return (
    <div className="header">
      <h1>
        Welcome back<br />
        {firstName } { lastName} !
      </h1>
      <button className="edit-button" onClick={() => setEditMode(true)}>Edit Name</button>
    </div>
  );
};

export default UserHeader;