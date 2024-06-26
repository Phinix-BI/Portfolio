import Section from "./Section";
import cartoonavtar from '../assets/cartoonavtar.jpeg';
import { useEffect, useState } from 'react';
import conf from '../conf/conf';


function About() {
    const [time, setTime] = useState(new Date());
    const [status, setStatus] = useState('Fettching Status...');

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const getStatus = async () => {
        const response = await fetch(`${conf.liveStatusUrl}api/v1/admin/get/status`, {
          method: "GET",
          headers: {
            'x-access-token': conf.liveStatusKey
          }
        });
    
        const data = await response.json();
     
        setStatus(data.status);
      };
    
      getStatus();
    }, [status]);
  
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
        <div className="flex flex-wrap mt-[2rem] md:mt-[5rem] justify-center  md:justify-evenly lg:justify-between mx-auto">
          <div className="flex justify-between items-center lg:ml-[8rem] mb-4 md:mb-0">
            <div className="max-w-[5.6rem] rounded-lg overflow-hidden">
              <img src={cartoonavtar} className="w-full" alt="avatar" />
            </div>
            <div className="ml-5 ">
                <div className="text-lg text-color-3 font-semibold">PHINIX-BI</div>
              <div className="text-md text-color-7">{status}</div>
              <div className="text-md text-green-300">
                {formattedTime}
               </div>
            </div>
          </div>
          <div className="max-w-[35rem] md:w-[20rem]  lg:w-[30rem] mt-5 md:mt-0 px-4 py-2 text-sm md:text-md">
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
