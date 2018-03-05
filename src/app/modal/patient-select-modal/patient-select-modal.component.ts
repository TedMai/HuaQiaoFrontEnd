import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Patient} from '../../service/hospital.structure';

@Component({
    selector: 'app-ngbd-modal-content',
    templateUrl: './patient-select-modal.component.html',
    styleUrls: ['./patient-select-modal.component.css']
})
export class PatientSelectModalComponent {
    @Input() title: string;
    patients: Patient[];
    patientSelected: Patient;

    constructor(public activeModal: NgbActiveModal) {
    }

    onSelected(pid: number): void {
        this.patients.map(patient => {
            if (patient.pid === pid) {
                this.patientSelected = patient;
            }
        });
        this.activeModal.close(this.patientSelected);
    }

    addPatient(): void {
        this.activeModal.dismiss('Add patient');
    }
}
