import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiThingsComponent } from './ui-things.component';

describe('UiThingsComponent', () => {
  let component: UiThingsComponent;
  let fixture: ComponentFixture<UiThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiThingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
