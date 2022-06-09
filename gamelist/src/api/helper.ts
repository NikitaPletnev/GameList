export const setLogIn = (user: { name: string, password: string }) => {
    return fetch(`api/login?user=${JSON.stringify(user)}`)
}

export const getGames = () => {
    return fetch('/api/games');
}
