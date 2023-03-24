import "./styles.css";
import StrategyFactory from "./strategyfactory";

// Simulate different config object versions and properties
let configs = [
  {
    version: 1,
    echoText: "Hello this is config version 1"
  },
  {
    version: 2,
    outputText: "Hello this is config version 2"
  }
];

// Get the appropriate strategies from the factory and do work
let strategyFactory = new StrategyFactory();
// Go through each config and run based on version
configs.forEach(function (config) {
  let configStrategy = strategyFactory.getStrategy(config.version);
  // Run the logic for that strategy
  configStrategy.operate(config);
});
