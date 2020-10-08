import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerceiropassoPage } from './terceiropasso.page';

describe('TerceiropassoPage', () => {
  let component: TerceiropassoPage;
  let fixture: ComponentFixture<TerceiropassoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiropassoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerceiropassoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
