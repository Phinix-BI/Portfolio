import { projectsData } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Arrow from "../assets/svg/Arrow";


function Project() {

 

  return (
    <Section className="pt-[10rem] pb-[5rem] -mt-[5rem] " crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="projects">
      <div className="container relative z-2">
        
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="The Projects That Helped "
          subTitle="Me Grow..."
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {projectsData.map((item) => (
            
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] " >
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="flex items-center mt-auto">
                <a href={item.githubLink} target="_blank" >

                  <img
                    src="./ProjectImages/githubLogo.svg"
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  </a>

                 
                  {
                    item.liveUrl && (
                      <div className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider flex">
                        {item.ongoing && (
                          <div className="mr-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffbe6f"
                            strokeWidth="2" // Change 'stroke-width' to 'strokeWidth'
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-loader-circle animate-[spin_2s_linear_infinite]"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                          </svg>

                          </div>
                        )}
                        <a href={item.liveUrl} target="_blank">
                          <img
                            src="./ProjectImages/link.png"
                            width={26}
                            height={26}
                            alt={item.title}
                          />
                        </a>
                      </div>
                    )
                  }

                  {item.Demo && (
                    
                    <div className="ml-auto font-code text-md font-bold text-n-1 uppercase tracking-wider flex">
                      <a href={item.Demo} target="_blank">
                        <div className="flex">Demo <Arrow /></div>
                      </a>
                    </div>
                  )}
                  
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-20 transition-opacity ">
                  {item.imageUrl && (
                     <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
               </div>
              </div>
     

              <ClipPath />
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}

export default Project;