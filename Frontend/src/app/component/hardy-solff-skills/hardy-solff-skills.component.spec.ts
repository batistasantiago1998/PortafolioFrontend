import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardySolffSkillsComponent } from './hardy-solff-skills.component';

describe('HardySolffSkillsComponent', () => {
  let component: HardySolffSkillsComponent;
  let fixture: ComponentFixture<HardySolffSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardySolffSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardySolffSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
