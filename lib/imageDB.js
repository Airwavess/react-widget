import { imageData } from "./data";

export const getImages = () => {
  return imageData;
};

export const getImagesId = () => {
  return imageData.map((d) => d.id);
};
