import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployComponent } from './deploy.component';

describe('DeployComponent', () => {
  let component: DeployComponent;
  let fixture: ComponentFixture<DeployComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeployComponent]
    });
    fixture = TestBed.createComponent(DeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
