import Link from "next/link";
import Image from "next/image";
import github from "src/app/images/github-logo.svg";
import linkedin from "src/app/images/linkedin-logo.svg";
import twitter from "src/app/images/twitter-logo.svg";

export default function Footer() {
  return (
    <footer className="  w-full flex justify-center items-end bg-black text-gray-400">
      <p className="pr-10">&#169;2023 All Rights Reserved</p>
      <div className="flex justify-between md:place-self-center md:justify-self-end">
        <Link href="https://github.com/Burmpf" target="_blank"> <Image src={github} alt="github logo" height={25} width={25}></Image> </Link>
        <Link href="https://www.linkedin.com/in/keyan-tabor/" target="_blank"> <Image src={linkedin} alt="github logo" height={25} width={25}></Image> </Link>
        <Link href="https://twitter.com/git_init_keyan" target="_blank"> <Image src={twitter} alt="github logo" height={25} width={25}></Image> </Link>
      </div>
    </footer>
  );
}
