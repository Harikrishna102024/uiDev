import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-things',
  templateUrl: './ui-things.component.html',
  styleUrl: './ui-things.component.scss'
})
export class UiThingsComponent {

  isOpen: boolean = false;
  dropdownData = ["Apple", "Banana", "Mango", "Orange"];
  filter: any[] = this.dropdownData;
  searchText: any;

  filterData() {
    this.filter = this.dropdownData.filter(
      item => item.toLowerCase().includes(this.searchText.toLowerCase())
    )
  }

  selectItem(item: any) {
    this.searchText = item;
    this.filter = this.dropdownData;
  }

}
