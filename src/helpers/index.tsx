const USER_SESSION_KEY = 'REACT_VAPORS_SESSION_CREDENTIALS';
const TOKEN_KEY = 'REACT_VAPORS_ACCESS_TOKEN';

export function saveSession(credentials: any) {
    localStorage.setItem(USER_SESSION_KEY, JSON.stringify(credentials));
    return true;
}
export function getSession() {
    let session = localStorage.getItem(USER_SESSION_KEY);
    return session ? JSON.parse(session) : undefined;
}
export function deleteSession() {
    localStorage.removeItem(USER_SESSION_KEY);
    return true;
}
export function isSession() {
    let session = localStorage.getItem(USER_SESSION_KEY);
    return !!session;
}

export function saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
    return true;
}

export function getToken() {
    let token = localStorage.getItem(TOKEN_KEY);
    return token || '';
}

export function deleteToken() {
    localStorage.removeItem(TOKEN_KEY);
    return true;
}
