import {DatetimeService} from './datetime.service';

enum AppointmentStatus{
    SUCCESS = 0,
    CANCEL,
    COMPLETE,
    INVALID
}

export class Record {
    constructor(public rid: string,
                public appointment: string,
                public departmentName: string,
                public doctorName: string,
                public visiting: string,
                public section: string,
                public status: string,
                /**
                 * 预约挂号详情
                 * 附加的数据字段
                 */
                public medicalFee: number,
                public name: string,
                public identity: string,
                public phone: string) {
    }

    static FormatAppointmentDetails = appointments => {
        return appointments.map(item => {
            /**
             * 时间格式转换为日期
             */
            item.appointment = DatetimeService.FormatTime(new Date(item.appointment));
            item.visiting = DatetimeService.FormatDate(new Date(item.visiting));
            /**
             * 时间段转换为上/下午
             */
            if (item.section === 0) {
                item.section = '上午';
            } else {
                item.section = '下午';
            }
            /**
             * 订单状态
             */
            switch (item.status) {
                case AppointmentStatus.SUCCESS:			// 	预约成功
                    item.status = '	预约成功';
                    break;
                case AppointmentStatus.CANCEL:			// 	已取消
                    item.status = '	已取消';
                    break;
                case AppointmentStatus.COMPLETE:		// 	已就诊
                    item.status = '	已就诊';
                    break;
                case AppointmentStatus.INVALID:			// 	已失效
                    item.status = '	已失效';
                    break;
                default:
                    break;
            }
            return item;
        });
    }
}
