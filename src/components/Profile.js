import toast from "react-hot-toast";
import Context from "../utils/Context";
import React, { useContext, useState } from "react";

const Profile = () => {
  const [userProducts, setUserProducts] = useState(null);
  const [userProductsloading, setUserProductsLoading] = useState(true);
  const { userInfo, setUpdateItemOpen, setUpdateItem } = useContext(Context);
  const [userProductDeletionLoading, setUserProductDeletionLoading] = useState(false);

  const { displayName, email, emailVerified, phoneNumber, uid } = userInfo || "";

  const getUserProducts = async () => {
    const response = await fetch(
      `https://olx-c-backend.onrender.com/user/getUserProducts?uid=${uid}`,
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
  }

  const deleteProduct = async (id) => {
    setUserProductDeletionLoading(true);
    const response = await fetch(`https://olx-c-backend.onrender.com/user/deleteProduct?_id=${id}`,{
      method: "POST",
    })
    if(response.ok){
      setUserProductDeletionLoading(false);
      toast.success("Product deleted successfullt.");
      setUserProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
    }else{
      setUserProductDeletionLoading(false);
      toast.error("Error product delete, please try again!");
    }
  }

  return (
    <div className="flex flex-col md:p-8 w-[90%] bg-white p-2 m-auto mt-1 min-h-screen">
    <div className="pt-4 md:pt-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pl-4">
        Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div className="bg-gray-200 rounded-lg p-6 shadow-md flex flex-col items-center space-y-4 max-h-[300px] overflow-auto no-scrollbar">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Profile"
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Name: {displayName}
            </h3>
            <h3 className="text-sm text-gray-600">Email: {email}</h3>
            {phoneNumber && (
              <h3 className="text-sm text-gray-600">Phone: {phoneNumber}</h3>
            )}
            <h3 className="text-s">
              Verification Status:{" "}
              {emailVerified ? (
                <span className="text-green-400">Verified</span>
              ) : (
                <span className="text-red-400">Not verified</span>
              )}
            </h3>
            <h3 className="text-sm text-gray-700">
              Product Count: <span className="font-bold">{userProducts?.length || 0}</span>
            </h3>
          </div>
        </div>

        <div className="w-full md:col-span-2 bg-gray-200 p-4 rounded-lg shadow-md">
          <h1 className="font-bold text-md lg:text-2xl py-2">Your products</h1>
          <p className="text-sm text-red-500 font-semibold p-2">{userProductDeletionLoading && "Deleting Product"}</p>
          {userProductsloading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {[...Array(3)].map((_, index) => (
             <div key={index} className="bg-gray-400 rounded-lg p-4 shadow-md animate-pulse flex flex-col items-center space-y-4">
               <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
               <div className="flex flex-col space-y-2 w-full">
                 <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                 <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                 <div className="h-4 bg-gray-300 rounded w-1/4"></div>
               </div>
             </div>
           ))}
         </div>
          ) : userProducts && userProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center space-y-4">
                  <img
                    className="w-24 h-24 rounded-md object-contain border border-gray-200 shadow-lg"
                    src={product.imageUrl || "https://via.placeholder.com/150"}
                    alt="Product"
                  />
                  <div className="flex flex-col space-y-2 text-center">
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <h3 className="text-sm text-gray-600">Location: {product.place}</h3>
                    <h3 className="text-lg font-semibold text-gray-800">Price: ₹{product.price}</h3>
                    <h3 className="text-sm text-gray-600">Created At: {new Date(product.createdAt).toLocaleDateString()}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-2 lg:px-4 py-1 text-sm lg:text-md  text-white bg-yellow-500 rounded" onClick={() => updateProduct(product)}>Update</button>
                    <button className="px-2 lg:px-4 py-1 text-sm lg:text-md text-white bg-red-600 rounded" onClick={() => deleteProduct(product._id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Your product list is empty.</p>
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;
