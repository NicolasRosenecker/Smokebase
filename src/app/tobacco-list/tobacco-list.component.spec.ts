import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccoListComponent } from './tobacco-list.component';

describe('TobaccoListComponent', () => {
  let component: TobaccoListComponent;
  let fixture: ComponentFixture<TobaccoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobaccoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TobaccoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
