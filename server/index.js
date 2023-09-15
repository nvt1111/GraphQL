const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose')
const cors = require('cors')
// Load schema & resolver
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// load db methods
const mongoDataMethods = require('./data/db')

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/graphQL', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongoDataMethods }) // de resolve nhan dc context
});

const app = express();
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
})
