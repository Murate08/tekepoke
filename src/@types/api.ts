
//create interface pokemon data result
export interface PokemonsResponseResutl  {
    name:string;
    url:string;
}

//this interface to pokemon data result
export interface PokemonsResponse  {
     data:{
        count:number;
        next:string | null;
        previous:string | null;
        results: PokemonsResponseResutl[]
     }
}

//this Interface to return status descriptions,
export interface Stat{
    base_stat:number;
    stat:{
        name:string;
    }
}


//this interface to return image of pokemons
export interface PokemonResponse  {
    data:{
        name:string;
        sprites:{
            other:{
                dream_world:{
                    front_default:string;
                };
                'official-artwork':{
                    front_default:string
                }
            }
        }

        stats:Stat[]

    }
}

