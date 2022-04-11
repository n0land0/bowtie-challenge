# React Todo Project

### Bowtie Developer Assessment: Nolan Caine

### Mission

- [ ] Build a simple todo app with React + TypeScript frontend.
- [ ] You should have some form of data management and persistence
  - (local storage would be a minimal viable datastore).
- [ ] Encouraged to build a custom backend/database/api to interact with from React.
- [ ] Bonus points for user signup/authentication!

### Requirements

- [ ] A user can create/edit/delete a list of projects within the app
- [ ] A user can create/edit/delete todo items within a given project
  - (edit counts for toggling todo as “completed”)
- [ ] BONUS: A user can sign up and/or sign in to the system

### Submission

- [ ] The assessment will be submitted as GitHub repositories.
- [ ] One repo for the React + TypeScript frontend
- [ ] Any additional repos for api/backend code, etc

### Bonus Points

#### The API...

- [ ] “Dockerized”
- [ ] Be Versioned (route prefixed with “/api/v1/” for example)
- [ ] Be RESTful (https://en.wikipedia.org/wiki/Representational_state_transfer)
- [ ] Support “application/json” content-type
- [ ] Support additional content types (XML, CSV, etc)
- [ ] Provide authentication endpoints
- [ ] Allow users to signup/signin using OAuth providers (Google, Facebook, GitHub, etc)
- [ ] Provide standard CRUD endpoints for projects and todo items
- [ ] Require authentication and validate access to resources
- [ ] Use 401/403 response codes accordingly
- [ ] Respond with accurate and meaningful information
- [ ] Use appropriate HTTP code (https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
- [ ] Supply relevant error/success information in the response body

#### The UI…

- [ ] Provide views for user signup/signin (via the API)
- [ ] Provide restricted views for projects and todos
- [ ] Should require authenticated user, redirect to login otherwise
- [ ] Connect UI actions with API (to create/edit/delete projects and/or todo items)
- [ ] Should require authenticated user, handled by API backend
