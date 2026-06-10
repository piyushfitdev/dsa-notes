const numbers = [0,1,0,1,0,0,1,1,1,0];

const steps = [
  {
    low: 0,
    high: 9,
    array: [0,1,0,1,0,0,1,1,1,0],
    text: "arr[low] = 0. Move low forward."
  },

  {
    low: 1,
    high: 9,
    array: [0,1,0,1,0,0,1,1,1,0],
    text: "arr[low] = 1. Swap with high."
  },

  {
    low: 1,
    high: 8,
    array: [0,0,0,1,0,0,1,1,1,1],
    text: "Swap completed. Move high left."
  },

  {
    low: 2,
    high: 8,
    array: [0,0,0,1,0,0,1,1,1,1],
    text: "arr[low] = 0. Move low forward."
  },

  {
    low: 3,
    high: 8,
    array: [0,0,0,1,0,0,1,1,1,1],
    text: "arr[low] = 1. Swap with high."
  }
];
