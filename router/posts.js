var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;


// GET /posts
router.get('/', function(req, res, next) {
  res.render('posts');
});

// POST /posts
router.post('/', function (req, res, next) {
	res.send(req.flash());
});

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function (req, res, next) {
	res.send(req.flash())
});

// GET /posts/:postId 单独一篇文章页
router.get('/:postId', function (req, res, next) {
	res.send(req.flash())
});

// GET /posts/:postId/edit 更新文章页
router.get('/:postId/edit', checkLogin, function (req, res, next) {
	res.send(req.flash())
});

// POST /posts/:postId/edit 更新一篇文章
router.post('/:postId/edit', checkLogin, function (req, res, next) {
	res.send(req.flash())
})

// GET /posts/:postId/remove 删除一篇文章
router.get('/:posiId/remove', function (req, res, next) {
	res.send(req.flash())
})

module.exports = router;