import ApprovalForm from ".";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { AppContext } from "../../Context/context";



describe("ApprovalForm", () => {
  it("renders a ApprovalForm", () => {
    render(
        <AppContext.Provider value={{
            state: {
                currentImage: null,
                rejectedImages: []
            },
            dispatch: jest.fn()
        }}>
    <ApprovalForm />
    </AppContext.Provider>
    );
    expect(screen.getByText("Add Image")).toBeInTheDocument();
  });

  it("should render approval form with Image and without the Add Image button when currentImage Url is present", () => {
    const { container } = render(
        <AppContext.Provider value={{
            state: {
                currentImage: {
                    url: "https://www.test.com",
                    id: 'jsdhjsdjh'
                },
                rejectedImages: []
            },
            dispatch: jest.fn()
        }}>
    <ApprovalForm />
    </AppContext.Provider>
    );
    expect(container.querySelector("img")).toBeInTheDocument();
  });

})