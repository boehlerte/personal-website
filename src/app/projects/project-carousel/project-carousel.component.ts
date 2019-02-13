import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-carousel',
  templateUrl: './project-carousel.component.html'
})
export class ProjectCarouselComponent implements OnInit {
    @Input() images: any;
    @Input() carouselId: string;

    id: string;

    constructor() { }

    ngOnInit() {
        this.id = 'projectCarousel--' + this.carouselId;
    }

}
