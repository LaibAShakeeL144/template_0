import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Search } from "lucide-react";

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo */}
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src="/images/minilogo.png"
                alt="Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>

            {/* Shop Heading */}
            <h1 className="text-4xl font-bold text-gray-900">Blog</h1>

            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>Home</span>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-900 h-3 w-3 text-xs"
              />
              <span>Blog</span>
            </p>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroShop.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none opacity-30"
          />
        </div>
      </div>

      <div className="container text-black mx-auto px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-[60%] space-y-8">
            <article className="bg-white rounded-lg overflow-hidden">
              <Image
                src="/images/blg1.png"
                alt="Laptop and notepad on wooden desk"
                width={800}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>Admin</span>
                  <span>14 Oct 2022</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Wood</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Going all-in with millennial design
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/Shop"
                  className="text-lg text-black inline-block relative"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden">
              <Image
                src="/images/blg2.png"
                alt="Person writing on paper"
                width={800}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>Admin</span>
                  <span>14 Oct 2022</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    Handmade
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Exploring new ways of decorating
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/Shop"
                  className="text-lg text-black inline-block relative"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
                </a>
              </div>
            </article>

            <article className="bg-white rounded-lg overflow-hidden">
              <Image
                src="/images/blg3.png"
                alt="Coffee and laptop on desk"
                width={800}
                height={400}
                className="w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>Admin</span>
                  <span>14 Oct 2022</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">Wood</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Handmade pieces that took time to make
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="/Shop"
                  className="text-lg text-black inline-block relative"
                >
                  Read More
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform translate-y-2"></span>
                </a>
              </div>
            </article>
          </main>

          <aside className="lg:w-[25%] space-y-8">
            <div className="flex justify-start mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-4 pr-10 py-2 rounded-md border border-black"
                />
                <Search className="absolute right-3 top-2.5 text-gray-900 w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-6">
              <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
              <div className="space-y-4">
                <a className="flex gap-4 hover:bg-gray-50">
                  <Image
                    src="/images/blg5 (1).png"
                    alt="Laptop and notepad"
                    width={60}
                    height={60}
                    className="object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">
                      Going all-in with millennial design
                    </h4>
                    <p className="text-sm text-gray-500">03 Aug 2022</p>
                  </div>
                </a>
                {/* Repeat for other images */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
