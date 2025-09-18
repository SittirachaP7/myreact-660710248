import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handGohome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      {/* วิธี 1: ใช้ Link */}
      <Link to="/">Go Home</Link>

      {/* วิธี 2: ใช้ปุ่ม navigate */}
      <button onClick={handGohome}>Back Home</button>
    </div>
  );
};

export default NotFound;
