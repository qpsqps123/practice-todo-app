import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

test("Page", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading).toBeInTheDocument();
});
