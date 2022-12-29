import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class UpdateProduct{
    async handle(request:Request, response:Response){
        const{id}=request.params
        const{name,bar_code,price}=request.body;

        let Product=await prismaClient.product.findFirst({
            where:{
                id:Number(id)
            }
        })
        if(!Product){
            return response.json({
                error:"não existe o produto"
            })
        }

        Product=await prismaClient.product.update({
            where:{
                id:Number(id)
            },
            data:{
                bar_code,
                name,
                price,
            }
        })

        return response.json(Product)
    }    
}