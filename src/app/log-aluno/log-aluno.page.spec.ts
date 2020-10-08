import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogAlunoPage } from './log-aluno.page';

describe('LogAlunoPage', () => {
  let component: LogAlunoPage;
  let fixture: ComponentFixture<LogAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogAlunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
