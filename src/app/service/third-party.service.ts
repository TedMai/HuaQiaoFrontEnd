/**
 * 对接第三方应用
 */
export class ThirdPartyService {
    /**
     * 使用微信登录
     * @returns {string}
     * @constructor
     */
    static WeLogin(): string {
        const PREFIX = 'https://open.weixin.qq.com/connect/qrconnect';
        // const APPID = 'wxbdc5610cc59c1631';
        const APPID = 'wx1133464776a7a161';
        // const REDIRECT_URL = encodeURIComponent('https://passport.yhd.com/wechat/callback.do');
        const REDIRECT_URL = encodeURIComponent('http://www.thinmelon.cc');
        const STATUS = this.getNonceStr(32);
        return PREFIX
            + '?appid=' + APPID
            + '&redirect_uri=' + REDIRECT_URL
            + '&response_type=code'
            + '&scope=snsapi_login'
            + '&state=' + STATUS
            + '#wechat_redirect';
    }

    /**
     * 使用QQ登录
     * @returns {string}
     * @constructor
     */
    static QQLogin(): string {
        return '';
    }

    /**
     * 获取随机字符串
     * @param length
     * @returns {string}
     */
    static getNonceStr(length: number): string {
        let
            i,
            nonceStr = '';
        const
            chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
            count = chars.length - 1;

        for (i = 0; i < length; i++) {
            nonceStr = nonceStr.concat(chars.substr(Math.floor(Math.random() * count), 1));
        }
        return nonceStr;
    }
}
