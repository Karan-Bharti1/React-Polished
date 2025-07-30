import "@testing-library/jest-dom"
import {screen, render} from "@testing-library/react"
import OfflineDisplay from "../components/OfflineDisplay"

test("Testing Offline Component",()=>{
    render(<OfflineDisplay/>)
    const offlineDisplay=screen.getByText(/Please Check your Internet Connection/)
expect(offlineDisplay).toBeInTheDocument()
})



