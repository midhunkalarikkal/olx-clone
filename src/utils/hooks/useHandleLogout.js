import Context from "../Context";
import { useContext } from "react";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const useHandleLogout = () => {
  const { setUserLoggedIn, setUserInfo } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserLoggedIn(false);
        setUserInfo(null);
        navigate('/');
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        toast.error("Logout failed, please try again");
      });
  };
  return handleLogOut;
};

export default useHandleLogout;
