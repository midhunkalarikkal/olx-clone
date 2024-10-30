const SubHeader = () => {
  return (
    <div className="flex py-2 px-4 bg-white items-center w-[80%] m-auto" style={{color: "#002f34"}}>
      <div className="w-[15%] px-6">
        <h3 className="font-semibold text-md">ALL CATEGORIES</h3>
      </div>
      <div className="flex justify-around mr-10 w-[70%]">
        <span className="text-sm" >Cars</span>
        <span className="text-sm">Motorcycles</span>
        <span className="text-sm">Mobile Phones</span>
        <span className="text-sm">For Sale: Houses & Apartments</span>
        <span className="text-sm">Scooters</span>
        <span className="text-sm">Comercial & Other Vehicles</span>
        <span className="text-sm">For Rent: Houses & Apartments</span>
      </div>
    </div>
  );
};

export default SubHeader;
