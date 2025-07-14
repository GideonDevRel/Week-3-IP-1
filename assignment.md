Time for your first IP! This will be a combination of familiar steps from earlier in the week, and new tasks you will have to research and do yourself. As expected, you will have to build a pipeline.

Milestone 1: Set up

Clone this repo.  (Links to an external site.)This is an already working application that we will be translating into a cloud-based application. 
This application uses a database that we have to take into consideration. To facilitate deployment to Render with MongoDB, we'll be using MongoDB Atlas, (Links to an external site.) a cloud-hosted MongoDB service. Follow this short video tutorial (Links to an external site.) to set it up.
Once you've created a cluster and database user on MongoDB Atlas, update the _config.js file. Replace <USERNAME> and <PASSWORD> to have the username and password for the user you created.
Milestone 2: Basic pipeline. 

First, notice that the repository does not seem to have tests. No worries, let’s build our pipeline. Do make sure that you have a JenkinsFile with the required instructions:
Your pipeline should trigger automatically whenever you push a new change to your repository. 
It should make sure that all required software is available. This is on you to figure out what they are, but you are familiar with the project so we believe it won’t be too challenging. npm install is a useful feature here.
It should deploy to Render - recall that you can start the server using node server. 
Make a change to the landing page of the website, and add a big “MILESTONE 2” to the site. This should be clearly visible. Push all your changes, and make sure that the website you see through Render shows MILESTONE 2
 

Milestone 3: Tests.

Turns out the repository did have tests, just in a different branch named test. Switch to the test branch and see that tests are available. You can run them using npm test 
Test results should look like this locally: 
darkroom_test.png
Merge the test branch with your main branch, and update your JenkinsFile so that your pipeline executes the tests. As with the work-along project, you should send an email in your if the tests fail. 
Make a change to the landing page of the website, and add a big “MILESTONE 3” to the site. This should be clearly visible. Push all your changes, and make sure that the website you see through Render shows both MILESTONE 2 and MILESTONE 3
 

Milestone 4: Slack integration.

As you’ve seen throughout the week, Jenkins can integrate with multiple tools. Let’s learn how to integrate it with Slack!
You can get information about Slack integration at this link (Links to an external site.).
Create a slack channel called YourFirstName_IP1, and invite your TM to it. 
Update your pipeline so that on a successful deploy, a slack message will be sent on that channel. 
The message should include the build ID, as well as the link to Render where the site is uploaded. (Environment variables will help!)
 Make a change to the landing page of the website, and add a big “MILESTONE 3” to the site. This should be clearly visible. Push all your changes, and make sure that the website you see through Render shows MILESTONE 2, MILESTONE 3, and MILESTONE 4.
 

What to submit:

 

A link to your GitHub repo where your TM can see your Jenkins file.

https://github.com/jonnygovish/gallery
https://www.mongodb.com/cloud/atlas
https://www.youtube.com/watch?v=KKyag6t98g8
