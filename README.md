# movie-magic-sept-2025
SoftUni JS Back-End Course Project

## Development Steps 1 - Express and Templating
---
### Setup
- [x] Initialize Project
- [x] Add Express Server  `npm i express`
- [x] Config debugging
- [x] Add Workshop Resources
- [x] Setup Handlebars `npm i express-handlebars`
- [x] Setup static files
- [x]  Render Home Page
- [x] Add Layout Page 
- [x] Render About Page
---
### Architecture and dynamic redering
- [x] Add home controller
- [x] Add movie data layer
- [x] Add movie service
- [x] Render movies on home page
- [x] Show no movies screen
---
### Create Movie
- [x] Add Movie Controller
- [x] Show create movie page
- [x] Add routes 
- [x] Add 404 page
- [x] Read body data
- [x] Create a movie
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating movie
- [x] Redirect after creation
- [x] Add unique id for each created movie
---
### Details
- [x] Add navigation button for details page
- [x] Add route with param for details page
- [x] GetOne movie from service
- [x] Find movie by id from model
- [x] Render details page with dynamic data
---
### Search
- [x] Show static search page
- [x] Render all movies
- [x] Modify search form
- [x] Filter movies
   - [x] Filter by title
   - [x] Filter by genre
   - [x] Filter by year
- [x] Remember search words
---
### Bonuses
- [x] Dynamic page title
- [x] Rating (temp solution)
- [x] File persistence
---
## Development Steps 2 - MongoDB Database
---
### Prerequisites
- [x] Install MongoDB Community Server
- [x] Install Compass GUI
- [x] Install Mongosf GLI (Optional)
---
### Setup Database
- [x] Insert mongoose `npm i mongoose`
- [x] Connect to DB 
---
### Refactor Movies to use mongoose
- [x] Add movie model
   - [x] Create movie schema
   - [x] Create movie model
- [x] Import movies to datanse  !DON'T IMPORT IDs
- [x] Fix own property handlebars problem with lean method
- [x] General fix for own property problem
- [x] Refactor details
- [x] Refactor create
- [x] Refactor search
---
### Add Cast
- [x] Add resourses
- [x] Create Cast Controller
- [x] Create Cast Page
- [x] Add Cast model
- [x] Create Cast Service
- [x] Create Cast Functionality
--- 
### Attach Cast to Movie (relations)
- [x] Add attach cast button
- [x] Add attach cast page
- [x] Add dynamic data to cast page
- [x] Show cast list in attach select
- [x] Add relation between cast and movie
- [x] Attach cast functionality
---
### Show Cast on Details (population)
- [x] Get movie casts filter
- [x] Show casts on details
- [x] Get movie casts using population
---
### Bonuses
- [x] Filter casts if they are already attached
- [] Env variables
- [] Name in movie
- [] Back reference from vscode
- [] Add movie views to a folder
---
## Development Steps 3 - Session and Authentication
---
### Initial Setup
- [x] Add resourses
---
### Registration
- [x] Add new controller `authController`
- [x] Add registration page
- [x] Add User model
- [x] Add User service
- [x] Handle registration (create user in database)
- [x] Add password hashing
---
### Login
- [x] Add login page
- [x] Handle login page (post request for login)
  - [x] Validate user
  - [x] Validate password
  - [x] Create token
  - [x] Return token to client
---
### Logout
- [x] Add logout action
- [x] Clear cookie
---
### Authorization
- [x] Install cookie parser
- [x] Add auth middleware
- [x] Add isAuth route guard 
- [x] Add isGuest route guard
---
### Dynamic Navigation
- [x] Group navigation by user type (all, authenticated and guest)
- [x] Add auth info to handlebars context
---
### Show creator control buttons
- [] Add edit and delete buttons on delete page
- [] Show buttons only for creators
---
### Delete Movies
- []
---
### Edit movies
---
### Bonus
- [] Automatic login on register
- [] Invalidate token logout
- [] Refresh token

