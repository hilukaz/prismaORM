import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class FindAllProducts{
    async handle(request:Request, response:Response){
    try {
        const Product = await prismaClient.product.findMany({})
        return response.json(Product)
        
    } catch (error) {
        return response.json(error)
    }
        
    }    
}