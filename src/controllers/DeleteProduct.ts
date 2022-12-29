import {Request,Response} from 'express'
import { prismaClient } from '../databases/prismaClient'

export class DeleteProduct{
    async handle(request:Request, response:Response){
    const {id}=request.params
    /*const Product=await prismaClient.productCategory.delete({
        where:{
            id: Number(id)
        },
    })*/
    const Product = await prismaClient.product.delete({
        where: {
           id:Number(id)
        },
      }) 
    response.json("registro excluído")
    }
}