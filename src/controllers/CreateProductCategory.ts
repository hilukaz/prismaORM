import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class CreateProductCategory{
    async handle(request:Request, response:Response){
        const{id_product,id_category}=request.body;

        const productCategory=await prismaClient.productCategory.create({
            data:{
                product: { connect: { id:Number(id_product) } },
                category: { connect: { id: Number(id_category) } },
            }
        })

        return response.json(productCategory)
    }    
}