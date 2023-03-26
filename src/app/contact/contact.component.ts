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
    this.contact.sendEmail({
      message: "texto que yo quiera",
      email: "cualquier@hotmail.com"
    }).subscribe((res)=>{
      return console.log(res)
    })

    this.firstForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required])
    })

    this.firstForm.valueChanges.subscribe(res=>{
      console.log(res)
    })
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
