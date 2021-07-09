import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUser, faEnvelope, faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faComment = faComment;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
   }

  ngOnInit(): void {
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      name: [ '', [Validators.required, Validators.minLength(2) ] ],
      email: [ '', [ Validators.required, Validators.email ] ],
      message: ['']
    });
  }

  public submitMessage(): void {
    console.log('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non fuga aspernatur...')
  }

}
