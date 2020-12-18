import { UPDATE_PROFILE_PICTURE, CHANGE_EMAIL } from './Type'

export const updateProfilePic = () => {
    return {
        type: UPDATE_PROFILE_PICTURE
    }
}

export const updateEmail = (values) => {
    return {
        type: CHANGE_EMAIL,
        payload: values
    }
}