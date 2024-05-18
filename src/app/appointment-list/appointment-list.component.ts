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
  newAppointmentDate: Date | undefined = undefined;

  appointments :Appointment[] = []; 

  handleAdd(){

    if(this.newAppointmentTitle.trim().length == 0 || !this.newAppointmentDate){
      alert("No!")
      return;
    }

    alert("Input!!")
    this.appointments.push({
      id : ++this.count,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate
    })

    this.newAppointmentTitle = "";
    this.newAppointmentDate = undefined;
  }

  handleDelete(index: number){
    this.appointments.splice(index, 1);
  }
}
