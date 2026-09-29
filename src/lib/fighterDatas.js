// Data: name, belt, age, weight, height, bio)
import { Image } from 'astro:assets';
import obr1 from "../assets/obr1.jpg";
import obr2 from "../assets/obr2.jpg";
import obr3 from "../assets/obr3.jpg";
import obr4 from "../assets/obr4.jpg";
import obr5 from "../assets/obr5.jpg";



export const fighterDatas = [
{
  name: "Lacek",
  belt: "Red",
  age: "45",
  weight: "100",
  height: "160",
  image: obr2,
  bio: "TKD Lacek trainer"
},


{
  name: "Šmarda",
  belt: "White",
  age: "23",
  weight: "65",
  height: "187",
  image: obr3,
  bio: "TKD Lacek trainer V2"
},


{
  name: "Malinda",
  belt: "Green",
  age: "21",
  weight: "90",
  height: "175",
  image: obr4,
  bio: "Jude"
},

{
  name: "RTHWLDN",
  belt: "Black",
  age: "34",
  weight: "81",
  height: "183",
  image: obr5,
  bio: "Youtuber"
},
{
  name: "Scrxtch",
  belt: "Black",
  age: "21",
  weight: "85",
  height: "195",
  image: obr1,
  bio: "Fight. Win. Never surrender. Dark past, bright future. Blade's edge, spirit's might. Bold conquerors own the world."
 },

 {
  name: "Test",
  belt: "White",
  age: "12",
  weight: "36",
  height: "154",
  image: obr1,
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
 },

 {
  name: "Test2",
  belt: "Red",
  age: "18",
  weight: "87",
  height: "195",
  image: obr1,
  bio: "Test2"
 }
 ];


//export default data;