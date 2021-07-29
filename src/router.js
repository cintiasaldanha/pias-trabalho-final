import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //mode: "history",
  routes: [
    {
      path: "/times",
      alias: "/allTimes",
      name: "times",
      component: () => import("./components/TimesList")
    },
    {
      path: "/times/:id",
      name: "time-details",
      component: () => import("./components/Time")
    },
    {
      path: "/addTime",
      name: "addTime",
      component: () => import("./components/AddTime")
    },
    {
      path: "/jogos",
      alias: "/allJogos",
      name: "jogos",
      component: () => import("./components/JogosList")
    },
    {
      path: "/jogos/:idtemp/:idrod/:id",
      name: "jogo-details",
      component: () => import("./components/Jogo")
    },
    {
      path: "/addJogo",
      name: "addJogo",
      component: () => import("./components/AddJogo")
    },
    {
      path: "/temporadas",
      alias: "/allTemporadas",
      name: "temporadas",
      component: () => import("./components/TemporadasList")
    },
    {
      path: "/temporadas/:id",
      name: "temporada-details",
      component: () => import("./components/Temporada")
    },
    {
      path: "/addTemporada",
      name: "addTemporada",
      component: () => import("./components/AddTemporada")
    },        
    {
      path: "/songs",
      alias: "/allSongs",
      name: "songs",
      component: () => import("./components/SongsList")
    },
    {
      path: "/songs/:id",
      name: "song-details",
      component: () => import("./components/Song")
    },
    {
      path: "/addSong",
      name: "addSong",
      component: () => import("./components/AddSong")
    },
    {
      path: "/tutorials",
      alias: "/allTutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/addTutorial",
      name: "addTutorial",
      component: () => import("./components/AddTutorial")
    }
    
  ]
});

//http://18.205.226.58/br21api/time
//http://18.205.226.58:81/br21api/jogo
//http://18.205.226.58:82/br21api/temporada