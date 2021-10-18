export default class Activity {

  constructor(name, times){
    this.name = name
    this.daily = [times[0], times[1]]
    this.weekly = [times[2], times[3]]
    this.monthly = [times[4], times[5]]
  }

}
