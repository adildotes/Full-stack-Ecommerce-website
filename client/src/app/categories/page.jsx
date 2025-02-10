import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="lg:px-20 px-8 py-10">
      <div>
        <h1 className="font-semibold text-xl">All Categories</h1>
      </div>

      {/* iPhone Category */}
      <div className="pt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <Image
            src="/casuals.jpg"
            width="1000"
            height="1000"
            alt="iPhone"
            className="rounded-xl lg:max-w-[400px] m-auto"
          />
        </div>
        <div>
          <h1 className="font-semibold text-xl">iPhones</h1>
          <h2 className="text-sm text-justify">
            Apple's iPhones are known for their premium design, powerful
            performance, and seamless integration with the iOS ecosystem. With
            cutting-edge features, high-resolution displays, and industry-leading
            cameras, iPhones offer an unparalleled user experience.
          </h2>
          <div className="pt-5">
            <Link
              href={"/categories/iphone"}
              className="bg-black py-1 px-5 w-fit text-white hover:font-semibold duration-200 rounded-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* Samsung Category */}
      <div className="pt-10 grid gap-10 lg:grid-cols-2">
        <div className="lg:order-2 order-1">
          <Image
            src="/tshirt.jpg"
            width="1000"
            height="1000"
            alt="Samsung"
            className="rounded-xl lg:max-w-[400px] m-auto"
          />
        </div>
        <div className="lg:order-1 order-2">
          <h1 className="font-semibold text-xl">Samsung Phones</h1>
          <h2 className="text-sm text-justify">
            Samsung's smartphones range from flagship Galaxy S and Note series to
            affordable Galaxy A models. Known for vibrant AMOLED displays,
            high-quality cameras, and innovative technology, Samsung phones cater
            to all users.
          </h2>
          <div className="pt-5">
            <Link
              href={"/categories/samsung"}
              className="bg-black py-1 px-5 w-fit text-white hover:font-semibold duration-200 rounded-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* Google Pixel Category */}
      <div className="pt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <Image
            src="/hero1.jpg"
            width="1000"
            height="1000"
            alt="Google Pixel"
            className="rounded-xl lg:max-w-[400px] m-auto"
          />
        </div>
        <div>
          <h1 className="font-semibold text-xl">Google Pixel</h1>
          <h2 className="text-sm text-justify">
            Google's Pixel smartphones are known for their stock Android
            experience, AI-powered cameras, and timely software updates. They
            provide excellent photography capabilities and smooth performance.
          </h2>
          <div className="pt-5">
            <Link
              href={"/categories/google-pixel"}
              className="bg-black py-1 px-5 w-fit text-white hover:font-semibold duration-200 rounded-xl"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
