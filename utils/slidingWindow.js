const WINDOW_SIZE = 10;
let slidingWindow = [];

const updateWindow = (newNumbers) => {
  const unique = new Set(slidingWindow);
  newNumbers.forEach((num) => {
    if (!unique.has(num)) {
      slidingWindow.push(num);
      unique.add(num);
    }
  });

  // Trim the window
  if (slidingWindow.length > WINDOW_SIZE) {
    slidingWindow = slidingWindow.slice(slidingWindow.length - WINDOW_SIZE);
  }
};

const getCurrentState = () => [...slidingWindow];

module.exports = { updateWindow, getCurrentState };
