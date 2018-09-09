export class MyAuthService {
    private loggedIn: boolean = false;

    isAuthenticated() {
        const promiseObj = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn); ///means its value is false
            }, 2000)
        })
        return promiseObj;
    }

    login() {
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}