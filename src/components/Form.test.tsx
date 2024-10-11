import { render, screen, fireEvent } from "@testing-library/react";
import { Form } from "./Form";

describe("Form Component", () => {
  it("renders the header", () => {
    render(<Form />);
    expect(screen.getByText(/Select your ISA/i)).toBeInTheDocument();
  });

  it("first button exists, is disabled, and becomes enabled on selecting the first radio", () => {
    render(<Form />);

    const firstButton = screen.getByRole("button", { name: /submit/i });
    expect(firstButton).toBeInTheDocument();
    expect(firstButton).toBeDisabled();

    const directRadio = screen.getByLabelText(/yes/i);
    fireEvent.click(directRadio);

    expect(firstButton).toBeEnabled();

    fireEvent.click(firstButton);

    const secondButton = screen.getByText(/select isa/i);
    expect(secondButton).toBeInTheDocument();
  });
});
