import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosaicCard } from './mosaic-card';

describe('MosaicCard', () => {
  let component: MosaicCard;
  let fixture: ComponentFixture<MosaicCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MosaicCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MosaicCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
