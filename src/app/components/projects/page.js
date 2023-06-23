import Image from "next/image";
import openimg from "src/app/images/openimg-screenshot.png";
import targetpractice from "src/app/images/target-practice-screenshot.png";
import ironjourney from "src/app/images/iron-journey-logo.png";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <div id="projects" className="w-full h-screen">
        <h1 className="text-5xl flex justify-center pb-10">
          Projects
        </h1>


    <div className="flex flex-col justify-center">
        <div className="card w-96 bg-base-100 shadow-xl mr-5">
          <figure>
            <Image alt="project 1" src={openimg} height={500} width={500} ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">OpenImg</h2>
            <p>A project using OpenAI Image generation api to showcase our skills creating a full-stack Javascript application</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"><Link href="https://openimg.netlify.app/" target="_blank" >Visit</Link></button>
            </div>
          </div>
        </div>


        <div className="card w-96 bg-base-100 shadow-xl mr-5">
          <figure>
            <Image alt="project 1" src={targetpractice} height={500} width={500} ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Target Practice</h2>
            <p>One of the first projects I worked on, this site is a recreation of the popular game &ldquo;Duck Hunt&rdquo; written in raw JavaScript</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link href="https://cf201-team-black.github.io/target-practice/" target="_blank" >Visit</Link></button>
            </div>
          </div>
        </div>


        <div className="card w-96 bg-base-100 shadow-xl mr-5">
          <figure>
            <Image alt="project 1" src={ironjourney} height={500} width={500} ></Image>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Iron Journey</h2>
            <p>My current project I am working on solo. It is a comprehensive wokrout tracking app that allows you to track all the important details of your workout and statistics over time.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Coming Soon</button>
            </div>
          </div>
        </div>
        </div>
        

      </div>
    </main>
  );
}
