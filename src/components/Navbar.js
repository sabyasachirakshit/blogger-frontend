import React, { useContext } from "react";
import avatar from "../media/download.jpeg";
import power from "../media/p1ower.jpeg";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  function logoutUser() {
    logout(); // Call logout from context
    navigate("/login");
  }
  return (
    <div
      style={{
        backgroundColor: "darkgray",
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ marginLeft: 12 }}>
        <h3>BLOGGER WEB</h3>
      </div>
      <div
        style={{
          marginRight: 12,
          display: "flex",
          alignItems: "center",
          gap: 5,
        }}
      >
        <img
          src={avatar}
          alt="user_avatar"
          style={{ borderRadius: 50, height: 32, width: 32 }}
        />
        <p>{user}</p>
        <Tooltip title="Logout">
          <img
            onClick={logoutUser}
            src={power}
            alt="power"
            style={{
              borderRadius: 50,
              height: 32,
              width: 32,
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default Navbar;
