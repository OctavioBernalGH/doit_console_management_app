import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.css']
})
export class LanguageSelectorComponent {
  private translate = inject(TranslateService);

  isOpen = false;
  currentLanguage = 'es_es';

  languages: Language[] = [
    { code: 'es_es', name: 'Español', flag: 'assets/flags/es_es.png' },
    { code: 'en_uk', name: 'English', flag: 'assets/flags/en_uk.png' },
    { code: 'fr_fr', name: 'Français', flag: 'assets/flags/fr_fr.png' },
    { code: 'de_de', name: 'Deutsch', flag: 'assets/flags/de_de.png' },
    { code: 'mx_mx', name: 'Mexicano', flag: 'assets/flags/es_mx.png' },
    { code: 'ca_ca', name: 'Català', flag: 'assets/flags/ca_ca.png' },
    { code: 'eu_es', name: 'Euskera', flag: 'assets/flags/eu_es.png' },
  ];

  constructor() {
    // Configurar idioma inicial
    this.translate.setDefaultLang(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(langCode: string) {
    this.currentLanguage = langCode;
    this.translate.use(langCode);
    this.isOpen = false;
  }

  getCurrentFlag(): string {
    const current = this.languages.find(lang => lang.code === this.currentLanguage);
    return current ? current.flag : this.languages[0].flag;
  }
}