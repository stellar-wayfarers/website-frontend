// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html
import { Wayfarers, Wayfarer } from '.';

export default {
  path: 'dossier',
  name: 'Dossier',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: Wayfarers, isIndex: true },
    { path: 'wayfarer/:id', name: 'Wayfarer', component: Wayfarer },
  ],
};
