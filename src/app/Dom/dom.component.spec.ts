import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomComponent } from './dom.component';


describe('NavbarComponent', () => {
  let component: DomComponent;
  let fixture: ComponentFixture<DomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomComponent]
    });
    fixture = TestBed.createComponent(DomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
