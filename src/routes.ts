import{Router}from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategory } from "./controllers/CreateProductCategory";
import { CreateProductController } from "./controllers/CreateProductController"
import { CreateProductToMany } from "./controllers/CreateProductToMany";
import { DeleteProduct} from "./controllers/DeleteProduct";
import { FindAllProducts } from "./controllers/FindAllProducts";
import { FindProductController } from "./controllers/FindProductController";
import { UpdateProduct } from "./controllers/UpdateProduct";

const router=Router();

const createProduct=new CreateProductController();
const createCategory=new CreateCategoryController();
const createRelationNN=new CreateProductCategory();
const createRelationN1=new CreateProductToMany();
const findProduct=new FindProductController();
const findAllProducts=new FindAllProducts();
const updateProduct=new UpdateProduct();
const deleteProduct=new DeleteProduct();

router.post("/product", createProduct.handle);
router.post("/category",createCategory.handle);
router.post("/productcategoryNN",createRelationNN.handle)
router.post("/productcategoryN1",createRelationN1.handle)
router.get("/find/:id",findProduct.handle)
router.get("/findAll",findAllProducts.handle)
router.put("/productUpdate/:id",updateProduct.handle)
router.delete("/productDelete/:id",deleteProduct.handle)


export {router};