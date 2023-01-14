import * as React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core/styles";
import { RecommendationsType, SingleRecommendationItem } from '../../types/RecommendationsType'
import RecommendationItem from '../../components/recommendationItem/RecommendationItem'

const useStyles = makeStyles({
  body: {
    width: "auto",
    color: "#8FE3CF",
    background: "#2B4865",
    display: "flex",
    flexFlow: "column",
    height: "100vh"
  }
});
const recommendationsState = [
  {
    id: 1,
    description: "As a movie lover, I could recommend you a few next titles.",
    title: "Movies top list",
    homeMadeList: [{
      id: 1,
      name: "Poslednji krug u Monci",
      star: 5,
      author: "Dusan Prelevic",
      imdburl: "https://www.imdb.com/title/tt0180924/?ref_=fn_al_tt_1"
    } as SingleRecommendationItem, {
      id: 2,
      name: "Dudes",
      star: 5,
      author: "Srdja Andjelic & Radivoj Andric",
      imdburl: "https://www.imdb.com/title/tt0279248/?ref_=fn_al_tt_1"
    } as SingleRecommendationItem, {
      id: 3,
      name: "When I Grow Up, I'll Be a Kangaroo",
      star: 5,
      author: "Miroslav Momcilovic",
      imdburl: "https://www.imdb.com/title/tt0383846/?ref_=fn_al_tt_1"
    } as SingleRecommendationItem, {
      id: 4,
      name: "Pretty Village, Pretty Flame",
      star: 5,
      author: "Vanja Bulic & Srdjan Dragojevic  & Biljana Maksic & Nikola Pejakovic ",
      imdburl: "https://www.imdb.com/title/tt0116860/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem, {
      id: 5,
      name: "The Border Post",
      star: 5,
      author: "Rajko Grlic & Ante Tomic",
      imdburl: "https://www.imdb.com/title/tt0466561/?ref_=ttls_li_tt"
    } as SingleRecommendationItem, {
      id: 6,
      name: "The Professional",
      star: 5,
      author: "Dusan Kovacevic",
      imdburl: "https://www.imdb.com/title/tt0339535/?ref_=ttls_li_tt"
    } as SingleRecommendationItem, {
      id: 7,
      name: "Sky Hook",
      star: 5,
      author: "Srdjan Koljevic & Djordje Milosavljevic",
      imdburl: "https://www.imdb.com/title/tt0209180/?ref_=fn_al_tt_1"
    } as SingleRecommendationItem
      , {
        id: 8,
        name: "National Class Category Up to 785 Ccm",
        star: 5,
        author: "Goran Markovic",
        imdburl: "https://www.imdb.com/title/tt0079606/?ref_=tt_sims_tt_t_1"
      } as SingleRecommendationItem, {
        id: 9,
        name: "We Are Not Angels",
        star: 5,
        author: "Srdjan Dragojevic",
        imdburl: "https://www.imdb.com/title/tt0104860/?ref_=tt_sims_tt_t_10"
      } as SingleRecommendationItem, {
        id: 10,
        name: "Barking at the Stars",
        star: 4,
        author: "Zdravko Sotra & Milovan Vitezovic",
        imdburl: "https://www.imdb.com/title/tt0187231/?ref_=tt_sims_tt_t_3"
      } as SingleRecommendationItem],
    globalList: [{
      id: 1,
      name: "La vita è bella",
      star: 5,
      author: "Roberto Benigni",
      imdburl: ""
    } as SingleRecommendationItem,
    {
      id: 2,
      name: "Schumacher",
      star: 5,
      author: "Hanns-Bruno Kammertöns & Vanessa Nöcker & Michael Wech",
      imdburl: "https://www.imdb.com/title/tt11214590/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 3,
      name: "Black Box",
      star: 5,
      author: "Jim Cash & Jack Epps Jr.& Peter Craig",
      imdburl: "https://www.imdb.com/title/tt10341034/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 4,
      name: "Top Gun: Maverick",
      star: 5,
      author: "Becky Johnston & Roberto Bentivegna & Sara Gay Forden",
      imdburl: "https://www.imdb.com/title/tt1745960/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 5,
      name: "The Wolf of Wall Street",
      star: 5,
      author: "Terence Winter & Jordan Belfort",
      imdburl: "https://www.imdb.com/title/tt0993846/?ref_=hm_tpks_tt_t_22_pd_tp1_pbr_ic"
    } as SingleRecommendationItem,
    {
      id: 6,
      name: "House of Gucci",
      star: 5,
      author: "Becky Johnston & Roberto Bentivegna & Sara Gay Forden",
      imdburl: "https://www.imdb.com/title/tt11214590/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 7,
      name: "Lamborghini: The Man Behind the Legend",
      star: 5,
      author: "Bobby Moresco",
      imdburl: "https://www.imdb.com/title/tt5533370/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,

    {
      id: 8,
      name: "Senna",
      star: 5,
      author: "Manish Pandey",
      imdburl: "https://www.imdb.com/title/tt1424432/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 9,
      name: "Wimbledon",
      star: 4,
      author: "Adam Brooks & Jennifer Flackett & Mark Levin",
      imdburl: "https://www.imdb.com/title/tt0360201/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem,
    {
      id: 10,
      name: "The Godfather",
      star: 4,
      author: "Mario Puzo & Francis Ford Coppola",
      imdburl: "https://www.imdb.com/title/tt0068646/?ref_=tt_tpks_tt_t_22_pd_tp1_pbr_ic"
    } as SingleRecommendationItem]
  } as RecommendationsType,
  {
    id: 2,
    description: "As a movie lover, I will try to be recommended to you next series",
    title: "Series top list",
    homeMadeList: [{
      id: 1,
      name: "Podrucje bez signala",
      star: 5,
      author: "Hana Jusic & Jelena Paljan & Robert Perisic ",
      imdburl: "https://www.imdb.com/title/tt15366796/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem, {
      id: 2,
      name: "Civil Servant",
      star: 5,
      author: "Predrag Antonijevic & Dimitrije Vojnov",
      imdburl: "https://www.imdb.com/title/tt10078462/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem, {
      id: 3,
      name: "Black Sun",
      star: 5,
      author: "Dragan Bjelogrlic",
      imdburl: "https://www.imdb.com/title/tt6108262/?ref_=tt_sims_tt_t_2"
    } as SingleRecommendationItem, {
      id: 4,
      name: "Crna svadba",
      star: 4,
      author: "Nemanja Cipranic & Strahinja Madzarevic",
      imdburl: "https://www.imdb.com/title/tt10078462/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem, {
      id: 5,
      name: "Morning Changes Everything",
      star: 2,
      author: "Goran Stankovic & Vladimir Tagic",
      imdburl: "https://www.imdb.com/title/tt8232504/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem],
    globalList: [{
      id: 1,
      name: "Chernobyl",
      star: 5,
      author: "Craig Mazin & Johan Renck ",
      imdburl: "https://www.imdb.com/title/tt7366338/fullcredits?ref_=tt_ov_st_sm"
    } as SingleRecommendationItem, {
      id: 2,
      name: "Money Heist",
      star: 5,
      author: "Álex Pina",
      imdburl: "https://www.imdb.com/title/tt6468322/?ref_=nv_sr_srsg_0"
    } as SingleRecommendationItem, {
      id: 3,
      name: "Peaky Blinders",
      star: 5,
      author: "Steven Knight",
      imdburl: "https://www.imdb.com/title/tt2442560/?ref_=tt_sims_tt_t_11"
    } as SingleRecommendationItem, {
      id: 4,
      name: "Narcos",
      star: 5,
      author: "Andrés Baiz & Josef Kubota Wladyka  ",
      imdburl: "https://www.imdb.com/title/tt2707408/fullcredits?ref_=tt_ov_wr_sm"
    } as SingleRecommendationItem, {
      id: 5,
      name: "The Last Dance",
      star: 5,
      author: "Jason Hehir ",
      imdburl: "https://www.imdb.com/title/tt8420184/fullcredits?ref_=tt_ov_st_sm"
    } as SingleRecommendationItem]
  } as RecommendationsType,

  {
    id: 2,
    description: "I am a huge lover of books. I have an extensive collection, from which I learn a great deal and spend quality time. They provide me with motivation and change the way I view everyday situations and the behavior of those around me in my immediate environment.",
    title: "Books top list",
    homeMadeList: [{
      id: 1,
      name: "Reka sa cetiri usca",
      star: 5,
      author: "Siniša Kovačević",
      imdburl: "https://www.knjizare-vulkan.rs/domaci-roman/66217-reka-sa-cetiri-usca"
    } as SingleRecommendationItem, {
      id: 2,
      name: "Una",
      star: 5,
      author: "Momo Kapor",
      imdburl: "https://www.knjizare-vulkan.rs/domaci-roman/88035-una"
    } as SingleRecommendationItem, {
      id: 3,
      name: "Necista krv",
      star: 5,
      author: "Borisav Stanković",
      imdburl: "https://www.knjizare-vulkan.rs/domaci-klasici/47588-necista-krv"
    } as SingleRecommendationItem, {
      id: 4,
      name: "Slučaj Vinča ",
      star: 5,
      author: "Goran Milašinović",
      imdburl: "https://www.laguna.rs/n3465_knjiga_slucaj_vinca_laguna.html"
    } as SingleRecommendationItem, {
      id: 5,
      name: "Beograd",
      star: 5,
      author: "Siniša Kovačević",
      imdburl: "https://www.knjizare-vulkan.rs/domaci-roman/119140-beograd"
    } as SingleRecommendationItem, {
      id: 6,
      name: "Ada",
      star: 5,
      author: "Momo Kapor",
      imdburl: "https://www.laguna.rs/n4921_knjiga_ada_laguna.html"
    } as SingleRecommendationItem, {
      id: 7,
      name: "Zega",
      star: 4,
      author: "Igor Marojevic",
      imdburl: "https://www.laguna.rs/n854_knjiga_zega_laguna.html"
    } as SingleRecommendationItem, , {
      id: 8,
      name: "Da je bolje, ne bi valjalo",
      star: 4,
      author: "Bojan Ljubenovic",
      imdburl: "https://www.knjizare-vulkan.rs/domaci-roman/78933-da-je-bolje-ne-bi-valjalo"
    } as SingleRecommendationItem, {
      id: 9,
      name: "Crveno i crno",
      star: 4,
      author: "Dejan Potkonjak",
      imdburl: "https://shop.infinitylighthouse.com/sumaher-crveno-i-crno.html"
    } as SingleRecommendationItem, {
      id: 10,
      name: "Dekodiranje stvarnosti ",
      star: 4,
      author: "Vlatko Vedral ",
      imdburl: "https://www.laguna.rs/n2583_knjiga_dekodiranje_stvarnosti_laguna.html"
    } as SingleRecommendationItem],
    globalList: [{
      id: 1,
      name: "The Old Man and the Sea",
      star: 5,
      author: "Ernest Hemingway ",
      imdburl: "https://en.wikipedia.org/wiki/The_Old_Man_and_the_Sea"
    } as SingleRecommendationItem, {
      id: 2,
      name: "The Stranger",
      star: 5,
      author: "Albert Camus",
      imdburl: "https://en.wikipedia.org/wiki/The_Stranger_(Camus_novel)"
    } as SingleRecommendationItem, {
      id: 3,
      name: "Digital Fortress",
      star: 5,
      author: " Dan Brown",
      imdburl: "https://en.wikipedia.org/wiki/Digital_Fortress"
    } as SingleRecommendationItem, {
      id: 4,
      name: "Animal Farm ",
      star: 5,
      author: "George Orwell",
      imdburl: "https://en.wikipedia.org/wiki/Animal_Farmju "
    } as SingleRecommendationItem, {
      id: 5,
      name: "Headhunters",
      star: 5,
      author: "Jo Nesbø",
      imdburl: "https://en.wikipedia.org/wiki/Headhunters_(film)"
    } as SingleRecommendationItem, {
      id: 6,
      name: "La vie sans toi",
      star: 5,
      author: "Xavier de Moulins",
      imdburl: "-"
    } as SingleRecommendationItem, {
      id: 7,
      name: "Fahrenheit 451",
      star: 5,
      author: "Ray Bradbury",
      imdburl: "https://en.wikipedia.org/wiki/Fahrenheit_451"
    } as SingleRecommendationItem, , {
      id: 8,
      name: "The Da Vinci Code",
      star: 5,
      author: "Dan Brown",
      imdburl: "https://en.wikipedia.org/wiki/The_Da_Vinci_Code"
    } as SingleRecommendationItem, {
      id: 9,
      name: "A Man Called Ove ",
      star: 4,
      author: "	Fredrik Backman",
      imdburl: "https://en.wikipedia.org/wiki/A_Man_Called_Ove_(novel)"
    } as SingleRecommendationItem, {
      id: 10,
      name: "Forrest Gump ",
      star: 4,
      author: "Winston Groom ",
      imdburl: "https://en.wikipedia.org/wiki/Forrest_Gump_(novel)"
    } as SingleRecommendationItem]
  } as RecommendationsType,
] as RecommendationsType[];



export default function Recommendation() {
  const style1 = useStyles();
  const classes1 = {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: 20,
      textAlign: "center",
      color: "blue",
      fontFamily: "Roboto"
    }
  };
  return (
    <div style={{ flexGrow: 1 }}>
      <h1>
        Recommendations page
      </h1>
      <Grid container spacing={3} style={{ padding: '25px', justifyContent: 'center' }}>
        {recommendationsState.map((item) => (
          <Grid container item xs={12} style={{ marginBottom: '20px', background: "#002B5B" }}>
            <RecommendationItem categoryName={item.title}
              homeMadeList={item.homeMadeList}
              simpleDescription={item.description}
              worldList={item.globalList}
              isTableOriented={true}
              key={item.id} />

          </Grid>))
        }

      </Grid>



    </div>
  );
}

{/*

 <Grid  container item xs={12} style={{display:'flex',margin:'2px',justifyContent: 'center'}}  spacing={3}>
                {recommendationsState.map((item)=>(
                  <RecommendationItem 
                  categoryName={item.title}
                  simpleDescription={item.description}
                  key={item.id}
                  isTableOriented={true}
                  homeMadeList={item.homeMadeList}
                  worldList={item.globalList}
                  />
                */}