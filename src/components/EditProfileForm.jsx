import { useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserProfileMutation } from "../redux/authApi";
import "../styles/editProfileForm.css";

const EditProfileForm = ({ onClose, firstName, lastName, refetchProfile }) => {
  const token = useSelector((state) => state.auth.token);
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile({ token, firstName: newFirstName, lastName: newLastName });
    refetchProfile();
    onClose();
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <input
          type="text"
          placeholder={firstName}
          onChange={(e) => setNewFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder={lastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;