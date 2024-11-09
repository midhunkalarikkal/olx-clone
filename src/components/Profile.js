import Context from "../utils/Context";
import React, { useContext, useState } from "react";

const Profile = () => {
  const { userInfo } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [userProducts, setUserProducts] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL_LOCAL;

  const { displayName, email, emailVerified, phoneNumber, uid } = userInfo || "";

  const getUserProducts = async () => {
    const response = await fetch(
      `${apiUrl}/user/getUserProducts?uid=${uid}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      setUserProducts(data);
      setLoading(false);
    }
  };

  useState(() => {
    getUserProducts();
  }, [userInfo]);

  return (
    <div className="flex flex-col md:p-8 w-[90%] bg-white h-screen p-2 m-auto mt-1">
      <div className="pt-4 md:pt-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pl-4">
          Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center space-y-4 max-h-[300px] overflow-auto">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
              src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
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

          <div className="w-full md:col-span-2 grid gap-6">
            {loading ? (
              <div className="bg-gray-400 rounded-lg p-4 shadow-md animate-pulse flex items-center space-x-4">
              <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
              <div className="flex flex-col space-y-2 w-full">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
            </div>
            ) : userProducts && userProducts.length > 0 ? (
              userProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
                  <img
                    className="w-24 h-24 rounded-md object-cover border border-gray-200"
                    src={product.imageUrl || "https://via.placeholder.com/150"}
                    alt="Product"
                  />
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <h3 className="text-sm text-gray-600">
                      Location: {product.place}
                    </h3>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Price: ₹{product.price}
                    </h3>
                    <h3 className="text-sm text-gray-600">
                      Created At: {new Date(product.createdAt).toLocaleDateString()}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">You product list is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
