import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShishaDetailsComponent } from './shisha-details.component';

describe('ShishaDetailsComponent', () => {
  let component: ShishaDetailsComponent;
  let fixture: ComponentFixture<ShishaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShishaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShishaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
