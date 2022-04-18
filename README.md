# Bowtie Developer Assessment - React Todo Project

### How to Use 

To use this application, clone down both repositories to your local machine. Run commands `npm i` and `npm start` in the back end repo, then do the same for the front end.

[Backend repo](https://github.com/n0land0/bowtie-challenge-api)

***

### Wins
- I've only built a few APIs and it's been awhile since the last one, so it felt good to build a working one in TypeScript in basically a day.
- Used node's FS-promises module to simulate an async JSON-based data store without having to deploy a backend. 
- Used the opportunity to get practice with a UI library I've wanted to try for awhile.

### Challenges + Improvements
- Past week-plus has been pretty brutal on a few fronts and I would've liked to have been able to spread my time out a bit in working on this, rather than cramming into a couple nights.
- Not much in the way of error-handling on either end, which was a casualty of the time window - would've liked to get to differentiating status codes, etc.
- Tried to deploy the FE but ran into CORS errors, and couldn't solve by proxying the URL or passing options to `cors()`.
- Usually would've written at least an endpoints guide for the backend repo.

***

#### Mission

- [x] Build a simple todo app with React + TypeScript frontend.
- [x] You should have some form of data management and persistence
- [x] Encouraged to build a custom backend/database/api to interact with from React.

#### Requirements

- [x] A user can create/edit/delete a list of projects within the app
- [x] A user can create/edit/delete todo items within a given project
  - (edit counts for toggling todo as “completed”)

#### Submission

- [x] The assessment will be submitted as GitHub repositories.
- [x] One repo for the React + TypeScript frontend
- [x] Any additional repos for api/backend code, etc

#### Bonus Points

##### The API...

- [x] Be Versioned (route prefixed with “/api/v1/” for example)
- [x] Be RESTful (https://en.wikipedia.org/wiki/Representational_state_transfer)
- [x] Support “application/json” content-type
- [x] Provide standard CRUD endpoints for projects and todo items
- [ ] Use 401/403 response codes accordingly
- [x] Respond with accurate and meaningful information
- [ ] Use appropriate HTTP code (https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [ ] Supply relevant error/success information in the response body

##### The UI…

- [x] Connect UI actions with API (to create/edit/delete projects and/or todo items)
