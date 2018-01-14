// import React from 'react';

import { reducer } from './index';
import { checkAnswer, initialize, restart } from '../Actions';

describe('Reducer', () => {
    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, { type: 'UNKNOWN_TYPE_TEST' });
        expect(state).toBe(currentState);
    });

    describe('initialize', () => {
        it('Should initialize the state', () => {
            let state = {
                count: 0,
                history: [],
                feedback: "let's play!",
                guess: '',
            };

            state = reducer(state, initialize());
            expect(state.count).toEqual(0);
            expect(state.history).toEqual([]);
            expect(state.feedback).toEqual("let's play!");
            expect(state.guess).toEqual('');
        })
    });

    describe('restart', () => {
        it('Should restart the game', () => {
            let state = {
                count: 0,
                history: [],
                feedback: "let's play!",
                guess: '',
            };

            state = reducer(state, restart());
            expect(state.count).toEqual(0);
            expect(state.history).toEqual([]);
            expect(state.feedback).toEqual("let's play!");
            expect(state.guess).toEqual('');
        });
    });

    describe('checkAnswer', () => {
        it('Should check the answer', () => {
            let state = {
                randomNumber: 42,
                count: 0,
                history: [],
                feedback: '',
                guess: ''
            };

            state = reducer(state, checkAnswer(21));
            expect(state.guess).toEqual(21);
            expect(state.feedback).toEqual("Cold");

            state = reducer(state, checkAnswer(25));
            expect(state.guess).toEqual(25);
            expect(state.feedback).toEqual("Warm");

            state = reducer(state, checkAnswer(40));
            expect(state.guess).toEqual(40);
            expect(state.feedback).toEqual("Hot");

            state = reducer(state, checkAnswer(42));
            expect(state.feedback).toEqual("You Won!");
        });
    });
});

