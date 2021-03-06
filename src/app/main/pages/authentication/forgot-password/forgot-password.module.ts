import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ForgotPasswordComponent } from 'app/main/pages/authentication/forgot-password/forgot-password.component';
import { ForgotPasswordService } from 'app/main/pages/authentication/forgot-password/forgot-password.service';

const routes = [
    {
        path: 'auth/forgot-password',
        component: ForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        ForgotPasswordComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSharedModule
    ],
    providers: [ForgotPasswordService]
})
export class ForgotPasswordModule {
}
