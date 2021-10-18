const express = require('express');
const app = express();
const mysql = require('mysql');
const myconnect = require('express-myconnection');
const rutas = require('./routes');
const cors = require('cors')



app.set('port', process.env.PORT || 4000)
const dboptions = {
 host: 'localhost',
 user: 'root',
 password: 'socrates95',
 database: 'componentes'


}

/* Middlewares */
app.use(myconnect(mysql,dboptions,'single'))
app.use(express.json())
app.use(cors())


/* ROUTES---------------------------------------------- */

app.use(('/'),rutas)



/* PORT--------------------------------------------------- */
app.listen(app.get('port'), () => {
  console.log('Aplicación ejemplo, escuchando el puerto',app.get('port'));
});