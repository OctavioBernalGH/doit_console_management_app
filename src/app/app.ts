import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Footbar } from './footbar/footbar'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footbar, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
