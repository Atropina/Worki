import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioempresaPage } from './inicioempresa.page';

describe('InicioempresaPage', () => {
  let component: InicioempresaPage;
  let fixture: ComponentFixture<InicioempresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioempresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioempresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
