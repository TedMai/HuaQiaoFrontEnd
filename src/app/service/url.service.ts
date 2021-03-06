const PROTOCOL = 'https://';
// const PROTOCOL = 'http://';
const HOST = 'www.thinmelon.cc';
// const HOST = 'localhost:4200';
const API = '/backbone';
const PREFIX = PROTOCOL + HOST + API;

export class UrlService {
    static FetchTableList(name: string): string {
        return PREFIX + '/table/' + name;
    }

    static QuerySpecific(name: string, id: string): string {
        return PREFIX + '/table/' + name + '/id/' + id;
    }

    static QueryRelatives(name: string, id: number): string {
        return PREFIX + '/table/' + name + '/relatives/' + id;
    }

    static SearchTable(name: string, field: string, term: string): string {
        return PREFIX + '/table/' + name + '/field/' + field + '/term/' + term;
    }

    static FetchImage(relative: string): string {
        return PREFIX + '/image/screenshot/' + relative;
    }

    static SendSms(phone: string, type: number): string {
        return PREFIX + '/sms/' + phone + '/type/' + type;
    }

    static Insert(name: string): string {
        return PREFIX + '/table/' + name;
    }

    static Update(name: string, id: string): string {
        return PREFIX + '/table/' + name + '?id=' + id;
    }

    static Delete(name: string, id: string): string {
        return PREFIX + '/table/' + name + '/id/' + id;
    }

    static Login(type: string, action: string): string {
        return `${ PREFIX }/login/type/${ type }/action/${ action }`;
    }
}
