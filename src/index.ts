import birds from "./database.json";

export const randomBirdName = () => {
  return birds[Math.floor(Math.random() * birds.length)];
};

export const allBirds = () => {
  return birds;
};
