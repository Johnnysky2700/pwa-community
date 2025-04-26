import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Import avatars
import michealImg from "./ChatsImg/michael.png";
import josephImg from "./ChatsImg/Joseph.png";
import thomasImg from "./ChatsImg/Thomas.png";

// Map avatar names to images
const avatarImages = {
  "micheal.png": michealImg,
  "joseph.png": josephImg,
  "thomas.png": thomasImg,
};

const mockContacts = [
  {
    id: 1,
    name: "Metal Exchange",
    phone: "+43 123-456-7890",
    avatar: "micheal.png",
  },
  {
    id: 2,
    name: "Michael tony",
    phone: "+43 123-456-7890",
    avatar: "micheal.png",
  },
  {
    id: 3,
    name: "Joseph ray",
    phone: "+43 123-456-7890",
    avatar: "joseph.png",
  },
  {
    id: 4,
    name: "Thomas adison",
    phone: "+43 123-456-7890",
    avatar: "thomas.png",
  },
];

const AddContact = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleAddPhone = () => {
    if (phone.trim()) {
      alert(`Contact with phone ${phone} added.`);
      setPhone("");
    }
  };

  return (
    <div className="min-h-screen bg-[#ffff] flex flex-col ">
      {/* Header */}
      <div className="bg-primary text-white flex items-center p-4 rounded-t-3xl shadow">
        <IoArrowBackSharp
          className="text-2xl mr-4 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h2 className="text-lg font-semibold">Add Contacts</h2>
      </div>

      {/* Add New Contact */}
      <div className="mt-6 p-4 relative">
        <h3 className="text-xl font-bold mb-4">ADD NEW CONTACT</h3>

        <div className="relative mt-6">
          <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-gray-600">
            Phone Number
          </label>
          <div className="flex items-center border-2 border-gray-300 rounded-md px-3 py-2 gap-2">
            <BsTelephone className="text-gray-500" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+43 123-456-7890"
              className="outline-none flex-1"
            />
          </div>
        </div>
        <div className="text-center text-sm">
          <button
            onClick={handleAddPhone}
            className="mt-6 px-6 py-2 rounded-full border-2 border-primary text-primary text-center gap-2 hover:bg-purple-100"
          >
            + Add Contacts
          </button>
        </div>
      </div>

      {/* Existing Contacts */}
      <div className="mt-8 rounded-t-3xl bg-[#EFE7FA] p-4">
        <h4 className="text-center font-semibold text-purple-700 mb-4">
          EXISTING CONTACT IN PHONE
        </h4>
        <div className="space-y-4">
          {mockContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between px-4 py-2 rounded-xl shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    avatarImages[contact.avatar] || avatarImages["micheal.png"]
                  } // Default to a fallback image
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.phone}</p>
                </div>
              </div>
              <button className="bg-primary text-white px-4 py-1 rounded-full text-sm hover:bg-purple-600">
                + Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddContact;
