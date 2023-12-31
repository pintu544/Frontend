import React from 'react';

import aboutImage from '../../images/pintu.jpg';

function About() {
  return (
    <section className='about'>
      <div className='about__container'>
        <img
          className='about__image'
          src={aboutImage}
          alt='Author of the website'
        />
        <div className='about__text-container'>
          <h2 className='about__title'>About the author</h2>
          <p className='about__text'>
            Hi, my name is 
          </p>
          <p className='about__text'>
            This is my final project in the 10-month Full Stack Developer
            Bootcamp at CN by Cn, started in February 2020. During my
            learning journey I helped other students with questions related to
            course/sprints assignments and projects. The project's Frontend uses
            React and the Backend/API uses Node.js, Express.js, MongoDB,
            Mongoose, AWS. Basically, this app allows users to search
            news/articles using a public News API service.
          </p>
          <p className='about__text'>
            The CN's curriculum provided a wide range of projects based
            on the following Full Stack Development technologies: HTML5, CSS3,
            flexbox, grid layout, BEM, Media queries, transition,
            JavaScript/JSX, DOM, Debugging, Git, Git/Github, Figma, Form
            validation, OOP, Webpack, NPM, React, React components, React Hooks,
            Node.js, Express.js, Database, MongoDB, Mongoose, Microsoft Azure,
            AWS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
