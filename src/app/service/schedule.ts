export class Schedule {
    constructor(public id: number,
                public doctor: number,
                public leftNumber: number,
                public openNumber: number,
                public registerFee: number,
                public medicalFee: number,
                public visiting: string,
                public section: number) {
    }

}