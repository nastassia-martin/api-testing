import { describe, it, expect } from 'vitest'
import * as ProductsAPI from '../services/productsAPI'
import { CreateProduct } from '../types/product'

let product: CreateProduct = {
    // id: 1,
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
    it('should create a product', async () => {

        const newProduct = await ProductsAPI.createProduct(product)

        expect(newProduct).toMatchObject({
            status: "success",
            data: {
                id: expect.any(Number),
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
    })
    it('should create a product with price of 1 or more', async () => {
        let newPrice = { ...product }

        if (newPrice.price === 0) {
            newPrice.price = 1
        }

        const newProduct = await ProductsAPI.createProduct(newPrice)

        expect(newProduct.data.price).toBeGreaterThanOrEqual(1)
    })
    it('should not create a product where stock quantity is 1 or more', async () => {
        let newQty = { ...product }

        if (newQty.stock_quantity === 0) {
            newQty.stock_quantity = 1
        }

        const newProduct = await ProductsAPI.createProduct(newQty)
        expect(newProduct.data.stock_quantity).toBeGreaterThanOrEqual(1)
    })
    it('should create product & return that product', async () => {
        // create a new product
        const newProduct = await ProductsAPI.createProduct(product)
        // get that product id
        const createdProduct = await ProductsAPI.getProduct(newProduct.data.id)

        expect(createdProduct).toStrictEqual(newProduct)
        expect([createdProduct].length).toBe(1)
        expect(createdProduct.data.price).toBeGreaterThan(0)
        expect(createdProduct.data.name.length).toBeGreaterThanOrEqual(2)
        expect(createdProduct.data.description.length).toBeGreaterThanOrEqual(5)
        expect(createdProduct.data.price).toBeGreaterThanOrEqual(1)
        expect(createdProduct.data.images.thumbnail).toMatch(/png/)
        expect(createdProduct.data.images.large).toMatch(/png/)
    })
})