import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit {
  ngOnInit() {}
}
