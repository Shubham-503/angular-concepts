import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input() appTooltip!: string;
  @HostBinding('class.tooltip-active') isActive = false;
  private tooltipElement!: HTMLElement | null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showTooltip();
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.isActive = true;
    this.tooltipElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.appTooltip);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private hideTooltip() {
    this.isActive = false;
    if (this.tooltipElement) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
