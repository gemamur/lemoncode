import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatemenuComponent } from './privatemenu.component';

describe('PrivatemenuComponent', () => {
  let component: PrivatemenuComponent;
  let fixture: ComponentFixture<PrivatemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatemenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
