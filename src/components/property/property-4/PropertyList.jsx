import { useSelector } from "react-redux";
import { dataStore } from "../../../features/dataSlice";
import SingleProductCard from "../../common/page-componets/SingleProductCard";

const PropertyList = ({ basis }) => {
  const { currentDataItems } = useSelector(dataStore);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {currentDataItems?.map((property) => (
      <SingleProductCard key={property.id} {...property} basis={basis} />
    ))}
  </div>
  
  );
};

export default PropertyList;
