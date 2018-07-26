var express = require('express');
var router = express.Router();
const mongodb = require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'PAGINA DE USUARIO'});
});

router.get('/listar', function(req, res) {
  var MongoClient = mongodb.MongoClient;
  var url = 'mongodb://localhost:27017/user_db';

  MongoClient.connect(url, { useNewUrlParser: true}, function(err, client) {
    const collection = client.db('user_db').collection('users');

    collection.find({}).toArray(function(err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        console.log(result);
        res.render('userlist', {userlist : result})
      } else {
        res.send("Nothing found here!")
      }

      client.close();
    });
  })
})



module.exports = router;
