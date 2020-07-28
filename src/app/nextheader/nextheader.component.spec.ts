import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextheaderComponent } from './nextheader.component';

describe('NextheaderComponent', () => {
  let component: NextheaderComponent;
  let fixture: ComponentFixture<NextheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
