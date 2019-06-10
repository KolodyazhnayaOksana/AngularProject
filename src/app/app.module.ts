import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MenuComponent} from './components/menu/menu.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {HomeComponent} from './components/home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HowWorkComponent} from './components/home/how-work/how-work.component';
import {HowWorkCardComponent} from './components/how-work-card/how-work-card.component';
import {WayWorkComponent} from './components/home/way-work/way-work.component';
import {CardWithPhotoComponent} from './components/card-with-photo/card-with-photo.component';
import {WelcomeWorkComponent} from './components/home/welcome-work/welcome-work.component';
import {HttpClientModule} from '@angular/common/http';
import {ListUsersComponent} from './components/list-users/list-users.component';
import {ScrollEventModule} from 'ngx-scroll-event';
import {ScrollToModule} from 'ng2-scroll-to-el';
import { UserCardComponent } from './components/user-card/user-card.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: ListUsersComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistrationComponent,
    HomeComponent,
    HowWorkComponent,
    HowWorkCardComponent,
    WayWorkComponent,
    CardWithPhotoComponent,
    WelcomeWorkComponent,
    ListUsersComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    ScrollEventModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  exports: [
    AppComponent,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
