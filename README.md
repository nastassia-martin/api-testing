[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-8d59dc4de5201274e310e4c54b9627a8934c3b88527886e3b421487c677d23eb.svg)](https://classroom.github.com/a/YWHAa-L-)
# FED22 Testning - Inlämningsuppgift 2

API-testing med Vitest, axios och jest.

## Instruktioner

1. Klona detta repo
2. Gå in i mappen
3. Kör `npm install`
4. Starta ditt Bortakväll-API
5. Kopiera `.env.example` till `.env` och fyll i URL:en till ditt Bortakväll-API
6. Skapa tester enligt kravspecifikationen
7. Kör testerna
    - Kör `npm test` för att köra testerna
    - Kör `npm test:verbose` för att köra testerna i verbose-läge
    - Kör `npm test:ui` för att köra testerna i UI-läge (se resultatet i en webbläsare)
    - Kör `npm coverage` för att få en test coverage rapport

MY NOTES

Questions: 
1/ in service folder can't env property doesn't exist on import.meta obj
    ✅ solved : add "types": [ "node", "vite/client" ] in tsconfig
2/ not sure what type to give images, have given obj for now
    ✅ solved : modified to add thumbnail & large img inside img obj



STEPS TO TAKE:
1. Go to API PRISMA folder and in the terminal type this command: npm run dev - 
2. Go to MAMP & run MAMP
3. install axios
4. create routes for products & orders
5. create types for products & orders
6. create funcs for products & orders & link in appropriate service folders
7. start testing 😎

Testing: what do i need to test? 
[x] GET all products
[x] CREATE a product
[x] CREATE & GET a product

[x] GET all orders
[x] CREATE an order
[] CREATE & GET an order


What I have done so far: 
1.✅	 run dev in API Prisma folder 
2.✅	 Run MAMP
3.✅	 installed axios
4.✅	 create orders & products service with axios
5.✅	create types for orders & products 
6. add types into services: 
✅ products,
✅ orders
7. Attempted first test, but products came back as undefined. Why? 
Explanation: 
what we get back is an obj which contains two properties: success & data.
Status is a boolean & Data contains the list of products. 
Therefore types must be modified to reflect this - a new type whcih contains status & product arr. 
Note the products service must be updated. 

TODO on Thursday 22/03
✅create CreateOrder
✅ tests for orders (2/3)
_ further tests for products

TODO on Friday 23/03
- update order type to make sure i can pass in ID to to getOrder()
- tidy up order types, chaos! 
- test to return created order
_further tests for products & orders
