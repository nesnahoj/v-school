Ugly Things  + Local vs. Session Storage & NG services

15 MAY 2015 on Week 7, Exercise, Angular, Web Applications, Level 2, Project
Diving In
Its time to take the plunge into the great world of Angular.

You are going to build an Angular app that allows a user to post things that they think are ugly.

Requirements
Must have 3 input fields:
Img url field
Title field (The title of the image that the user wants to give)
Description field (why the user thinks it is ugly)
Must have Submit button that submits the data
Must display a list of posted images with their associated titles and descriptions
Example Site:


Hints
Some steps you might take:

Link to Angular
Link to the script where your Angular code lives
Create an Angular Module and tie it into your HTML
Create an Angular Controller and tie it into your HTML
You'll need a function and an array of Objects
Must use Bootstrap to make it look responsive (and pretty!)
Things you'll need to use:

ng-app
ng-controller
ng-src
ng-model
ng-repeat
ng-click
{{ }} *
Lessons to review:

Angular Basics
Optional
Have 3 images horizontally on each row
Allow each image to have one or more user-submitted comments
Allow the ability to delete an image (and all associated comments)
Allow the ability to delete specific comments
Bob Ziroll


+

localStorage and sessionStorage
19 OCTOBER 2015 on Web Applications, Level 2, Lesson
Adapted from the information found in this YouTube video.

In just about any useful application you'll make, you'll need a way to persist (keep) data. Otherwise, every time you refresh the page, close the browser, etc. you will lose everything you put into the application. Which obviously makes for a pretty terrible application...

There are a number of options you have when it comes to persisting data:

Cookies: Cookies are stored in your browser, and are typically meant to store some kind of information about any of your HTTP requests. They are sent in the headers of every single HTTP request your browser makes. They are also very limited in size (4 KB!). One thing that can be useful about cookies that you don't get with localStorage is the ability to set an expiration on the cookie, so it simply "dies" on the specified expiration date/time.

Database: This is a very robust option, in that it can definitely store any information you need it to store. The downside here is that it will require a lengthy database and server setup process. You'll likely need a database to do any kind of real web application development, but for small and simple data storage tasks, it may be overkill

Local Storage: Your browser is able to actually store basic key: value pairs with data in them to your hard drive. This storage, called local storage because it is only stored locally on your machine, can hold basically as much data as you want to put into it, and it will not go away unless you specifically clear it out manually. Oftentimes this is good for things like saving a user's customized settings, for example.

Session Storage: Pretty much identical to Local Storage, except that it only persists while the browser session is active. If you close the browser or the tab you're saving things to Session Storage on, it will clear out and your data will be removed. This is nice because it won't take up hard drive space, as long as you're not saving any information you need to persist between sessions. An example of how this might be useful is if the user has more than one window of your application open and they need to have data shared between the windows.

How to use Web Storage (localStorage and sessionStorage)
Note: We'll be referring to Local Storage only from here on out, but if you want to use Session Storage instead, just replace any instances of localStorage with sessionStorage.

If you think of Local Storage simply as a key: value paired object, it should be easy to grasp. localStorage is built into JavaScript, and doesn't necessarily need any other dependencies for it to work.

// Save something to web storage:
localStorage.setItem('key', 'value');

// Get something from web storage that  was previously saved:
var myValue = localStorage.getItem('key');

// Remove an key/value pair from localStorage:
localStorage.removeItem('key');  
It's important to keep in mind that web storage only stores strings of data. So if you need to store or retrieve more complex data types, you can use JSON.stringify() to turn complex data into a string before saving it to web storage or JSON.parse() to turn something back into a complex data type before trying to display or manipulate it.

var obj = {  
    name: "Bob",
    age: 30,
    cars: [
        {
            year: 2002,
            make: "Toyota",
            model: "Camry"
        },
        {
            year: 2015,
            make: "Tesla",
            model: S P85D
        }
    ]
}

// To save this object to web storage:
localStorage.setItem('user', JSON.stringify(obj));

// To retrieve this object from web storage:
var user = JSON.parse(localStorage.getItem('user'));  
One final thing to note: you'll oftentimes see window.localStorage while searching around on the web. Just know that localStorage is basically set up like a shortcut for saying window.localStorage, so unless you set your own variable called localStorage (probably not a good idea anyway), you're fine just using localStorage. Same goes with sessionStorage vs. windows.sessionStorage. Here's a stackoverflow.com post for reference.
And that's it! You're all set with everything you need in order to start using web storage. This can be a great solution to use while you're testing front-end applications before having the chance to build up a database for storing data.

If you're interested in seeing a popular web storage package that is built to be used with AngularJS, see the video linked at the top of this article.

Bob Ziroll

+

added ng-service feature to app to seperate controller vs service functions.
