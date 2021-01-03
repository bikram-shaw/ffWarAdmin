import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMatchPage } from './edit-match.page';

describe('EditMatchPage', () => {
  let component: EditMatchPage;
  let fixture: ComponentFixture<EditMatchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
