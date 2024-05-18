import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  count = 0;
  newAppointmentTitle :string = "";
  newAppointmentDate: Date = new Date();

  appointments :Appointment[] = []; 

  handleAdd(){
    alert("Input!!")
    this.count++;
    this.appointments = [ {
      id : this.count,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    },...this.appointments]
  }

}
