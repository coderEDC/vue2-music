import instance from "./index";

//banner
export function getBanner(params) {
  const config = {
    method: "get",
    url: "/banner",
  };
  if (params) {
    config.params = params;
  }
  return instance(config);
}

//主播
export function getHost(params) {
  const config = {
    method: "get",
    url: "/dj/toplist/popular",
  };
  if (params) {
    config.params = params;
  }
  return instance(config);
}

//榜单分为两个，网易云不允许直接调用榜单
//榜单内容摘要
export function getTops(params) {
  const config = {
    method: "get",
    url: "/toplist",
  };
  if (params) {
    config.params = params;
  }
  return instance(config);
}
//榜单需要传id，必填
export function getTop(id) {
  return instance({
    method: "get",
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

// 歌单
export function getSongList(offset, limit) {
  return instance({
    url: "/top/playlist", //要传的url
    //接受的参数
    params: {
      limit,
      offset,
    },
  });
}

//歌单所有歌曲
export function getSongAll(id) {
  return instance({
    url: "/playlist/track/all",
    params: {
      id,
    },
  });
}

//获取歌单详情动态
export function getSongDetail(id) {
  return instance({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

//获取歌单的收藏那些
export function getSong(id) {
  return instance({
    url: "/playlist/detail/dynamic",
    params: {
      id,
    },
  });
}

//歌单评论数据
export function getComment(id, limit, offset) {
  return instance({
    url: "/comment/playlist",
    params: {
      id,
      offset,
      limit,
    },
  });
}

//热门歌手数据
export function getArtists(limit, offset) {
  return instance({
    url: "/top/artists",
    params: {
      offset,
      limit,
    },
  });
}

//歌手详情

export function getArtistsDetail(id) {
  return instance({
    url: "/artist/detail",
    params: {
      id,
    },
  });
}

//搜索接口
export function getSearch(keywords) {
  return instance({
    url: "/cloudsearch",
    params: {
      keywords,
    },
  });
}

//登录
export function getLogin(phone, password) {
  return instance({
    url: "/cloudsearch",
    params: {
      phone,
      password,
    },
  });
}

//发送验证码
export function getSentd(phone) {
  return instance({
    url: "/captcha/sent",
    params: {
      phone,
    },
  });
}

// 验证登录
export function getVerify(phone, captcha) {
  return instance({
    url: "/captcha/verify",
    params: {
      phone,
      captcha,
    },
  });
}

//播放
export function getSongs(id) {
  return instance({
    url: "/song/url",
    params: {
      id,
    },
  });
}

/**获取歌词 */
export function getLyric(id) {
  return instance({
    url: "/lyric",
    params: {
      id: id,
    },
  });
}
