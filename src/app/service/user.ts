export class User {
    constructor(public uid: number,
                public phone: string,
                public password: string,
                public verificationCode: string,
                public passwordConfirm: string,
                /*** 验证码 ***/
                public requestId: string,
                public bizId: string) {
    }
}