// resolver return data for query
const { books, authors } = require('../data/static')
const resolvers = {
    // QUERY
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id.toString() === args.id),
        authors: () => authors,
        author: (parent, args) => authors.find(author => author.id.toString() === args.id),
    },
    // parent: ket qua cua query cha
    // voi moi book ta co:
    Book: {
        author: (parent, args) => {
            return authors.find(author => author.id.toString() === parent.authorId)
        }
    },
    Author: {
        books: (parent, args) => {
            return books.filter(book => book.authorId.toString() === parent.id)
        }
    },

    // MUTATION
    Mutation: {
        createAuthor: (parent, args) => args,
        // args {
        //     id
        //     name
        //     age
        // }
        createBook: (parent, args) => args
    }
}

module.exports = resolvers