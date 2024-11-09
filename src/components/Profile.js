import React, { useContext } from "react";
import Context from "../utils/Context";

const Profile = () => {
  const { userInfo } = useContext(Context);
  console.log("Profile userInfo : ", userInfo);
  const { displayName, email, emailVerified, phoneNumber } = userInfo;
  return (
    <div className="flex flex-col md:p-8 w-[90%] bg-white h-screen p-2 m-auto mt-1">
      <div className="pt-4 md:pt-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 pl-4">
          Profile
        </h1>

        <div className="flex flex-col md:flex-row mt-4 space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-1/3 bg-white rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
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
                  <span className="text-green-400">Not verified</span>
                )}
              </h3>
              <h3 className="text-sm text-gray-700">
                Product Count: <span className="text-bold">0</span>
              </h3>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid gap-6">
            <div className="bg-white rounded-lg p-4 shadow-md flex items-center space-x-4">
              <img
                className="w-24 h-24 rounded-md object-cover border border-gray-200"
                src=""
                alt="Product"
              />
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  Price: $0.00
                </h3>
                <p className="text-sm text-gray-600">
                  Description: Product description goes here...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
