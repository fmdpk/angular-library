import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingLibComponent } from './logging-lib.component';

describe('LoggingLibComponent', () => {
  let component: LoggingLibComponent;
  let fixture: ComponentFixture<LoggingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggingLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
