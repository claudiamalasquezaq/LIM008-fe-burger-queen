import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Burger Queen');
    // expect(compiled.querySelector('img').[src]="https://i.ibb.co/vhPZT9r/c18e72479aefde6c1b5ec0039c866410-silueta-logo-hamb.png").toBe("https://i.ibb.co/vhPZT9r/c18e72479aefde6c1b5ec0039c866410-silueta-logo-hamb.png");
  });

});
