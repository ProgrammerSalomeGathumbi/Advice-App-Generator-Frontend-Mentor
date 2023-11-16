# Frontend Mentor - Advice Generator App Solution

This is a solution to the [Advice Generator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [GitHub Repo](https://github.com/ProgrammerSalomeGathumbi/Advice-App-Generator-Frontend-Mentor)
- Live Site URL: [Vercel Deployment](https://advice-app-generator-frontend-mentor.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

How to use API's with Javascript
```
function generateAdvice() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const adviceNumberElement = document.getElementById('advice-number');
      const adviceContentElement = document.getElementById('advice-content');

```

### Continued development

I would love to improve my Javascript skills

### Author

- [Salome Gathumbi](https://www.linkedin.com/in/salome-gathumbi/)
- GitHub: [ProgrammerSalomeGathumbi](https://github.com/ProgrammerSalomeGathumbi/)
-Frontend Mentor: [Salome Gathumbi](https://www.frontendmentor.io/profile/ProgrammerSalomeGathumbi)

