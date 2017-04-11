import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {ShippingInformationComponent} from './shipping-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
// Load the implementations that should be tested
import {AppState} from '../app.service';
import {FormHelperService} from '../services/form-helper.service';
import {MockService} from '../services/mock.service';

describe(`CheckOut/ShippingInfoComponent`, () => {
  let comp: ShippingInformationComponent;
  let fixture: ComponentFixture<ShippingInformationComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingInformationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule, ReactiveFormsModule, HttpModule],
      providers: [
        BaseRequestOptions,
        AppState,
        FormHelperService,
        MockService
      ]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingInformationComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  it('should log ngOnInit', () => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    comp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  });

  it('should have local state', () => {
    expect(comp.localState).toEqual({value: 'cart'});
  });
});
