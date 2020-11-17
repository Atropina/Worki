import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicaVagaPage } from './publica-vaga.page';

describe('PublicaVagaPage', () => {
  let component: PublicaVagaPage;
  let fixture: ComponentFixture<PublicaVagaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicaVagaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicaVagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
