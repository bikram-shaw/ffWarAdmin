import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage implements OnInit {
  createGameForm: FormGroup
  constructor(
    private _adminService: AdminService,
    private commonService:CommonService
  ) { }

  ngOnInit() {
    this.gameForm();
  }

  gameForm() {
    this.createGameForm = new FormGroup({
      'type': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'map': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'spots': new FormControl(null, Validators.required),
      'entry_fee': new FormControl(null, Validators.required),
      'per_kill': new FormControl(null, Validators.required),
      'winning_prize': new FormControl(null, Validators.required)
    })
  }
  onSubmitCreateGameForm() {

    this._adminService.createGame(this.createGameForm.value).subscribe(res => {
      this.createGameForm.reset()
      this.commonService.alertService(res.message)
    }, error => {
      this.commonService.alertService(error)
    });

  }
}
