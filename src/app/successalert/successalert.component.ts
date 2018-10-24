import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-successalert',
  template: `<p>
  This is success alert message!! Yay!!
  </p>`,
  styles: [`
  p{
    background: green;
    color:white;
    font-size: 1.2em;
    border: 2px solid darkgreen;
    padding: 10px;
    }`]
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
