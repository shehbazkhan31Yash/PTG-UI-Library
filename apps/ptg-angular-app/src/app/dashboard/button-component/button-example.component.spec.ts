import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { CardExampleComponent } from './card-example.component';

describe('DialogExampleComponent', () => {
  let component: CardExampleComponent;
  let fixture: ComponentFixture<CardExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), BrowserAnimationsModule],
      declarations: [ CardExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
