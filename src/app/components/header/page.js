import Image from "next/image";
import Link from "next/link";
import about from "src/app/images/about-me-icon.svg";
import skills from "src/app/images/skills-icon.svg";
import projecticon from "src/app/images/project-icon.svg";
import contact from "src/app/images/contact-icon.svg";

import github from "src/app/images/github-logo.svg";
import linkedin from "src/app/images/linkedin-logo.svg";
import twitter from "src/app/images/twitter-logo.svg";

export default function Header() {
  return (
    <div className=" z-20 w-full fixed  flex justify-left">
      <ul class="  menu menu-collapse  bg-base-200/75 rounded-box mt-6">
        <li>
          <a href="#landing" class="tooltip tooltip-right" data-tip="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#about" class="tooltip tooltip-right" data-tip="About Me">
            <Image alt="about me" width={20} height={20} src={about} />
          </a>
        </li>
        <li>
          <a href="#skills" class="tooltip tooltip-right" data-tip="Skills">
            <Image alt="about me" width={20} height={20} src={skills} />
          </a>
        </li>
        <li>
          <a href="#projects" class="tooltip tooltip-right" data-tip="Projects">
            <Image alt="about me" width={20} height={20} src={projecticon} />
          </a>
        </li>
        <li>
          <a
            class="tooltip tooltip-right"
            data-tip="Contact"
            href="mailto:keyantabor98@gmail.com"
          >
            <Image alt="about me" width={20} height={20} src={contact} />
          </a>
        </li>
      </ul>
    </div>
  );
}
