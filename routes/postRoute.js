const express = require('express')
const router = express.Router()
const { index,getPostById, createPost, updatePost, deletePost }  = require('../controllers/postController')

router.get('/', index)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/', updatePost)
router.delete('/', deletePost)

module.exports = router