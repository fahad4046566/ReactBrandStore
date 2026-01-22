import { SiLogitechg } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { SiSamsung } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Trusted = () => {
  return (
    <><p className="text-gray-900 font-medium uppercase tracking-widest pt-10 mb-10 flex justify-center">
      Trusted By 500+ Companies
    </p><div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 px-5">

        {/* Logitech Group */}
        <div className="flex items-center gap-2">
          <SiLogitechg className="text-3xl text-slate-900" />
          <span className="text-xl md:text-2xl font-black text-slate-900 italic tracking-tighter">
            LOGITECH
          </span>
        </div>

        {/* Spotify Group */}
        <div className="flex items-center gap-2">
          <FaSpotify className="text-3xl text-slate-900" />
          <span className="text-xl md:text-2xl font-bold text-slate-900">
            Spotify
          </span>
        </div>

        {/* Samsung Group */}
        <div className="flex items-center gap-2">
          <SiSamsung className="text-5xl text-slate-900" />
          <span className="sr-only text-xl font-black text-slate-900">
            SAMSUNG
          </span>
        </div>

        {/* Adidas Group */}
        <div className="flex items-center gap-2">
          <SiAdidas className="text-4xl text-slate-900" />
          <span className="text-xl md:text-2xl font-black text-slate-900 uppercase">
            Adidas
          </span>
        </div>

        {/* Amazon Group */}
        <div className="flex items-center gap-2">
          <FaAmazon className="text-3xl text-slate-900" />
          <span className="text-xl md:text-2xl font-black text-slate-900 lowercase">
            amazon
          </span>
        </div>
      </div></>
  );
};

export default Trusted;
