import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {Hospital} from '../../service/hospital';
import {HospitalService} from '../../service/hosptial.service';
import {Gallery} from '../../service/gallery';
import {UrlService} from '../../service/url.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-details-hospital',
    templateUrl: './details-hospital.component.html',
    styleUrls: ['./details-hospital.component.css']
})
export class DetailsHospitalComponent implements OnInit, OnDestroy {

    hospital: Hospital;
    gallery: Gallery[];
    subscription: Subscription;

    /**
     * 完成初始化工作
     *      --      医院 ID 及其图集
     *      --      轮播图片设置
     * @param carouselConfig
     * @param hospitalService
     */
    constructor(private carouselConfig: NgbCarouselConfig,
                private hospitalService: HospitalService) {
        this.hospital = new Hospital(26, '', '', '', '', '', 0, 0);
        this.gallery = [];

        carouselConfig.interval = 4000;      // 自动循环每个项目之间延迟的时间量。
        carouselConfig.wrap = true;         // 轮播是否连续循环
        // carouselConfig.keyboard = true;
    }

    /**
     * Initialize the directive/component after Angular first displays the data-bound properties.
     * Then sets the directive/component's input properties.
     */
    ngOnInit() {
        console.log('DetailsHospitalComponent   ==>     ngOnInit');
        this.subscription = this.hospitalService.querySpecificHospital(this.hospital.id)
            .subscribe(response => {
                this.hospital = JSON.parse(response.hospital)[0];
                console.log(this.hospital);

                JSON.parse(response.gallery).map(image => {
                    this.gallery.push({
                        id: image.id,
                        imageurl: UrlService.FetchImage(image.imageurl),
                        type: image.type,
                        relative: image.relative
                    });
                });
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
