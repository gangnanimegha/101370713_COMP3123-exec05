const express = require('express');
const app = express();
const router = express.Router();

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  // res.send('This is home ');
  res.sendFile(__dirname + '/home.html');

});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  // res.send('This is profile router';
  res.json({
    status: true,
    message: "User details from user.json"
  });
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
// */
// router.get('/login', (req,res) => {
//   // res.send('This is login router');
//   const { username, password } = req.query;

  router.get('/login', (req, res) => {
    // Extract username and password from query parameters
    const { username, password } = req.query;

    const validUsername = 'meghagangani';

  
    // Check username and password validity (replace this with your logic)
    if (username === 'meghagangani' && password === 'Pawpatrol7!') {
      res.json({
        status: true,
        message: "User is valid"
      });
    } else if (username !== 'meghagangnani') {
      res.json({
        status: false,
        message: "Username is invalid"
      });
    } else {
      res.json({
        status: false,
        message: "Password is invalid"
      });
    }
  });


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  // res.send('This is logout router');
  const { username } = req.query;

  res.send(`<b>${username} successfully logged out.<b>`);

});

app.use('/', router);

app.listen(process.env.port || 8088);

console.log('Web Server is listening at port '+ (process.env.port || 8088));