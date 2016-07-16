import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import { enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Constants } from './app.constants';
import { NotificationsService } from './shared/index';

//enableProdMode();

bootstrap(AppComponent,
    [
        HTTP_PROVIDERS,
        disableDeprecatedForms(),
        provideForms(),
        APP_ROUTER_PROVIDERS,
        Constants,
        NotificationsService
    ]
);

