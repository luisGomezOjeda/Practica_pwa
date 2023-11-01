if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Voluptatem", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Explicabo", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Rchitecto", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: " Beatae", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: " Vitae", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Inventore", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Veritatis", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
  { name: "Accusantium", image: "https://as2.ftcdn.net/v2/jpg/01/05/90/77/1000_F_105907729_4RzHYsHJ2UFt5koUI19fc6VzyFPEjeXe.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  
document.addEventListener("DOMContentLoaded", showCoffees)