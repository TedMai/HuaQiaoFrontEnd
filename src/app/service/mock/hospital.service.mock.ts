import {Message} from '../verification';
import {of} from 'rxjs/observable/of';

export class HospitalServiceMock {
    // 发送短信验证码
    responseAfterSentSuccess = new Message('OK', 'SUCCESS', '5E835EAC-AC30-49EA-89CC-FE78087E32DF', '285725118508128016^0');

    sendVerificationCode = jasmine.createSpy('sendVerificationCode').and.callFake(
        (phone) => of(this.responseAfterSentSuccess)
        // (phone) => Promise
        //     .resolve(true)
        //     .then(() => Object.assign({}, this.responseAfterSentSuccess))
    );
}
