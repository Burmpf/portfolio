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
    <>
    <div id="skills" className="h-screen w-full items-center pt-20">
      <h1 className="text-5xl text-center font-bold pb-20 ">Skills</h1>
      <div className="grid grid-row-3 grid-cols-4 gap-10 place-items-center">

        <div className="flex-col">
          <Image alt="javascript icon" width={100} height={100} src={Javascript}></Image>
          <figcaption className="text-center">Javascript</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="react icon" width={100} height={100} src={react}></Image>
          <figcaption className="text-center">React</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="nextjs icon" width={100} height={100} src={nextjs}></Image>
          <figcaption className="text-center">Nextjs</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="python icon" width={100} height={100} src={python}></Image>
          <figcaption className="text-center">Python</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="django icon" width={100} height={100} src={django}></Image>
          <figcaption className="text-center">Django</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="html icon" width={100} height={100} src={html5}></Image>
          <figcaption className="text-center">HTML</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="css icon" width={100} height={100} src={css}></Image>
          <figcaption className="text-center">CSS</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="tailwind icon" width={100} height={100} src={tailwind}></Image>
          <figcaption className="text-center">Tailwind</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="ubuntu icon" width={100} height={100} src={ubuntu}></Image>
          <figcaption className="text-center">Ubuntu</figcaption>
        </div>


        <div className="flex-col">
          <Image alt="figma icon" width={100} height={100} src={figma}></Image>
          <figcaption className="text-center">Figma</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="vscode icon" width={100} height={100} src={vscode}></Image>
          <figcaption className="text-center">VSCode</figcaption>
        </div>

        <div className="flex-col">
          <Image alt="github icon" width={100} height={100} src={github}></Image>
          <figcaption className="text-center">Github</figcaption>
        </div>
      </div>
    </div>
    </>
  );
}
