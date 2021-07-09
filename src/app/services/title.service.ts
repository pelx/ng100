import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    public title: Title,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }


  public initializetitleService(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      // console.log(event);
      const { data } = this.activatedRoute.root.firstChild.snapshot;
      const mainTitle = 'Ng 100';
      const lastTitle = this.title.getTitle();
      // console.log(data);

      if (data?.title) {
        const title = `${ mainTitle } - ${ data.title }`;

        if (lastTitle !== title) {
          this.title.setTitle(title);
        }
      } else {
        this.title.setTitle(mainTitle);
      }

    });

  }
}
