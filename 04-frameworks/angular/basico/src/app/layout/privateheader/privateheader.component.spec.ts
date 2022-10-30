import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateheaderComponent } from './privateheader.component';

describe('PrivateheaderComponent', () => {
  let component: PrivateheaderComponent;
  let fixture: ComponentFixture<PrivateheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
