import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VagasculinariaPage } from './vagasculinaria.page';

describe('VagasculinariaPage', () => {
  let component: VagasculinariaPage;
  let fixture: ComponentFixture<VagasculinariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagasculinariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VagasculinariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
