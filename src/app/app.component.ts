import { DialogComponent } from './dialog/dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '../../node_modules/@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog : MatDialog){}

  openDialog()
  {
    this.dialog.open(DialogComponent, {data : {name : 'Pratik'}});
  }
}
