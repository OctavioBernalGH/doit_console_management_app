import { Component } from '@angular/core';
import { MosaicCard } from '../../shared/mosaic-card/mosaic-card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MosaicCard,
    TranslateModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
