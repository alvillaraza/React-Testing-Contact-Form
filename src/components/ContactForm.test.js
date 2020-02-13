import React from "react";
import ContactForm from "./ContactForm";
import { render, getByTestId, fireEvent } from "@testing-library/react";

test("First Name, Last Name, Email, Message are being rendered", () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/first Name/i);
  getByLabelText(/last Name/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test("form submit adds info to the list", () => {
  const { getByLabelText, getByText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/first Name/i);
  const lastNameInput = getByLabelText(/last Name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, { target: { value: "Test firstName" } });
  fireEvent.change(lastNameInput, { target: { value: "Test lastName" } });
  fireEvent.change(emailInput, { target: { value: "Test email" } });
  fireEvent.change(messageInput, { target: { value: "Test message" } });

  expect(firstNameInput.value).toBe("Test firstName");
  expect(lastNameInput.value).toBe("Test lastName");
  expect(emailInput.value).toBe("Test email");
  expect(messageInput.value).toBe("Test message");

  fireEvent.click(getByText(/submit/i));
});
