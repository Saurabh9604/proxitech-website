function handleSubmit(e){
  e.preventDefault();
  alert('Thanks! Your message was recorded locally. To receive messages in email, connect this form to a service (Google Forms, Formspree, or a backend).');
  e.target.reset();
  return false;
}
