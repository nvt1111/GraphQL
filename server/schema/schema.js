// Sườn CSDL
const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}

	type Author {
		id: ID! 
		name: String
		age: Int
		books: [Book]
	}

	# ROOT TYPE (Loại Gốc)
	type Query { # Read data in csdl
		books: [Book] # ds những book
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

    # Ghi data vao csdl
	type Mutation {
		createAuthor(name: String, age: Int): Author
		createBook(name: String, genre: String, authorId: ID!): Book
	}
`

module.exports = typeDefs