import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaptarshicomponentComponent } from './saptarshicomponent.component';

describe('SaptarshicomponentComponent', () => {
  let component: SaptarshicomponentComponent;
  let fixture: ComponentFixture<SaptarshicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaptarshicomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaptarshicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
