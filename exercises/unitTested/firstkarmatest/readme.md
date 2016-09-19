Karma
30 DECEMBER 2015 on Programming Principles, Web Applications, Level 3, Lesson
As mentioned in the Testing Basics and Testing JavaScript with Jasmine posts, we'll be using the test runner Karma to run our JavaScript tests. When it comes time to test Angular code, we're going to need additional tools to help us deal with the AngularJS framework so we can test it accurately, but for now let's jump in to the basics of running our Jasmine tests using Karma!

Setup
Globally Install karma-cli
We need to get everything set up first. Karma has a command-line tool to help with any Karma-related tasks you need to do, so let's install that first:

$ npm install -g karma-cli  # if it gives you errors, try adding `sudo` at the beginning.
Create new project root folder and package.json file
We'll be creating the same JavaScript calculator program that we made in the Testing JavaScript with Jasmine post, but this time instead of just using the standalone Jasmine files and putting our own files inside of their structure, we'll create our own structure and tell Karma where all the files are. Remember, with the standalone Jasmine app we needed to have an HTML file (named SpecRunner.html by the Jasmine team by default) to pull in our JavaScript files inside of <script> tags. Karma does things a little bit differently, but we'll get to that soon.

So to begin, create a new folder somewhere logical and cd to that location in a Terminal window.

We'll always install Karma as a "dev dependency" to our projects using NPM. So we need to create a package.json file, same as always:

$ npm init
Run through the questions, or hit enter to skip them all, and this will create a package.json file for you.

