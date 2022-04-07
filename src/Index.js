const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()
const usuarios = require('./routes/usuariosRoute');
const sequelize = require('./db/dataBase');



(async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

//const 

const port = process.env.PORT || 3030;


//middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

//Routes
app.use('/usuario', usuarios)



//inicializacion Sever
app.listen(port, (req, res) => {

    console.log('Server on port ', port);

})