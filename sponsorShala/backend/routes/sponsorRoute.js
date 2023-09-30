import express from 'express';
import { Sponsor } from '../models/sponsorsModel.js';

const router = express.Router();

//Route for getting all sponsors from database
router.get('/', async (request, response) =>{
    try{
        const sponsors = await Sponsor.find({});
        console.log(sponsors);
        return response.status(200).json({
            count: sponsors.length,
            data: sponsors,
        });
    }catch(error){
        console.log(error.message);
        response.status(500).send( {message:error.message} );
    }
    // res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

//Route for getting a specific book using it's id
/* router.get('/:id', async (request, response) =>{
    try{
        const {id}  = request.params;
        if(!id){
            return response.status(400).json({ message: 'Invalid ID' });
        }
        // console.log("Received id: " + id); 

        const sponsor = await Sponsor.findById(id);
        return response.status(200).json(sponsor);
    }catch(error){
        console.log(error.message);
        response.status(500).send( {message:error.message} );
    }
}); */

//Route to post a book in the database
router.post('/', async(request, response) =>{
    try{
        if(!request.body.orgName || 
            !request.body.orgType || 
            !request.body.industry
            ){
                console.log("HERE ERR")
                return response.status(400).send({
                message: 'Send all required fields: orgName, orgType, industry, budget',
            });
        }
        const newSponsor = {
            orgName: request.body.orgName,
            orgType: request.body.orgType,
            industry: request.body.industry,
            budget: request.body.budget || null,
        };

        const sponsor = await Sponsor.create(newSponsor);
        console.log(newSponsor);

        return response.status(201).send(sponsor);
    } 
    catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
})

//Route to update a book
/* router.put('/:id', async(request, response)=>{
    try{
        if(!request.body.organisation_name || 
            !request.body.organisation_type || 
            !request.body.industry
        ){
            return response.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = request.params;
        const result = await Sponsor.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).json({message: 'Sponsor not found.'});
        }

        return response.status(200).send({
            message: 'Sponsor updated successfully.',
            id: `${id}`,
            organisation_name: `${request.body.organisation_name}`
        });
    }
    catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
}) */

//Rout for deleting a book by id
/* router.delete('/:id', async (request, response)=>{
    try{

        const { id } = request.params;
        const result = await Sponsor.findByIdAndDelete(id);

        if(!result){
            return response.status(404).json({message: 'Sponsor not found.'});
        }

        return response.status(200).send({ message: 'Sponsor deleted successfully.'});

    }catch (error){
        console.log(error.message);
        response.status(500).send( {message: error.message} );
    }
}) */

export default router;