import { useState } from "react";
import SubHeaderMenu from "./SubHeaderMenu";
import MenuIcon from "@mui/icons-material/Menu";

const SubHeader = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleOpenUserMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div
      className="flex py-2 px-4 bg-white  w-[90%] lg:w-[90%] m-auto"
      style={{ color: "#002f34" }}
    >
      <div className="flex items-center w-[70%] lg:w-[20%]  px-6">
        <h3 className="font-semibold text-md">ALL CATEGORIES</h3>
      </div>
      <div className="flex-wrap justify-around gap-2 mr-10 hidden lg:flex w-[70%]">
        <span className="text-sm">Cars</span>
        <span className="text-sm">Motorcycles</span>
        <span className="text-sm">Mobile Phones</span>
        <span className="text-sm">For Sale: Houses & Apartments</span>
        <span className="text-sm">Scooters</span>
        <span className="text-sm">Comercial & Other Vehicles</span>
        <span className="text-sm">For Rent: Houses & Apartments</span>
      </div>
      <div
        className="flex items-center justify-end w-[30%] lg:hidden"
        onClick={handleOpenUserMenu}
      >
        <MenuIcon />
      </div>
      {subMenuOpen && <SubHeaderMenu />}
    </div>
  );
};

export default SubHeader;
