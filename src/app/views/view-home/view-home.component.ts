import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  stats =[
    {
      value: 20, label: "# of Users",
    },
    {
      value: 900, label: "Revanue",
    },
    {
      value: 1000, label: "Views"
    }
  ]

  items=[
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: "This is fantastic couch to use"
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: "This is fantastic Dreser to use"
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
