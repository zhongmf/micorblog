var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* post newHtml. */
router.post('/newHtml', function(req, res) {
  var myDate = new Date();
  var fileName = "zmf_" + myDate.toLocaleDateString()+".html";
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("content-disposition", "attachment;filename=" + fileName);
  var str = "<!DOCTYPE html>";
  str += "<head>";
  str += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
  str += '<meta name="Keywords" content="'+req.body.keywords+'">';
  str += '<meta name="description" content="'+req.body.description+'">';
  str += '<meta charset="utf-8">';
  str += '<link href="http://apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">';
  str += '<script type="text/javascript" src="http://apps.bdimg.com/libs/jQuery/2.0.0/css/jquery.min.js"></script>';
  str += '<script type="text/javascript" src="http://apps.bdimg.com/libs/bootstrap/3.3.4/js/bootstrap.min.js"></script>';
  str += '<style>pre{border-left: 5px solid #ccc;}</style>'
  str += '</head>';
  str += '<body>';
  str += req.body.htmlStr;
  str += '</body>';
  str += '</html>';
  res.send(str);
});

/* post saveModelHtml */
router.post('/saveModelHtml', function(req, res) {
  var myDate = new Date();
  var fileName = "model_zmf_" + myDate.toLocaleDateString()+".html";
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("content-disposition", "attachment;filename=" + fileName);
  var str = req.body.htmlStr;
  res.send(str);
});

/* 读取文件 */
router.post('/readModelHtml', function(req, res) {
  var fileName = "model_zmf_" + myDate.toLocaleDateString()+".html";
  res.setHeader("Content-Type", "application/octet-stream");
  res.setHeader("content-disposition", "attachment;filename=" + fileName);
  var str = req.body.htmlStr;
  res.send(str);
});
module.exports = router;
