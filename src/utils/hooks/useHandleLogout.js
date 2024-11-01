import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const useHandleLogout = () => {
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
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
