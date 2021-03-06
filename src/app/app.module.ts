import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, NavParams } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { IonicStorageModule, Storage } from "@ionic/storage";
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from "@angular/common/http";
import { ConfigService } from "./services/config.service";
import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { OrderDetailPage } from "./order-detail/order-detail.page";
import { OrderDetailPageModule } from "./order-detail/order-detail.module";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { Device } from "@ionic-native/device/ngx";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions =
  ConfigService.MQTT_SERVICE_OPTIONS;

@NgModule({
  declarations: [AppComponent, OrderDetailPage],
  entryComponents: [OrderDetailPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Device,
    BackgroundMode,
    // BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
