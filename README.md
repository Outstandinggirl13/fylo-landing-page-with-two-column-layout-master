# Frontend Mentor - Fylo landing page with two column layout solution

This is a solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/assets/images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [GitHub Pages](https://outstandinggirl13.github.io/fylo-landing-page-with-two-column-layout-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

1. I learned that the clamp() function can be used to create smooth and responsive layouts. I applied it throughout the project to ensure the design scaled correctly between mobile (375px) and tablet (750px) screens. For example:

```CSS
.header__logo {
  width: 5.0625rem;
  width: clamp(5.0625rem, 0rem + 21.6vw, 10.125rem);
}
```
2. I learned how to change the color of SVG elements dynamically on hover, and how to style child elements when hovering over a parent:

```HTML 
  <div class="collaboration__cta">
    <a href="" class="collaboration__cta-group">
      <p class="collaboration__cta-text">See how Fylo works</p>
      <svg class="collaboration__cta-icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true"><circle class="cta-icon-bg" cx="8" cy="8" r="6" fill="#3DA08F"/><path class="cta-icon-arrow" d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z" fill="#FFF"/></svg>
    </a>
    <hr class="collaboration__cta-divider">
  </div>
```


```CSS
.collaboration__cta:hover .collaboration__cta-text {
  cursor: pointer;
  color: var(--moderate-cyan-active);
}

.collaboration__cta:hover .cta-icon-bg {
  fill: var(--moderate-cyan-active);
}

.collaboration__cta:hover .collaboration__cta-divider {
  background-color: var(--moderate-cyan-active);
}
```

3. I used JavaScript to display a warning message when the form input is invalid:

```JS
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
```



### Useful resources

- [Font-size Clamp Generator](https://clamp.font-size.app/?config=eyJyb290IjoiMTYiLCJtaW5XaWR0aCI6IjM3NXB4IiwibWF4V2lkdGgiOiI3NTBweCIsIm1pbkZvbnRTaXplIjoiMTJweCIsIm1heEZvbnRTaXplIjoiMjRweCJ9) - This is a handy tool that helps generate responsive clamp() font-size values.

## Author

- Website - [Outstandinggirl13](https://github.com/Outstandinggirl13)
- Frontend Mentor - [@Outstandinggirl13](https://www.frontendmentor.io/profile/Outstandinggirl13)
