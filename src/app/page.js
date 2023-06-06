import Link from "next/link";
import Image from "next/image";
import portrait from "src/app/images/self-img.jpeg";
import Footer from "./components/footer/page";
import Skills from "./components/skills/page";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-[97vh] flex items-center justify-center">
        <div className="flex flex-col items-center ">
          <Image
            src={portrait}
            alt="portrait"
            width={300}
            height={300}
            className="rounded-full"
          />
          <h1 className=" leading-[1.2] text-9xl bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text">
            Keyan Tabor
          </h1>
          <br />
          <h2 className="text-4xl bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text">
            Full-Stack Software Developer
          </h2>
          {/* <h2 className="text-xl">Portfolio by Keyan Tabor</h2> */}
          <br />
          <Skills />
          <br />
          <div className="flex justify-center space-x-8 ">
            <h3>
              <Link
                href="/components/projects"
                className=" hover:bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text bg-white"
              >
                Projects
              </Link>
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
