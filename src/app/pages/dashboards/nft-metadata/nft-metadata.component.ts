import { Component, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { CryptoService } from 'src/app/core/services/crypto-service';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-nft-metadata',
  // standalone: true,
  // imports: [],
  templateUrl: './nft-metadata.component.html',
  styleUrls: ['./nft-metadata.component.scss']
})
export class NftMetadataComponent implements OnDestroy {

  contractAddress: string = '';
  tokenID: string = '';
  nftData: any;

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  // set the current year
  year: number = new Date().getFullYear();
  private _trialEndsAt: any;
  private _diff?: any;
  _days?: number;
  _hours?: number;
  _minutes?: number;
  _seconds?: number;

  subscriptions = new Subscription();

  constructor(public service:PaginationService, private cryptoService: CryptoService) {
     }

  ngOnInit(): void {
    // Date Set
    this._trialEndsAt = "2023-12-31";

    /**
     * Count date set
     */
     interval(1000).pipe(map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
          this._days = this.getDays(this._diff);
          this._hours = this.getHours(this._diff);
          this._minutes = this.getMinutes(this._diff);
          this._seconds = this.getSeconds(this._diff);
      });
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Crypto' },
      { label: 'Buy & Sell', active: true }
    ];

  }

  getNFTData(){
    console.log(this.contractAddress, this.tokenID);
    this.cryptoService.retriveNFTMetadata({
      address: this.contractAddress,
      tokenId: this.tokenID
    });
    const nftSubscription = this.cryptoService.nftMetaData$.subscribe((nftData: any) => {
      this.nftData = nftData;
    });
    this.subscriptions.add(nftSubscription);
  }

  /**
   * Day Set
   */
  getDays(t: number) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  /**
   * Hours Set
   */
  getHours(t: number) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  /**
   * Minutes set
   */
  getMinutes(t: number) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  /**
   * Secound set
   */
  getSeconds(t: number) {
    return Math.floor((t / 1000) % 60);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
