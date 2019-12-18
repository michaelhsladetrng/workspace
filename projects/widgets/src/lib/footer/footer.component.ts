import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widgets-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  message = 'Thanks for using our app.';

  change() {
    this.message = 'You found the easter egg! Yay you!';
  }

  ngOnInit() {
  }

}
