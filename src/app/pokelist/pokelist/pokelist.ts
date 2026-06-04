import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokeService } from '../../services/poke.service';
import { PokeAbilities, PokeDetails, Pokemon, PokeResponse } from '../../models/pokemon';

@Component({
  selector: 'app-pokelist',
  imports: [RouterLink],
  templateUrl: './pokelist.html',
  styleUrl: './pokelist.css',
})
export class Pokelist implements OnInit {
  private pokeService = inject(PokeService);
  private cdr = inject(ChangeDetectorRef);

  pokemons: Pokemon[] = [];
  pokeAbility: PokeAbilities[] = [];
  isLoading = false; 

  ngOnInit(): void {
    this.isLoading = true; 

    this.pokeService.getPokes().pipe(
      switchMap((data: PokeResponse) => { 
        this.pokemons = data.results;

        const ids = this.pokemons.map(item =>
          Number(item.url.split('/').filter(Boolean).pop())
        );

        return forkJoin(  
          ids.map(id => this.pokeService.getPokeById(id))
        );
      })
    ).subscribe({
      next: (details: PokeDetails[]) => {
        this.pokeAbility = details.map(detail => ({
          id: detail.id,
          order: detail.order,
          base_experience: detail.base_experience,
          title: detail.species.name,
          height: detail.height,
          weight: detail.weight,
          hp: detail.stats[0].base_stat,
          attacks: detail.stats[1].base_stat,
          defence: detail.stats[2].base_stat,
          special_attacks: detail.stats[3].base_stat,
          special_defence: detail.stats[4].base_stat,
          speed: detail.stats[5].base_stat,
        }));
        this.isLoading = false; 
        this.cdr.detectChanges()
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false; 
      }
    });
  }
}