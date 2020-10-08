import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintopassoPage } from './quintopasso.page';

describe('QuintopassoPage', () => {
  let component: QuintopassoPage;
  let fixture: ComponentFixture<QuintopassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintopassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintopassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
