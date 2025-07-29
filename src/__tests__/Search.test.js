import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../pages/Body";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { MOCK_RESTAURANTS } from "../mocks/bodyMock";
import "@testing-library/jest-dom"

jest.mock("../utils/useRestaurantData", () => () => ({
  restaurantLists: MOCK_RESTAURANTS,   
  filteredList: MOCK_RESTAURANTS,
  setFilteredList: jest.fn(),
}));

describe("Body Component Tests", () => {
  it("Should load search button", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );

  
    const searchBtn = screen.getByTestId("search-btn");
    const res=screen.getAllByTestId("resCard")
    const searchInput=screen.getByRole("textbox")
    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(searchBtn)
    
    const filteredRest=screen.getAllByTestId("resCard")
  
    expect(filteredRest.length).toBe(20)
  });
});
