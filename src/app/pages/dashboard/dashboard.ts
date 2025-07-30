import { Component } from '@angular/core';
import { MosaicCard } from '../../shared/mosaic-card/mosaic-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MosaicCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
