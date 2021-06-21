import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShishaListComponent } from './shisha-list.component';

describe('ShishaListComponent', () => {
  let component: ShishaListComponent;
  let fixture: ComponentFixture<ShishaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShishaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShishaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
