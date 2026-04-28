import {Request, Response} from "express";
import { validateCardService } from "../services/card.service";

export const validateCard = (req:Request, res:Response) => {
    try { const {cardNumber} = req.body;

    //Check if cardNumber exist
    if(cardNumber === null || cardNumber === undefined ) 
        { return res.status(400).json({status:"false", message:"CardNumber is required"})};

    //check if cardNumber is a String
    if (typeof cardNumber !== "string")
        { return res.status(400).json({status:"false", message:"CardNumber must be a string"})};

    //check the length of the cardNumber
    const cleanedCardNumber = cardNumber.replace(/\D/g, "");
    if(cleanedCardNumber.length < 12 || cleanedCardNumber.length > 19) {
        return res.status(400).json({status:"false", message:"CardNumber should be between 12 and 19"})};

    //call service layer (business logic)
    const isValid = validateCardService(cleanedCardNumber);
        return res.status(200).json({
        status:"true",
        data:{
            cardNumber:cleanedCardNumber,
            Valid:isValid
         },
    });
    }

    //catch error
    catch (error) {
        return res.status(500).json({
            status:"False",
            message:"Internal Server error"
        });
    }
};