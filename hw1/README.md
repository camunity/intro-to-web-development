# CMP 464 – HW 1 - francisco cuesta

**Due Date:** 9/26/2020 at Midnight

**Submission Type:** Pull Request to Link

**Grading:** Letter Grade

**Topics:** Command Line, Git, React, Javascript

## Rationale

Now that we've had time to learn HTML/CSS and Javascript, we're going to dive into further web development work using the frontend framework [React.JS](https://reactjs.org). 

## Aims and Outcomes 
### Aims
This homework is designed to test your ability to start a new React project and use Git for managing project changes.

### Specific Learning Outcomes
By the end of this homework, you will be well-versed in the fundamentals of starting React projects using NPM. You will be introduced to the create-react-app command line tool using npm to install the necessary project frameworks to start and launch a React application. Following this, they will be able to upload the project to Github utilizing the command line functions. Following this set-up, students will make commits and pushes to the codebase to simulate normal project development control flows. 

## Set Up Procedures
0) Open the terminal and navigate to a safe file destination (ex: run command `cd ~/Desktop`)
1A) Open a browser and download the latest version of [node]("https://nodejs.org/en/download/")
1B) Download the latest version of [git](https://git-scm.com/downloads)
2A) In the terminal run the command `npm --version` to ensure the package was installed correctly
2B) Run the command `git --version` to ensure the package was installed correctly
3) Follow the create-react-app installation [instructions](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
4) In the terminal run the create-react-app command with this project name: yourgithubname.github.io 
    - for example in my terminal I'd run: `npx create-react-app camunity.github.io`
5) cd into your new folder after it's finished installing
6) npm start

## Assignment Pt. 1
Now you should have a functional React app built and running on your localhost in the browser. This app is using a local server to host the application code allowing you to interact with React in a unique way. Anytime you make changes to the React code, you'll see them live reload in your browser. This is called "hot-reloading" one of the best features of working in React. 

Your next steps will be to get this project on Github and make a series of commits.


### Step 1: Connecting your local code to Github
Whenever you use create-react-app to start a React project, you receive a couple gifts. One of them is the fact that your project contains a .git repository initialized for you! In your project folder run `git status` and you'll see what I mean. 

** The console should print something like "on branch master, nothing to commit, working tree clean"**

The first step to getting a local project on Github is to create a new repository on Github.com. Make sure you're signed into Github and click the '+' icon in the top right corner to create a new repository. If you're having trouble finding it you can also use the link `https://github.com/new` to navigate to a new repository.


### Step 2: Naming your repository
Name this repository the same name as our project: yourgithubname.github.io

Since we're importing an existing repository and because create-react-app already gives us a README.md file we can skip all the other steps and click the Create Repository button to continue.

**If you already have a repository with this name on Github, you can name this repo whatever you want**

### Step 3: Connecting to your remote repository
At this point you should see a screen like this:
![GitHub Commit Steps](https://curriculum-content.s3.amazonaws.com/web-development/enough-git-for-learn-co/github_quick_setup.png)

If you don't see a screen like this, delete this repository and make sure you followed the last step correctly and didn't click any of the extra buttons or features.

Git is a version control tool we use to take snapshots of changing code. It works by creating a local repository and allowing us to connect to remote cloud-hosted repositories on tools like Github or Bitbucket.

Now that we've created a remote repository and because create-react-app initialized a local repository for us, we can connect the dots!

Commands:

A) In the terminal in your project directory run the command: `git add *` this adds all of the modified files you recently worked on to be tracked by git. 

B) run the command: `git commit -m "initial commit"` this creates a commit of the tracked code with the message "initial commit" and saves it to your local repository stored in your project folder. 

C) Run the two commands under the section on Github that says "...or push an existing repository from the command line"
  - The first one "git remote add origin ..." connects your project to the remote repository, so you can push and pull code to/from Github, 
  - The second one "git push -u origin master" takes the local commit we made in step B) and pushes it to Github

D) Refresh your Github page and you should see your create-react-app files! 

## Assignment Pt. 2
Now you're set up with a running React app, and it's already saved to Github! You're killing it!

Your next step will be to make the following changes to the React codebase.

### Git Commit 1: Change the paragraph text in App.js

App.js is the main file run in any React application. This is the file that we use to represent our components in the virtual REACTDOM. Open the App.js file in VSCode and edit the text inside the paragraph tag on line 11 to say: My name is {insert your name lol} and I'm going to master React!

Save the file and take a look at the running React code at: `https://localhost:3000`

If everything looks right, open up your project directory in the terminal and do the following steps.

