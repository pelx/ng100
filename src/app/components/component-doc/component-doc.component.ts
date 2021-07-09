import { Component, OnInit, ViewChild } from '@angular/core';
import { AccordionItem } from '../accordion/accordion-item';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LoaderType } from '../loader/loader-type.enum';
import { RibbonType } from '../ribbon/ribbon-type';
import { RibbonLocation } from '../ribbon/ribbon-location';
import { ButtonMeta } from '../button-toggle/button-toggle.model';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { SocialMedia } from '../social-media-bar/models/social-media.enum';
import { SocialMediaIcon } from '../social-media-bar/models/social-media-icon.interface';
import { PillType } from '../pill/pill-type.enum';

@Component({
  selector: 'app-component-doc',
  templateUrl: './component-doc.component.html',
  styleUrls: [ './component-doc.component.scss' ]
})
export class ComponentDocComponent implements OnInit {
  faCoffee = faCoffee;
  public accordionItems: AccordionItem[] = [
    {
      title: 'Accordion One',
      content: 'Argentinian Tango',
      isExpanded: false
    },
    {
      title: 'Accordion Two',
      content: 'Greek Sertaky',
      isExpanded: false
    },

  ];

  public progressValue = 25;
  public loaderType = LoaderType.Loading;
  public toggleValue = false;

  /* T A B S */
  public tabs: { title: string, active: boolean }[] = [
    { title: 'Paging', active: true },
    { title: 'Counter', active: false },
  ];
  public selectedTab = 0;

  /* R I B B O N */
  public RibbonType = RibbonType;
  public RibbonLocation = RibbonLocation;
  public ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.BottomLeft };

  /* B U T T O N _ T O G G L E */
  public buttonToggleOptions: ButtonMeta[] = [
    new ButtonMeta({ id: 1, title: 'Bold' }),
    new ButtonMeta({ id: 2, title: 'Italic' }),
    new ButtonMeta({ id: 3, title: 'Underline' }),
  ];
  @ViewChild(SnackbarComponent) public snackBar: SnackbarComponent;

  /* S K E L E T O N  L O A D E R */
  public loaded = false;

  /* S O C I A L  M E D I A  B A R */
  public socialMedia: SocialMediaIcon[] = [
    { href: 'https://www.facebook.com/groups/190277791450732', type: SocialMedia.Facebook },
    { href: 'https://www.instagram.com/dylansphotos87/', type: SocialMedia.Instagram },
    { href: 'https://www.linkedin.com/in/dylan310/', type: SocialMedia.LinkedIn },
    { href: 'https://twitter.com/PizzaPokerGuy', type: SocialMedia.Twitter },
    { href: 'https://www.YouTube.com/CodingTutorials360', type: SocialMedia.YouTube },
  ];

  /* P I L L */
  public PillType = PillType;

  /* O V E R L A Y */
  public isShownOverlay = false;

  // public jsonExample = jsonExample;

  constructor() { }

  ngOnInit(): void {
  }

  public debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value);
  }

  public snackbarShow(): void {
    this.snackBar.showMessage('Snackbar Example from Components Doc');
  }

}
