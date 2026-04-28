import { isValidCardNumber }  from "../utils/luhn";
export const validateCardService = (cardNumber: string) :boolean => {
    return isValidCardNumber (cardNumber);
};