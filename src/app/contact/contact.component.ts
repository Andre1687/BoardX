import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  firstForm!: FormGroup

  constructor(private contact: EmailService) { }

  ngOnInit(): void {

  }

  get email(){
    return this.firstForm.get('email')
  }
  get password() {
    return this.firstForm.get('password')
  }

  cancelForm() {
    return this.firstForm.reset()
  }

  sendForm() {
    return console.log(this.firstForm.value)
  }


  valueForRadio!: boolean | undefined;



}
