import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FotoPerfilPage } from './foto-perfil.page';

describe('FotoPerfilPage', () => {
  let component: FotoPerfilPage;
  let fixture: ComponentFixture<FotoPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FotoPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
