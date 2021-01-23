import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserTransactionModelPage } from './user-transaction-model.page';

describe('UserTransactionModelPage', () => {
  let component: UserTransactionModelPage;
  let fixture: ComponentFixture<UserTransactionModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTransactionModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserTransactionModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
