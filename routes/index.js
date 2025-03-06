const { decodeBase64 } = require('bcryptjs');
const { json } = require('body-parser');
var express = require('express');
var router = express.Router();
const mysql = require('mysql')
// const db = require('../app')
const md5 = require('md5');
const { query } = require('express');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.get('/welcome',(req,res)=>{
  res.render('welcome',{title:'Welcome'});
});
router.get('/usersinfo',(req,res)=>{
  res.render('usersinfo',{title:'UserInfo'});
});





module.exports = router;
