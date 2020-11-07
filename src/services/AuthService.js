export default class AuthService {
    static isAuthenticated() {
        return !!localStorage.getItem('auth-token-nokr');
    }

    static getToken() {
        return localStorage.getItem('auth-token-nokr') ?? '';
    }

    static removeToken() {
        localStorage.removeItem('auth-token-nokr');
    }

    static setToken(token) {
        localStorage.setItem('auth-token-nokr', token);
    }

    static async login(data) {
        const response = await fetch(
            'api/user/login',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
        ).then(data => data.json());
    }

    static logout() {
        fetch('api/user/logout').then(() => this.removeToken());
    }
}
