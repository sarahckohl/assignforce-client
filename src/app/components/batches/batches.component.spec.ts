import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BatchesTimelineComponent } from '../batches-timeline/batches-timeline.component';
import { BatchesTimelineFilterComponent } from '../batches-timeline-filter/batches-timeline-filter.component';
import { BatchControllerService } from '../../services/api/batch-controller/batch-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';

import { AppMaterialModule } from '../../material.module';
import { BatchesComponent } from './batches.component';
import { FocusControllerService } from '../../services/api/focus-controller/focus-controller.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { RoomControllerService } from '../../services/api/room-controller/room-controller.service';
import { BuildingControllerService } from '../../services/api/building-controller/building-controller.service';
import { CurriculumControllerService } from '../../services/api/curriculum-controller/curriculum-controller.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { SettingControllerService } from '../../services/api/setting-controller/setting-controller.service';
import { AuthService } from '../../services/auth/auth.service';
import { RouterModule } from '@angular/router';

describe('BatchesComponent', () => {
  let component: BatchesComponent;
  let fixture: ComponentFixture<BatchesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          AppMaterialModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientTestingModule,
          BrowserAnimationsModule,
          RouterModule
        ],
        declarations: [BatchesComponent, BatchesTimelineComponent, BatchesTimelineFilterComponent],
        providers: [
          BatchControllerService,
          TrainerControllerService,
          CurriculumControllerService,
          SettingControllerService,
          FocusControllerService,
          AddressControllerService,
          RoomControllerService,
          BuildingControllerService,
          SkillControllerService,
          AuthService
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
