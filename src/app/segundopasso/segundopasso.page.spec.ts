import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundopassoPage } from './segundopasso.page';

describe('SegundopassoPage', () => {
  let component: SegundopassoPage;
  let fixture: ComponentFixture<SegundopassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundopassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundopassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
