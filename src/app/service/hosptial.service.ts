import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

import {Department} from './department';
import {UrlService} from './url.service';
import {Appointment} from './appointment';

// const httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
// };

@Injectable()
export class HospitalService {

    constructor(private http: HttpClient) {
    }

    querySpecificHospital(id: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QuerySpecific('hospital', id))
            .pipe(
                catchError(this.handleError('querySpecificHospital', {}))
            );
    }

    fetchDepartmentList(): Observable<Department[]> {
        return this.http
            .get<Department[]>(UrlService.FetchTableList('department'))
            .pipe(
                catchError(this.handleError('fetchDepartmentList', []))
            );
    }

    searchDepartments(term: string): Observable<Department[]> {
        if (!term.trim()) {
            return of([]);
        }

        return this.http
            .get<Department[]>(UrlService.SearchTable('department', 'name', term.trim()))
            .pipe(
                catchError(this.handleError('searchDepartments', []))
            );
    }

    queryRelativeDoctors(departmentId: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('doctor', departmentId.toString()))
            .pipe(
                catchError(this.handleError('queryRelativeDoctors', []))
            );
    }

    queryRelativeSchedules(doctorId: number): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('schedule', doctorId.toString()))
            .pipe(
                catchError(this.handleError('queryRelativeSchedules', []))
            );
    }

    queryRelativePatients(openid: string): Observable<any> {
        return this.http
            .get<any>(UrlService.QueryRelatives('patient', openid))
            .pipe(
                catchError(this.handleError('queryRelativePatients', []))
            );
    }

    sendVerificationCode(phone: string): Observable<any> {
        return this.http
            .get<any>(UrlService.SendSms(phone, 0))
            .pipe(
                catchError(this.handleError('sendVerificationCode', []))
            );
    }

    makeAppointment(appointment: Appointment): Observable<any> {
        return this.http
            .post<any>(UrlService.Insert('appointment'), appointment)
            .pipe(
                catchError(this.handleError('makeAppointment', []))
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
