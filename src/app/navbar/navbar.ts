import { Component } from '@angular/core';
import { CountrySelectComponent } from '@wlucha/ng-country-select';
import { Country } from '@wlucha/ng-country-select';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CountrySelectComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  // Guarda aquí el "country" seleccionado (que será nuestro idioma)
  country = 'ES'; // Código ISO del país/idioma preseleccionado

  // Evento al cambiar país/idioma
  handleSelection(selectedCountry: Country): void {
    console.log('Selected country:', selectedCountry);
  }
}
