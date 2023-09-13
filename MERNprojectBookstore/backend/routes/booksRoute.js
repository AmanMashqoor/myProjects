import express from 'express';
import {Book} from '../models/bookModel.js';

const router = express.Router();

//Route for getting all books from database
router.get('/', async (request, response) =>{
    try{
        const books = await Book.find({});
        return response.status(200).json({
            count: books.length,
            data: books,
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send( {message:error.message} );
    }
});

//Route for getting a specific book using it's id
router.get('/:id', async (request, response) =>{
    try{
        const {id}  = request.params;
        if(!id){
            return response.status(400).json({ message: 'Invalid ID' });
        }
        console.log("Received id: " + id); 

        const book = await Book.findById(id);
        return response.status(200).json(book);
    }catch(error){
        console.log(error.message + '\nError in file booksRoute.js @line 32');
        response.status(500).send( {message:error.message} );
    }
});

//Route to post a book in the database
router.post('/', async(request, response) =>{
    try{
        if(!request.body.title || 
            !request.body.author || 
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };

        const book = await Book.create(newBook);

        return response.status(201).send(book);
    } 
    catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
})

//Route to update a book
router.put('/:id', async(request, response)=>{
    try{
        if(!request.body.title || 
            !request.body.author || 
            !request.body.publishYear
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Book not found.'});
        }

        return response.status(200).send({
            message: 'Book updated successfully.',
            id: `${id}`,
            title: `${request.body.title}`
        });
    }
    catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
})

//Rout for deleting a book by id
router.delete('/:id', async (request, response)=>{
    try{

        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Book not found.'});
        }

        return response.status(200).send({ message: 'Book deleted successfully.'});

    }catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
})

export default router;