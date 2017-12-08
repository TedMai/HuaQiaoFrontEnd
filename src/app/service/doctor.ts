export class Doctor {
    constructor(public id: number,
                public name: string,
                public title: string,
                public position: string,
                public resume: string,
                public field: string,
                public imageurl: string,
                public subordinate: number,
                public department: number) {
    }
}
