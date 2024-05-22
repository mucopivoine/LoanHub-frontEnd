// import emailjs from '@emailjs/browser';

// const create = () =>{
// const contactForm = document.getElementById('form-name'),
//       contactMessage=document.getElementById('contact-message')
//       const sendEmail = (e) =>{
//         e.preventDefault()
// /* serviceid templateid #form publickey */
// emailjs.sendForm('service_7wqce95','template_ha0zy7i','/form-name','NLDDnnADhpi9PL0KY')
//      .then(() =>{
//       contactMessage.textContent ='Message sent successfully :white_check_mark:.'
//       setTimeout(() =>{
//             contactMessage.textContent= ''
//       }, 5000)
//        contactForm.reset()
//     }, ()=>{
//       contactMessage.textContent ='Message not sent (servie error). :x:'
//      })
// }
//       contactForm.addEventListener('submit', sendEmail);
// }
// export default create;