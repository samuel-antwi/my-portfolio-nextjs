import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm');
  const [characters, setCharacters] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setCharacters(3000 - message.length);
  }, [message]);

  if (state.succeeded) {
    return <div>Thank you for contacting me. I will be intouch very soon!</div>;
  }

  return (
    <div className='contact font-raleway bg-contact text-gray-100  py-20'>
      <div className='max-w-xl mx-auto xs:px-6 px-4'>
        <div>
          <h1 className='text-center uppercase md:text-3xl text-xl font-semibold tracking-widest mb-3'>
            Contact
          </h1>
          <div className='h-1 bg-gray-50 w-16 flex max-w-xs mx-auto'></div>
        </div>
        <p className='py-10 text-secondary text-center'>
          Have a question or want to work together?
        </p>
        <div>
          <form onSubmit={handleSubmit} className='space-y-1 mb-10 text-gray-300'>
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
                <ValidationError prefix='Message' field='Message' errors={state.errors} />
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
            <div className='flex justify-between '>
              <p className='text-gray-400 text-sm'>{characters} / 3000</p>
              <button
                disabled={state.submitting}
                className='border-2 text-sm tracking-wider hover:bg-secondary hover:border-secondary uppercase xs:py-2 py-1 px-3  xs:px-6 transition duration-500 ease-in-out'>
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
