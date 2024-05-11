import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Section from './Section';
import conf from '../conf/conf';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async(e) => {

        e.preventDefault();

        const form = await document.forms['formName']

        setName('');
        setEmail('');
        setMessage('');

        const scriptURL = conf.gsheetUrl;
       
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
           
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
        .finally(() => {
            
            console.log('Form submitted');
        })

        
    }

  return (
    <Section className="pt-[8rem] pb-[1rem] lg:pb-[5rem] -mt-[5rem] " crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="contact">
        <div className='container relative z-2'>

            <div>
                <div className="text-center mx-auto justify-center">
                    <div className="h2 font-semibold"> Contact <span className="text-color-1">Me </span></div>
               </div>
               <div className='flex flex-col md:flex-row justify-between mx-auto md:px-10 mt-[3rem]'>
                    <div className='border rounded-xl overflow-hidden mb-5 md:mb-0  max-w-[450px] lg:w-[450px] w-auto max-h-[410px] lg:h-[410px] h-[250px]  opacity-90'>
                        
                        {/* map */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14708.136601984617!2d88.3919015!3d22.838226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715307150018!5m2!1sen!2sin" width="100%" height="100%"   className='outline-0 focus:ring-0' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-full md:w-1/2  '>
                        {/* contact */}
                        <form name='formName'>
                            <div>
                                <Input type = "text"  name="name" placeholder="Name" id="UserName" title="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                                <Input type = "email" name="email" placeholder="Email" id="UserEmail" title="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                              
                                <textarea id="message" name="Message" value={message} onChange={(e)=> setMessage(e.target.value)} rows="7" className="block outline-0 focus:ring-0 focus:ring-grey-400  p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Write your thoughts here..."></textarea>
                               <div className='justify-end flex'> <Button white className="mt-4 md:mt-5" onClick={handleSubmit} >Submit</Button></div>
                            </div>
                        </form>

                    </div>
               </div>
            </div>
         </div>
    </Section>
  )
}

export default Contact