import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  //mode: "history",
  routes: [
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
