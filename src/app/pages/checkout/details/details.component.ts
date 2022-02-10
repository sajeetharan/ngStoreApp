import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/share/components/header/services/shopping-cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  total$= this.shoppinCartSvc.totalAction$;
  cart$=this.shoppinCartSvc.cartAction$;

  constructor(private shoppinCartSvc: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
