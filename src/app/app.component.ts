import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styles: [],
})

export class AppComponent {
  title = 'Smokebase';
  graphicDesignIsMyPassion:string = '' +
    'font-weight: bold; ' +
    'font-size: 50px;' +
    'color: red; ' +
    'text-shadow: ' +
    '3px 3px 0 rgb(217,31,38) , ' +
    '6px 6px 0 rgb(226,91,14) , ' +
    '9px 9px 0 rgb(245,221,8) , ' +
    '12px 12px 0 rgb(5,148,68) , ' +
    '15px 15px 0 rgb(2,135,206) , ' +
    '18px 18px 0 rgb(4,77,145) , ' +
    '21px 21px 0 rgb(42,21,113)';

  ngOnInit(){
    console.info('%c!!ReadMe!!', this.graphicDesignIsMyPassion);
    console.info('%c-------------------------', this.graphicDesignIsMyPassion);

    console.info("%cFür die schnelle Anmeldung bei der Korrektur der PWA wurde folgender Nutzer angelegt:" +
      " \nUsername: 'x' \n" +
      "Passwort 'x'\n" +
      "Selbstverständlich kann aber auch ein eigener Nutzer registriert werden.", "color: lightblue; font-size: 12pt;");

    console.info("%cFolgende Funktionalitäten konnte ich nicht im vorgegebenen Zeitrahmen umsetzen: \n" +
      "Sortierfunktion, Kommentarfunktion (funktioniert nur per Backend und Postman).", "color: lightblue; font-size: 12pt;");

    console.info('%cKnown Bugs:\n' +
      'Bei der Animation der Navbar wollte ich mich etwas ausleben, diese ist allerdings leider etwas buggy.\n' +
      'Verlässt man die Detail-Ansicht eines Tabaks/einer Shisha nachdem zuvor mehr Tabaks/Shishas geladen wurden, ' +
      'so lädt die Applikation lediglich die ersten 10 neu.', "color: lightblue; font-size: 12pt;");

    console.info("%cLink zum Repo: https://github.com/NicolasRosenecker/Smokebase", "color: lightblue; font-size: 12pt;");

    console.info('%c-------------------------', this.graphicDesignIsMyPassion);
  }
}
