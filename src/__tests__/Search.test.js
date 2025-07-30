import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../pages/Body";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { MOCK_RESTAURANTS } from "../mocks/bodyMock";
import "@testing-library/jest-dom"
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANTS),
  })
);

describe("Body Component Tests", () => {
  it("Should load search button", async() => {
    await act(async()=>{
render(
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );
    })
    const restCardBefore=screen.getAllByTestId("resCard")
    expect(restCardBefore.length).toBe(20)
const input=screen.getByPlaceholderText("Search Restaurant or Cuisine")
expect(input).toBeInTheDocument()
fireEvent.change(input,{target:{value:"burger"}})
const searchbtn=screen.getByTestId("search-btn")
fireEvent.click(searchbtn)
const resCardsAfter=screen.getAllByTestId("resCard")
expect(resCardsAfter.length).toBe(4)
  
    
  });
  it("Should Load Top Rated Restaurants",async()=>{
    await act(async()=>{
        render( <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>)
    })
    const topRatedRestaurantBefore=screen.getAllByTestId("resCard")
    expect(topRatedRestaurantBefore.length).toBe(20)
    const topRatedButton=screen.getByText(/Top rated/)
    expect(topRatedButton).toBeInTheDocument()
    fireEvent.click(topRatedButton)
    const topRatedRestaurantsAfter=screen.getAllByTestId("resCard")
    expect(topRatedRestaurantsAfter.length).toBe(13)
  })
});
describe("Body Component Offline Mode", () => {
  beforeAll(() => {
    // Force navigator.onLine to be false
    Object.defineProperty(window.navigator, "onLine", {
      configurable: true,
      get: () => false,
    });
  });

  it("Should render OfflineDisplay when offline", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    );

  
    const offlineMessage = screen.getByText(/Please Check your Internet/i); 
    expect(offlineMessage).toBeInTheDocument();
  });
});
