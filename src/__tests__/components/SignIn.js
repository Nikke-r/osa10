import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import {SignInContainer} from '../../components/SignIn';

describe("SignIn", () => {
    it("Is called once with right arguments", async () => {
        const onSubmit = jest.fn();

        const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

        fireEvent.changeText(getByTestId("usernameField"), "kalle");
        fireEvent.changeText(getByTestId("passwordField"), "password");
        fireEvent.press(getByTestId("submitButton"));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });
});