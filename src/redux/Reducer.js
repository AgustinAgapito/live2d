import { UPDATE_PROFILE_PICTURE, CHANGE_EMAIL } from './Type'
import StudentDetails from '../components/StudentDetails/StudentDetails'

const reducer = (state=StudentDetails,action) => {
    switch(action.type) {
        case UPDATE_PROFILE_PICTURE:
            return state

        case CHANGE_EMAIL:
            const {currentEmail,newEmail,password} = action.payload
            let newState = [...state]
            const email = state.findIndex( i => i.email === currentEmail)
            let newArray = newState
            //newArray[email].email = newEmail
            newArray === "" ? newArray[email].email = currentEmail : newArray[email].email = newEmail
            console.log(newArray[email].email)
            console.log(newArray)
            return newState

        default:
            return state
    }
}

export default reducer