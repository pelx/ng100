import { Directive, HostBinding, Input, ElementRef, AfterViewInit, Inject, OnDestroy } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.src') srcAttribute = null;
  @Input() src: SafeUrl;

  public observer: IntersectionObserver;

  constructor(
              private element: ElementRef,
              @Inject('Window') public window: Window) { }


  ngAfterViewInit(): void {
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        });
      });
      this.observer.observe(this.element.nativeElement);
    } else {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  private canLazyLoad(): boolean {
    return this.window && this.window.hasOwnProperty('IntersectionObserver');
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
