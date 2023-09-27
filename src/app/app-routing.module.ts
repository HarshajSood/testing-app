import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payment', component: DeviceListComponent },
  { path: 'add-payment', component: AddDeviceComponent },
  {
    path: 'update-payment/:bankaccountid/:type/:description/:upadd',
    component: AddDeviceComponent,
  },
  { path: 'bankaccount', component: EmployeeListComponent },
  { path: 'add-bankaccount', component: AddEmployeeComponent },
  {
    path: 'update-bankaccount/:bankaccountid/:name/:iban/:upadd',
    component: AddEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
