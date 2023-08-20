import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainContentComponent } from './main-content/main-content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weatherapp';

  constructor(public dialog: MatDialog,private router:Router) { }
  
  openDialog(){
   // this.dialog.open(MainContentComponent)
   this.router.navigateByUrl('main')
  }

}
