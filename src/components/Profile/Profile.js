import toast from "react-hot-toast";
import ProfileCard from "./ProfileCard";
import Shimmer from "../Shimmers/Shimmer";
import Context from "../../utils/Context";
import React, { useContext, useState, useEffect } from "react";
import LiveProductCard from "../ProductsListing/LiveProductCard";

const Profile = () => {
  const { userInfo, setUpdateItemOpen, setUpdateItem, profileProductFetchError, setProfileProductFetchError } = useContext(Context);
  const [userProducts, setUserProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const { displayName, email, emailVerified, phoneNumber, uid } = userInfo || {};

  useEffect(() => {
    const fetchUserProducts = async () => {
      if (!uid) return;

      try {
        const response = await fetch(`http://localhost:5000/user/getUserProducts?uid=${uid}`);
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();
        setUserProducts(data);
        setProfileProductFetchError(false);
      } catch (error) {
        toast.error("Products fetching error.");
        setProfileProductFetchError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProducts();
  }, [uid]);

  const handleUpdateProduct = (product) => {
    setUpdateItemOpen(true);
    setUpdateItem(product);
  };

  const handleDeleteProduct = async (id) => {
    setDeletingProductId(id);

    try {
      const response = await fetch(`http://localhost:5000/user/deleteProduct?_id=${id}`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to delete product");

      toast.success("Product deleted successfully.");
      setUserProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      toast.error("Error deleting product, please try again!");
    } finally {
      setDeletingProductId(null);
    }
  };

  return (
    <div className="w-[90%] mx-auto bg-white mt-1 min-h-screen flex flex-col md:flex-row">
      <ProfileCard profileData={{ displayName, email, emailVerified, phoneNumber }} productCount={userProducts?.length || 0} />

      <div className="w-full md:w-8/12 p-4 md:border-l-2">
        <h1 className="font-bold text-md lg:text-2xl py-2">Your Products</h1>

        {deletingProductId && <p className="text-sm text-red-500 font-semibold p-2">Deleting product...</p>}
        {profileProductFetchError && <p className="text-sm text-red-500 font-semibold p-2">Failed to fetch products!</p>}

        {loading && !profileProductFetchError ? (
          <Shimmer />
        ) : userProducts?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userProducts.map((product) => (
              <div key={product._id} className="relative group">
                <LiveProductCard data={product} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 rounded-md bg-blue-500 text-white text-sm"
                    onClick={() => handleUpdateProduct(product)}
                  >
                    Update
                  </button>
                  <button
                    className="p-2 mx-2 rounded-md bg-red-500 text-white text-sm"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    {deletingProductId === product._id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !profileProductFetchError && <p className="text-gray-600">Your product list is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
