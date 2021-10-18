import { dom } from "../exports.js"
export default class Activity {

  constructor(name, times, tracker){
    this.name = name
    this.daily = [times[0], times[1]]
    this.weekly = [times[2], times[3]]
    this.monthly = [times[4], times[5]]
    this.tracker = tracker
    this.render()
  }

  render(){
    const container = document.createElement("div")
    container.classList.add("activity-container", this.name)
    container.innerHTML = `
      <div class="activity">
        <div class="title">${this.name}<span>...</span></div>
        <div class="hours">${this.daily[0]}</div>
        <div class="previous">${this.daily[1]}</div>
      </div>
    `
    dom.main.appendChild(container)
    this.hoursDiv = container.querySelector(".hours")
    this.previousDiv = container.querySelector(".previous")
  }

}
