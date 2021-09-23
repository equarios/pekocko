# pekocko
sauce

move to backend and type npm start 
move to frontend and type npm start
after running frontend and backend both 
we gonna see sign up and login page so here when we click on sign up or sign in it will go to routes/user.js after this it will go to middlewares/checkdatasignup.js
it will confirm here that user is already exists or not and email and password is correct or not if its matched then you can sign up or login 
if got any error then you can see error message

used npm middleware in this project
app-root-path": for path using in project make it easy 
bcrypt": "^5.0.1", for hash password
body-parser": "^1.19.0", for parsing data in body 
express": "^4.17.1", express app module
helmet": "^4.6.0", for protecting app from missusing of access data
jsonwebtoken": "^8.5.1", its generating web token
mongoose": "^5.13.3", its plugin for connecting project to mongodb
mongoose-unique-validator": "^2.0.3", for validating email and password
morgan": "^1.10.0", used for http request logging logs
multer": "^1.4.2", used images format
winston": "^3.3.3" for project activity and error logs