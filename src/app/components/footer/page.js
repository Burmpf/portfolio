import Link from "next/link";
import Image from "next/image";
import github from "src/app/images/github-logo.svg";
import linkedin from "src/app/images/linkedin-logo.svg";
import twitter from "src/app/images/twitter-logo.svg";
import web3 from "src/app/images/web3-profile-icon.svg";

export default function Footer() {
  return (
    <footer className=" w-full flex justify-center items-end bg-black text-gray-400">
      <p className="pr-10">&#169;2023 All Rights Reserved</p>
      <div className="flex justify-between md:place-self-center md:justify-self-end">
        <Link className="tooltip" data-tip="github" href="https://github.com/Burmpf" target="_blank"> <Image src={github} alt="github logo" height={25} width={25}></Image> </Link>
        <Link className="tooltip" data-tip="LinkedIn" href="https://www.linkedin.com/in/keyan-tabor/" target="_blank"> <Image src={linkedin} alt="github logo" height={25} width={25}></Image> </Link>
        <Link className="tooltip" data-tip="Twitter" href="https://twitter.com/git_init_keyan" target="_blank"> <Image src={twitter} alt="github logo" height={25} width={25}></Image> </Link>
        <Link className="tooltip" data-tip="Web3 Careers" href="https://web3.career/@burmpf" target="_blank"><Image src={web3} alt="web3 profile" height={25} width={25}></Image>  </Link>
      </div>
    </footer>
  );
}
