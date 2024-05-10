import Section from "./Section";
import cartoonavtar from '../assets/cartoonavtar.jpeg';
import { useEffect, useState } from 'react';

function About() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const options = {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
  
    const formattedTime = new Intl.DateTimeFormat('en-IN', options).format(time);

  return (
    <Section className="pt-[10rem] -mt-[5rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="about">
      <div className="container mx-auto md:mb-[5rem]">
        <div className="text-center mx-auto justify-center">
          <h2 className="h2 font-semibold"> Know Who <span className="text-color-1">I&apos;M </span></h2>
        </div>
        <div className="flex flex-wrap mt-[2rem] md:mt-[5rem] justify-center  lg:justify-between mx-auto">
          <div className="flex justify-between items-center lg:ml-[8rem] mb-4 md:mb-0">
            <div className="max-w-[5.6rem] rounded-lg overflow-hidden">
              <img src={cartoonavtar} className="w-full" alt="avatar" />
            </div>
            <div className="ml-5 ">
                <div className="text-lg text-color-5">Biswajit Dey</div>
              <div className="text-md text-color-3">Online</div>
              <div className="text-md text-color-4">
                {formattedTime}
               </div>
            </div>
          </div>
          <div className="max-w-[35rem] mt-5 md:mt-0 px-4 py-2 text-sm md:text-md">
            <p className="font-medium leading-7 text-gray-400">
              <span className="text-color-1 text-md md:text-lg font-semibold">Hey there,&nbsp;</span>
              I&apos;m Biswajit Dey, a 19 year old  &nbsp;<span className="text-color-1 text-md md:text-lg font-semibold">full stack developer</span> from India, currently studying BCA. I&apos;m passionate about crafting cool projects, writing engaging content, exploring freelancing and  <span className="text-color-1 text-md md:text-lg font-semibold">open source contributions </span>and always eager to learn and grow.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
