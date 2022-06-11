import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  model: Portfolio;

  // XXX: What to do when creating portfolio (first time accessing the portfolio)
  constructor() {
    // TODO call to backend to get data
    this.model = new Portfolio(0, "Software Engineer", "Hello I am John Doe",
    "I am specialized in consulting and problem solving, I am ambitious and want to work my way up in the company");
  }
  
  ngOnInit(): void {
  }

}
