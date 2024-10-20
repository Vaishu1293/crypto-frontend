import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CountUpModule } from 'ngx-countup';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbDropdownModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

//Module
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { SharedModule } from '../../shared/shared.module';
import { WidgetModule } from '../../shared/widget/widget.module';

// Component
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';
import { CryptoComponent } from './crypto/crypto.component';
import { ProjectsComponent } from './projects/projects.component';
import { NftComponent } from './nft/nft.component';
import { JobComponent } from './job/job.component';
import { NftMetadataComponent } from './nft-metadata/nft-metadata.component';
import { IpfsDataComponent } from './ipfs-data/ipfs-data.component';
import { TokenBalanceComponent } from './token-balance/token-balance.component';
import { QueryTransactionsComponent } from './query-transactions/query-transactions.component';
import { TransferTokensComponent } from './transfer-tokens/transfer-tokens.component';

@NgModule({
  declarations: [
    AnalyticsComponent,
    CrmComponent,
    CryptoComponent,
    ProjectsComponent,
    NftComponent,
    JobComponent,
    NftMetadataComponent,
    IpfsDataComponent,
    TokenBalanceComponent,
    QueryTransactionsComponent,
    TransferTokensComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    CountUpModule,
    NgbToastModule,
    LeafletModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    SlickCarouselModule,
    FlatpickrModule.forRoot(),
    DashboardsRoutingModule,
    SharedModule,
    WidgetModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule
  ],
})
export class DashboardsModule { }
