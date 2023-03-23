import { describe, it, expect } from 'vitest'
import * as ProductsAPI from '../services/productsAPI'
import { CreateProduct } from '../types/product'

let product: CreateProduct = {
    id: 1,
    name: "test",
    description: "description",
    price: 12,
    on_sale: false,
    images: {
        thumbnail: "/storage/products/1997509.png",
        large: "/storage/products/thumbnails/1997509-300x300.png"
    },
    stock_status: "instock",
    stock_quantity: 1,
}

describe('ProductsAPI', () => {
    it('should return a list of products', async () => {
        // get list of all products: getProducts
        const products = await ProductsAPI.getProducts()

        expect(products.status).toBe("success")
        expect(Array.isArray(products.data)).toBe(true)
        expect([products].length).toBeGreaterThan(0)
    })

    it('should return one product', async () => {
        const id = 5216
        // get one product
        const product = await ProductsAPI.getProduct(id)

        expect(product.data).toBeDefined()
    })

    it.todo('should create a product', async () => {

        const newProduct = await ProductsAPI.createProduct(product)

        expect(newProduct).toMatchObject({
            status: "success",
            data: {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                on_sale: product.on_sale,
                images: {
                    thumbnail: product.images.thumbnail,
                    large: product.images.large
                },
                stock_status: product.stock_status,
                stock_quantity: product.stock_quantity,
            }

        })
        expect(newProduct.status).toBe("success")
        expect([newProduct].length).toBe(1)
        // expect product arr to be 1 longer than before, 
    })

    it.todo('should create product & return that product', async () => {
        // create a new product
        const newProduct = await ProductsAPI.createProduct(product)
        // get that product
        const createdProduct = await ProductsAPI.getProduct(product.id)

        expect(createdProduct).toStrictEqual(newProduct)
        // expect product arr to be 1 longer than before

    })
})