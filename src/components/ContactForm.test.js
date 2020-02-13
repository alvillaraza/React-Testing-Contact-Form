import React from "react";
import ContactForm from "./ContactForm";
import { render } from "@testing-library/react";

test("First Name, Last Name, Email, Message", () => {
  const { getByLabelText } = render(<ContactForm />);
  getByLabelText(/firstName/i);
  getByLabelText(/lastName/i);
  getByLabelText(/email/i);
  getByLabelText(/message/i);
});

test("form submit adds info to the list", () => {
  const { getByLabelText, getByLabelText, getByTestId } = render(
    <ContactForm />
  );
  const firstNameInput = getByLabelText(/firstName/i);
  const lastNameInput = getByLabelText(/lastName/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);
});
