import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloadminitrativoComponent } from './moduloadminitrativo.component';

describe('ModuloadminitrativoComponent', () => {
  let component: ModuloadminitrativoComponent;
  let fixture: ComponentFixture<ModuloadminitrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloadminitrativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloadminitrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
