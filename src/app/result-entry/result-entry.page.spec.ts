import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultEntryPage } from './result-entry.page';

describe('ResultEntryPage', () => {
  let component: ResultEntryPage;
  let fixture: ComponentFixture<ResultEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
