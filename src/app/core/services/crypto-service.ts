import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
    
    backendUrl = environment.backendAPIUrl;

    private nftMetaDataSubject = new BehaviorSubject<any>(null);

    nftMetaData$ = this.nftMetaDataSubject.asObservable();
  
    constructor(private http: HttpClient) { }

    retriveNFTMetadata(data: any) {
        // Make POST request to the NFT metadata retrieval API and return the observable
        this.http.post<any>(`${this.backendUrl}/api/misc/nft`, data).subscribe((response: any) => {
          console.log(response);
            this.nftMetaDataSubject.next(response);
        });
      }

}
