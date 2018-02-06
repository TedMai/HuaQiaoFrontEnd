export class Patient {
    constructor(public pid: number,
                public name: string,
                public sex: number,
                public birthday: string,
                public identity: string,
                public phone: string,
                public address: string,
                public uid: number,
                public isDefault: number) {
    }
}