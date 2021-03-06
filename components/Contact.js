import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm');
  const [characters, setCharacters] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  useEffect(() => {
    setCharacters(500 - message.length);
  }, [message]);

  useEffect(() => {
    if (state.succeeded) return router.push('/thankyou');
  }, [state]);

  return (
    <div className='contact font-raleway bg-contact text-gray-100  py-20'>
      <div className='max-w-xl mx-auto xs:px-6 px-4'>
        <div data-aos='slide-right' data-aos-duration='1000'>
          <h1 className='text-center uppercase md:text-3xl text-xl font-semibold tracking-widest mb-3'>
            Contact
          </h1>
          <div className='h-1 bg-gray-50 w-16 flex max-w-xs mx-auto'></div>
        </div>
        <p className='py-10 text-lg tracking-wider text-gray-300 text-center'>
          Have a question or want to work together?
        </p>
        <div>
          <form onSubmit={handleSubmit} className=' mb-10 text-gray-300'>
            <div className='space-y-2' data-aos='slide-left' data-aos-duration='2000'>
              <div>
                <input className='w-full p-2 bg-input' placeholder='Name' type='text' name='Name' />
                <span className='text-red-200 text-xs'>
                  <ValidationError prefix='Name' field='Name' errors={state.errors} />
                </span>
              </div>
              <div>
                <input
                  className='w-full p-2 bg-input'
                  placeholder='Enter email'
                  type='text'
                  name='Email'
                />
                <span className='text-red-200 text-xs'>
                  <ValidationError prefix='Email' field='Email' errors={state.errors} />
                </span>
              </div>
              <div>
                <textarea
                  vocab={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full p-2 bg-input'
                  placeholder='Your message'
                  name='Message'
                  cols='30'
                  rows='10'></textarea>
                <span className='text-red-200 text-xs'>
                  <ValidationError prefix='Message' field='Message' errors={state.errors} />
                </span>
              </div>
            </div>
            <div className='flex justify-between '>
              <p data-aos='slide-right' data-aos-duration='2000' className='text-gray-400 text-sm'>
                {characters} / 500
              </p>
              <button
                data-aos='slide-left'
                data-aos-duration='2000'
                type='submit'
                aria-label='Submit'
                disabled={state.submitting}
                className='border-2 border-secondary text-sm tracking-wider hover:text-gray-900 font-medium hover:bg-secondary hover:border-secondary uppercase xs:py-2 py-1 px-3  xs:px-6 transition duration-500 ease-in-out'>
                {state.submitting ? ' Submiting' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
