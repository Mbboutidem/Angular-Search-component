import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-seacch';
  searchTerm: any;

  handleSearch(event){
    if (event.action === 'SEARCH') {
      this.searchTerm = event.query;
    }
  }
}
