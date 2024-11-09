import Context from "../Context";
import { useContext } from "react";
import toast from "react-hot-toast";

const useAddItem = () => {
    const { setAddItemOpen, userLoggedIn } = useContext(Context);
  
    const handleAddItem = () => {
      if (!userLoggedIn) {
        toast.error("Please login.");
        return;
      }
      setAddItemOpen(true);
    };
  
    return handleAddItem;
  };
  
  export default useAddItem;
