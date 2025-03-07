const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/chromex.html'));
  //__dirname : It will resolve to your project folder.
});

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

// serve static files
// app.use(express.static('images'));
// app.use(express.static('videos'));
app.use(express.static('.'));

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');