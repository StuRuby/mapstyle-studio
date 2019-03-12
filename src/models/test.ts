/**
 * This is test code ,will be removed in the next
 */
import { createModel } from '@rematch/core';

const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

type testState = number;

export const test = createModel({
    state: 0,
    reducers: {
        increment: (state: testState) => state + 1,
    },
    effects: (dispatch) => ({
        async incrementAsync() {
            await delay(500);
            dispatch.test.increment();
        },
    }),
});
