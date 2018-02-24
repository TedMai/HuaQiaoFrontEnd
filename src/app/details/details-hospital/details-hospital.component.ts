import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import {Gallery, Hospital} from '../../service/hospital.structure';
import {UrlService} from '../../service/url.service';

@Component({
    selector: 'app-details-hospital',
    templateUrl: './details-hospital.component.html',
    styleUrls: ['./details-hospital.component.css']
})
export class DetailsHospitalComponent implements OnInit {

    hospital: Hospital;
    gallery: Gallery[];
    state = 'inactive';

    /**
     * 完成初始化工作
     *      --      医院 ID 及其图集
     *      --      轮播图片设置
     * @param route
     * @param carouselConfig
     */
    constructor(private route: ActivatedRoute,
                private carouselConfig: NgbCarouselConfig) {
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
        this.route.data
            .subscribe((data: { hospitalDetailResolver: any }) => {
                this.hospital = JSON.parse(data.hospitalDetailResolver.hospital)[0];
                console.log(this.hospital);

                JSON.parse(data.hospitalDetailResolver.gallery).map(image => {
                    this.gallery.push({
                        id: image.id,
                        imageurl: UrlService.FetchImage(image.imageurl),
                        type: image.type,
                        relative: image.relative
                    });
                });
            });
    }

    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
}
