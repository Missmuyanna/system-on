import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pcexmfu', 'template_m66rm0g', e.target, '_9YBKXo9RiFxscgBT')
      .then((result) => {
        setStatus('Mensaje enviado');
      }, (error) => {
        setStatus('Error al enviar el mensaje');
      });
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Nombre:</label>
      <input type="text" name="from_name" required />
      <label>Email:</label>
      <input type="email" name="reply_to" required />
      <label>Mensaje:</label>
      <textarea name="message" required />
      <button type="submit">Enviar</button>
      {status && <p>{status}</p>} {/* Mensaje de estado */}
    </form>
  );
}

export default ContactForm;