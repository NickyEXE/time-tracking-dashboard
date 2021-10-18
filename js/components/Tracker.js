import { Activity } from "../exports.js"

export default class Tracker {
  constructor({name, activities}){
    this.name = name
    this.activities = Object.keys(activities).map(key => new Activity(key, activities[key]))
    this.selected = "Daily"
  }

  render(){
    document.getElementById("name").innerText = this.name
    this.renderOptions()
  }

  renderOptions(){
    const nav = document.querySelector("nav")
    const options = [...nav.children]
    options.forEach(item => item.innerText === this.selected ? item.classList.add("selected") : item.classList.remove("selected"))
  }

  // appendEventListener(){

  // }
}
