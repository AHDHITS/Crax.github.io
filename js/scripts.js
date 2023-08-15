const form = document.querySelector('.contactForm');

function sendMsg(e){
  e.preventDefault();

      const name = document.querySelector('#name'),
            email = document.querySelector('#email'),
            msg = document.querySelector('#message'),

  Email.send({
      SecureToken : " 59b94b0f-927d-4a24-afdc-2e99de1ba02b",
      To : 'ahdhits@gmail.com',
      From : email.Value,
      Subject : "Contact Form",
      Body : msg.Value,
  }).then(
    message => alert(message)
  );

form.addEventListener('submit', sendMsg);
