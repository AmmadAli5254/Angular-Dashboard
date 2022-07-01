const books = require('../controllers/userController')

module.exports = (app) => {
    app.route("/users")
        .get(books.findAll)
        .post(books.create)
    
    app.route("/users/:id")
        .get(books.findOne)
        .put(books.update)
        .delete(books.delete)
}