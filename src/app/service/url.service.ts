const PROTOCOL = 'http://';
const HOST = 'localhost:4200';
const API = '/backbone';
const PREFIX = PROTOCOL + HOST + API;

export class UrlService {
    static FetchTableList(name: string): string {
        return PREFIX + '/table/' + name;
    }

    static QueryRelatives(name: string, id: number): string {
        return PREFIX + '/table/' + name + '/relatives/' + id;
    }

    static searchTable(name: string, field: string, term: string): string {
        return PREFIX + '/table/' + name + '/field/' + field + '/term/' + term;
    }
}
