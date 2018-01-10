export class Appointment {
    constructor(public rid: string,
                public schedule: number,
                public patient: number,
                public appointment: string,
                public requestId: string,
                public bizId: string,
                public phone: string,
                public verificationCode: string) {
    }
}
