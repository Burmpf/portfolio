import Image from "next/image";
import whitandi from "src/app/images/me-whit.jpg";

export default function About() {
  return (
    <>
      <div id="about" className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src={whitandi}
            height={500}
            width={500}
            alt="picture of my wife and I"
            className=" rounded-lg sm:w-[250]:h-[250]"
          ></Image>
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">
              My name is Keyan Tabor, and I am a full-stack software developer.
              Directly after high school, I enlisted in the United States Marine
              Corps, serving as an 0311 Infantry Rifleman. This position not
              only allowed me to explore and appreciate a variety of global
              cultures but also offered me the chance to work with and lead
              teams within a large organizational structure. I was entrusted
              with the responsibility of maintaining and ensuring accountability
              for equipment and weapons worth millions of dollars. Following my
              discharge from the Marine Corps, I focused on furthering my
              education. I began with college studies and an internship in
              industrial mechanics before transitioning into a field that truly
              ignited my passion: software development. This discipline has
              enabled me to contribute significantly to areas I&apos;m fervent about
              and has redefined my professional path.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
