import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';

import { AppMaterialModule } from '../../material.module';
import { FociComponent } from './foci.component';
import { Focus } from '../../model/Focus';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';

describe('FociComponent', () => {
  let component: FociComponent;
  let fixture: ComponentFixture<FociComponent>;
  const testData: Focus[] = [
    new Focus(1, 'Test Focus', false, [1,2,3,4]),
    new Focus(2, 'Test Focus 2', true, [5,6,7,8])
  ];
  let focusControllerService = FocusControllerService;

  class MockFocusControllerService {
    findAll(): Observable<Focus[]> {
      return Observable.of(testData);
    }
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AppMaterialModule, BrowserAnimationsModule],
        declarations: [FociComponent],
        providers: [{ provide: FocusControllerService, useClass: MockFocusControllerService }]
      }).compileComponents();
      focusControllerService = TestBed.get(FocusControllerService);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a mat-list', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-list')).toBeTruthy();
  });

  it('should contain an accordion for the focuses', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-accordion')).toBeTruthy();
  });

  it('should contain a title named Focuses', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-panel-title').textContent).toContain('Focuses');
  });
});
