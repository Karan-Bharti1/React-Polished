import { act } from "react";
import Menu from "../pages/Menu";
import { BrowserRouter } from "react-router-dom";
import MOCK_Data from "../mocks/menuMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import UserContext from "../utils/UserContext";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../pages/Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: MOCK_Data,
        },
      }),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <UserContext.Provider value={{ loggedInUser: "Test User" }}>
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <Menu />
            <Cart />
          </BrowserRouter>
        </Provider>
      </UserContext.Provider>
    );
  });
  const acordHead = screen.getByText(/Desserts & Cupcakes /);
  expect(acordHead).toBeInTheDocument();
  fireEvent.click(acordHead);
  const items = screen.getAllByTestId("items");
  expect(items.length).toBe(9);
  const addButton = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addButton[0]);
  const cart = screen.getByText("Cart(1)");
  expect(cart).toBeInTheDocument();
  const cartRender = screen.getAllByTestId("items");
  expect(cartRender.length).toBe(10);
  const empty = screen.getByText("Empty Cart");
  fireEvent.click(empty);
  const cartReRender = screen.getAllByTestId("items");
  expect(cartReRender.length).toBe(9);
});
