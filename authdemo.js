//Demo of using Auth0 to login users before allowing access to endpoints
//to step through this, see James Quick's video tutorial at https://www.youtube.com/watch?v=QQwo4E_B0y8

const express = require('express');
const data = require("./data"); //from data array created to fetch different api. ./means you need it from current directory
const app = express();
require('dotenv').config(); 

const { auth, requiresAuth } = require('express-openid-connect');
app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL : process.env.ISSUER_BASE_URL,
        baseURL : process.env.BASE_URL,
        clientID : process.env.CLIENT_ID,
        secret : process.env.SECRET,
        idpLogout : true,
    })
);

// req.isAuthenticated is provided from auth router 
app.get('/', (request, response) => {
    response.send(request.oidc.isAuthenticated() ? 'Logged in': 'Logged out');
});

app.get('/profile', requiresAuth(), (request, response) => {
    response.send(JSON.stringify(request.oidc.user));
});

//added to protect API request - dont come with express open id 
app.get('/user/by-uid', requiresAuth(), (request, response) => {  // userbyuid is an endpoint, it fetch data from data.js using function getuserbyuserid
    let user = data.get_user_by_user_id(request.query.user.id);
    response.status(200).send(user);
});

const port = process.env.PORT || 3000;  //setting value of port here. IF any there use the PORT otherwise use 3000
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
});