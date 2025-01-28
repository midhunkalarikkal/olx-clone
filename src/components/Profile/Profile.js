import toast from "react-hot-toast";
import ProfileCard from "./ProfileCard";
import Shimmer from "../Shimmers/Shimmer";
import Context from "../../utils/Context";
import React, { useContext, useState } from "react";
import LiveProductCard from "../ProductsListing/LiveProductCard";

const Profile = () => {
  const [userProducts, setUserProducts] = useState(null);
  const [userProductsloading, setUserProductsLoading] = useState(true);
  const { userInfo, setUpdateItemOpen, setUpdateItem } = useContext(Context);
  const [userProductDeletionLoading, setUserProductDeletionLoading] = useState(false);
  const { displayName, email, emailVerified, phoneNumber, uid } = userInfo || "";
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const getUserProducts = async () => {
    const response = await fetch(
      `${API_BASE_URL}/user/getUserProducts?uid=${uid}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setUserProducts(data);
      setUserProductsLoading(false);
    }
  };

  useState(() => {
    getUserProducts();
  }, [userInfo]);

  const updateProduct = async (product) => {
    setUpdateItemOpen(true);
    setUpdateItem(product);
  };

  const deleteProduct = async (id) => {
    setUserProductDeletionLoading(true);
    const response = await fetch(
      `${API_BASE_URL}/user/deleteProduct?_id=${id}`,
      {
        method: "POST",
      }
    );
    if (response.ok) {
      setUserProductDeletionLoading(false);
      toast.success("Product deleted successfullt.");
      setUserProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } else {
      setUserProductDeletionLoading(false);
      toast.error("Error product delete, please try again!");
    }
  };

  return (
    <div className="md:flex w-[90%] mx-auto bg-white mt-1 min-h-screen">
      <ProfileCard
        profileData={{ displayName, email, emailVerified, phoneNumber }}
        productCount={userProducts?.length || 0}
      />

      <div className="w-full md:w-8/12 p-4 md:border-l-2">
        <h1 className="font-bold text-md lg:text-2xl py-2">Your products</h1>
        <p className="text-sm text-red-500 font-semibold p-2">
          {userProductDeletionLoading && "Deleting Product"}
        </p>
        {userProductsloading ? (
          <Shimmer />
        ) : userProducts && userProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userProducts.map((product, index) => (
              <div key={index} className="relative">
              <LiveProductCard data={product} />              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:opacity-100">
                <button
                  className="p-1 md:p-2 rounded-md bg-blue-500 text-xs md:text-sm text-white"
                  onClick={() => updateProduct(product)}
                >
                  update
                </button>
                <button
                  className="p-1 md:p-2 rounded-md bg-red-500 text-xs md:text-sm mx-2 text-white"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Your product list is empty!.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
