import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { LogTableComponent } from "./components/log-table/log-table.component";
import { LogService } from "./services/log.service";
import { LogListComponent } from "./components/log-list/log-list.component";

@NgModule({
  declarations: [AppComponent, LogTableComponent, LogListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
