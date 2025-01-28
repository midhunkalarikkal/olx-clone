import React from "react";

const ProfileCard = React.memo(({ profileData, productCount }) => {
  const { displayName, email, emailVerified, phoneNumber } = profileData;

  return (
    <div className="w-full md:w-4/12 p-4 profileCard">
      <div className="rounded-lg py-6 flex flex-col overflow-auto no-scrollbar shadow-md border-2">
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow"
            src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
            alt="Profile"
          />
        </div>
        <div className="p-4">
          <ul className="space-y-4 md:px-4">
            <li className="flex items-center justify-between">
              <span className="text-gray-800 font-semibold text-sm md:text-lg">
                Name:
              </span>
              <span className="ml-4 text-gray-600 text-sm md:text-lg">{displayName}</span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-gray-800 font-semibold text-sm md:text-lg">
                Email:
              </span>
              <span className="ml-4 text-gray-600 text-sm md:text-lg">{email}</span>
            </li>

            {phoneNumber && (
              <li className="flex items-center justify-between">
                <span className="text-gray-800 font-semibold text-sm md:text-lg">
                  Phone:
                </span>
                <span className="ml-4 text-gray-600 text-sm md:text-lg">
                  {phoneNumber}
                </span>
              </li>
            )}

            <li className="flex items-center justify-between">
              <span className="text-gray-800 font-semibold text-sm md:text-lg">
                Verification Status:
              </span>
              <span
                className={`ml-4 font-semibold text-sm md:text-lg ${
                  emailVerified ? "text-green-400" : "text-red-400"
                }`}
              >
                {emailVerified ? "Verified" : "Not Verified"}
              </span>
            </li>

            <li className="flex items-center justify-between">
              <span className="text-gray-800 font-semibold text-sm md:text-lg">
                Product Count:
              </span>
              <span className="ml-4 font-bold text-gray-700 text-sm md:text-lg">
                {productCount}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default ProfileCard;
