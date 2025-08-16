import { initFederation } from '@angular-architects/native-federation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

initFederation('federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
