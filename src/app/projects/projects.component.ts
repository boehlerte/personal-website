import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  yogiNetworkImages: any;
  myReadsImages: any;

  constructor() { }

  ngOnInit() {
    this.yogiNetworkImages = ['yogi-login', 'yogi-home', 'yogi-content1', 'yogi-content2'];
    this.myReadsImages = ['my-reads-bookshelf', 'my-reads-move-book', 'my-reads-search'];
  }

}
