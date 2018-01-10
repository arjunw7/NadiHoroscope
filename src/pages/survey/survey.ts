import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ResultPage } from '../result/result'

@Component({
  selector: 'survey',
  templateUrl: 'survey.html'
})
export class SurveyPage {
  patient:any;
  inputData:any;
  formStatus1 = false;
  formStatus2 = false;
  formStatus3 = false;
  ftotal = 0;
  fstatus = "";
  noSolution = true;
  form1 = {
    "abdomenPain": "",
    "spicy": "",
    "nonSpicy": "",
    "acidity": "",
    "headache": "",
    "vomiting": "",
    "vomitRelief": "0",
    "bloodStool": "",
    "piles": "0"
  }
  form2 = {
    "diabetes": "",
    "diabetesFamily": "",
    "stomache": "",
    "burps": "",
    "vomit": "",
    "vomitTime": ""
  }
  form3 = {
    "swallow": "",
    "part": ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.patient = navParams.get('patient');
    this.inputData = navParams.get('inputData');
    for(var i=0; i<this.inputData.length-1; i++){
      for(var j=0; j<this.inputData.length-i-1; j++){
        if(this.inputData[j].value<this.inputData[j+1].value){
          var temp = this.inputData[j];
          this.inputData[j]=this.inputData[j+1];
          this.inputData[j+1]=temp;
        }
      }
    }
    if(this.check456(this.inputData)){
      if(this.inputData[0].id==4 && this.inputData[1].id==2){
        this.formStatus1 = true;
        this.noSolution = false;
      }
      else if(this.inputData[0].id==5){
        this.formStatus2 = true;
        this.noSolution = false;
      }
      else if(this.inputData[0].id==6 && this.inputData[1].id==5){
        this.formStatus3 = true;
        this.noSolution = false;
      }
      console.log(this.inputData)
    }
    else {
      this.navCtrl.push(ResultPage,{
        score: -1,
        maxScore: 20,
        status: "No signs of ulcer."
      })
    }
  }

  submitForm1(){
    if(!this.form1.abdomenPain || !this.form1.spicy || !this.form1.nonSpicy ||  !this.form1.acidity || !this.form1.headache || !this.form1.bloodStool){
      this.presentToast("Please fill all the fields")
    }
    else {
      if(this.form1.headache=='yes' && !this.form1.vomiting){
        this.presentToast("Please fill all the fields")
      }
      else if(this.form1.headache=='yes' && this.form1.vomiting=='yes' && !this.form1.vomitRelief){
        this.presentToast("Please fill all the fields")
      }
      else{
        if(this.form1.bloodStool=='yes' && !this.form1.piles){
          this.presentToast("Please fill all the fields")
        }
        else{
          var total = parseFloat(this.form1.abdomenPain)+parseFloat(this.form1.spicy)+parseFloat(this.form1.nonSpicy)+parseFloat(this.form1.acidity)+parseFloat(this.form1.vomitRelief)+parseFloat(this.form1.piles)
          var status =""
          if(total<=3) status = "No Ulcer"
          else if(total>3 && total<=10) status = "In future you may have ulcer, take necessary precautions"
          else if(total>10 && total<=15) status = "Ulcer in initial stages"
          else if(total>15) status = "Very high chances of intestinal ulcer"
          this.ftotal = total
          this.fstatus = status
          this.navCtrl.push(ResultPage,{
            score: this.ftotal,
            maxScore: 20,
            status: this.fstatus
          })
        }
      }
    }
  }

  submitForm2(){
    console.log(this.form2)
    if(!this.form2.diabetes && !this.form2.stomache && !this.form2.burps && !this.form2.vomit){
      this.presentToast("Please fill all the fields")
    }
    else{ 
      if(this.form2.diabetes!='no' && this.form2.vomit!='yes'){
        var total = parseFloat(this.form2.diabetes)+parseFloat(this.form2.stomache)+parseFloat(this.form2.burps)+parseFloat(this.form2.vomit)
        this.resultForm2(total) 
      }
      else if(this.form2.diabetes=='no' && this.form2.vomit!='yes'){
        if(!this.form2.diabetesFamily){
          this.presentToast("Please fill all the fields")
        }
        else{
          var total = parseFloat(this.form2.diabetesFamily)+parseFloat(this.form2.stomache)+parseFloat(this.form2.burps)+parseFloat(this.form2.vomit)
          this.resultForm2(total)
        }
      }
      else if(this.form2.diabetes!='no' && this.form2.vomit=='yes'){
        if(!this.form2.vomitTime){
          this.presentToast("Please fill all the fields")
        }
        else{
          var total = parseFloat(this.form2.diabetes)+parseFloat(this.form2.stomache)+parseFloat(this.form2.burps)+parseFloat(this.form2.vomitTime)
          this.resultForm2(total)
        }
      }
      else if(this.form2.diabetes=='no' && this.form2.vomit=='yes'){
        if(!this.form2.diabetesFamily || !this.form2.vomitTime){
          this.presentToast("Please fill all the fields")
        }
        else{
          var total = parseFloat(this.form2.diabetesFamily)+parseFloat(this.form2.stomache)+parseFloat(this.form2.burps)+parseFloat(this.form2.vomitTime)
          this.resultForm2(total)
        }
      }
    }
  }

  resultForm2(total){
    var status =""
    if(total<=2) status = "No Ulcer"
    else if(total>2 && total<=5) status = "In future you may have ulcer (Avoid spicy food)"
    else if(total>5 && total<=9) status = "Ulcer in initial stages"
    else if(total>9) status = "Very high chances ulcer"
    this.navCtrl.push(ResultPage,{
      score: total,
      maxScore: 12,
      status: status
    })
  }

  submitForm3(){
    console.log(this.form3)
    if(!this.form3.swallow){
      this.presentToast("Please fill all the fields")
    }
    else if(this.form3.swallow!='yes'){
      this.resultForm3(0)
    }
    else if(this.form3.swallow=='yes' && !this.form3.part){
      this.presentToast("please fill all the fields")
    }
    else{
      var total = parseFloat(this.form3.part);
      this.resultForm3(total)
    }
  }

  resultForm3(total){
    var status =""
    if(total==0) status = "No Ulcer"
    else if(total==2) status = "Mouth Ulcer"
    else if(total==3) status = "Ulcer in Oesophagus"
    this.navCtrl.push(ResultPage,{
      score: total,
      maxScore: 3,
      status: status
    })
  }
  private check456(obj) {
    var s4 =false
    var s5 = false
    var s6 = false
    for(var i=0; i<4; i++){
      if(obj[i].id=="4") s4 = true
      else if(obj[i].id=="5") s5 = true
      else if(obj[i].id=="6") s6 = true
    }
    if(s4 && s5 && s6) return true
    else return false
  }
  
  private presentToast(text) {
    let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
    });
    toast.present();
  }
  goBack(){
    this.navCtrl.pop();
  }
}
