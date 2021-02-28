import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('contactForm');

  if (state.succeeded) {
    return <div>Thank you for contacting me. I will be intouch very soon!</div>;
  }

  return (
    <div className='bg-contact text-gray-100 min-h-screen py-20'>
      <div className='max-w-xl mx-auto px-6'>
        <div>
          <h1 className='text-center uppercase md:text-3xl font-semibold tracking-widest mb-3'>
            Contact
          </h1>
          <div className='h-1 bg-gray-50 w-16 flex max-w-xs mx-auto'></div>
        </div>
        <p className='py-10 text-secondary text-center'>
          Have a question or want to work together?
        </p>
        <div>
          <form onSubmit={handleSubmit} className='space-y-1 text-gray-300'>
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
                className='w-full p-2 bg-input'
                placeholder='Your message'
                name='Message'
                id=''
                cols='30'
                rows='10'></textarea>
              <span className='text-red-200 text-xs'>
                <ValidationError prefix='Message' field='Message' errors={state.errors} />
              </span>
            </div>
            <div className='flex justify-end '>
              <button
                disabled={state.submitting}
                className='border-2 px-6 tracking-wider hover:bg-secondary hover:border-secondary uppercase py-2 transition duration-500 ease-in-out'>
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
