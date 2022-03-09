export default [
  //一级路由，显示首页，固定顶部，底部不动
  {
    path: "/",
    component: () => import("../views/DisCover"),
    redirect: "/recommend",
    //2级路由，显示那个首页的推荐啊，排行榜这些
    children: [
      {
        path: "/recommend",
        component: () => import("../views/Recommend.vue"),
        redirect: "/recommend/index",
        //三级路由 展示页面
        children: [
          {
            //歌手详情
            path: "/artistdetail/:id",
            component: () => import("@/components/artist/Artist"),
          },
          //排行榜
          {
            path: "/recommend/toplist",
            component: () => import("@/views/toplist/TopList"),
            children: [
              {
                path: "/recommend/toplist/:id",
                component: () => import("@/views/toplist/TopListShow"),
              },
            ],
          },
          //推荐
          {
            path: "/recommend/index",
            component: () => import("@/views/home/Recomm"),
          },
          {
            path: "/recommend/playlist",
            component: () => import("@/views/songList/SongList"),
          },
          {
            path: "/detail/:id",
            component: () => import("@/components/detail/Detail"),
          },
          {
            path: "/recommend/artist",
            component: () => import("@/views/artist/Artist"),
            redirect: "/recommend/hotartist",
            //歌手那些
            children: [
              {
                path: "/recommend/hotartist",
                component: () => import("@/views/artist/ArtistRight"),
              },
              {
                path: "/recommend/recartist",
                component: () => import("@/views/artist/RecArtist"),
              },
              //歌手介绍
            ],
          },
        ],
      },

      {
        path: "/my",
        component: () => import("../views/mymusic/MyMusic"),
      },
      {
        path: "/musicer",
        component: () => import("../views/musicer/Musicer"),
      },
      {
        path: "/concern",
        component: () => import("../views/concern/Concern"),
      },
      {
        path: "/download",
        component: () => import("../views/download/Download"),
      },
      {
        path: "/shop",
        component: () => import("../views/shop/Shop"),
      },
    ],
  },
];
