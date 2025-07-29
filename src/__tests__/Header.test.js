import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../utils/UserContext"; // <- import your context

describe("Testing Header Component", () => {
  it("Should Load Component with Login button and Cart value as 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login 👤" });
    expect(loginButton).toBeInTheDocument();

    const cartLink = screen.getByText(/Cart/);
    expect(cartLink).toHaveTextContent("Cart(0)");

    const userText = screen.getByText("Test User");
    expect(userText).toBeInTheDocument();
  });

  it("Should Change Login button to logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login 👤" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout 👤" });
    expect(logoutButton).toBeInTheDocument();
  });
  test("Testing The About Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <UserContext.Provider value={{ loggedInUser: "Test User" }}>
            <Header />
          </UserContext.Provider>
        </Provider>
      </BrowserRouter>
    );
    const About = screen.getByText("About");
    expect(About).toBeInTheDocument();
  });
});
