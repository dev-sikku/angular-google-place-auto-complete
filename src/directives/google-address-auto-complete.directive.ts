import {Directive, ElementRef, input, OnInit, output} from '@angular/core';

declare var google: any;
@Directive({
  selector: '[appGoogleAddressAutoComplete]',
  standalone: true
})
export class GoogleAddressAutoCompleteDirective implements OnInit {
  configs = input<{componentRestrictions: any }>();
  addressChange = output<any>();
  #autocomplete: any;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.#autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.configs() || {});

    this.#autocomplete.addListener('place_changed', () => {
      const place = this.#autocomplete.getPlace();
      if (place.geometry) {
        this.addressChange.emit(place);
      }
    });
  }

}
