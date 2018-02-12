import {Component, OnInit} from '@angular/core';
import {Verification} from '../../service/verification';
import {HospitalService} from '../../service/hosptial.service';
import {ContainerService} from '../../service/container.service';

@Component({
    // selector: 'app-my-mobile',
    templateUrl: './my-mobile.component.html',
    styleUrls: ['./my-mobile.component.css']
})
export class MyMobileComponent implements OnInit {
    phone = '';
    message = '';
    isBind = false;

    constructor(private container: ContainerService,
                private hospitalService: HospitalService) {
    }

    ngOnInit() {
        const uid = this.container.getUserID();
        // const uid = 29;
        this.hospitalService.querySpecificUser(uid)
            .subscribe(response => {
                console.log(response);
                if (null === response[0].phone) {
                    this.isBind = false;
                } else {
                    this.isBind = true;
                    this.phone = response[0].phone;
                }
            });
    }

    onConfirm(request: Verification): void {
        console.log(request);
        this.hospitalService
            .combineMobile(request)
            .subscribe(response => {
                console.log(response);
                if (response.code === 0) {
                    this.message = '成功关联手机!';
                } else if (response.code === -100 && response.msg.errno === 1062) {
                    this.message = '该手机号码已注册!';
                } else if (response.code === -300) {
                    this.message = response.msg;
                }
            });
    }
}
