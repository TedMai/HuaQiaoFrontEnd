export class Verification {
    constructor(public requestId: string,
                public bizId: string,
                public phone: string,
                public verificationCode: string,
                public userId: number) {
    }
}

export class Message {
    constructor(public Code: string,
                public Message: string,
                public RequestId: string,
                public BizId: string) {
    }
}