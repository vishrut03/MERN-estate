import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/User/userSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const host = import.meta.env.VITE_BACKEND_URL;

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch(`${host}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json();
      Cookies.set("access_token", data.token, { expires: 7 });
      dispatch(signInSuccess(data.user));
      navigate("/profile");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      {" "}
      Continue With Google{" "}
    </button>
  );
}
