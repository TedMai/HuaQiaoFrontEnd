const PROTOCOL = 'http://';
const HOST = 'localhost:4200';
const API = '/backbone';
const PREFIX = PROTOCOL + HOST + API;

export class UrlService {
    // public __FETCH_DEPARTMENT_LIST__: string;
    // public __QUERY_SPECIFIC_DEPARTMENT__: string;
    //
    // constructor() {
    //     this.__FETCH_DEPARTMENT_LIST__ = PREFIX + '/table/department';
    //     this.__QUERY_SPECIFIC_DEPARTMENT__ = PREFIX + '/table/department';
    // }

    FetchDepartmentList(): string {
        return PREFIX + '/table/department';
    }

    QuerySpecificDepartment(id: number): string {
        return PREFIX + '/table/department/id/' + id;
    }
}