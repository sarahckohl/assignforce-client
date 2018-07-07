![Revature](https://github.com/sarahckohl/assignforce-client/raw/staging/src/assets/revature_logo_250.png)
# Assignforce

## Project Description and Objectives

### Description

Assignforce is a tool that provides users with a graphical interface to view information about Revature training batches occuring within various training locations. Information such as the timeline of training batches is displayed in an easy to read tabulated display and an interactive graph. Trainers are able to enter and modify their familiar technologies while the Senior Vice President (SVP) has privileges to modify the curriculum of technologies to be taught in training batches and to create batches themselves. The SVP also has privileges to mark trainers as inactive, create new locations, and



### Objectives

* Provide a graphical user interface to view information about training batches
* Provide users with a secure web application
* Showcase the collection of technologies that are taught at Revature training batches
* Allow the Senior Vice President (SVP) to map training batches and coordinate their timelines.
* Aggregation of monthly reports displaying the number of batches graduated, the number of expected batches, and their technologies.

## Current State

### Features
* Users can export all batches with their appropriate information as a .csv file
* Auth0 to handle login service to handle user authentication and authorization.
* SVP can manually create training batches by specifying the cirriculum, start/end dates, the trainer, and location
* D3.js to provide an interactive data graph displaying the timeline of various training batch.
* SVP can alter the curriculum by adding and removing.
* SVP can add various training locations under the Locations tab.
* Trainers can edit their profile to include their familiar technologies.
* Users can modify assumptions and other options pertaining to other tabs under the Settings page

### Planned Features
* SVP, upon creation of new batch, will be able to view a sorted list of potential trainers based on their knowledgable skills and temporal availability
* Trainers will be able to upload their resue or CV in .pdf or .doc format
* Ensure that all SVP privileges are exclusively avaiable to the SVP account
* Implement a working microservice architecture to allow for future scalability
* Improve performance of loading speed for pages that load a lot of data

## Stakeholder/Users



### Primary Users
VP of Technology, Trainers

### Additional Stakeholders
Trainees, Recruiters, Sales

© 2018 Revature. All rights reserved.
