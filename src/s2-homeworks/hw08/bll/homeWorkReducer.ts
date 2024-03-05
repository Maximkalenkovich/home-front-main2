import {UserType} from '../HW8'
import {Simulate} from "react-dom/test-utils";
import abort = Simulate.abort;

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const copyState = [...state];

            if (action.payload === 'up') {
                copyState.sort(function (a, b) {
                    return a.name.localeCompare(b.name);
                });
            } else {
                copyState.sort(function (a, b) {
                    return b.name.localeCompare(a.name);
                });
            }

          return copyState
        }

        case 'check': {
            return state.filter(a => a.age >= 18)
        }

        default:
            return state;
    }
};
