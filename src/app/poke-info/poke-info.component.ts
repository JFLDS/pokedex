import {Component, Input, OnInit} from '@angular/core';
import {PokeInfo} from "../pokemon";
import {PokeShareInfoService} from "../poke-share-info.service";

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})

export class PokeInfoComponent {
  @Input('info')
  info!: PokeInfo;

  constructor(private share: PokeShareInfoService) {
    this.share.getObservable().subscribe( e => console.log('e' + e))
  }
  ngOnInit(): void {
    console.log(this.share.getValue());
  }
}
