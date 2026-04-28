import { isValidCardNumber } from "../utils/luhn";
describe("Luhn Algorithm test", ()=>{
    it("should return true for a valid card number", ()=> {
        expect(isValidCardNumber("4539578763621486")).toBe(true)
    });

    it("should return false for an invalid card number", ()=>{
        expect(isValidCardNumber("1234567890123456")).toBe(false)
    });

})