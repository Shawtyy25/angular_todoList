import {Directive, effect, ElementRef, inject, input} from '@angular/core';

@Directive({
  selector: '[appHighlightCompleted]'
})
export class HighlightCompletedDirective {
  isCompleted = input(false);
  element = inject(ElementRef);

  effect = effect(() => {
    const n_element = this.element.nativeElement;
      if (this.isCompleted()) {
        n_element.style.textDecoration = "line-through";
        n_element.style.color = '#727070';

      } else {
        n_element.style.textDecoration = "none";
        n_element.style.color = '#000'
      }

  })

}
