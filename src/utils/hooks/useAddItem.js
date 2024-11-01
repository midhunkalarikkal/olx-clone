import { useContext } from "react";
import Context from "../Context";
import toast from "react-hot-toast";

const useAddItem = () => {
    const { setAddItemOpen, userName } = useContext(Context);
  
    const handleAddItem = () => {
      if (!userName) {
        toast.error("Please login.");
        return;
      }
      setAddItemOpen(true);
    };
  
    return handleAddItem;
  };
  
  export default useAddItem;
