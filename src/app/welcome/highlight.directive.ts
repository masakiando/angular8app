import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input() appHighlight: string;
  @Input() secondaryColor: string;

  constructor(private el: ElementRef) {
    console.log(this.el);
  }

  @HostListener('mouseenter') onmouseenter() {
    this.highlight(this.el, this.secondaryColor);
  }

  @HostListener('mouseleave') onmouseleave() {
    this.highlight(this.el, null);
  }

  private highlight(el, color) {
    const ele = el.nativeElement as HTMLHeadingElement;
    ele.style.color = color;
  }
}
