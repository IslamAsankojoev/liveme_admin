import { AuthProvider } from 'react-admin';
import Cookies from 'js-cookie'

// http://179.61.188.39:8000
// @ts-ignore
const authProvider: AuthProvider = {
    // @ts-ignore
    login: async ({ username, password }) => {
        const request = new Request(`${process.env.REACT_APP_API}/api/login/`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                Cookies.set('auth', auth.access);
            })
            .catch(() => {
                throw new Error('Network error')
            });

    },
    logout: () => {
        Cookies.remove('auth');
        return Promise.resolve();
    },
    // @ts-ignore
    checkAuth: () => Cookies.get('auth')
        ? Promise.resolve({ redirect: '/users' })
        : Promise.reject({ message: 'login.required' }),

    // @ts-ignore
    getIdentity: () => {
        try {
            // @ts-ignore
            const token = Cookies.get('auth');
            return Promise.resolve(token);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default authProvider;