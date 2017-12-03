export class Department {
    constructor(public did: number,
                public name: string,
                public description: string,
                public parent: number,
                public hospital: number) {
    }

}