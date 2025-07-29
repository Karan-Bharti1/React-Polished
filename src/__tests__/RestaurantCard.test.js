import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOffersCard } from "../components/RestaurantCard";
import { MOCK_DATA } from "../mocks/resCardMock";
describe("Restaurant cards Test Data", () => {
  it("Should render Restaurant Cards with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const res = screen.getByText("Goila Butter Chicken");
    expect(res).toBeInTheDocument();
  });

  it("Should Render Higher Order Component", () => {
    const RestaurantWithOffer = withOffersCard(RestaurantCard);
    render(<RestaurantWithOffer resData={MOCK_DATA}/>)
    const res=screen.getByText(/OFF/)
    expect(res).toBeInTheDocument()
  });
  
});
