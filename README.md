# so-pekocko sauce API

move terminal path to backend and type npm start.

move terminal path to frontend and type npm start.

after running frontend and backend both
we gonna see sign up and login page so here when we click on sign up or sign in it will go to routes/user.js.
after this it will go to middlewares/checkdatasignup.js.

it will confirm here that user is already exists or not and email and password is correct or not if its matched then you can sign up or login.

if got any error then you can see error message.

user can like and dislike sauce and add and modify own content and can like or dislike other users sauces.

used npm middleware in this project.

1. app-root-path": for path using in project make it easy
2. bcrypt": "^5.0.1", for hash password
3. body-parser": "^1.19.0", for parsing data in body
4. express": "^4.17.1", express app module
5. helmet": "^4.6.0", for protecting app from missusing of access data
6. jsonwebtoken": "^8.5.1", its generating web token
7. mongoose": "^5.13.3", its plugin for connecting project to mongodb
8. mongoose-unique-validator": "^2.0.3", for validating email and password
9. morgan": "^1.10.0", used for http request logging logs
10. multer": "^1.4.2", used images format
11. winston": "^3.3.3" for project activity and error logs

This API allow users to modify and add the sauces and manage their account by following paths.

1. Subscribe to So-Pekocko - POST => http://localhost:3000/api/auth/signup
2. Connect to So-pekocko - POST => http://localhost:3000/api/auth/login
3. Display all the sauces - GET => http://localhost:3000/api/sauces
4. Display one of the sauces - GET => http://localhost:3000/api/sauces/:id
5. Record a sauce - POST => http://localhost:3000/api/sauces
6. Update one of the sauce - PUT => http://localhost:3000/api/sauces/:id
7. Delete one of the sauces - DELETE => http://localhost:3000/api/sauces/:id
8. Like or dislike one of the sauce - POST => http://localhost:3000/api/sauces/:id/like
