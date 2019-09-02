import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumdetailsComponent } from './albumdetails.component';

describe('AlbumdetailsComponent', () => {
  let component: AlbumdetailsComponent;
  let fixture: ComponentFixture<AlbumdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
