import { useState , useEffect} from "react";

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  useEffect(() => {
  if (imgs && imgs.length > 0) {
    setMainImage(imgs[0]);
  }
}, [imgs]);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full h-80 flex justify-center items-center">
        <img
          src={mainImage || imgs[0]}
          alt="product"
          className="max-w-full max-h-full object-contain shadow-md rounded-lg"
        />
      </div>

      <div className="flex flex-row gap-2 overflow-x-auto ">
        {imgs.map((curElem, index) => {
          return (
            <img
              src={curElem}
              key={index}
              alt={`product-${index}`}
              onClick={() => setMainImage(curElem)}
              className={`w-20 h-20 object-cover cursor-pointer border-2 rounded transition-all
                ${mainImage === curElem ? "border-indigo-600 " : "border-transparent hover:border-indigo-300"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyImage;
