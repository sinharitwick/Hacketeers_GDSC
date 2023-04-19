const express = require('express')
var cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/user-routes')
const blogRouter = require('./routes/blog-routes')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(cors());
app.use(express.json());
app.use('/api/user', router); //http://localhost:5000/api/user
app.use('/api/blog', blogRouter); //http://localhost:5000/api/blog

//static files
app.use(express.static(path.resolve(__dirname, 'client', 'build', 'index.html')))

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

mongoose.connect(
    process.env.MONGO_URI
    ).then(() => app.listen(port)).then(() => console.log("Connected to DataBase and listening to port")).catch((err) => (console.log(err)));

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// })