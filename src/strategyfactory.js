import VersionOneStrategy from "./version-one-strategy";
import VersionTwoStrategy from "./version-two-strategy";

// Create a factory object to produce the correct Strategy object based on the version
export default class StrategyFactory {
  constructor() {
    // Create a map between version numbers and Strategies
    this.strategies = new Map();
    this.strategies.set(1, new VersionOneStrategy());
    this.strategies.set(2, new VersionTwoStrategy());
  }
  getStrategy(version) {
    return this.strategies.get(version);
  }
}
