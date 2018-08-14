import { JsonController, Get, Patch, Param, Body, NotFoundError, Post } from "routing-controllers";
import Pokemon from "../entities/pokemon";

@JsonController()
export default class PokemonController {

    @Get('/pokemon')
    async getPokemon(){
    const pokemon = await Pokemon.find()
    return { pokemon }
}


    @Post('/pokemon')
    async newPokemon(){
        const pokemon = await Pokemon.create()
        return pokemon.save()
    }


    @Patch('/pokemon/:id')
    async updatePokemon(
        @Param('id') id: number,
        @Body() update: Partial<Pokemon>
    )   {
        const pokemon = await Pokemon.findOne(id)
        if (!pokemon) {
            throw new NotFoundError(`Can't find pokemon!`)
        }
        const updatedPokemon = Pokemon.merge(pokemon, update)
        return updatedPokemon.save()
    }


}