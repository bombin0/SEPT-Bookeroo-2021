# RMIT SEPT 2021 Major Project

# Group 4

## Members
* Arjun Sharma
* Sneha Debsikdar
* Patrick Phillips
* Zara Noor
* Vincent Tang

## Records

* Github repository : https://github.com/s3795730/SEPT-project/tree/development
* jira Board : https://sept-bookeroo-project.atlassian.net/jira/software/projects/BOOKS/boards/1/backlog
* Circle CI: https://app.circleci.com/pipelines/github/s3795730/SEPT-project
	
## Code documentation - Release 0.1.0 - 18/09/2021
* Login Page
* About Page
* Pre register Page
* Register Page (public user)
* Register Page (Shop Owner user)
* Browsing Page
* My Shop Page
* Admin Manage Books
* Admin Manage Users

To run the application locally : 
1) cd into each and every microservice (ms_booking, ms_availability, ms_profiles, ms_service) and run :
2) ./mvnw package && java -jar target/ms_[microservice]-0.0.1-SNAPSHOT.jar
3) cd into FrontEnd/myfirstapp
4) run "npm install"
5) run "npm start"

## IMPORTANT:
* Once you reach the about page, you should we able to have an admin user automatically. If your admin user is not in your database then load your about page again.
* You can login with admin user with: username "admin@bookeroo.com" and password "bookeroo"
* Once you register as a shop owner, you CANNOT directly login. The account needs to be approved by an admin first
* If an admin creates a user, then the password for that user will be set to "default"
