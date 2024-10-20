import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { AnalyticsComponent } from "./analytics/analytics.component";
import { CrmComponent } from "./crm/crm.component";
import { CryptoComponent } from "./crypto/crypto.component";
import { ProjectsComponent } from "./projects/projects.component";
import { NftComponent } from "./nft/nft.component";
import { JobComponent } from './job/job.component';
import { NftMetadataComponent } from './nft-metadata/nft-metadata.component';
import { IpfsDataComponent } from './ipfs-data/ipfs-data.component';
import { TokenBalanceComponent } from './token-balance/token-balance.component';
import { QueryTransactionsComponent } from './query-transactions/query-transactions.component';
import { TransferTokensComponent } from './transfer-tokens/transfer-tokens.component';

const routes: Routes = [
  {
    path: "analytics",
    component: AnalyticsComponent
  },
  {
    path: "crm",
    component: CrmComponent
  },
  {
    path: "crypto",
    component: CryptoComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "nft",
    component: NftComponent
  },
  {
    path: "job",
    component: JobComponent
  },
  {
    path: "nft-metadata",
    component: NftMetadataComponent
  },
  {
    path: "ipfs-data",
    component: IpfsDataComponent
  },
  {
    path: "token-balance",
    component: TokenBalanceComponent
  },
  {
    path: "query-transactions",
    component: QueryTransactionsComponent
  },
  {
    path: "transfer-tokens",
    component: TransferTokensComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardsRoutingModule { }
