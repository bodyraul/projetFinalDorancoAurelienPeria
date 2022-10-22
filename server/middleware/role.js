const jtw = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        jtw.verify(token,"aurelien",(err,payload)=>{
            if(err){
                return res.status(401).json("Vous n'avez pas l'autorisation d'acceder à cette page");
            }
            if(payload.role !="admin"){
                return res.status(401).json("Vous n'avez pas l'autorisation d'acceder à cette page");
            }
            
            req.payload =payload;
            next();
        })
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = auth;