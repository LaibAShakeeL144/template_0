import Link from "next/link";
import Image from "next/image";
export default function NewArrivalSection() {
  return (
    <div className="bg-gray-100 py-12 px-6 max-w-full overflow-hidden">
      {/* Section Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-screen-xl mx-auto">
        {/* Left Side - Image */}
        <div className="w-full lg:w-10/12 max-w-4xl">
          <Image
            src="/images/Asgaard sofa 1.png"
            alt="Asgard Sofa"
            width={800} // Set appropriate width
            height={600} // Set appropriate height
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <p className="mt-4 text-xl text-gray-500">New Arrival</p>
          <h2 className="text-5xl font-semibold text-gray-800">Asgaard Sofa</h2>

          {/* Button */}
          <Link href="/SingleProductPage">
            <button className="mt-6 py-2 px-10 border-2  border-black text-black bg-transparent hover:bg-black hover:text-white transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
