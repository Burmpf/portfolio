import Link from "next/link";
import Image from "next/image";
import portrait from "src/app/images/self-img.jpeg";


export default function Landing() {
    return (
          <div id="landing" className="w-screen min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Image
                src={portrait}
                alt="portrait"
                width={500}
                height={500}
                className="rounded-[9rem] sm: w-[250] h-[250]"
              />
              <div className="flex flex-col  items-center">
              <h1 className=" ml-5 leading-[1.2] text-9xl bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text">
                Keyan Tabor
              </h1>
              <br />
              <h2 className="text-4xl bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text">
                Full-Stack Software Developer
              </h2>
              <div className="flex justify-center space-x-8 ">
                <h3>
                  <Link
                    href="#about"
                    className=" mr-4 hover:bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text bg-white"
                  >
                    About
                  </Link>
                  <Link
                    href="#skills"
                    className="mr-4 hover:bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text bg-white"
                  >
                    Skills
                  </Link>
                  <Link
                    href="#projects"
                    className="mr-4 hover:bg-gradient-to-r bg-clip-text text-transparent from-red-500 via-blue-500 to-green-500 animate-text bg-white"
                  >
                    Projects
                  </Link>
                </h3>
                </div>
              </div>
            </div>
          </div>
    )
}