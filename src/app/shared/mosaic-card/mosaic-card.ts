import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaic-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mosaic-card.html',
  styleUrls: ['./mosaic-card.css']
})
export class MosaicCard {
  @Input() icon: string = '🧩';          
  @Input() text: string = '';
  @Input() route: string = '/';
  @Input() color: string = '#fff';
  @Input() letra: string = '#fff';
}

