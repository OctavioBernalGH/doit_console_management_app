import { Component } from '@angular/core';
import { MosaicCard } from '../../shared/mosaic-card/mosaic-card';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MosaicCard,
    TranslateModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
