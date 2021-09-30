const products=require("../app/controllers/products")
const auth=require('../app/controllers/auth')
const {sigIn} = require("../app/controllers/auth");
const authMiddleware=require("../app/middleware/auth")

module.exports=(app)=>{
    app.get("/product", authMiddleware,products.getAll)
    app.post("/product",authMiddleware, products.create);
    app.put("/product/:id",authMiddleware,products.update)
    app.delete("/product/:id",authMiddleware, products.remove)


    //auth

    app.post('/signin,',auth.sigIn())
    app.post("/refresh-tokens",auth.refreshTokens())
}