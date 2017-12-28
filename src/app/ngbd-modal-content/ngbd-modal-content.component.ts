import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from '../service/patient';

@Component({
    selector: 'app-ngbd-modal-content',
    templateUrl: './ngbd-modal-content.component.html',
    styleUrls: ['./ngbd-modal-content.component.css']
})
export class NgbdModalContentComponent {
    @Input() title;
    patients: Patient[];
    patientSelected: Patient;

    constructor(public activeModal: NgbActiveModal) {
    }

    onSelected(pid): void {
        this.patients.map(patient => {
            if (patient.pid === pid) {
                patient.isDefault = 1;
            } else {
                patient.isDefault = 0;
            }
        });
    }

    onClosed(): void {
        this.patients.map(patient => {
            if (patient.isDefault === 1) {
                this.patientSelected = patient;
            }
        });
        this.activeModal.close(this.patientSelected);
    }
}
