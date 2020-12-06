export const login = (user) => dispatch => {
    dispatch({ type: 'LOGGED_IN', payload:user })
}