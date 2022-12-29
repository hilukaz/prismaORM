import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class FindProductController{
    async handle(request:Request, response:Response){
        const{id}=request.params;

        const Product=await prismaClient.product.findFirst({
            where:{
                id:Number(id)
            },
            include:{
                ProductCategory:true,
            }
        })

        if(!Product){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(Product)
    }    
}