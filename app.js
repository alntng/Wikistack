const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const urlenccodedParser = bodyParser.urlencoded({extended: true});
const layout = require('./views/layout')

const models = require('./models')

const app = express()

const PORT = 1337;

app.use(express.static('views'))



app.get('/', (req,res) =>{
    res.send(layout())
})

const init = async () => {
    await models.db.sync({force:true})
    // await models.Page.sync()

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
      });
}

init()




// db.authenticate().
// then(() => {
//   console.log('connected to the database (app.js)');
// })


