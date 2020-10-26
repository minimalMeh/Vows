import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchPageComponent } from './church-page.component';

describe('ChurchPageComponent', () => {
  let component: ChurchPageComponent;
  let fixture: ComponentFixture<ChurchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
