import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then( m => m.StaffPageModule)
  },
  {
    path: 'createprofile',
    loadChildren: () => import('./createprofile/createprofile.module').then( m => m.CreateprofilePageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'updateprofile',
    loadChildren: () => import('./updateprofile/updateprofile.module').then( m => m.UpdateprofilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'skillprofile',
    loadChildren: () => import('./skillprofile/skillprofile.module').then( m => m.SkillprofilePageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'applyjob',
    loadChildren: () => import('./applyjob/applyjob.module').then( m => m.ApplyjobPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'viewjob',
    loadChildren: () => import('./viewjob/viewjob.module').then( m => m.ViewjobPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'viewprofile',
    loadChildren: () => import('./viewprofile/viewprofile.module').then( m => m.ViewprofilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'selectjob',
    loadChildren: () => import('./selectjob/selectjob.module').then( m => m.SelectjobPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'updatejob',
    loadChildren: () => import('./updatejob/updatejob.module').then( m => m.UpdatejobPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'uploadjob',
    loadChildren: () => import('./uploadjob/uploadjob.module').then( m => m.UploadjobPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'statusjob',
    loadChildren: () => import('./statusjob/statusjob.module').then( m => m.StatusjobPageModule),
    canActivate: [AuthGuard]

  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./cart-modal/cart-modal.module').then( m => m.CartModalPageModule),
    canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
