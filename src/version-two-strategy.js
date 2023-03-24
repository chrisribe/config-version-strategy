// handle the logic for this version of the config file
export default class VersionTwoStrategy {
  operate(configData) {
    console.log("Do something with the data for Version 2 Config", configData);
    console.log(`configData.outputText: ${configData.outputText}`);
  }
}
