import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
    // Déclaration des variables et leur type de données.
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() date: Date;

    loveIts = 0;
    dontLoveIts = 0;
    likefn() {
        this.loveIts++;
        this.dontLoveIts === 0 ? this.dontLoveIts = 0 : this.dontLoveIts--;
    }

    dislikefn() {
        this.dontLoveIts++;
        this.loveIts === 0 ? this.loveIts = 0 : this.loveIts--;
    }

  constructor() { }

  ngOnInit() {
  }
}
