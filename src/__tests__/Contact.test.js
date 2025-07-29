import { render,screen } from "@testing-library/react"
import Contact from "../pages/Contact"
import "@testing-library/jest-dom"
describe("Contact Us Page",()=>{
   
test ("Should load heading in contact us component",()=>{
    render(<Contact/>) // renders on the jest-dom
   const heading= screen.getByRole("heading")
  expect(heading).toBeInTheDocument();
})

test("Should load button in contact us component",()=>{
    render (<Contact/>)
    const button=screen.getByRole("button")
    expect(button).toBeInTheDocument()
})

test("Should load input name in contact us component",()=>{
    render (<Contact/>)
    const name=screen.getByPlaceholderText("name")
    expect(name).toBeInTheDocument()
})
test("Should load  2 input boxes in contact us component",()=>{
    render (<Contact/>)
    const input=screen.getAllByRole("textbox")
    expect(input.length).toBe(2)
})
})

