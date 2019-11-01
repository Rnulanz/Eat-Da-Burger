                                            # Eat-Da-Burger

![Image description](/public/assets/img/eatdaburger.png)


Description:

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the Materialize framework and the backend implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user may enter any burger that they would like to add to the menu and possibly devour later. This also adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the column on the right and updates its devoured statue in MySql database. 

_Directory structure_

All the files and directories below are recommended:

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│       |    └── burger.png
│       |___js
│           |___ burgers.js
|
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars



Demo:

    https://intense-mesa-30751.herokuapp.com/

Link to GitHub:

    https://github.com/Rnulanz/Eat-Da-Burger.git

    Make Sure to install all dependencies with npm install before launching the app.
