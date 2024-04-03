### Quiz Fever
A system for creating, managing, and completing tests with open access.

### Functionality
User registration
Ability to browse and solve tests from other users
Various themes related to the tests
Filtering by theme and searching by title
Keeping statistics for each user and test
Interactive test editor
Interactive, flexible UX
Technologies
HTML, CSS, JavaScript
lit-html, page
GitHub Pages, Back4app
Screens (Pages)

### Welcome Screen (landing page)
Login/Register - registration with email, username, password
Quiz Browser - list of tests and search by title, filtering by theme
Quiz Details - additional description, test statistics, information about the author, and the option to start the test
Quiz Contest Mode - answering questions, each question in a separate view, ability to freely move from question to question, option to restart the test
Quiz Results - summary of results, ability to review incorrect answers
Profile Page - information about created tests and all completed tests
Quiz Editor - integrated editor for tests, questions, and answers
Implementation Plan

### Part 1
Creating and configuring an application in Back4app
Deploying the application on GitHub Pages
Login/Register page
Quiz Editor functionality

### Part 2
Completion of structure and styling
Welcome Screen
Quiz Browser
Quiz Details
Quiz Contest Mode
Quiz Results
Profile Page


### Data Structure
Collections
Sessions (administrative)
Users (administrative)
```javascript
{
    email: String,
    username: String,
    password: String
}
```
* Quizes
```javascript
{
    title: String,
    topic: String,
    questionCount: Number
}
```
* Questions
```javascript
{
    text: String,
    answers: Array<String>,
    correctIndex: Number,
    quiz:  Pointer<Quiz>
}
```
* Solutions
```javascript
{
    quiz: Pointer<Quiz>,
    correct: Number
}
```

### Access Control
Guests can register, browse the catalog, view test details, and user profile pages
Registered users can solve tests, view their results, and create and edit tests
Only the creator of a test can edit and delete it
Any registered user can solve tests created by others