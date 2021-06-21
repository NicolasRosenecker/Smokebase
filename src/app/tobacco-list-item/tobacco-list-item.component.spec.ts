import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobaccoListItemComponent } from './tobacco-list-item.component';

describe('TobaccoListItemComponent', () => {
  let component: TobaccoListItemComponent;
  let fixture: ComponentFixture<TobaccoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobaccoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TobaccoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
