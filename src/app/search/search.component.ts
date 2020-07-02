import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchIcon = 'search';
  //Generic component
  @Output()
  searchEvent = new EventEmitter<{query?: string, action: 'SEARCH' | 'CLEAR'}>();
  @ViewChild('searchInput', {read: ElementRef})
  searchInput: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }
  //search function
  search(){
    const searchTerm = this.searchInput.nativeElement.value;
    this.searchEvent.emit({query:searchTerm, action:'SEARCH'});


  }
  toggleSearch(){
    const searchContainer = document.getElementById('search-container');
    this.toggleClas(searchContainer, 'open');
    this.searchIcon = this.hasClass(searchContainer, 'open') ? 'clear' : 'search';
  }
  private hasClass(element, className){
    return element.classList.contains(className);
  }
  //
  private toggleClas(element, className){
    this.hasClass(element, className) ? element.classList.remove(className):element.classList.add(className);
  }

}
