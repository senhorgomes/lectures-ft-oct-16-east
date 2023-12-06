import React from 'react';

import Game from '../Game';

import { render, prettyDOM, fireEvent } from '@testing-library/react'

describe('Testing for cheat mode', ()=> {
    test('change cheat state to true when clicking on robot icon', ()=> {
        const {container, getByTestId} = render(<Game />)
        // console.log(prettyDOM(container));
        // A way to select the robot icon
        const robotIcon = getByTestId('robot-icon');
        // We need to click on the icon
        fireEvent.click(robotIcon);
        // We need to have a way to know if the state is active or not
        // If the icon is clicked, cheating state will be set to true, and the span element will have a className called cheating
        expect(robotIcon).toHaveClass('cheating');
    })
    test('turn off cheat state if the robot icon is clicked twice', ()=> {
        const {container, getByTestId} = render(<Game />)
        // console.log(prettyDOM(container));
        // A way to select the robot icon
        const robotIcon = getByTestId('robot-icon');
        // We need to click on the icon
        fireEvent.click(robotIcon);
        // We need to have a way to know if the state is active or not
        // If the icon is clicked, cheating state will be set to true, and the span element will have a className called cheating
        expect(robotIcon).toHaveClass('cheating');

        fireEvent.click(robotIcon);

        expect(robotIcon).not.toHaveClass('cheating');
    })
    test('activates cheating mode, and verifies that the player loses when selecting Rock', ()=> {
        const {container, getByTestId} = render(<Game />)
        // console.log(prettyDOM(container));
        // A way to select the robot icon
        const robotIcon = getByTestId('robot-icon');
        // We need to click on the icon
        fireEvent.click(robotIcon);
        // We need to have a way to know if the state is active or not
        // If the icon is clicked, cheating state will be set to true, and the span element will have a className called cheating
        expect(robotIcon).toHaveClass('cheating');
        // Player selection to be made
        const playerSelection = getByTestId("Rock")
        fireEvent.click(playerSelection)
        // If cheating is implented correctly, the result text should be "Too bad! Better luck next time."
        const loserMessage = getByTestId("game_result")
        // console.log(prettyDOM(container))
        expect(loserMessage.innerHTML).toBe("Too bad! Better luck next time.")
    })
    test('activates cheating mode, and verifies that the player loses when selecting Paper', ()=> {
        const {container, getByTestId} = render(<Game />)
        // console.log(prettyDOM(container));
        // A way to select the robot icon
        const robotIcon = getByTestId('robot-icon');
        // We need to click on the icon
        fireEvent.click(robotIcon);
        // We need to have a way to know if the state is active or not
        // If the icon is clicked, cheating state will be set to true, and the span element will have a className called cheating
        expect(robotIcon).toHaveClass('cheating');
        // Player selection to be made
        const playerSelection = getByTestId("Paper")
        fireEvent.click(playerSelection)
        // If cheating is implented correctly, the result text should be "Too bad! Better luck next time."
        const loserMessage = getByTestId("game_result")
        // console.log(prettyDOM(container))
        expect(loserMessage.innerHTML).toBe("Too bad! Better luck next time.")
    })
    test('activates cheating mode, and verifies that the player loses when selecting Scissors', ()=> {
        const {container, getByTestId} = render(<Game />)
        // console.log(prettyDOM(container));
        // A way to select the robot icon
        const robotIcon = getByTestId('robot-icon');
        // We need to click on the icon
        fireEvent.click(robotIcon);
        // We need to have a way to know if the state is active or not
        // If the icon is clicked, cheating state will be set to true, and the span element will have a className called cheating
        expect(robotIcon).toHaveClass('cheating');
        // Player selection to be made
        const playerSelection = getByTestId("Scissors")
        fireEvent.click(playerSelection)
        // If cheating is implented correctly, the result text should be "Too bad! Better luck next time."
        const loserMessage = getByTestId("game_result")
        // console.log(prettyDOM(container))
        expect(loserMessage.innerHTML).toBe("Too bad! Better luck next time.")
    })
})