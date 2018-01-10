import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

import {Department} from './department';
import {UrlService} from './url.service';
import {Appointment} from './appointment';
import {User} from './user';
import {Patient} from './patient';

// const httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable()
export class HospitalService {

    /**
     * 构造函数
     * 依赖注入 HttpClient 服务
     * @param http
     */
    constructor(private http: HttpClient) {
    }

    /**
     * 获取指定医院的信息
     *  传入参数
     *      --  医院 ID
     * @param id
     * @returns {Observable<{}|any>}
     */
    querySpecificHospital(id: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QuerySpecific('hospital', id))
            .pipe(
                catchError(this.handleError('querySpecificHospital', {}))
            );
    }

    /**
     * 获取所有科室列表
     * @returns {Observable<Array|any>}
     */
    fetchDepartmentList(): Observable<Department[]> {
        return this.http
            .get<Department[]>(UrlService.FetchTableList('department'))
            .pipe(
                catchError(this.handleError('fetchDepartmentList', []))
            );
    }

    /**
     * 搜索功能 - 找科室
     *  传入参数
     *      --  搜索词
     * @param term
     * @returns {any}
     */
    searchDepartments(term: string): Observable<Department[]> {
        // 搜索词为空
        // 直接返回 []
        if (!term.trim()) {
            return of([]);
        }

        return this.http
            .get<Department[]>(UrlService.SearchTable('department', 'name', term.trim()))
            .pipe(
                catchError(this.handleError('searchDepartments', []))
            );
    }

    /**
     * 查询当前科室下的所有医生列表
     *  传入参数
     *      --  科室  ID
     * @param departmentId
     * @returns {Observable<Array|any>}
     */
    queryRelativeDoctors(departmentId: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('doctor', departmentId))
            .pipe(
                catchError(this.handleError('queryRelativeDoctors', []))
            );
    }

    /**
     * 查询当前医生的排班信息
     *  传入参数
     *      --  医生 ID
     * @param doctorId
     * @returns {Observable<Array|any>}
     */
    queryRelativeSchedules(doctorId: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('schedule', doctorId))
            .pipe(
                catchError(this.handleError('queryRelativeSchedules', []))
            );
    }

    /**
     * 查询当前用户所关联的预约病人列表信息
     *  传入参数
     *      --  uid
     * @param uid
     * @returns {Observable<Array|any>}
     */
    queryRelativePatients(uid: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('patient', uid))
            .pipe(
                catchError(this.handleError('queryRelativePatients', []))
            );
    }

    /**
     * 发送验证码短信
     *  传入参数
     *      --  接收电话号码
     * @param phone
     * @returns {Observable<Array|any>}
     */
    sendVerificationCode(phone: string): Observable<any> {
        return this.http
            .get<any>(UrlService.SendSms(phone, 0))
            .pipe(
                catchError(this.handleError('sendVerificationCode', []))
            );
    }

    /**
     * 发送确认短信
     *  传入参数
     *      --  接收电话号码
     * @param phone
     * @returns {Observable<Array|any>}
     */
    sendConfirmMessage(phone: string): Observable<any> {
        return this.http
            .get<any>(UrlService.SendSms(phone, 1))
            .pipe(
                catchError(this.handleError('sendConfirmMessage', []))
            );
    }

    /**
     * 生成预约挂号单
     *  传入参数
     *      --  排班 ID
     *      --  预约人 ID
     * @param appointment
     * @returns {Observable<Array|any>}
     */
    makeAppointment(appointment: Appointment): Observable<any> {
        return this.http
            .post<any>(
                UrlService.Insert('appointment'),
                {
                    schedule: appointment.schedule,
                    patient: appointment.patient,
                    requestId: appointment.requestId,
                    bizId: appointment.bizId,
                    phone: appointment.phone,
                    verificationCode: appointment.verificationCode
                }
            )
            .pipe(
                catchError(this.handleError('makeAppointment', []))
            );
    }

    /**
     * 新增就诊人
     * @param patient
     * @returns {Observable<Array|any>}
     */
    addNewPatient(patient: Patient): Observable<any> {
        return this.http
            .post<any>(
                UrlService.Insert('patient'),
                {
                    name: patient.name,
                    sex: parseInt(patient.sex),
                    // birthday: new Date(),
                    identity: patient.identity,
                    phone: patient.phone,
                    address: patient.address,
                    isDefault: patient.isDefault,
                    uid: patient.uid
                }
            )
            .pipe(
                catchError(this.handleError('makeAppointment', []))
            );
    }

    /**
     * 登录
     *  -   形式：统一账户
     * @param user
     * @param action
     * @returns {Observable<Array|any>}
     */
    login(user: User, action: string): Observable<any> {
        return this.http
            .post<any>(
                UrlService.Login('union', action),
                {
                    phone: user.phone,
                    password: user.password,
                    verificationCode: user.verificationCode,
                    requestId: user.requestId,
                    bizId: user.bizId
                }
            )
            .pipe(
                catchError(this.handleError('login', {}))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
