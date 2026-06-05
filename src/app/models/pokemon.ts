export interface Pokemon {
    name: string;
    url: string
}

export interface PokeResponse{
  count: number,
  next: string,
  previous: string,
  results: Pokemon[]
}

export interface PokeAbilities {
  id: number;
  order: number;
  base_experience: number
  title: string;
  height: number;
  weight: number;
  hp: number;
  attacks: number;
  defence: number;
  special_attacks: number;
  special_defence: number;
  speed: number;
  img: string
}


export interface PokeDetails {
  id: number;
  order: number;
  base_experience: number;
  height: number;
  weight: number;
  species: {
    name: string;
  };
  stats: {
    base_stat: number;
  }[];
  sprites: {
    front_default: string
  }
}