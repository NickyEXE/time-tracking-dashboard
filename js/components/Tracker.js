import { Activity, dom } from "../exports.js"

export default class Tracker {
  constructor({name, activities}){
    this.name = name
    this.selected = "Daily"
    this.activities = Object.keys(activities).map(key => new Activity(key, activities[key], this))
  }

  render(){
    document.getElementById("name").innerText = this.name
    this.renderOptions()
    this.appendEventListener()
  }

  renderOptions(){
    const options = [...dom.nav.children]
    options.forEach(item => item.innerText === this.selected ? item.classList.add("selected") : item.classList.remove("selected"))
  }

  appendEventListener(){
    dom.nav.addEventListener("click", ({target}) => {
      if (target.classList.contains("option")){
        this.selected = target.innerText
        this.renderOptions()
        this.activities.forEach(activity => activity.update())
      }
    })
  }
}
