import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  public payPalConfig ? : IPayPalConfig;


  courseId:string = ""
  course:any = {}
  makePaymentbtnclickedstatus:boolean = false 
  fName:string = ""
  lName:string = ""
  mobile:string = ""
  email:string = ""
  showSuccess:boolean = false
  showCancel:boolean = false
  showError:boolean = false
  showPaypal:boolean = false

  // student registration
  registrationForm = this.fb.group({
    fName:[''],
    lName:[''],
    mobile:[''],
    email:['']
  })

  constructor(private viewActivatedRoute:ActivatedRoute,private api:ApiService,private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.viewActivatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.courseId = data.id
      }

    )

    this.api.viewcourse(this.courseId).subscribe(
      (result:any)=>{
        console.log(result);
        this.course = result
      },
      (result:any)=>{
        alert(result.error)
      }
    )

    // paypal
    this.initConfig()

  }


  registerClicked(){
    if(this.registrationForm.valid)
    {
      this.makePaymentbtnclickedstatus = true
      this.fName = this.registrationForm.value.fName||""
      this.lName = this.registrationForm.value.lName||""
      this.email = this.registrationForm.value.email||""
      this.mobile = this.registrationForm.value.mobile||""
    }
    else
    {
      alert('Please fill the Form...')
    }
    
  }

  // makepayment
  makepayment(){
    this.showPaypal = true
  }


  // paypal
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
      this.showCancel = true
    },
    onError: err => {
      console.log('OnError', err);
      this.showError = true
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }


  // modalClose
  modalClose(){
    this.registrationForm.reset()
    this.makePaymentbtnclickedstatus = false
  }


}
