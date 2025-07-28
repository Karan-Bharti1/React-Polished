import { sum } from "../components/sum"

test("Sum function should calculate the sum of two numbers",()=>{
   const result= sum(5,67)
   //Assertion 
   expect(result).toBe(72)
})