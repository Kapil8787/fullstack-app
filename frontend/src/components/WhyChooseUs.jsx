import roiIcon from "../assets/icons/roi.svg";
import designIcon from "../assets/icons/design.svg";
import marketingIcon from "../assets/icons/marketing.svg";

import img1 from "../assets/images/choose1.svg";
import img2 from "../assets/images/choose2.svg";
import img3 from "../assets/images/choose3.svg";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
        </div>

        {/* ICON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24">
          
          {/* CARD */}
          <div>
            <img src={roiIcon} className="mx-auto h-12 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Potential ROI</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Maximize your investment with strategic planning and market insight.
            </p>
          </div>

          <div>
            <img src={designIcon} className="mx-auto h-12 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Design</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Modern, professional design that attracts the right buyers.
            </p>
          </div>

          <div>
            <img src={marketingIcon} className="mx-auto h-12 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Marketing</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Targeted marketing strategies to ensure maximum visibility.
            </p>
          </div>

        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

          {/* IMAGE 1 */}
          <div className="relative">
            <img src={img1} className="rounded-lg shadow-lg" />
            <span className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500"></span>
          </div>

          {/* IMAGE 2 */}
          <div className="relative mt-10 md:mt-0">
            <img src={img2} className="rounded-lg shadow-lg" />
            <span className="absolute -top-4 -right-4 w-10 h-10 bg-blue-600"></span>
          </div>

          {/* IMAGE 3 */}
          <div className="relative">
            <img src={img3} className="rounded-lg shadow-lg" />
            <span className="absolute -bottom-4 -right-4 w-8 h-8 bg-orange-500"></span>
          </div>

        </div>

      </div>
    </section>
  );
}
