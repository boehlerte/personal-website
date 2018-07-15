import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  backgroundUrl: string;

  ngOnInit() {
    this.backgroundUrl = './assets/website-banner.jpg';
  }
}
