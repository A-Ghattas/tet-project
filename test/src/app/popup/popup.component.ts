import {Component, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit() {
  }

}
