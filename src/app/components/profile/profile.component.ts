import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Skill } from '../../model/Skill';
import { S3CredentialService } from '../../services/s3-credential/s3-credential.service';
import { SkillControllerService } from '../../services/api/skill-controller/skill-controller.service';
import { TrainerControllerService } from '../../services/api/trainer-controller/trainer-controller.service';
import { Trainer } from '../../model/Trainer';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AddressControllerService } from '../../services/api/address-controller/address-controller.service';
import { Address } from '../../model/Address';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() fName: string;
  @Input() lName: string;

  tId: -1;
  lockProfile = true;
  fb: FormBuilder = new FormBuilder();
  nameForm = this.fb.group({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    locSelect: new FormControl('')
  });

  // data
  //skills: Skill[] = [];

  nameFound = false;

  myFile: FileList;
  creds: any;
  failed = false;
  //certFile: FileList = null;
  certName: string;
  skillsList: Skill[] = [];
  edit = false;
  loading: boolean;
  trainers: Trainer[] = [];
  trainer: Trainer;
  displayTrainer = this.trainer;
  trainerEmail: string;
  editable = false;
  addresses: Address[];

  constructor(
    private skillsService: SkillControllerService,
    private trainerService: TrainerControllerService,
    private addressService: AddressControllerService,
    private router: Router,
    private route: ActivatedRoute,
    public auth0: AuthService
  ) {}

  ngOnInit() {
    this.addressService
      .findAll()
      .toPromise()
      .then(addresses => this.addresses = addresses);

    this.trainerEmail = this.route.snapshot.params['email'];
    this.setTrainer();
  }

  onLocationChange(location: Address) {
    this.trainer.preferredLocation = location.id
  }

  setTrainer() {
    this.loading = true;
    this.trainerService
      .findByEmail(this.trainerEmail)
      .toPromise()
      .then(trainer => {
        if (trainer !== null) {
          this.trainer = trainer[0];
          this.auth0.getProfile((err, profile) => {
            if(err) {
              console.log(err);
              return;
            }
            this.editable = this.trainerEmail === profile.name;
          });
          this.loading = false;
        } else {
          console.log('TRAINER = ERROR');
          this.failed = true;
        }
      })
      .catch(error => {
        this.loading = false;
      });
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  getFiles(event) {
    this.myFile = event.target.files;
    console.log(this.myFile[0].size);
  }

  updateTrainer(trainer: Trainer) {
    this.trainerService
      .update(trainer)
      .toPromise()
      .then(response => {
        this.trainer = response;
      });
  }

  showToast(message) {
    // this.aCtrl.showToast( message );
  }

  //Updates user's name
  updateTrainerInfo() {
    console.log("update trainer");
    this.lockProfile = !this.lockProfile;
    if (this.lockProfile) {
      if (this.nameForm.valid) {
        this.trainerService
          .update(this.trainer)
          .toPromise()
          .then(trainer => {
            this.trainer = trainer;
          })
          .catch(error => {
            console.log(error);
          });
      }
      // if (this.myFile[0] !== undefined) {
      //   this.uploadResume();
      // }
    }
  }
}
