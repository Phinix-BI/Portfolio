
import Section from './Section';
import { Tools as myTools} from '../constants';
import GitHubCalendar from "react-github-calendar";

function Tools() {
    const theme = {
        light: ['#858DFF', '#AC6AFF', '#FFC876', '#FF776F', '#7ADB78'],
        dark: ['#161b22', '#0a3069', '#0969da', '#0969da', '#b6e3ff']
    }
  return (
    <Section className="pt-[5rem]  pb-[4rem] lg:pb-[5rem] -mt-[5rem] " crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="tools">
    <div className='container'> 
      <div className='my-4'>
                
                <div className="my-10 text-center mx-auto justify-center">
                   <div className="h3 font-semibold"><span className="text-color-1"> Tools </span>I Use </div>
               </div>
               <div className="flex justify-center">
                   <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                       { myTools.map((skill) => (
                            <div key={skill.title} className="block rounded-xl   border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                                   <div className="mt-4 font-bold text-white flex text-center justify-center">
                                         <div><i className={`${skill.className} text-lg lg:text-3xl my-auto`} /></div>
                                           <div className='my-auto ml-3 text-lg lg:text-2xl'>{skill.title}</div>
                                    </div>
                               </div>
                       ))}
                   </div>
               </div>
        
           </div>

           <div>
               <div className="my-10 text-center mx-auto justify-center">
                   <div className="h3 font-semibold">Days<span className="text-color-1"> I Code</span> </div>
               </div>
               <div className='justify-center text-center flex '>
                   <div className="w-full sm:w-auto">
                       <GitHubCalendar username="phinix-bi" blockSize={10} blockRadius={3} blockMargin={5} theme={theme}  fontSize={12} />
                   </div>
               </div>
           </div>
     </div>
    </Section>
  )
}

export default Tools