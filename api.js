const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
let cedula;
app.use(cors());

app.get('/cedula', (req, res) => {
  const nuevaCedula = req.query.cedula;

  cedula = nuevaCedula;

  const url = `http://www.cne.gob.ve/web/registro_electoral/ce.php?nacionalidad=V&cedula=${cedula}`;

  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Ha ocurrido un error al realizar la solicitud.');
    });

});



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`La API está funcionando en el puerto ${port}`));
