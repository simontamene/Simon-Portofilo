import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document : any) {}

  @ViewChild('wwwwww') ww : ElementRef;
  @ViewChild('rrrrr') rr : ElementRef;
  @ViewChild('gggg') gg : ElementRef;
  @ViewChild('vvvvv') vv : ElementRef;
  @ViewChild('ffffffrrr') gr : ElementRef;
  @ViewChild('rrrrrgtgt') fr : ElementRef;
  @ViewChild('ggggrety') qr : ElementRef;
  @ViewChild('vvvvvssw') zr : ElementRef;

  title = 'ang';
  isVis = false;
  togg(){
    this.isVis = !this.isVis;
  }
  // method()
  // {
  //  this.ww.nativeElement.style.color="red";
  //  this.gg.nativeElement.style.color="white";
  //  this.rr.nativeElement.style.color="white";
  //  this.vv.nativeElement.style.color="white";
  // }
  // method2()
  // {
  //  this.ww.nativeElement.style.color="white";
  //  this.gg.nativeElement.style.color="white";
  //  this.vv.nativeElement.style.color="white";
  //  this.rr.nativeElement.style.color="red";
  // }
  // method3()
  // {
  //  this.ww.nativeElement.style.color="white";
  //  this.rr.nativeElement.style.color="white";
  //  this.gg.nativeElement.style.color="red";
  //  this.vv.nativeElement.style.color="white";
  // }
  // method4(){
  //   this.ww.nativeElement.style.color="white";
  //  this.rr.nativeElement.style.color="white";
  //  this.gg.nativeElement.style.color="white";
  //  this.vv.nativeElement.style.color="red";
  // }
  // methodOp()
  // {
  //   this.gr.nativeElement.style.color="red";
  //   this.fr.nativeElement.style.color="white";
  //   this.qr.nativeElement.style.color="white";
  //   this.zr.nativeElement.style.color="white";
    
  // }
  // methodOp2(){
  //   this.fr.nativeElement.style.color="red";
  //   this.gr.nativeElement.style.color="white";
  //   this.qr.nativeElement.style.color="white";
  //   this.zr.nativeElement.style.color="white";
  // }
  // method3Op3(){
  //   this.qr.nativeElement.style.color="red";
  //   this.fr.nativeElement.style.color="white";
  //   this.gr.nativeElement.style.color="white";
  //   this.zr.nativeElement.style.color="white";
  // }
  // method4Op4()
  // {
  //   this.zr.nativeElement.style.color="red";
  //   this.qr.nativeElement.style.color="white";
  //   this.fr.nativeElement.style.color="white";
  //   this.gr.nativeElement.style.color="white";
  // }

  // @HostListener("document:scroll") ff(){
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.zr.nativeElement.style.color="red";
  //     this.qr.nativeElement.style.color="white";
  //     this.fr.nativeElement.style.color="white";
  //     this.gr.nativeElement.style.color="white";
  //   }
  // }
  @HostListener('document:scroll', [])
onWindowScroll() {
  
    const number = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(number);
    if (number <= 150) {
        console.log("hi");
        this.ww.nativeElement.style.color="red";
        this.gg.nativeElement.style.color="white";
        this.rr.nativeElement.style.color="white";
        this.vv.nativeElement.style.color="white";

        this.gr.nativeElement.style.color="red";
    this.fr.nativeElement.style.color="white";
    this.qr.nativeElement.style.color="white";
    this.zr.nativeElement.style.color="white";
      //  this.zr.nativeElement.style.color="red";
      //  this.qr.nativeElement.style.color="white";
      //  this.fr.nativeElement.style.color="white";
      //  this.gr.nativeElement.style.color="white";
    } 
    else if(number <= 830){
      this.rr.nativeElement.style.color="red";
      this.ww.nativeElement.style.color="white";
      this.gg.nativeElement.style.color="white";
      this.vv.nativeElement.style.color="white";

      this.fr.nativeElement.style.color="red";
    this.gr.nativeElement.style.color="white";
    this.qr.nativeElement.style.color="white";
    this.zr.nativeElement.style.color="white";
    }
    else if(number <=1300){
      this.gg.nativeElement.style.color="red";
      this.ww.nativeElement.style.color="white";
      this.rr.nativeElement.style.color="white";
      this.vv.nativeElement.style.color="white";

      this.qr.nativeElement.style.color="red";
    this.fr.nativeElement.style.color="white";
    this.gr.nativeElement.style.color="white";
    this.zr.nativeElement.style.color="white";
    }
    else if(number <=1517){
      this.vv.nativeElement.style.color="red";
      this.ww.nativeElement.style.color="white";
      this.rr.nativeElement.style.color="white";
      this.gg.nativeElement.style.color="white";

      this.zr.nativeElement.style.color="red";
      this.qr.nativeElement.style.color="white";
      this.fr.nativeElement.style.color="white";
      this.gr.nativeElement.style.color="white";
    }

}
}
function viewchild(arg0: string) {
  throw new Error('Function not implemented.');
}

