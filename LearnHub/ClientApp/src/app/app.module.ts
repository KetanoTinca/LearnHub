import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { AuthGuard } from './helpers/auth.guard';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExercisesComponent } from './exercises/exercises.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FetchDataComponent,
    LoginComponent,
    CoursesComponent,
    ExercisesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path:'home', component:HomeComponent, canActivate: [AuthGuard]},
      { path:'courses',component:CoursesComponent, canActivate: [AuthGuard]},
      { path:'exercises',component:ExercisesComponent, canActivate: [AuthGuard]},
      { path: '', component: FetchDataComponent, canActivate: [AuthGuard] },

    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
