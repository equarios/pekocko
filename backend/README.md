# So-Pekocko's web application

**Piquante** is an So-Pekocko's application that lets you **view, create and rate sauces uploaded by other users**. This github repository represents the creation of a **private API** whose purpose will be to manipulate the information of the sauces or to store them according to the authentication of the user.

## Requirement

It is a **private API** requiring authentication for all operations on the information it handles. To do this, in order to authenticate yourself and access all these features, you must download the source code of the *[frontend web application](https://github.com/OpenClassrooms-Student-Center/dwj-projet6.git)*.
From your download folder, open a terminal console to run ng serve to access the development server. Then, go to *[So-pekocko application web](http://localhost:4200/)*.

## Installation for windows

To install the API, please perform the following procedure:
1. Clone this folder in a directory of your choice from the *[address of the repository](https://github.com/Jonathan-admin/So-Pekocko.git)*.
2. In your preferred text editor, open a console terminal and execute the `npm install` command to install all the modules necessary for the application to work.
3. Finally, start the server with the `node server` command. The API should be reachable and usable from the url address of the *[So-pekocko web application](http://localhost:4200/)* (frontend application already developed by another team).


## Installation for UNIX systems

The procedure is the same but some additional actions are necessary.

On Linux, the bcrypt v4 version already installed seems to pose compatibility problems and prevents the application from working correctly. It is very likely that you will encounter the same problem on MAC OS.
To this kind of problem:
* Update the node version to **version 12 or higher** and check that it is installed correctly: 
  * `wget -qO- https://deb.nodesource.com/setup_12.x | sudo -E bash -`
  * `sudo apt install -y nodejs`            (ubuntu commands only)
  * `node -v`
* **Manually remove bcrypt from the package.json file.** Then, execute the `npm install` command to install all the dependencies necessary for the operation of the application.
* To finish, run `npm install --save bcript` to get the latest version (v5) and `node server` to start backend server.
  
## Piquante API operations

This API allows authenticated users to consult and record the sauces of other users and manage their own. These features will be implemented from the frontend application. She will be in charge of contacting the API to perform user actions and all this thanks to HTTP requests. Below you will find the routes used to carry out these operations.
* *Subscribe to So-Pekocko - POST* => [http://localhost:3000/api/auth/signup](http://localhost:3000/api/auth/signup)
* *Connect to So-pekocko - POST* => [http://localhost:3000/api/auth/login](http://localhost:3000/api/auth/login)
* *Display all the sauces - GET* => [http://localhost:3000/api/sauces](http://localhost:3000/api/sauces)
* *Display one of the sauces - GET* => [http://localhost:3000/api/sauces/:id](http://localhost:3000/api/sauces/:id)
* *Record a sauce - POST* => [http://localhost:3000/api/sauces](http://localhost:3000/api/sauces)
* *Update one of the sauce - PUT* => [http://localhost:3000/api/sauces/:id](http://localhost:3000/api/sauces/:id)
* *Delete one of the sauces - DELETE* => [http://localhost:3000/api/sauces/:id](http://localhost:3000/api/sauces/:id)
* *Like or dislike one of the sauce - POST* => [http://localhost:3000/api/sauces/:id/like](http://localhost:3000/api/sauces/:id/like)
