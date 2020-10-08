import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadAlunoPage } from './cad-aluno.page';

describe('CadAlunoPage', () => {
  let component: CadAlunoPage;
  let fixture: ComponentFixture<CadAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAlunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
