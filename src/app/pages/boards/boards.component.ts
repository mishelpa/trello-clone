import { Component } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

  items = [
    {
      label: 'Item1',
      items: [
        { label: 'sub Item 1.1' },
        { label: 'sub Item 1.2' }
      ]
    },
    {
      label: 'Item2',
      items: [
        { label: 'sub Item 2.1' },
      ]
    },
    {
      label: 'Item3',
      items: [
        { label: 'sub Item 3.1' },
        { label: 'sub Item 3.2' },
        { label: 'sub Item 3.3' }
      ]
    }
  ]
}
