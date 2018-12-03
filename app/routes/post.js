let post = require('../controllers/post')
let auth = require('../controllers/auth')

module.exports= function(app){
    app.get('/api/posts', post.getPosts)
    app.get('/api/posts/:id', post.getPostById)
    app.get('/api/posts/like/:id', post.likePost)
    app.post('/api/posts', post.inserirPost)
    app.put('/api/posts/:id', post.updatePostById)
    app.delete('/api/posts/:id', post.removePostById)
}