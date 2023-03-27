import { describe, it, expect } from 'vitest'
import * as OrdersAPI from '../services/ordersAPI'
import { CreateOrder } from '../types/order'

let order: CreateOrder = {
    //id,
    customer_first_name: "baba",
    customer_last_name: "didi",
    customer_address: "1234 lalalland",
    customer_postcode: "12345",
    customer_city: "Malmö",
    customer_email: "baba@didi.com",
    order_total: 24,
    order_items: [
        {
            product_id: 6545,
            qty: 3,
            item_price: 8,
            item_total: 24
        },
    ]
}

describe('OrdersAPI', () => {
    it('should return a list of all orders', async () => {
        // get a list of orders: getOrders
        const orders = await OrdersAPI.getOrders()

        expect(orders.status).toBe("success")
        expect(Array.isArray(orders.data)).toBe(true)
        expect([orders].length).toBeGreaterThan(0)
    })

    it('should create a new order', async () => {
        const newOrder = await OrdersAPI.createOrder(order)

        expect(newOrder.status).toBe("success")
        expect(newOrder.data).toMatchObject({
            id: expect.any(Number),
            customer_first_name: order.customer_first_name,
            customer_last_name: order.customer_last_name,
            customer_address: order.customer_address,
            customer_postcode: order.customer_postcode,
            customer_city: order.customer_city,
            customer_email: order.customer_email,
            order_total: order.order_total,
            Items: order.order_items
        })
        expect([newOrder].length).toBe(1)
    })

    it('should create and then return that order', async () => {

        const newOrder = await OrdersAPI.createOrder(order)
        const createdOrder = await OrdersAPI.getOrder(newOrder.data.id) // need to get the ID from the order, so must include in type

        expect(createdOrder.data).toStrictEqual(newOrder.data)
        expect((createdOrder.data.customer_first_name).length).toBeGreaterThanOrEqual(2)
        expect((createdOrder.data.customer_last_name).length).toBeGreaterThanOrEqual(2)
        expect((createdOrder.data.customer_address).length).toBeGreaterThanOrEqual(5)
        expect((createdOrder.data.customer_postcode).length).toBeGreaterThanOrEqual(5)
        expect((createdOrder.data.customer_email)).toMatch(/^\S+@\S+\.\S+$/)
        expect((createdOrder.data.order_total)).toBeGreaterThanOrEqual(1)
        expect((createdOrder.data.Items)?.length).toBeGreaterThanOrEqual(1)
        expect(createdOrder.data.Items?.[0].item_price).toBeGreaterThanOrEqual(1)
        expect(createdOrder.data.Items?.[0].item_total).toBeGreaterThanOrEqual(1)
        expect(createdOrder.data.Items?.[0].qty).toBeGreaterThanOrEqual(1)
        expect(createdOrder.data.Items?.[0].product_id).toBeDefined()
    })
})