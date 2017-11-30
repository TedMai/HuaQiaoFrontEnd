import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-details-doctor',
  templateUrl: './details-doctor.component.html',
  styleUrls: ['./details-doctor.component.css']
})
export class DetailsDoctorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makeAppointment(){
    this.router.navigate(['/appointment/init']).then();
  }
}
