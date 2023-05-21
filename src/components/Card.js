import React from "react";
import room from "../assets/room.png";
import globe from "../assets/globe.jpg";
import gallery from "../assets/gallery.jpg";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { GoGlobe } from "react-icons/go";
import { TfiGallery } from "react-icons/tfi";

const Card = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-2 gap-x-14 gap-y-5 px-5">
      <Link to="/room" className="block">
        <img
          alt="Signage"
          src={room}
          className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72 hover:shadow-xl"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium text-2xl card">Room</strong>
          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-indigo-400"></span>

          <HiHome size={25} />
        </div>
      </Link>
      <Link to="/globeroom" className="block">
        <img
          alt="Signage"
          src={globe}
          className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72  hover:shadow-xl"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium text-2xl card">The Globe</strong>
          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-indigo-400"></span>

          <GoGlobe size={25} />
        </div>
      </Link>
      <Link to="/room" className="block">
        <img
          alt="Signage"
          src={gallery}
          className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72  hover:shadow-xl"
        />

        <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <strong className="font-medium text-2xl card">Gallery</strong>
          <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-indigo-400"></span>

          <TfiGallery size={25} />
        </div>
      </Link>
    </div>
  );
};

export default Card;