Note: You can get into trouble if you name your folder the same name as a dependecy you're trying to install with npm. E.g.: If you named your folder "karma" and didn't change the name of your app in package.json (by default it'll name your app the same as the folder you created the package.json file in, so it would be named "karma" as well), when you later try to run npm install karma, it will throw an error saying you can't install karma as a dependency of itself. Just change the name property in package.json to something else and the problem should go away.

Install karma
Up until now you're used to using the --save flag for all NPM installs, but with Karma we'll be using --save-dev instead, since our app doesn't strictly depend on karma being a part of it to work. As a testing tool, it is strictly for developers to use when preparing the project for use, so it is considered a "developer dependency".

$ npm install --save-dev karma
Your package.json file should now have a section that looks something like this:

"devDependencies": {
    "karma": "^0.13.16"
}
Create the Karma config file
Karma uses a configuration file to know which source and spec files to run, which browsers to test your code in, etc. Just like creating our npm config file package.json by running npm init, we can create the karma.conf.js file by running karma init. This will run you through a series of questions, most of which you can keep as the default answers for now:

$ karma init

Which testing framework do you want to use ?  
Press tab to list possible options. Enter to move to the next question.  
> jasmine

Do you want to use Require.js ?  
This will add Require.js plugin.  
Press tab to list possible options. Enter to move to the next question.  
> no

Do you want to capture any browsers automatically ?  
Press tab to list possible options. Enter empty string to move to the next question.  
> Chrome
>

What is the location of your source and test files ?  
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".  
Enter empty string to move to the next question.  
> js/*.js
> tests/*.js

Should any of the files included by the previous patterns be excluded ?  
You can use glob patterns, eg. "**/*.swp".  
Enter empty string to move to the next question.  
>

Do you want Karma to watch all the files and run the tests on change ?  
Press tab to list possible options.  
> yes


Config file generated at "/Users/bobziroll/dev/learning/testing/js-calc/karma.conf.js".  
In this config file, we told Karma:

We're using the Jasmine framework. Karma will automatically install the karma-jasmine and jasmine-core packages for us and save it to package.json.
We want to test our files in the Chrome browser. Karma will automatically install the karma-chrome-launcher package and save it to package.json.
The location of the source and test files. You can use pattern-matching syntax like * and ** to be more generic. More specifically, we said to read through anything with a .js file extension inside both the js folder and the tests folder. Later when we test our Angular applications, we'll have to include the Angular core js file as well as an Angular module called ngMock, but we'll skip this for now.
We didn't exclude any files, although you could if you wanted to.
We want karma to watch for changes in the specified files and re-run all the tests automatically for us anytime it sees a change in the files. This helps us skip that manual step of refreshing the browser window to check our tests again.
Even before we write any JavaScript files or tests, we can check to make sure things are working as they should.

$ karma start
In your terminal window, you should see something similar to the following:



This explains that the files you specified don't exist, and shows an error because it executed 0 test specs, but we'll remedy this soon.

You should also have had a Chrome window pop up telling you that Karma is connected and that Chrome is idle.



Looks like we're all set up! Let's write the calculator app and tests again to see what happens!

Calculator
Create the files calculator.js (in the js folder) and calculator.spec.js (in the tests folder).

Since we covered the functionality of this in the last post, I'll just paste the code here for quick reference:

//  js/calculator.js

function add(x, y) {  
    return x + y;
}

function subtract(x, y) {  
    return x - y;
}

function multiply(x, y) {  
    return x * y;
}

function divide(x, y) {  
    return (y === 0) ? 0 : x / y;
}
//  tests/calculator.spec.js

describe("Calculator", function () {  
    it("should add two numbers together", function () {
        expect(add(1, 2)).toBe(3);
    });

    it("should subtract two numbers", function () {
        expect(subtract(3, 2)).toBe(1);
        expect(subtract(-10, -1)).toBe(-9);
    });

    it("should multiply correctly", function () {
        expect(multiply(2, 3)).toBe(6);
    });

    it("should divide correctly", function () {
        expect(divide(10, 5)).toBe(2);
    });

    it("should return 0 when dividing by 0", function () {
        expect(divide(1, 0)).toBe(0);
    });
});
Once these files are saved, Karma automatically runs the new tests and displays the results right in the terminal:

Chrome 47.0.2526 (Mac OS X 10.11.2): Executed 5 of 5 SUCCESS (0.044 secs / 0.025 secs)  
Additional steps
PhantomJS
If we're just running basic JavaScript this way, it won't really matter if we're using Chrome, Firefox, Safari, etc. And having Karma open a Chrome window can be a bit annoying and slow down your computer a little bit more than is necessary. That's why a common thing to do when testing is to use what's called a headless browser, which is simply a browser that doesn't open its own window. One of the most common headless browsers is called PhantomJS. (If you hit tab a few times during the karma init phase, you may have run across PhantomJS as one of the options for browsers.)

Let's install it for practice. Since we didn't do it during the karma init phase, we'll need to install the dependencies and alter karma.conf.js ourselves:

(You will probably either want to open a new terminal window or hit control + c to quit the test server that's running)

$ npm install --save-dev karma-phantomjs-launcher
Now add PhantomJS to the list of browsers in karma.conf.js:

...
browsers: ['Chrome', 'PhantomJS'],  
...
Start up your tests again with karma start and check out the results:



Notice that PhantomJS ran the tests a lot faster than Chrome did - just one of the benefits of using PhantomJS. Let's remove Chrome from the list of browsers in karma.conf.js so we can execute our tests more efficiently and without having an additional Chrome window on our desktop:

...
browsers: ['PhantomJS'],  
...
Much nicer.

npm test
You may have noticed in package.json this line:

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
},
In package.json, we're allowed to specify npm commands the developer can run. This test script, for example, allows one to simply enter npm test in the terminal and run whatever is specified in package.json. Right now, it's set to spit out an error that no test script is specified, so let's change that:

"scripts": {
    "test": "./node_modules/karma/bin/karma start"
},
Note: The reason we use the more complex ./node_modules/karma/bin/karma start instead of just karma start is because we installed karma-cli globally on our machines, but this doesn't mean another developer will necessarily have it on theirs. The karma-cli package is what allows us to enter karma <command>, so without it we must specify the path to the karma executable first.

Using npm test is a very standard way for developers to test JavaScript applications, so this effectively normalizes the way tests are run. Now when you run npm test in the terminal, you should see basically the same thing happen as before when you ran karma start.

Conclusion
So far we've only been testing overly simple JavaScript code for practice so we can become familiar with the tools we'll be using for our unit tests on more complex code, including testing directives, controllers, and services in AngularJS. Head to the next part in this testing series to jump in to testing AngularJS using Jasmine, Karma, and ngMock!

Bob Ziroll


I used Fibonacci script and spec for this test.  All 3 tests ran successfully.
