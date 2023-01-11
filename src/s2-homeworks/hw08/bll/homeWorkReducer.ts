import {UserType} from "../HW8";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const initialPeople: UserType[] = [
    // студенты могут поменять имя/возраст/количество объектов, _id должны быть целочисленные
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state = initialPeople, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            if (action.payload === 'up') {
                return state.sort(function (a, b) {
                    let nameA = a.name.toLowerCase()
                    let nameB = b.name.toLowerCase()
                    return nameA > nameB ? 1 : -1

                })
            }
            if (action.payload === 'down') {
                return state.sort(function (a, b) {
                    let nameA = a.name.toLowerCase()
                    let nameB = b.name.toLowerCase()
                    return nameA < nameB ? 1 : -1
                })
            }
            return 0
            // need to fix
        }
        case 'check': {

            return state.filter(e => e.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
