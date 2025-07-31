import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Control } from './pages/control/control';
import { Stories } from './pages/stories/stories';
import { Multimedia } from './pages/multimedia/multimedia';
import { Reports } from './pages/reports/reports';
import { Stats } from './pages/stats/stats';
import { Info } from './pages/info/info';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'control', component: Control},
  { path: 'stories', component: Stories},
  { path: 'multimedia', component: Multimedia},
  { path: 'reports', component: Reports},
  { path: 'stats', component: Stats},
  { path: 'info', component: Info},
];
