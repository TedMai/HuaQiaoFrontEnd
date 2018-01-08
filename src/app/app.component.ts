import {AfterContentChecked, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';

import {ContainerService} from './service/container.service';
import {LoginService} from './service/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {
    isLoggedIn = false;
    headImageUrl = '../assets/icons/login/head-image.png';

    constructor(private router: Router,
                private loginService: LoginService,
                private container: ContainerService) {
    }

    /**
     * 检测用户登录状态
     */
    ngAfterContentChecked() {
        const uid = this.container.getUserID();
        (typeof uid === 'undefined' || uid === null) ? this.isLoggedIn = false : this.isLoggedIn = true;
    }

    /**
     * 弹出登录对话框
     */
    openLoginModal() {
        this.loginService.openLoginModal();
    }

    /**
     * 跳转至个人中心
     */
    toUserProfile() {
        const uid = this.container.getUserID();
        this.router.navigate(['/my/profile/' + uid]).then();
    }
}
