const addSingleBook = gql`
mutation addSingleBookMutation(
    $name: String, 
    $genre: String, 
    $authorId: ID!)
    {
    createBook {
        id
        name
    }
}
`
export { addSingleBook }