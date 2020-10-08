import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartopassoPage } from './quartopasso.page';

describe('QuartopassoPage', () => {
  let component: QuartopassoPage;
  let fixture: ComponentFixture<QuartopassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartopassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartopassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
