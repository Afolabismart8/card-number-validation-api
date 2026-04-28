require("dotenv").config();
import express, {Request, Response} from "express";
const app = express(); 
app.use(express.json());  //parse middleware
import cardRoute from "./routes/card.route"; //cardRoute


//This is a testRoute to be sure App is running Live
app.get("/", (req:Request,res:Response) => {
    res.status(200).json({
        status:"Success",
        message:"Card Validation Api is Running"
    });

});

//Api
app.use("/api", cardRoute);


//Server
const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running live on ${PORT}`)
});