import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  myData = [
    { text: 'Books', value: 1 },
    { text: 'Movies, Music & Games', value: 2},
    { text: 'Electronics & Computers', value: 3 },
    { text: 'Home, Garden & Tools', value: 4 },
    { text: 'Health & Beauty', value: 5 },
    { text: 'Toys, Kids & Baby', value: 6 },
    { text: 'Clothing & Jewelry', value: 7 },
    { text: 'Sports & Outdoors', value: 8 },
    { text: 'Automotive & Industrial', value: 9 }
];
}
