import emailjs from '@emailjs/browser'

export const confirmSend = (e) => {
  document.querySelector('#close-modal').click()
  document.querySelector('#submit').disabled = false
  document.querySelector('#submit').click()
  document.querySelector('#submit').disabled = true
}

export const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm('service_998jv3x', 'template_gkvwqkc', e.target).then(
    (result) => {
      document.querySelector('#success-message').innerHTML =
        'Thanks!  We will reply to your message within 24 hours.'
      document.getElementById('form').reset()
    },
    (error) => {
      document.querySelector('#error-message').innerHTML =
        'A problem was incurred sending your message.  Please try again later.'
      document.getElementById('form').reset()
    }
  )
}
