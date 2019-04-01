import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    postLists = [
        {
            title: 'Ma Presentation',
            content: 'Tidiane Barry, actuellement en formation en Développement Java chez BGE Sud-Ouest.',
            date: new Date(2019,2,2, 12, 30)
            /* month : index du mois (de 0 à 11)*/
        },
        {
            title: 'Mon parcours',
            content: 'Après deux parcours de Master en Physique, j\'ai fiat le choix de me reconvertir.',
            date: new Date(2019, 1, 20, 15, 30)
        },
        {
            title: 'Mes Expériences',
            content: 'Expérience moins de six mois dans le Dévleppement Java.',
            date: new Date(2019, 0, 29, 10, 30)
        }
    ];
    ngOnInit() {
    }
  }
