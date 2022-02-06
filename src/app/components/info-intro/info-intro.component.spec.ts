import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoIntroComponent } from './info-intro.component';

describe('InfoIntroComponent', () => {
  let component: InfoIntroComponent;
  let fixture: ComponentFixture<InfoIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
