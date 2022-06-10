export const setLogIn = (user: { name: string, password: string }):Promise<Response> => {
    return fetch(`api/login?user=${JSON.stringify(user)}`)
}

export const getGames = ():Promise<Response> => {
    return fetch('/api/games');
}

export const getProviders = ():Promise<Response> => {
    return fetch('/api/providers');
}

export const getGroups = ():Promise<Response> => {
    return fetch('/api/groups');
}