A) `git add *` (to add all your recent project changes)

B) `git commit -m "modified App.js to say {insert your name here}"` (to make a new git commit)

C) `git push -u origin master` (to push the local changes to your git remote repository)

If that all worked you can keep moving on!

### Git Commit 2: Stop the image spinning!

React is cool because it allows us to write some dynamic styling using CSS. If you open the App.css file you'll notice that create-react-app starts us off with some styling out of the box for our App class.

They're using media-queries and keyframe animations to spin the React svg logo. Let's put that on pause real quick by commenting out all the animation code between lines 30 and 39. You can use the multiline comment `/* */`or comment each line individually using `//`. If you save the code your image should be standing still.

Save the file and take a look at the running React code at: `https://localhost:3000`

If everything looks right, open up your project directory in the terminal and do the following steps.

A) `git add *` (to add all your recent project changes)

B) `git commit -m "edited App.css to stop image spinning"` (to make a new git commit)

C) `git push -u origin master` (to push the local changes to your git remote repository)

If that all worked you can keep moving on!

### Git Commit 3: Swap the image!

The React logo is cool and all but it isn't really our thing, it's Facebook's. In your project's *src* folder add an image to a picture of yourself and call the file `yourname` with whatever extension the file is in (`.png`, `.jpg`, etc.) you can drag it directly into VSCode or you can add the file to your project folder manually through the Windows or Mac folder browser if you prefer.

Make sure you save it in the src folder!

In your App.js file switch the import statement on line 2 to `import logo from './yourname.extension'`swapping extension for whatever your file type is (.png, .jpg, etc.);


Save the file and take a look at the running React code at: `https://localhost:3000`

If everything looks right, open up your project directory in the terminal and do the following steps.

A) `git add *` (to add all your recent project changes)

B) `git commit -m "added my personal image to App.js"` (to make a new git commit)

C) `git push -u origin master` (to push the local changes to your git remote repository)

If that all worked you can keep moving on!

### Git Commit 4: Add your github link!

React uses what may appear to be HTML elements like `<p>, <img>, and <a>` but these tags are really javascript code colloquially known as JSX. 

When writing HTML, you enter tag names, attributes and their content (innerHTML). But React helps you do that in JavaScript. In fact, some React code is comprised of HTML tags typed directly as JavaScript statements using JSX.

We'll get to that in a bit, but for now think of React Elements as "programmatically created" HTML tags, doing which makes working with them much more efficient, directly from your JavaScript program!

All that being said the last step of your homework is to switch the `<a>` React element to navigate to your github instead of the React.JS website. So open up your App.js one more time and swap the `href` link on line 15 to go to `https://github.com/yourusername`. Also switch the inner text that says "Learn React" on line 19 to say "Check Me Out!" instead.

Save the file and take a look at the running React code at: `https://localhost:3000`

If everything looks right, open up your project directory in the terminal and do the following steps.

A) `git add *` (to add all your recent project changes)

B) `git commit -m "final commit, I will become a React pro!"` (to make a new git commit)

C) `git push -u origin master` (to push the local changes to your git remote repository)

If that all worked congratulations! You built your first React project <3 

## Submissions

To submit this homework, fork this github repo and edit the README by adding to the table below with your name, a link to your finished repo, and the date you submitted by the start of class on Wednesday. Send me a pull request when you're done! After you're finished make sure you go over the [React Tutorial](https://reactjs.org/tutorial/tutorial.html) before our next class!

Name | Repo Link | Date Submitted
--|--|--
(example) Cameron Flowers | https://github.com/camunity/camunity.github.io| 09/21


## If You Get Stuck

Try troubleshooting your code by re-reading these instructions or seeking help from another member of the class! 

I started our Slack group for us to ask questions in a safe environment. If you get lost or need clarification leave a note in the #web-development channel and either myself or one of your classmates will respond!

## Grading 
Student grades for this homework will be as follows:

- **File Setup (20 pts)**
  - Goals:
    - Project folder is named correctly
    - Github repository is named correctly
    - create-react-app was used correctly

- **Git Commit 1 (20 pts)**
  - Intents:
    - File was changed correctly
    - Git commit message was formatted correctly
    
- **Git Commit 2 (20 pts)**
  - Intents:
    - File was changed correctly
    - Git commit message was formatted correctly
    
- **Git Commit 3 Project (20 pts)**
  - Intents:
    - File was changed correctly
    - Git commit message was formatted correctly
    
- **Git Commit 4 (20 pts)**
  - Intents:
    - File was changed correctly
    - Git commit message was formatted correctly
    
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
