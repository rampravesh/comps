import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  showModel = false;

  items = [
    { title: "Why is the sky blue?", content: "This is bfjlksddfjlksdflksdf sdfsdlfk" },
    { title: "What does orange like?", content: "flkds fdsljfdlsjfdlksklfd" },
    { title: "What does cat like?", content: "dfkldjsfd dsljflskdflksjdlfjsd fsdjflksjdlkfsd fsdljfklsdjflkjsdklfjklsdjflksdjlkflk" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClicked() {
    this.showModel = !this.showModel;
    console.log("clicked:" + this.showModel);
  }
}
