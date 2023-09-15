// resolver return data for query
const { mongoDataMethods } = require('../data/db')

const resolvers = {
    // QUERY
    Query: {
        books: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks(),
        book: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getBookById(id),
        authors: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllAuthors(),
        author: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(id)

    },

    // parent: ket qua cua query cha
    // voi moi book ta co:
    Book: {
        author: async ({ authorId }, args, { mongoDataMethods }) => { // co { phair return
            return await mongoDataMethods.getAuthorById(authorId)
        }
    },

    Author: {
        books: async ({ id }, args, { mongoDataMethods }) => {
            return await mongoDataMethods.getAllBooks({ authorId: id })
        }
    },

    // MUTATION
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createBook(args)
    }
}

module.exports = resolvers

// args {
//     id
//     name
//     age
// }