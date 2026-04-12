"use strict";

function calculateDistance(planet1, planet2) {
  const planetDistances = {
    Mercury: 0.39,
    Venus: 0.72,
    Earth: 1.0,
    Mars: 1.52,
    Jupiter: 5.2,
    Saturn: 9.58,
    Uranus: 19.22,
    Neptune: 30.05,
  };

  const distance = Math.abs(
    planetDistances[planet1] - planetDistances[planet2],
  );
  return Number(distance.toFixed(2));
}

module.exports = calculateDistance;
