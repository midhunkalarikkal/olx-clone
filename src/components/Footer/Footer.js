import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Footer = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto" style={{color: "#002f34"}}>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 py-6 px-10 md:px-20"
        style={{ backgroundColor: "#ebeeef" }}
      >
        <div>
          <h3 className="font-bold text-sm mb-2">POPULAR LOCATIONS</h3>
          <p className="text-xs mb-1">Kolkata</p>
          <p className="text-xs mb-1">Mumbai</p>
          <p className="text-xs mb-1">Chennai</p>
          <p className="text-xs mb-1">Pune</p>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-2">TRENDING LOCATIONS</h3>
          <p className="text-xs mb-1">Bhubaneshwar</p>
          <p className="text-xs mb-1">Hyderabad</p>
          <p className="text-xs mb-1">Chandigarh</p>
          <p className="text-xs mb-1">Nashik</p>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-2">POPULAR LOCATIONS</h3>
          <p className="text-xs">Tech@OLX</p>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-2">OLX</h3>
          <p className="text-xs mb-1">Blog</p>
          <p className="text-xs mb-1">Help</p>
          <p className="text-xs mb-1">Sitemap</p>
          <p className="text-xs mb-1">Legal & Privacy Information</p>
          <p className="text-xs mb-1">aVulnerability Disclosure Program</p>
        </div>
        <div>
          <h3 className="font-bold text-sm mb-1">FOLLOW US</h3>
          <div className="">
            <FacebookIcon />
            <InstagramIcon />
            <XIcon />
            <PlayCircleOutlineIcon />
          </div>
          <div>
            <div className="flex pt-12">
              <img className="w-4/12" src="/GooglePlay.png" alt="google_play" />
              <img className="w-4/12" src="AppStore.png" alt="app_store" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 py-6 px-20"
        style={{ backgroundColor: "#002f34" }}
      >
        <div className="flex items-center justify-center">
          <img src="/cartrade_tech.png" alt="carTrade_tech" />
          <span className="bg-white h-full text-white mx-10">i</span>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-3/12" src="/olx.png" alt="olx" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/carwale.png" alt="carwale" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/bikewale.png" alt="bikewale" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/cartrade.png" alt="cartrade" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/mobility.png" alt="mobility" />
        </div>
      </div>
      <div className="md:flex py-6 text-white text-xs" style={{ backgroundColor: "#002f34" }}>
        <div className="flex justify-center md:justify-start lg:w-4/12">
            <p className="md:pl-32">Help - Sitemap</p>
        </div>
        <div className="flex justify-center md:justify-end lg:w-8/12">
            <p className="md:pr-20">Disclaimer: This is a personal project.</p>
        </div>
        <div className="flex justify-center md:justify-end lg:w-8/12">
            <p className="md:pr-20">All rights reserver @ 2025-2026 Midhun</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
