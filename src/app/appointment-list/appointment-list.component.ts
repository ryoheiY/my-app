import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  count = 0;
  newAppointmentTitle: string = '';
  newAppointmentDate: Date | undefined = undefined;

  appointments: Appointment[] = [];
  ngOnInit(): void {
    let savedAppointment = localStorage.getItem("appointments");
    this.appointments = savedAppointment? JSON.parse(savedAppointment) : [];
  }
  handleAdd() {
    if (
      this.newAppointmentTitle.trim().length == 0 ||
      !this.newAppointmentDate
    ) {
      alert('No!');
      return;
    }

    alert('Input!!');
    this.appointments.push({
      id: ++this.count,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate,
    });

    this.newAppointmentTitle = '';
    this.newAppointmentDate = undefined;

    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

  handleDelete(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
