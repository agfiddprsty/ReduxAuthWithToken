const initialState = {
    token: [],
    user: [],
    Fetching: false,
    Fetched: false,
    Error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        // case login
        case "LOGIN_PENDING":
            return {
                ...state, Fetching: true
            }

        case "LOGIN_FULFILLED":
            return {
                ...state,
                Fetching: false, Fetched: true,
                token: [action.payload.data.token],
                user: [action.payload.data.user]
            }

        case "LOGIN_REJECTED":
            return {
                ...state, Error: true, Fetching: false

            }

        // case logout
        case "LOGOUT":
            return {
                ...state,
                token: [], user: []
            }


        // case register
        case "REGISTER_PENDING":
            return {
                ...state, Fetching: true
            }

        case "REGISTER_FULFILLED":
            return {
                ...state,
                Fetching: false, Fetched: true,
                token: [action.payload.data.token.token],
                user: [action.payload.data.user]
            }

        case "REGISTER_REJECTED":
            return {
                ...state, Error: true, Fetching: false

            }
        default:
            return state
    }
}