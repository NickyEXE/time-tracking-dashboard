import { Tracker } from "./js/exports.js"
const data = {
  name: "Jeremy Robson",
  activities: {
    "Work": ["5hrs", "7hrs", "32hrs", "36hrs", "103hrs", "128hrs"],
    "Play": ["1hr", "2hrs", "10hrs", "8hrs", "23hrs", "29hrs"],
    "Study": ["0hrs", "1hr", "4hrs", "7hrs", "13hrs", "19hrs"],
    "Exercise": ["1hr", "1hr", "4hrs", "5hrs", "11hrs", "18hrs"],
    "Social": ["1hr", "3hrs", "5hrs", "10hrs", "21hrs", "23hrs"],
    "Self Care": ["0hrs", "1hr", "2hrs", "2hrs", "7hrs", "11hrs"]
  }
}
const tracker = new Tracker(data)
tracker.render()
