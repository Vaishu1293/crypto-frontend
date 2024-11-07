import { Component, OnDestroy } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';
import { IPFSResponse, IPFSStoreResponse } from 'src/app/core/models/ipfs.models';
import { CryptoService } from 'src/app/core/services/crypto-service';
import { IPFSService } from 'src/app/core/services/ipfs.service';

@Component({
  selector: 'app-ipfs-data',
  // standalone: true,
  // imports: [],
  templateUrl: './ipfs-data.component.html',
  styleUrl: './ipfs-data.component.scss'
})
export class IpfsDataComponent implements OnDestroy{

  textData: string = '';
  hash: string = '';
  hashResponse!: IPFSStoreResponse | null;
  textResponse!: IPFSResponse | null;

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  
  subscriptions = new Subscription();

  constructor(private ipfsService: IPFSService) {
     }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'IPFS Data Storage & Retrival', active: true }
    ];

  }

  storeIPFSData(){
    console.log(this.textData);
    this.ipfsService.storeIPFSData(this.textData);
    const ipfsDataStoreSubscription = this.ipfsService.ipfsStoredData$.subscribe((ipfsStoreResponse: IPFSStoreResponse | null) => {
      this.hashResponse = ipfsStoreResponse;
    });
    this.subscriptions.add(ipfsDataStoreSubscription);
  }

  retriveIPFSData(){
    this.ipfsService.retriveIPFSData(this.hash);
    const ipfsDataSubscription = this.ipfsService.ipfsData$.subscribe((ipfsResponse: IPFSResponse | null) => {
      this.textResponse = ipfsResponse;
    });
    this.subscriptions.add(ipfsDataSubscription);
  }
  
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
