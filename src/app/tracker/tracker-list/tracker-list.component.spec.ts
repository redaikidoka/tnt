import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerListComponent } from './tracker-list.component';

describe('TrackerListComponent', () => {
  let component: TrackerListComponent;
  let fixture: ComponentFixture<TrackerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
