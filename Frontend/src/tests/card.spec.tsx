import { Card } from "../components/Card";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("should render card correctly", () => {
    const wrapper = render(
      <Card description="Test description" onRemove={() => {}} />
    );

    expect(wrapper.getByText("Test description")).toBeInTheDocument();
  });

  it("should be able to delete card"),() => {
      const onRemove = vi.fn();

      const wrapper = render(
        <Card
          description="Test description"
          onRemove={() => {
            onRemove;
          }}
        />
      );

      const user = userEvent.setup()

      const deleteButton = wrapper.getByRole("svg");

      user.click(deleteButton);
      expect(onRemove).toHaveBeenCalled();
    };
});
