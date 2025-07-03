import CommonHeading from "../utils/CommonHeading";

const Amenities = () => {
  return (
    <div className="pt-16 pb-8 overflow-hidden">
      {/* Header */}

      <div className="text-center  mb-8 xl:mb-16">
        <CommonHeading heading={"Amenities"} />
      </div>

      {/* Description */}
      <div className="text-center mb-12 xl:mb-16">
        <p className="text-[#000] px-[15px] font-merchant tracking-[1px] font-[100] max-w-4xl mx-auto leading-relaxed text-[14px] xl:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Amenities;
