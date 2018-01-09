import {Injectable} from '@angular/core';

@Injectable()
export class ValidatorService {
    /**
     * 手机号码验证
     * @param phone
     * @returns {boolean}
     * @constructor
     */
    static MobilePhoneValidator(phone: string): boolean {
        const phoneReg = /^1[3|4|5|7|8|9][0-9]{9}$/;
        return phoneReg.test(phone);
    }

    /**
     * 一致性验证
     * @param str1
     * @param str2
     * @returns {boolean}
     * @constructor
     */
    static ConsistenceValidator(str1: string, str2: string): boolean {
        return str1 === str2;
    }

    /**
     * 身份证验证
     * @param identity
     * @returns {boolean}
     * @constructor
     */
    static IdentityValidator(identity: string): boolean {
        const identityReg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
        return identityReg.test(identity);
    }
}