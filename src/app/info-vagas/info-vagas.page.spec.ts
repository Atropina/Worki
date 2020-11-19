import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoVagasPage } from './info-vagas.page';

describe('InfoVagasPage', () => {
  let component: InfoVagasPage;
  let fixture: ComponentFixture<InfoVagasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVagasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoVagasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
