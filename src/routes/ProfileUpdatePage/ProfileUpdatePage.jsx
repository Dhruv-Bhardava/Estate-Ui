import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../component/UploadWidget/UploadWidget";
function ProfileUpdatePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      // setErr(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form action="" onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Update</button>
          {err && <span>{err}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar[0] || currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "DhruvBhardava",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
