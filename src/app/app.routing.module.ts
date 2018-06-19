import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { ComposeMessageComponent }  from './compose-message.component';
import { PageNotFoundComponent }    from './not-found.component';

import { DrMarkComponent} from './drmark/drmark.component';
import { DrAlleyComponent } from './dralley/dralley.component';
import { DrBrianComponent } from './drbrian/drbrian.component'; 
import { PgNotFoundComponent } from './pgnotfound/pgnotfound.component';

const appRoutes: Routes=[
{
    path: 'compose',
    component: ComposeMessageComponent,
    data: {
        title: 'Message'
      } 
    },
 { path: 'drbrian', 
     component: DrBrianComponent,
     data: {
        title: 'Dr. Brian Haley'
      }
    },
  {
    path: 'drmark',
    component: DrMarkComponent,
    data: {
        title: 'Dr. Mark McCormick'
      }
  },
  {
    path: 'dralley',   
    component: DrAlleyComponent,
    data: {
        title: 'Dr Alley Lieberman'
      }
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({ 
    imports: [RouterModule.forRoot(appRoutes, {useHash: true, enableTracing: true })],
    exports: [RouterModule]
    })

 export class AppRoutingModule {
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
        
  }
} 
 export const routingComponents = [ DrMarkComponent, DrAlleyComponent, DrBrianComponent,PgNotFoundComponent  ];
     

