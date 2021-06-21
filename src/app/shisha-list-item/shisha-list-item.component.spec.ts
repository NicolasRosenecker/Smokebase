import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShishaListItemComponent } from './shisha-list-item.component';

describe('ShishaListItemComponent', () => {
  let component: ShishaListItemComponent;
  let fixture: ComponentFixture<ShishaListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShishaListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShishaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
