import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoGridComponent } from './bingo-grid.component';

describe('BingoGridComponent', () => {
  let component: BingoGridComponent;
  let fixture: ComponentFixture<BingoGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BingoGridComponent]
    });
    fixture = TestBed.createComponent(BingoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
