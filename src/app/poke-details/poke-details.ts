import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from '../services/poke.service';
import { PokeAbilities } from '../models/pokemon';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-poke-details',
  imports: [TitleCasePipe],
  templateUrl: './poke-details.html',
  styleUrl: './poke-details.css',
})
export class PokeDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  pokkeService = inject(PokeService)
  router = inject(Router)
  cdr = inject(ChangeDetectorRef)


  pokeDetails:PokeAbilities | null = null

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(!id) return;
    this.pokkeService.getPokeById(+id).subscribe({
      next: (data)=>{
        console.log(data);
        this.pokeDetails = {
          id: data.id,
          order: data.order,
          base_experience: data.base_experience,
          title: data.species.name,
          height: data.height,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attacks: data.stats[1].base_stat,
          defence: data.stats[2].base_stat,
          special_attacks: data.stats[3].base_stat,
          special_defence: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          img: data.sprites.front_default
        }

        this.cdr.detectChanges();
      }
    })
  }

}
