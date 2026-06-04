import { Routes } from '@angular/router';
import { Pokelist } from './pokelist/pokelist/pokelist';
import { PokeDetails } from './poke-details/poke-details';

export const routes: Routes = [
    {
        path: '', component: Pokelist
    },
    {
        path: ':id', component: PokeDetails
    }
];
