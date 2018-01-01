export class User {
    constructor(public uid: number,
                public phone: string,
                public password: string,
                public verificationCode: string,
                public passwordConfirm: string) {
    }
}