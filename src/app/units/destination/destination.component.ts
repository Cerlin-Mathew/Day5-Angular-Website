import { Component } from '@angular/core';
import { district } from 'src/assets/data';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {
  title = district;

}
