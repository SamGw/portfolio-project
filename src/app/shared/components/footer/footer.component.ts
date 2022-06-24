import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, AfterViewChecked } from '@angular/core';
import { SharedModule } from "../../shared.module";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {

  @ViewChild('footer') footer!: ElementRef;
  public parent: any;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.parent = this.el.nativeElement.parentNode
  }

  isPageSmallerThanWindow(){
    if (this.parent)
      return this.parent.getBoundingClientRect().height < window.innerHeight - 100
    return;
  }

}
