import {Message} from '../verification';
import {asyncData} from './helper';
/// <reference path="jasmine.d.ts" />

export class HospitalServiceSpy {
    // 发送短信验证码
    responseAfterSentSuccess = new Message('OK', 'SUCCESS', '5E835EAC-AC30-49EA-89CC-FE78087E32DF', '285725118508128016^0');

    // 两种方式来生成异步结果
    // 方式一 ：
    // sendVerificationCode = jasmine.createSpy('sendVerificationCode').and.callFake(
    //     (phone) => of(this.responseAfterSentSuccess)
    // );
    // 方式二 ：
    sendVerificationCode = jasmine.createSpy('sendVerificationCode').and.returnValue(asyncData(this.responseAfterSentSuccess));
}
