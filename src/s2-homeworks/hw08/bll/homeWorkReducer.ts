import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortState = [...state]
            if (action.payload === 'up') {
                sortState.sort((a, b) => a.name.localeCompare(b.name))
            }
            if (action.payload === 'down') {
                sortState.sort((a, b) => b.name.localeCompare(a.name))
            }
            return sortState
        }
        case 'check': {
            return state.filter((people) => people.age >= 18)
        }
        default:
            return state
    }
}

