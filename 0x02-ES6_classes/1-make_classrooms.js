import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}

// Alternative way using map
// function initializeRooms() {
//   const sizes = [19, 20, 34]
//   return sizes.map(size => new ClassRoom(size));
// }

// export default initializeRooms;
