import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    @Input() btnConfirmText = '确认';
    @Input() btnCancelText = '取消';

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }
}
