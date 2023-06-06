import Image from "next/image";
import Javascript from "src/app/images/javascript-original.svg";
import python from "src/app/images/python-original.svg";
import django from "src/app/images/django-svgrepo-com.svg";
import html5 from "src/app/images/html5-plain.svg";
import css from "src/app/images/css3-plain.svg";
import nextjs from "src/app/images/nextjs-icon-svgrepo-com.svg";
import react from "src/app/images/react-original.svg";
import tailwind from "src/app/images/tailwindcss-plain.svg";
import ubuntu from "src/app/images/ubuntu-plain.svg";
import figma from "src/app/images/figma-original.svg";
import vscode from "src/app/images/vscode-original.svg";
import github from "src/app/images/github-142-svgrepo-com (1).svg";

export default function Skills() {
  return (
    <div className="flex">
      <Image
        alt="javascript icon"
        width={30}
        height={30}
        src={Javascript}
      ></Image>
      <Image alt="react icon" width={30} height={30} src={react}></Image>
      <Image alt="nextjs icon" width={30} height={30} src={nextjs}></Image>
      <Image alt="python icon" width={30} height={30} src={python}></Image>
      <Image alt="django icon" width={30} height={30} src={django}></Image>
      <Image alt="html icon" width={30} height={30} src={html5}></Image>
      <Image alt="css icon" width={30} height={30} src={css}></Image>
      <Image alt="tailwind icon" width={30} height={30} src={tailwind}></Image>
      <Image alt="ubuntu icon" width={30} height={30} src={ubuntu}></Image>
      <Image alt="figma icon" width={30} height={30} src={figma}></Image>
      <Image alt="vscode icon" width={30} height={30} src={vscode}></Image>
      <Image alt="github icon" width={30} height={30} src={github}></Image>
    </div>
  );
}
