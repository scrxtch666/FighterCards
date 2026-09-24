import { db, fighterData } from 'astro:db';

//await Insert();

export default async function seed() {
  await db.insert(fighterData).values([
    {
      name: "Scrxtch",
      belt: "Black",
      age: 21,
      weight: 58,
      height: 187,
      bio: "Hii",
    },
    /*
    {
      name: "RTHWLDN",
      belt: "Red",
      age: 28,
      weight: 98,
      height: 183,
      bio: "YouTuber",
    },
    */
  ]);
}
