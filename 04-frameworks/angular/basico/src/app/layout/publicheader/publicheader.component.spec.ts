import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicheaderComponent } from './publicheader.component';

describe('PublicheaderComponent', () => {
  let component: PublicheaderComponent;
  let fixture: ComponentFixture<PublicheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
