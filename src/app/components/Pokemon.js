import Image from "next/image";

export function Pokemon({ pokemon }) {
    return (
      <div className="border-2 border-green-800 hover:border-green-400 rounded-2xl group" key={pokemon.id}>
      <span>#{String(pokemon.id).padStart(3, '0')}</span>
        <Image
          src={pokemon.image}
          width={250}
          height={250}
          alt={pokemon.name}
        />
        <h1 className="bg-green-800 md:bg-green-400 rounded-b-2xl px-2 py-1 text-2xl text-center font-bold capitalize " > {pokemon.name}</h1>
    </div>
    )
  }