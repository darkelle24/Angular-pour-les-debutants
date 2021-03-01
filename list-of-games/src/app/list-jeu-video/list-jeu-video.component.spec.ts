import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJeuVideoComponent } from './list-jeu-video.component';

describe('ListJeuVideoComponent', () => {
  let component: ListJeuVideoComponent;
  let fixture: ComponentFixture<ListJeuVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJeuVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJeuVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
