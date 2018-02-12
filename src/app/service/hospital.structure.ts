/**
 * 医院
 */
export class Hospital {
    constructor(public id: number,
                public name: string,
                public description: string,
                public founding: string,
                public address: string,
                public contact: string,
                public axisX: number,
                public axisY: number) {

    }
}

/**
 * 图集
 */
export class Gallery {
    constructor(public id: number,
                public imageurl: string,
                public type: number,
                public relative: number) {
    }
}

/**
 * 科室
 */
export class Department {
    constructor(public did: number,
                public name: string,
                public description: string,
                public parent: number,
                public hospital: number) {
    }
}

/**
 * 医生
 */
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

/**
 * 预约挂号
 */
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

/**
 * 就诊人
 */
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

/**
 * 医生排班
 */
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

/**
 * 用户
 */
export class User {
    constructor(public uid: number,
                public phone: string,
                public password: string,
                public verificationCode: string,
                public passwordConfirm: string,
                public requestId: string,
                public bizId: string) {
    }
}