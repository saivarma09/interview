
let initialState = {
    name: '',
    email: '',
    mobile: ''
}

// dispatch({type:'name', payload:'sai'})
export function userReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case 'name': {
            return { ...state, name: action.payload };
        }
        case 'email': {
            return { ...state, name: action.payload };
        }
        case 'mobile': {
            return { ...state, name: action.payload };
        }
        default: {
            return state
        }
    }

}