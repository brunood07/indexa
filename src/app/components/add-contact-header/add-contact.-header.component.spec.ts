import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddContactHeaderComponent } from './add-contact-header.component';


describe('AddContactComponent', () => {
  let component: AddContactHeaderComponent;
  let fixture: ComponentFixture<AddContactHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContactHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddContactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
