'use client';

import {
  FormEvent,
  FormEventHandler,
  RefObject,
  useEffect,
  useRef,
} from 'react';
import emailjs from '@emailjs/browser';

type ButtonRef = RefObject<HTMLButtonElement> | RefObject<null>;
type InputRef = RefObject<HTMLInputElement> | RefObject<null>;
type DivRef = RefObject<HTMLDivElement> | RefObject<null>;
type FormRef = RefObject<HTMLFormElement> | RefObject<null>;

export const ContactForm = () => {
  const closeRef: ButtonRef = useRef<HTMLButtonElement>(null);
  const submitRef: InputRef = useRef<HTMLInputElement>(null);
  const successRef: DivRef = useRef<HTMLDivElement>(null);
  const errorRef: DivRef = useRef<HTMLDivElement>(null);
  const contactRef: FormRef = useRef<HTMLFormElement>(null);

  const confirmSend = () => {
    if (closeRef.current && submitRef.current) {
      closeRef.current.click();
      submitRef.current.disabled = false;
      submitRef.current.click();
      submitRef.current.disabled = true;
    }
  };

  const sendEmail: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    emailjs.sendForm('service_998jv3x', 'template_gkvwqkc', form).then(
      (result) => {
        if (successRef.current && contactRef.current) {
          console.log(result);
          successRef.current.innerHTML =
            'Thanks!  We will reply to your message within 24 hours.';
          contactRef.current.reset();
        }
      },
      (error) => {
        console.log(error);
        if (errorRef.current && contactRef.current) {
          errorRef.current.innerHTML =
            'A problem was incurred sending your message.  Please try again later.';
          contactRef.current.reset();
        }
      }
    );
  };

  useEffect(() => {
    if (process.env.EMAILJS_USER) {
      emailjs.init(process.env.EMAILJS_USER);
    }
  }, []);

  return (
    <div className='col-lg-6'>
      <div className='contact-form'>
        <form id='form' onSubmit={(e) => sendEmail(e)} ref={contactRef}>
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
            ref={submitRef}
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
                  ref={closeRef}
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
        <div id='success-message' ref={successRef}></div>
        <div id='error-message' ref={errorRef}></div>
      </div>
    </div>
  );
};
