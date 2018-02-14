import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

import {LoginService} from './service/login.service';
import {Department} from './service/hospital.structure';
import {HospitalService} from './service/hosptial.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
    // 判断登录态
    isLoggedIn = false;
    // 头像
    headImageUrl = '../assets/icons/login/head-image.png';
    // Notice the declaration of heroes$ as an Observable
    departments$: Observable<Department[]>;
    // A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
    // You can also push values into that Observable by calling its next(value) method as the search() method does.
    private searchTerms = new Subject<string>();

    constructor(private router: Router,
                private loginService: LoginService,
                private hospitalService: HospitalService) {
    }

    /**
     * 初始化
     */
    ngOnInit() {
        this.departments$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            // switch to new search observable each time the term changes
            switchMap((term: string) => this.hospitalService.searchDepartments(term)),
        );
    }

    /**
     * 检测用户登录状态
     */
    ngAfterContentChecked() {
        // const uid = this.container.getUserID();
        (this.loginService.isLoggedIn === false) ? this.isLoggedIn = false : this.isLoggedIn = true;
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
        // const uid = this.container.getUserID();
        this.router.navigate(['/my']).then();
    }

    /**
     * 搜索关键字
     * @param term
     */
    search(term: string): void {
        this.searchTerms.next(term);
    }

    /**
     * 命中关键字
     * 跳转至结果页
     * @param id
     * @param name
     */
    found(id: number, name: string): void {
        this.searchTerms.next('');  // 清空
        this.router.navigate(['/search/result', {id: id, name: name}]).then();
    }
}
