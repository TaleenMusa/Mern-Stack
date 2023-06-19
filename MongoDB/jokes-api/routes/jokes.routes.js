const JokesController = require('../controllers/Jokes.controller');
 
module.exports = app => {
    app.get('/api/Jokes', JokesController.findAllJokes);
    app.get('/api/Jokes/:id', JokesController.findOneSingleJoke);
    app.put('/api/Jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/Jokes', JokesController.createNewJoke);
    app.delete('/api/Jokes/:id', JokesController.deleteAnExistingJoke);
}
