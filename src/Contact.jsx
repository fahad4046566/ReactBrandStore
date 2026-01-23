import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect } from "react";
const Contact = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <section className="py-20 px-5 md:px-20 bg-white">
      <div className="max-w-300 mx-auto">
        {/* Header Text */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Phone</h4>
                <p className="text-gray-600">+923329585581</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Email</h4>
                <p className="text-gray-600">fahad85581@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="bg-blue-100 p-4 rounded-lg text-blue-600 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800">Office</h4>
                <p className="text-gray-600">BrandStore Punjab Pakistan</p>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3465.986377100863!2d72.53051807544676!3d29.691174635222414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDQxJzI4LjIiTiA3MsKwMzEnNTkuMSJF!5e0!3m2!1sen!2s!4v1768724992225!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <form
              className="space-y-6"
              action="https://formspree.io/f/xreeplvk"
              method="POST"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="username" // Zaroori hai
                    required // Khali submit na ho
                    placeholder="Enter Your Full Name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" // Zaroori hai
                    required
                    placeholder="Enter Your Email"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject" // Zaroori hai
                  placeholder="How can we help?"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message" // Zaroori hai
                  required
                  placeholder="Your message here..."
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit" // Zaroori hai
                className="hover:cursor-pointer w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
