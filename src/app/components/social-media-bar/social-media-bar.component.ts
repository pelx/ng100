import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from './models/social-media.enum';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: [ './social-media-bar.component.scss' ]
})
export class SocialMediaBarComponent implements OnInit {
  @Input() socialMedia: SocialMedia[] = [];
  public SocialMedia = SocialMedia;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
