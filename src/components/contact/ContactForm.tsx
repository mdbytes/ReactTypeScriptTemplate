import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { sendEmail, confirmSend } from './utils';
import { EMAILJS_USER } from '../../config/keys';

export const ContactForm = () => {
  useEffect(() => {
    emailjs.init(EMAILJS_USER);
  }, []);

  return (
    <div className='col-lg-6'>
      <div className='contact-form'>
        <form id='form' onSubmit={sendEmail}>
          <h3 className='display-4'>Contact Us</h3>
          <div className='form-group'>
            <label id='name-label' htmlFor='name'>
              Name
            </label>
            <input
              name='from_name'
              type='text'
              className='form-control'
              id='name'
              placeholder='Enter full name'
              aria-describedby='nameHelp'
            />
            <small id='nameHelp' className='form-text text-muted'>
              We&apos;ll never share your name with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label id='email-label' htmlFor='email'>
              Email address
            </label>
            <input
              name='reply_to'
              type='email'
              className='form-control'
              id='email'
              placeholder='e.g. fred@flintstones.com'
              aria-describedby='emailHelp'
              required
            />
            <small id='emailHelp' className='form-text text-muted'>
              We&apos;ll never share your email with anyone else.
            </small>
          </div>
          <div className='mb-3'>
            <label htmlFor='comments'>Message</label>
            <textarea
              name='message'
              className='form-control'
              id='comments'
              placeholder='Your message here'
              required
            />
          </div>

          <button
            id='submit-button'
            type='button'
            className='btn btn-primary rounded-pill'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
          >
            Send Message
          </button>
          <input
            id='submit'
            type='submit'
            className='btn btn-primary'
            disabled
          />
        </form>
        <div
          className='modal fade'
          id='exampleModal'
          tab-index='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog modal-dialog-centered' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='exampleModalLabel'>
                  Confirm Send
                </h5>
                <button
                  id='close-modal'
                  type='button'
                  className='close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                Click <i>Send</i> to finalize your message.
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  onClick={confirmSend}
                  type='button'
                  className='btn btn-primary'
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id='success-message'></div>
        <div id='error-message'></div>
      </div>
    </div>
  );
};
