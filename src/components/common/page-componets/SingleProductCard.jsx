import { BiBed, BiMap, BiMapAlt, BiTab } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProperty } from "../../../features/dataSlice"; // Import the action
import CardHoverIcons from "./CardHoverIcons";
import CardLabels from "./CardLabels";

const SingleProductCard = ({
  id,
  name,
  location,
  price,
  distance,
  purpose,
  number_of_beds,
  number_of_bathrooms,
  dimensions,
  image,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePropertyClick = () => {
    // Dispatch the selected property to Redux
    dispatch(
      setSelectedProperty({
        id,
        name,
        location,
        distance,
        purpose,
        number_of_beds,
        number_of_bathrooms,
        dimensions,
        image,
      })
    );
    console.log("object", id)

    navigate("/view-detail"); // Navigate to the detail page
  };

  return (
    <div
      className="flex-1 basis-[18rem] shadow-light dark:border-card-dark border rounded-lg overflow-hidden relative group"
    >
      <div className="group !opacity-100 overflow-hidden relative">
        <Link to="#" onClick={handlePropertyClick} className="!opacity-100">
          <img
            src={image}
            alt={name}
            style={{ height: 300, width: 550 }}
            className="w-full h-fit md:h-[250px] group-hover:scale-125 transition-a"
          />
        </Link>
        <CardHoverIcons />
        <div className="absolute bottom-0 left-0 w-full px-2 py-2 transition-transform bg-gradient-to-t from-black/80 sm:translate-y-10 group-hover:translate-y-0 to-transparent">
          <div className="text-white flex-align-center gap-x-2">
            <BiMap />
            <p>{location}</p>
          </div>
        </div>
      </div>
      <CardLabels purpose={purpose} distance={distance} />
      <div className="p-3">
        <h1 className="text-lg font-bold capitalize">{name}</h1>
        <div className="flex justify-between mt-3">
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiBed />
            </div>
            <p className="text-sm">{number_of_beds} Beds</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiTab />
            </div>
            <p className="text-sm">{number_of_bathrooms} Bathrooms</p>
          </div>
          <div className="flex-align-center gap-x-2">
            <div className="icon-box !w-7 !h-7 bg-primary/20 hover:!bg-primary/40 text-primary">
              <BiMapAlt />
            </div>
            <p className="text-sm">{dimensions}</p>
          </div>
        </div>

        <div className="mt-4 flex-center-between">
          <Link to="/view-detail" className="group-hover:text-primary transition-a">
            <h1 className="text-lg font-bold capitalize">Show details</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
