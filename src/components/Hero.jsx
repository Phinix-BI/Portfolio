import { curve, heroBackground } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { useRef } from "react";
import Type from "./Type";
import programmer from "../assets/programmer.webp";
import q1 from "../assets/q1.png";
import q2 from "../assets/q2.png";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative flex flex-col lg:flex-row items-center justify-center" ref={parallaxRef}>
        <div className="max-w-[60rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] lg:mr-10 text-center md:text-left">
          <div className="h2 mb-6">
            <span className="text-color-1">Hi</span>... There !
            <div>
              I&apos;m&nbsp;
              <span className="inline-block relative">Biswajit Dey 
                <img src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </div>
            <div className="mt-4 text-color-1 mr-5 h5  lg:h3">
              <Type />
            </div>
          </div>
          <div className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 hidden lg:block ">
            <div className="flex">
              <div><img src={q1} width={20} /></div> 
              <div className="mx-2 my-2 font-bold text-sm md:text-lg">
                <p>I don&apos;t need a keyboard; I just type code directly</p>
                <div className="flex">into the air. Call me the airbender of programming.
                  <div className="ml-2"><img src={q2} width={20} /></div>
                </div>
              </div>
            </div>
          </div>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>

        {/* Image Section */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="hidden md:block aspect-[33/40] rounded-b-[0.9rem] md:aspect-[688/650] lg:aspect-[1024/500]">
                <img
                  src={programmer}
                  className="w-1/2 mx-auto scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[2%] lg:-translate-y-[23%]"
                  width={1024}
                  height={400}
                  alt="AI"
                />
                <Gradient />
              </div>
            </div>
          </div>
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
