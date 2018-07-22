import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  backgroundUrl: string;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'down-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/down-arrow.svg'));
  }

  ngOnInit() {
    this.backgroundUrl = './assets/website-banner.jpg';
  }
}
