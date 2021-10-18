class Dom {

  get nav(){
    return document.querySelector("nav")
  }

  get main(){
    return document.querySelector("main")
  }

}

const dom = new Dom()
export default dom
