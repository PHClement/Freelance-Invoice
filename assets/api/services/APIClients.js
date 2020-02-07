import BeamAPI from "../BeamAPI";

export default class APIClients {

  static create(data) {
    return BeamAPI.url('/api/client').parameters({
      data
    }).contentJson().put();
  }

  static list(archive = false) {
    return BeamAPI.url('/client').parameters({archive}).get();
  }

}
