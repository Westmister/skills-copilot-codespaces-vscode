// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules.
var comment_controller = require('../controllers/commentController');

/// COMMENT ROUTES ///

// GET request for list of all Comment items.
router.get('/', comment_controller.comment_list);

// GET request for creating a Comment.
router.get('/create', comment_controller.comment_create_get);

// POST request for creating Comment.
router.post('/create', comment_controller.comment_create_post);

// GET request to delete Comment.
router.get('/:id/delete', comment_controller.comment_delete_get);

// POST request to delete Comment.
router.post('/:id/delete', comment_controller.comment_delete_post);

// GET request to update Comment.
router.get('/:id/update', comment_controller.comment_update_get);

// POST request to update Comment.
router.post('/:id/update', comment_controller.comment_update_post);

// GET request for one Comment.
router.get('/:id', comment_controller.comment_detail);

module.exports = router;