import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {Hospital} from '../service/hospital';
import {HospitalService} from '../service/hosptial.service';
import {Gallery} from '../service/gallery';
import {UrlService} from '../service/url.service';

@Component({
    selector: 'app-details-hospital',
    templateUrl: './details-hospital.component.html',
    styleUrls: ['./details-hospital.component.css']
})
export class DetailsHospitalComponent implements OnInit {

    hospital: Hospital;
    gallery: Gallery[];

    constructor(private carouselConfig: NgbCarouselConfig,
                private hospitalService: HospitalService) {
        carouselConfig.interval = 4000;      // 自动循环每个项目之间延迟的时间量。
        carouselConfig.wrap = true;         // 轮播是否连续循环
        // carouselConfig.keyboard = true;
    }

    ngOnInit() {
        console.log("DetailsHospitalComponent  ==>  ngOnInit");
        this.hospitalService.querySpecificHospital(26)
            .subscribe(response => {
                this.hospital = JSON.parse(response.hospital)[0];
                this.gallery = [];
                JSON.parse(response.gallery).map(image => {
                    this.gallery.push({
                        id: image.id,
                        imageurl: UrlService.FetchImage(image.imageurl),
                        type: image.type,
                        relative: image.relative
                    });
                });
                console.info(this.hospital);
                console.info(this.gallery);
            });
    }

}
