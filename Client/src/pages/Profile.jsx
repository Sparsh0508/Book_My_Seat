import react, { useState } from "react";
import { tabs } from "../utils/constants";
import { IoIosLogOut, IoMdAdd } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import BookingHistory from "../components/Profile/BookingHistory";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <>
      <div className="bg-[#e5e5e5] ">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 py-2 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              className={`pb-1 cursor-pointer ${
                activeTab === tab
                  ? "text-[#f74565]"
                  : "text-gray-600 hover:text-black"
              }`}
              key={tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-screen py-10 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Profile section  */}
          {activeTab === "Profile" && (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-md px-6 py-6 flex items-center gap-6 text-white ">
                <div className="relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-600">
                  <IoMdAdd size={24} />
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-bold">Hi, Sparsh Agarwal</h2>
                  <small className="underline cursor-pointer">
                    <IoIosLogOut size={20} className="inline" />
                    Logout
                  </small>
                </div>
              </div>

              {/* Account Details  */}
              <div className="bg-white rounded-b-md px-6 py-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Account Details</h3>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-normal">Email Address</p>
                  <div className="flex items-center gap-2">
                    <span>testemail@gmail.com</span>
                    <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                      Verified
                    </span>
                  </div>
                  <FiEdit className="text-pink-500 cursor-pointer" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-normal">Mobile Number</p>
                  <div className="flex items-center gap-2">
                    <span>+91-9876543210</span>
                    <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                      Verified
                    </span>
                  </div>
                  <FiEdit className="text-pink-500 cursor-pointer" />
                </div>
              </div>

              {/* Personal Details Section */}
              <div className="bg-white rounded-md px-6 py-6 mt-6 shadow-md">
                <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-normal">Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value="Sparsh Agarwal"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm font-normal">
                      BirthDay (Optional)
                    </label>
                    <input
                      type="calendar"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                      value="1998-07-20"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-sm font-normal">
                      Married (Optional)
                    </label>
                    <div className="flex gap-2 mt-1">
                      <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-lg hover:bg-pink-50">
                        Yes
                      </button>
                      <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50">
                        No
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-normal">
                      Gender (Optional)
                    </label>
                    <div className="flex gap-2 mt-1">
                      <button className="border border-pink-500 text-pink-500 px-3 py-1 rounded-lg hover:bg-pink-50">
                        Male
                      </button>
                      <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50">
                        Female
                      </button>
                      <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-lg hover:bg-gray-50">
                        Other
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Booking Section  */}
            {activeTab === "Your Orders" && <BookingHistory />}
        </div>
      </div>
    </>
  );
};

export default Profile;
