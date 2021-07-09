import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {
  faTwitter = faTwitter;
  @Input() public baseHref = 'https://www.youtube.com/watch?v=kiGGErbkEqw';
  @Input() public hashTags: string[] = [ 'LauraAtmovement', 'Angular', '100AngularChalenge', 'FontAwersomeAngular' ];

  constructor(public titleService: Title) {
   }

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(`Good Angular Course
    ${ this.titleService.getTitle() }.Step up from the beginner!!! Check it out!!! `);

    // console.log(`${base}${message}`);
    return `${base}${message}`;
  }

  private getBaseWithHashTagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&
      related=LauraAtmovement&url=${route}&text=`;
  }

  ngOnInit(): void {
    console.log(this.titleService.getTitle());
  }

}

