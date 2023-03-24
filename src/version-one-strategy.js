// handle the logic for this version of the config file
export default class VersionOneStrategy {
  operate(configData) {
    console.log("Do something with the data for Version 1 Config", configData);
    console.log(`configData.echoText: ${configData.echoText}`);
  }
}
