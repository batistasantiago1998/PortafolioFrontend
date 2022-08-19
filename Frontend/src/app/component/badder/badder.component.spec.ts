import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadderComponent } from './badder.component';

describe('BadderComponent', () => {
  let component: BadderComponent;
  let fixture: ComponentFixture<BadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
