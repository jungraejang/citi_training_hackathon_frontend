import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isChecked = false;
  @Output() nightModeToggle = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleNightMode(value: boolean) {
    this.nightModeToggle.emit(value)
  }

}
