import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gray-300">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-700 p-4 md:h-52">
        <Image
          src="/logoNorth.jpeg"
          alt="northlink logo"
          width={100}
          height={100}
          className="rounded-lg block  w-auto opacity-100"
        />
        <p className="text-white text-4xl font-bold px-6">NorthLink Digital</p>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col bg-white justify-center gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20 ">
          <h2
            className={" text-xl text-gray-800 md:text-3xl md:leading-normal"}
          >
            <strong>Welcome to NorthLink Digital.</strong>{" "}
            <p className="">
              We are happy to have you with us today.
            </p>{" "}
          </h2>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-white rounded-lg">
          <Image
            src="/picture.jpg"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg"
            alt="screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/picture.jpgg"
            width={400}
            height={420}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
