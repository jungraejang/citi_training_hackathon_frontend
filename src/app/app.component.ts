import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toggleNightMode(value) {
    this.nightMode = value
    console.log("night mode toggled", this.nightMode)

  }
  nightMode: boolean = false
  title = 'portfolio-manager';
}
