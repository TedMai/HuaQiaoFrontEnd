import {Injectable} from '@angular/core';
// Only implements params and part of snapshot.paramMap
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RouterStub {
}

@Injectable()
export class ActivatedRouteStub {

    // // ActivatedRoute.paramMap is Observable
    // private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
    // paramMap = this.subject.asObservable();
    //
    // // Test parameters
    // private _testParamMap: ParamMap;
    // get testParamMap() {
    //     return this._testParamMap;
    // }
    //
    // set testParamMap(params: {}) {
    //     this._testParamMap = convertToParamMap(params);
    //     this.subject.next(this._testParamMap);
    // }
    //
    // // ActivatedRoute.snapshot.paramMap
    // get snapshot() {
    //     return {paramMap: this.testParamMap};
    // }

    // ActivatedRoute.data
    private _repo = new BehaviorSubject(
        {
            hospitalDetailResolver: {
                hospital: `[{}]`,
                gallery: `[]`
            },
            departmentListResolver: [],
            relativeDoctorsResolver: {doctors: `[]`},
            appointmentDetailResolver: {
                appointment: `[
                            {"rid":"3sQ2Yhd0IiaEB3FbF3DaKeOlnzB6cbPy",
                            "appointment":"2018-02-09T09:31:24.000Z",
                            "status":0,
                            "visiting":"2018-03-01T16:00:00.000Z",
                            "section":0,
                            "registerFee":1.11,
                            "medicalFee":128.56,
                            "name":"哈哈",
                            "identity":"350303198544526685",
                            "phone":"18159393355",
                            "doctorName":"黄淑萍",
                            "departmentName":"妇产科"}
                            ]`
            },
            relativeAppointmentsResolver: {
                appointments: `[]`
            },
            myProfileResolver: [{phone: '12345678900'}],
            relativePatientsResolver: {
                patients: `[]`
            },
            relativeSchedulesResolver: []
        });
    data = this._repo.asObservable();
}
