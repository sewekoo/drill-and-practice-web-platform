# Drill and Practice - Practice platform

## Description & instructions
Drill and practice platform is web application for studying and rehearsing different topics. 
Web application can be navigated with navbar on top of the page. 
Admin users can add topics and regular users (and admins) can add questions and answer options via "Topic" -page.
Users can get questions via "Quiz" -page.

Create a use by navigating to main page (path "/" or click "Drill and Practice") and click "Register"
Then write your email and password and click "Register".
After that you can log-in using your email and password through login page.
You can logout with "Logout" button at the top right of the page.

Access topics by clicking "Topics" from navbar.
Here you can add new topics if you have logged in to the admin account.
Otherwise you can access any created topics by clicking their name.

After selecting a topic you can add a question with the form on the page.
If there are any questions created you can access them by clicking their text in the list.

After selecting a question you can add new answer options with the form at the bottom of the page.
You can also select wheather the answer option is a correct answer or not with the checkbox.
You can also choose to delete answer options and if there are no options left, you can delete the whole question.

You can quiz the created questions by clicking "Quiz" from the navbar.
There you can select a topic you want have a quiz on. After that the app will ask you random questions for that topic.
Choose the answer by clicking related "Choose" button. After this the app will tell you if the answer is correct or incorrect.
Advance to next question by clicking "Next question".

App has API that can be accessed with GET request to path "/api/questions/random" which gives a random question as JSON object.
Question can be answered with POST request to path "/api/questions/answer" that contains id of the question as "questionId" and id of the option as "optionId".
The response contains JSON object with attribute correct that has value true or false stating whether answer was correct.

## Admin account
For testing you can log-in to admin account to create new topics.
Admin account credentials are:
email: admin@admin.com
password: 123456

## Online deployment
Note: PLEASE TEST LOCALLY!

Online deployment is at:
https://hidden-cherry-1535.fly.dev/
NOTE! I used the cheapest fly.io option to run in online, so there is massive problems with login especially after start-up.
The server reboots often and is unable to store login info for long so it can log you out at any point.
For smoother testing experience, please run the app locally!!!

## Guidelines for running locally
You can run the application locally by navigating to root folder with terminal and running "docker-compose up" command.
The application will then be displayed locally with address: http://localhost:7777/

To run local automated End-to-End tests first remember to run command "docker-compose down" to reset the app.
Then please start the app again first with "docker-compose up" command and stop it again with "CRTL" + "C" keyboard shortcut.
Now you can run the tests with "docker-compose run --entrypoint=npx e2e-playwright playwright test --retries=5 && docker-compose rm -sf" command.
Note! The first test may fail on the first try due to slow start, hence the command above enables few retries for each test.

There are also two http tests to check that registaration and login pages can be accessed.
You can run these tests by first navigating to path /drill-and-practice in console.
Then run command deno test --allow-net --allow-read --allow-env.
Note! If you run these tests in root folder, they will fail.