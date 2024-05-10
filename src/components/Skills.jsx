
import Section from './Section';
import {  skills } from '../constants';

function Skills() {

    
  return (
    <Section className="pt-[10rem]  pb-[3rem] lg:pb-[5rem] -mt-[5rem] " crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="skills">
        <div className='container'>
            <div>
                <div className="text-center mx-auto justify-center">
                     <div className="h2 font-semibold"> Profesional <span className="text-color-1">Skills </span></div>
                </div>
                
                <div className="flex justify-center">
                    <div className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                     { skills.map((skill) => (
                            <div key={skill.id} className="block rounded-xl   border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                                <div className="mt-4 font-bold text-white flex text-center justify-center">
                                    <div><i className={`${skill.className} text-lg lg:text-3xl my-auto`} /></div>
                                    <div className='my-auto ml-3 text-lg lg:text-2xl'>{skill.title}</div>
                                </div>
                            </div>
                         ))} 
                            
                    </div>
                  
                    </div>
             </div>
          
                
        </div>
    </Section>
  )
}

export default Skills