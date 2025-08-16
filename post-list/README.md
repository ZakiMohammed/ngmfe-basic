# PostList

This is the remote app contains the post list pages.

#### MFE Setup

1. Add Native Federation package:

```
npm i @angular-architects/native-federation -D
```

2. Init Native Federation:

```
ng g @angular-architects/native-federation:init --project post-list --port 4201 --type remote

Switching project to the application builder using esbuild ...
CREATE federation.config.js (783 bytes)
CREATE src/bootstrap.ts (238 bytes)
UPDATE angular.json (3227 bytes)
UPDATE package.json (1484 bytes)
UPDATE src/main.ts (199 bytes)
✔ Packages installed successfully.
```

#### Base Setup

Install below NPM deps:

```
npm i bootstrap bootstrap-icons bootswatch ngx-toastr
ng add @angular/animations
```

Add Schematics in `angular.json`:

```
"schematics": {
  "@schematics/angular:component": {
      "style": "scss",
      "type": "component"
  },
  "@schematics/angular:directive": { "type": "directive" },
  "@schematics/angular:service": { "type": "service" },
  "@schematics/angular:guard": { "typeSeparator": "." },
  "@schematics/angular:interceptor": { "typeSeparator": "." },
  "@schematics/angular:module": { "typeSeparator": "." },
  "@schematics/angular:pipe": { "typeSeparator": "." },
  "@schematics/angular:resolver": { "typeSeparator": "." }
},
```

Import styles in `styles.scss`:

```
@import '../node_modules/bootswatch/dist/brite/bootstrap.min.css';
@import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
@import '../node_modules/ngx-toastr/toastr.css';
```

Add app configs `app.config.ts`:

```
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideToastr({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ]
};
```