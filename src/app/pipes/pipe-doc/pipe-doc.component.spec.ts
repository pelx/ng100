import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocComponent } from './pipe-doc.component';

describe('PipeDocComponent', () => {
  let component: PipeDocComponent;
  let fixture: ComponentFixture<PipeDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
