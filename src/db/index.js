import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title: {type: String},
    image: {type: String},
    description: {type: String},
})

const book = mongoose.model('book', bookSchema)

const getBooks = ()=> {
    return book.find
}

const createBook = (values)=> {
    return new book(values).save()
    .then((book)=>{book.toObject()})
}

const updateBook = (id, values)=>{
    return book.findByIdAndUpdate(id, values)
}

const deleteBook = (id)=>{
    return book.findByIdAndDelete(id)
}

export {
    book, 
    getBooks, 
    createBook, 
    updateBook, 
    deleteBook,
}