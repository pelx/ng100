import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { SnackbarService } from '../snackbar.service';
import { LocalStorageService } from '../local-storage.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-service-doc',
  templateUrl: './service-doc.component.html',
  styleUrls: [ './service-doc.component.scss' ]
})
export class ServiceDocComponent implements OnInit {
  public user = new User();
  public userIdExample = new User();
  public state: { [ key: string ]: any } = {};


  constructor(
    public userService: UserService,
    public snackbarService: SnackbarService,
    public localStorageService: LocalStorageService,
    public activatedRoute: ActivatedRoute

  ) {
  }


  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map(params => params.id),
        mergeMap((id) => this.userService.getUserById(id))
        // console.table(data);
      )
      .subscribe({
        next: (value) => {
          this.userIdExample = value;
        }
      });

    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        // console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('HTTP Succsess');
      }
    });

  }

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Call from Snackbar Doc');
  }


  public updateState(): void {
    this.localStorageService.setState('Hello', 'mr Nice');
  }


}
