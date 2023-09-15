import React, { Fragment } from 'react'
import { getSingleBook } from '../graphql-client/queries';
import { useQuery } from '@apollo/client'

function BookDetails({ bookId }) {
    // gui req toi BE 
    const { loading, error, data } = useQuery(getSingleBook, {
        variables: {
            id: bookId
        },
        skip: bookId === null
    });
    if (loading) { return <p>Loading book details...</p> }
    if (error) {
        console.log(error.message);
        return <p>Error loading book detail</p>
    }
    const book = bookId !== null ? data.book : null
    return (
        <Card bg='info' text='white' className='shadow'>
            <Card.Body>
                {book === null ? (
                    <Card.Text>Please select a book</Card.Text>
                ) : (
                    <Fragment>
                        {/* div giả nhom va tra ve nhieu thnah phan */}
                        <Card.Title>{book.name}</Card.Title>
                        <Card.Subtitle>{book.genre}</Card.Subtitle>
                        <p>{book.author.name}</p>
                        <p>Age: {book.author.age}</p>
                        <p>All books by this author</p>
                        <ul>
                            {book.author.books.map(book => (
                                <li key={book.id}>{book.name}</li>
                            ))}
                        </ul>
                    </Fragment>
                )}
            </Card.Body>
        </Card>
    )
}



export default BookDetails
