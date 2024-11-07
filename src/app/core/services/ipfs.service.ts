import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPFSResponse, IPFSStoreResponse } from '../models/ipfs.models';

@Injectable({
  providedIn: 'root'
})
export class IPFSService {
    
    backendUrl = environment.backendAPIUrl;

    private ipfsDataSubject = new BehaviorSubject<IPFSResponse | null>(null);
    ipfsData$ = this.ipfsDataSubject.asObservable();

    private ipfsDataStoreSubject = new BehaviorSubject<IPFSStoreResponse | null>(null);
    ipfsStoredData$ = this.ipfsDataStoreSubject.asObservable();
  
    constructor(private http: HttpClient) { }

    retriveIPFSData(hash: string) {
        // Make POST request to the NFT metadata retrieval API and return the observable
        this.http.post<IPFSResponse>(`${this.backendUrl}/api/misc/get-ipfs-data`, {hash: hash}).subscribe((response: IPFSResponse) => {
            this.ipfsDataSubject.next(response);
        });
      }

    storeIPFSData(textData: string) {
    // Make POST request to the NFT metadata retrieval API and return the observable
    this.http.post<IPFSStoreResponse>(`${this.backendUrl}/api/misc/store`, {textData: textData}).subscribe((response: IPFSStoreResponse) => {
        this.ipfsDataStoreSubject.next(response);
    });
    }

}
