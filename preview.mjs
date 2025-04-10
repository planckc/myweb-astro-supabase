import { preview } from 'astro/cli';

const port = parseInt(process.env.PORT) || 3000;
const host = '0.0.0.0';

console.log(`\nIniciando Astro en puerto ${port} y host ${host}...\n`);

await preview({
  port,
  host
});
