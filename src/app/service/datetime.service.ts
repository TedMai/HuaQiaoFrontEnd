export class DatetimeService {
    static FormatNumber(n: number) {
        const num = n.toString();
        return num[1] ? num : '0' + num;
    }

    static FormatTime(date: Date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const prefix = [year, month, day].map(DatetimeService.FormatNumber).join('/');
        const post = [hour, minute, second].map(DatetimeService.FormatNumber).join(':');

        return prefix + ' ' + post;
    }

    static FormatDate(date: Date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        return [year, month, day].map(DatetimeService.FormatNumber).join('-');
    }
}
