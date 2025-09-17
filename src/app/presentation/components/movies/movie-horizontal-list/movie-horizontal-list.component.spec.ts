import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHorizontalListComponent } from './movie-horizontal-list.component';

describe('MovieHorizontalListComponent', () => {
  let component: MovieHorizontalListComponent;
  let fixture: ComponentFixture<MovieHorizontalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieHorizontalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHorizontalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
