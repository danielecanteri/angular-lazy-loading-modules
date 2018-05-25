import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalModuleLibComponent } from './external-module-lib.component';

describe('ExternalModuleLibComponent', () => {
  let component: ExternalModuleLibComponent;
  let fixture: ComponentFixture<ExternalModuleLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalModuleLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalModuleLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
