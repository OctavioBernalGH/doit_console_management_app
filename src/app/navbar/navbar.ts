import { Component } from '@angular/core';
import { LanguageSelectorComponent } from "../language-selector/language-selector";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageSelectorComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar {
  
}
