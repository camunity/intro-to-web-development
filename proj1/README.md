# CMP 464 – Project 1

**Submission Type:** Individual

**Grading:** Letter Grade

**Topics:** Command Line, Git, React (Components, State, Props, JSX), Javascript, CSS

## Rationale

We've now built several functional React application demonstrating the React fundamentals. Now that we've learned a bit about routing using React-Router your next goal is to build a multi-page application of your own. 

## Aims and Outcomes 
### Aims
This project is designed to test your knowledge of React fundamentals and design a portfolio site of your own. Your application should render multiple pages, and use different common React components. 

### Specific Learning Outcomes
By the end of this homework, you will have built your own personal React application. You will render multiple components and create the logic to render and navigate through multiple pages using React-Router.


## Set Up Procedures
0) You should already have a repository named something like: `yourusername.github.io` due to HW1
1) You should navigate to wherever you have that repository saved and work from that folder
2) If you don't remember where you have that folder saved, you can do a fresh `git clone` to redownload it.
3) You MUST create a new git branch `development` to use during this project (you can create others if you'd like) 
4) Make changes to your project using the development branch and only commit to master when things are working

## What Are We Building? Application Requirements
You are building out a portfolio site in React. This site will have the following pages: 
Home, About Me, Projects, and Contact Me. 

I will provide a brief breakdown of the REQUIRED elements on each page:

Home: Should display at least your name, an image (of yourself or anything you want), and some sort of animation

About Me: Should include a well written paragraph about yourself, and a link to download your resume or CV.

Projects: Should display a collection of clickable elements that navigate to a project subpage
- Project Subpage: Should have the name of the project, a featured image or gif, a brief description of the technologies you used, and a link to the github repo or live URL for the project if you have one.

Contact Me: Should have your contact information, and render a form for folks to fill out their name, email, and a short message to you. (the form onSubmit doesn't have to actually send an email but it should at least send an alert to the user that says, "Hey {user's name} your message sent successfully!)


### Component Hierarchy

I will leave it up to you to determine how best to structure the site components.

Create a new folder called `components` inside of your `src` folder and save any components you create there. You can also create another folder inside of your `src` folder called `pages` to separate your large components from more simple common components. Instead of giving you project boilerplate code, I will allow you  to determine the best way to structure the project.

### Suggested Steps:
1. Start your project out by creating dummy pages that render something simple like a line of text each.
2. Make sure each component renders correctly in the App.js
3. Design a navigation bar with the clickable routes
4. Use React-Router to create and test the page navigation
5. Work on rendering one page at a time
6. Do work on your styling after you've gotten the basic functionality working


Commit and push to git often! You should make several commits to `development` and a few commits to `master` after things are working. Make sure you test the app and celebrate if you've made it this far 🚀

If that all worked congratulations! You just built a React portfolio <3 


## Submissions
1. Design a small prototype of the site you are trying to build and send it to me via Slack by next class.
2. Push your final codebase to master
3. READ ALL OF THE instructions here on [deploying to Github Pages](https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka)
4. Send me a slack message to your newly hosted website!  


## Resources That May Help

[React Router Training](https://reacttraining.com/react-router/web/guides/quick-start)
[Learn React Router in 5 Minutes](https://www.freecodecamp.org/news/react-router-in-5-minutes/)
[Web Developer Portfolio Must Have's](https://www.codementor.io/learn-programming/12-important-things-to-include-in-web-dev-portfolios)
[Awesome Portfolio Examples](https://github.com/amnashanwar/awesome-portfolios)

I am available for questions any time on Slack!


## Grading 
Student grades for this homework will be based on:

- **Git Commits to Development (40 pts)**
  - Goals:
    - Commits are well organized and descriptive

- **React-Router (20 pts)**
  - Intents:
    - Able to navigate to multiple pages
    
- **Project Pages (20 pts)**
  - Intents:
    - Code is well organized and readable
    
- **Project SubComponents (20 pts)**
  - Intents:
    - Code is well organized and readable
    
-	**Extra Credit (10 pts)**
  - Intents:
    - Demonstrate extra knowledge of subject matter


## Academic Integrity

This course observed and upholds the [CUNY Policy on Academic Integrity](http://www.lehman.edu/lehman/about/policies_pdf/CUNYAcademicIntegrityPolicy.pdf) ([Accessible Plain Text](http://www.lehman.edu/lehman/about/policies_pdf/CUNYAcademicIntegrityPolicy.txt)). Each student in this course is expected to abide by this policy. Any work submitted by a student in this course for academic credit will be the student's own work. Collaboration is allowed where assignments are designated as group projects.

You are encouraged to study together and to discuss information and concepts covered in lecture and the sections with other students. You can give "consulting" help to or receive "consulting" help from such students. However, this permissible cooperation should never involve one student having possession of a copy of all or part of work done by someone else, in the form of an e-mail, an e-mail attachment file, a diskette, or a hard copy. 

Should copying occur, both the student who copied work from another student and the student who gave material to be copied will both automatically receive a zero for the assignment. Penalty for violation of this Code can also be extended to include failure of the course and University disciplinary action. 

During examinations, you must do your own work. Talking or discussion is not permitted during the examinations, nor may you compare papers, copy from others, or collaborate in any way. Any collaborative behavior during the examinations will result in failure of the exam, and may lead to failure of the course and University disciplinary action.

## Reasonable Accommodations and Academic Adjustments

In compliance with [CUNY policy](http://www2.cuny.edu/about/administration/offices/legal-affairs/policies-procedures/reasonable-accommodations-and-academic-adjustments/) ([PDF](http://www2.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/legal-affairs/policies-procedures/reasonable-accommodations-and-academic-adjustments/Procedures-for-Implementing-Reasonable-Accommodations-9.21.2016.pdf)) and equal access laws, I am available to discuss appropriate academic accommodations that may be required for student with disabilities.

## Inclusivity Statement

We understand that our members represent a rich variety of backgrounds and perspectives. The Computer Science department is committed to providing an atmosphere for learning that respects diversity. While working together to build this community we ask all members to:
*	share their unique experiences, values and beliefs
*	be open to the views of others 
*	honor the uniqueness of their colleagues
*	appreciate the opportunity that we have to learn from each other in this community
*	value each other's opinions and communicate in a respectful manner
*	keep confidential discussions that the community has of a personal (or professional) nature 
*	use this opportunity together to discuss ways in which we can create an inclusive environment in this course and across the CUNY community
