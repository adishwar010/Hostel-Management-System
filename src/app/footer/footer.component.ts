import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "adishwarsharma@mitaoe.ac.in";
  userName = "adishwar010";
  
  constructor() { }

  ngOnInit(): void {
  }

}
