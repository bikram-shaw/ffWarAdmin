import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.page.html',
  styleUrls: ['./create-game.page.scss'],
})
export class CreateGamePage implements OnInit {
  createGameForm: FormGroup
  constructor(
    private _adminService: AdminService
  ) { }

  ngOnInit() {
    this.gameForm();
  }

  gameForm() {
    this.createGameForm = new FormGroup({
      'status':new FormControl('active'),
      'type': new FormControl(null, Validators.required),
      'map': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'spots': new FormControl(null, Validators.required),
      'entry_fee': new FormControl(null, Validators.required),
      'per_kill': new FormControl(null, Validators.required),
      'win_prize': new FormControl(null, Validators.required)
    })
  }
  onSubmitCreateGameForm() {

    this._adminService.createGame(this.createGameForm.value).subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    });

  }
}
