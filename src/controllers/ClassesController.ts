import { Request, Response} from 'express';
import db from '../database/connection';

export default class ClassesContorller{

    //index - listagem 
    //create - criação
    
    async index( request:Request, response: Response){
         const users = await db('users')

          return response.json(users)

    }

    async create (request:Request, response:Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            
    
        } = request.body

            
        const trx = await db.transaction();
    
        try{
            const insertuserIDs = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertuserIDs[0]
        
            const insertClassesIDs = await trx('classes').insert({
                subject,
                cost,
                user_id
            })
        
            const class_id = insertClassesIDs[0]
        
            await trx.commit()
            return response.status(201).send()
        }catch(err){
            console.log(err)
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}