import { FaTruckMoving } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";


const Services = () => {
  return (
    <div>
     <div className="services py-20 px-5 md:px-20 bg-white">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    
    {/* Service 1 */}
    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
      <div className="text-4xl text-blue-600 mb-4 bg-white p-4 rounded-full shadow-sm">
        <FaTruckMoving />
      </div>
      <h3 className="text-xl font-bold text-slate-800">Free Shipping</h3>
      <p className="text-gray-500 mt-2">Free shipping on all orders over $100</p>
    </div>

    {/* Service 2 */}
    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
      <div className="text-4xl text-blue-600 mb-4 bg-white p-4 rounded-full shadow-sm">
        <RiSecurePaymentLine />
      </div>
      <h3 className="text-xl font-bold text-slate-800">Secure Payment</h3>
      <p className="text-gray-500 mt-2">100% secure payment processing</p>
    </div>

    {/* Service 3 */}
    <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
      <div className="text-4xl text-blue-600 mb-4 bg-white p-4 rounded-full shadow-sm">
        <GiReturnArrow />
      </div>
      <h3 className="text-xl font-bold text-slate-800">Easy Returns</h3>
      <p className="text-gray-500 mt-2">30 days money-back guarantee</p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Services
