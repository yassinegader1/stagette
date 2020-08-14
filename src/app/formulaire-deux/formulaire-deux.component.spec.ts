import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDeuxComponent } from './formulaire-deux.component';

describe('FormulaireDeuxComponent', () => {
  let component: FormulaireDeuxComponent;
  let fixture: ComponentFixture<FormulaireDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
