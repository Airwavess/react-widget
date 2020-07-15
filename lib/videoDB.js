const data = [
  {
    id: "video1",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/videos/Pexels Videos 1539953.mp4",
    title: "Jerry Zhang",
    content: "Jerry Zhang",
  },
  {
    id: "video2",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/videos/Pexels Videos 1550080.mp4",
    title: "Kalen Emsley",
    content: "Kalen Emsley",
  },
  {
    id: "video3",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/videos/production ID_3963239.mp4",
    title: "Joshua Earle",
    content: "Joshua Earle",
  },
];

export const getVideos = () => {
  return data;
};

export const getVideosId = () => {
  return data.map((d) => d.id);
};
