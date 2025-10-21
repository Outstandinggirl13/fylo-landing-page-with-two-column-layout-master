const form1 = document.querySelector('.accessibility__form');
const input1 = form1.querySelector('.accessibility__input');
const error1 = document.querySelector('.accessibility__form-error'); 

form1.addEventListener('submit', e => {
  if (!input1.checkValidity()) {
    e.preventDefault();
    error1.style.display = 'block';
    input1.style.borderColor = '#D5869C';
  } else {
    error1.style.display = 'none';
    input1.style.borderColor = '#585989';
  }
});

const form2 = document.querySelector('.signup__form-inner');
const input2 = form2.querySelector('.signup__input');
const error2 = document.querySelector('.signup__form-error'); 

form2.addEventListener('submit', e => {
  if (!input2.checkValidity()) {
    e.preventDefault();
    error2.style.display = 'block';
    input2.style.borderColor = '#D5869C';
    form2.style.gap = "2px";
  } else {
    error2.style.display = 'none';
    input2.style.borderColor = '#585989';
    form2.style.gap = "0.5625rem";
  }
});