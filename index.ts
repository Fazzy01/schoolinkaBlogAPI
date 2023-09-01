import express from 'express';
const postRoute = require("./routes/postRoute");
const adminRoute = require("./routes/adminRoute");

// express app 
const app = express();

//  these MD must be used before post data or json from API would be delivered
app.use(express.json());
app.use(express.urlencoded({extended : true})); 



//  -------------------------------------
//      ROUTES
// --------------------------------------
// post route.
app.use('/api/post', postRoute);
// admin route.
app.use('/admin', adminRoute);


// listen to requests
const server = app.listen(3003) ;

// testing
// function main() {
//     console.log("testing Jamiu Fawaz") ;
// }

// main() ;