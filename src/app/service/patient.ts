export class Patient {
    constructor(public pid: number,
                public name: string,
                public sex: string,
                public birthday: string,
                public identity: string,
                public phone: string,
                public address: string,
                public uid: number,
                public isDefault: boolean) {
    }
}