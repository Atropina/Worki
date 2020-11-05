import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerificaEmailPage } from './verifica-email.page';

describe('VerificaEmailPage', () => {
  let component: VerificaEmailPage;
  let fixture: ComponentFixture<VerificaEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificaEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerificaEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
