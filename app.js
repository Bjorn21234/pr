module.exports={
    appPort:3000,
    mongoUri:"mongodb://localhost:27017/online-store",
    jwt: {
        Secret:"AddMach",
        tokens:{
            access:{
                type:"access",
                express:"2m"
            },
            refresh:{
               type:"refresh",
               express:"3m"
            },
        },
    },
    }
