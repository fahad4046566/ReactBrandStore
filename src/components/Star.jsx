import { RxStarFilled } from "react-icons/rx";
import { PiStarHalfFill } from "react-icons/pi";
import { ImStarEmpty } from "react-icons/im";

const Star = ({ stars, reviews }) => {
 
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-yellow-500 text-xl">
        {stars >= index + 1 ? (
          <RxStarFilled />
        ) : stars >= number ? (
          <PiStarHalfFill />
        ) : (
          <ImStarEmpty />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-2 my-2">
      <div className="flex">{ratingStar}</div>
      {/* Reviews dikhane ke liye */}
      <p className="text-gray-500 text-sm">{reviews}</p>
    </div>
  );
};

export default Star;
