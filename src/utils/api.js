class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json()
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    login(login, password) {
        return fetch(`${this._baseUrl}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: login,
                password: password,
                // expiresInMins: 60, // optional
            })
        })
            .then(this._checkRes)
    }
}

const api = new Api({
    baseUrl: 'https://dummyjson.com'
})

export default api