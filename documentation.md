# Recipe App
a web application for sharing different recipes, just like a recipe blog!

## Starting the project

to start the server: npm start in integrated terminal (you have to be in the server folder)
to start the client: npm start in terminal (you have to be in the client folder)

## Architecture

the project is divided in two main folders-server(containing the REST), and client(containing the react app).The client side is divided in the following way- services,contexts,hooks,utils and components.Every component has its own folder with css file and the component itself. Fetching data happens via services in the components.

## Description
there are three collections,used in this app-users,recipes and comments.
Not authenticated users have access to login, register, catalog, home and details with no functuonality available for them(exept for the search in catalog).When authenticated, users can create recipes, edit/delete their own recipes, users that are not the creators of the recipe can like/dislike a recipe,or write a comment about it. All authenticated users can see their profile with information about them, a list of their liked and owned recipes.When they want to,they can logout the app and they will be redirected to the home page'

### Login
available for guest users, to login they need thei username and password. Successful login results in redirection to the home page

### Register

also available for guest users, to register they need a password,email and username. If succesfully,
they will be redirected to the home page. The user can login with the created account, if a correct username and password is given

### Logout

authenticated users can logout,which will result in destroying their session

### Home page

available for both type of users, shows last three recipes added to database

### Catalog

available for both type of users, shows all recipes and has a search

### Details

shows the details about a recipe. a guest user doesnt have access to any functuonality.
logged in owner of the recipe can edit and delete it.
logged in user,but not the owner can like or dislike recipe and write comments about it

### Profile

shows the information about the currently logged in user, has links to the current users liked and owned recipes

### Create Recipe

available for authenticated users, adds new recipe in db and in their owned list


### Like/Dislike

 available for logged in user,but not the owner of the recipe, a recipe cannot be disliked if it hasnt been liked by the same user first.You cant like/dislike the same recipe twice in a row(to like a recipe again you have to dislike it first)

### Comments

available for logged in user,but not the owner of the recipe
