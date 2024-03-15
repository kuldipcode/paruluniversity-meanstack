import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTaskComponent } from './first-task.component';

describe('FirstTaskComponent', () => {
  let component: FirstTaskComponent;
  let fixture: ComponentFixture<FirstTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
