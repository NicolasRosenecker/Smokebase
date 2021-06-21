import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccoDetailsComponent } from './tobacco-details.component';

describe('TobaccoDetailsComponent', () => {
  let component: TobaccoDetailsComponent;
  let fixture: ComponentFixture<TobaccoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobaccoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TobaccoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
