import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import { useContext } from "react";
import Context from "../Context";

const useHandleLogout = () => {
  const { setUserLoggedIn, setUserName, setUserUid } = useContext(Context)
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUserLoggedIn(false);
        setUserName(null);
        setUserUid(null);
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        toast.error("Logout failed, please try again");
        console.log("error : ", error);
      });
  };
  return handleLogOut;
};

export default useHandleLogout;
