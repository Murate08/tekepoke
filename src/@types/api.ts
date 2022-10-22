
export interface PokemonsResponseResutl  {
    name:string;
    url:string;
}


export interface PokemonsResponse  {
     data:{
        count:number;
        next:string | null;
        previous:string | null;
        results: PokemonsResponseResutl[]
     }
}

export interface PokemonResponse  {
    data:{
        name:string;
        sprites:{
            other:{
                dream_world:{
                    front_default:string;
                }
            }
        }

    }
}