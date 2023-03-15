## Challenge Frontend - Noa Experience

## Descripcion

La pagina web permite traer 151 pokemons y mostrarlos en un grafo, al hacerle click a algun nombre, mostrara un card con mas informacion . Se decicidio usar Next y TailwindCSS por su facilidad de uso y rapidez en el desarrollo.

Para obtener esta información, esta aplicación hace uso de la función `getStaticProps` de Next.js. Esta función se ejecuta en el servidor cuando la aplicación se está construyendo, lo que permite a los desarrolladores obtener los datos necesarios para que una página se muestre de forma estática sin tener que realizar una solicitud al servidor, así los usuarios obtienen toda la información sobre los pokemones sin tener que esperar.

Opte por esa forma por recomendacion de Next.js donde plantea que se debe intentar renderizar todo en el servidor y para este caso es perfecto , ya que yo se que los datos no van a cambiar y no necesito hacer una llamada a la api cada vez que se renderiza la pagina. 

## DEMO 

[DEMO](https://vercel.com/jonatan-c/challenge-nextjs-noa)


## Tecnologias

- Next.js
- React
- Typescript
- TailwindCSS
- Eslint
- Prettier

## Instalacion y ejecucion

```
yarn install
yarn run dev
```