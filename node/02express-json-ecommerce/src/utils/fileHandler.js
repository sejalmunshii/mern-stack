import fs from "fs";

export const readData = (path) => {
  
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path));
};
export const writeData = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
