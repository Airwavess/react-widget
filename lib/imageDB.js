const data = [
  {
    id: "image1",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/images/jerry-zhang-y8lcotrghpe-unspla.jpg",
    title: "Jerry Zhang",
    content: "Jerry Zhang",
  },
  {
    id: "image2",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/images/photo-1464822759023-fed622ff2c.jpg",
    title: "Kalen Emsley",
    content: "Kalen Emsley",
  },
  {
    id: "image3",
    url:
      "https://pdc2.csie.ncu.edu.tw:8888/images/photo-1491555103944-7c647fd857.jpg",
    title: "Joshua Earle",
    content: "Joshua Earle",
  },
];

export const getImages = () => {
  return data;
};

export const getImagesId = () => {
  return data.map((d) => d.id);
};
