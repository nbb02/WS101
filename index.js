const artistData = [
  { name: "Vincent van Gogh", img: "./images/artist/vincent.jpg" },
  { name: "Pablo Picasso", img: "./images/artist/pablo.jpg" },
  { name: "Michelangelo", img: "./images/artist/michaelangelo.jpg" },
  { name: "Leonardo da Vinci", img: "./images/artist/leonarado.jpg" },
  { name: "Rembrandt", img: "./images/artist/rembrandt.webp" },
  { name: "Salvador Dali", img: "./images/artist/salvador.jpg" },
  { name: "Frida Kahlo", img: "./images/artist/frida.jpg" },
  { name: "Henri Matisse", img: "./images/artist/henri.jpg" },
  { name: "Claude Monet", img: "./images/artist/claude.jpg" },
  { name: "Andy Warhol", img: "./images/artist/andy.jpg" },
  { name: "Edvard Munch", img: "./images/artist/edvard.jpg" },
  { name: "Johannes Vermeer", img: "./images/artist/johannes.webp" },
]

const aboutUsData = [
  {
    name: "Ryan Alcober",
    img: "./images/aboutUs/Alcober, Ryan.jpg",
    role: "Project Manager",
    info: "The project manager oversees planning, execution, and completion of tasks, ensuring alignment with objectives and timelines, and addressing any challenges to keep the project on track.",
  },
  {
    name: "Nathaniel B. Berres",
    img: "./images/aboutUs/Berres, Nathaniel.png",

    role: "Lead Programmer",
    info: "The lead programmer directs the technical aspects of software development, organizing tasks, assigning roles, and ensuring code quality and efficiency. They collaborate with team members, troubleshoot issues, and strive for innovation to meet project goals effectively.",
  },
  {
    name: "Mark Trojan T. Manikat",
    img: "",
    role: "Prototype Designer",
    info: "The prototype designer collaborates with teams to conceptualize and create early-stage models of products or systems. They refine ideas, iterate on prototypes, and validate concepts to ensure user-centric design and innovation in product development.",
  },
  {
    name: "Angelica L. Evangelista",
    img: "./images/aboutUs/Evangelista, Angelica.jpeg",
    role: "Lead Researcher",
    info: "The lead researcher oversees the research process, guiding team members in gathering, analyzing, and interpreting data. They establish research goals, methodologies, and timelines, ensuring accuracy and relevance of findings to inform decision-making and advance knowledge in the field.",
  },
  {
    name: "Patricia Ann N. Castro",
    img: "./images/aboutUs/Castro, Patricia.jpg",
    role: "Assistant Designer and Researchers",
    info: "The assistant supports various tasks within an organization, aiding in administrative duties, scheduling, and correspondence. They assist team members, manage documents, and contribute to the smooth functioning of operations by providing valuable support across different areas of responsibility.",
  },
]

const artistBox = document.querySelector("#artistBoxes")
const artistElements = artistData.map((item) => {
  return `<div class="artistBox">
  <div class="bgblur">
  <img src="${item.img}">
  </div>
  <p>${item.name}</p>
  <img src="${item.img}">
  </div>`
})

if (artistBox) {
  artistBox.innerHTML = artistElements.join("")
}

const aboutUsBox = document.querySelector("#aboutUs")
const aboutUsELements = aboutUsData.map((item) => {
  return `<div>
  <img src="${item.img}">
  <p>${item.name}</p>
  <p>${item.role}</p>
  <p>BSIT 3B</p>
  <p>${item.info}</p>
  </div>`
})

if (aboutUsBox) {
  aboutUsBox.innerHTML = aboutUsELements.join("")
}

const imgBoxes = document.querySelectorAll(".carousel > img")
imgBoxes.forEach((element) => {
  element.addEventListener("click", () => {
    const previousClass = element.classList.value
    element.classList.replace(previousClass, "img3")
    imgBoxes.forEach((img) => {
      if (img.classList.contains("img3") && img !== element) {
        img.classList.replace("img3", previousClass)
      }
    })
  })
})

////GALLERY HTML
const galleryData = [
  {
    type: "Cubism",
    img: "./images/gallery/cubism.jpg",
  },
  {
    type: "Abstract",
    img: "./images/gallery/abstract.jpg",
  },
  {
    type: "Pop",
    img: "./images/gallery/popart.jpeg",
  },
  {
    type: "Surrealism",
    img: "./images/gallery/surrealism.jpg",
  },
  {
    type: "Tempera",
    img: "./images/gallery/tempera.jpg",
  },
  {
    type: "Gouache",
    img: "./images/gallery/gouache.jpg",
  },
  {
    type: "Pastel",
    img: "./images/gallery/pastel.jpg",
  },
  {
    type: "Portraiture",
    img: "./images/gallery/portraiture.jpg",
  },
  {
    type: "Miniature",
    img: "./images/gallery/miniature.jpg",
  },
  {
    type: "Impressionism",
    img: "./images/gallery/impressionism.png",
  },
  {
    type: "Conceptual",
    img: "./images/gallery/conceptual.gif",
  },
  {
    type: "Fresco",
    img: "./images/gallery/fresco.jpg",
  },
]

const galleryBox = document.querySelector("#galleryBoxes")

const galleryElements = galleryData.map((item) => {
  return `<div class="types" id="${item.type}">
  <p>${item.type} Arts</p>
    <img src="${item.img}">
  </div>`
})

if (galleryBox) {
  galleryBox.innerHTML = galleryElements.join("")
}

const galleryDivs = document.querySelectorAll(".types")
const mainContainer = document.querySelector("#root")
if (galleryDivs) {
  console.log(galleryDivs)
  galleryDivs.forEach((item) => {
    item.addEventListener("click", () => {
      setSubGallery(item.id)
    })
  })
}
function setSubGallery(id) {
  const subGallery = {
    Cubism: [
      {
        title: "Bottle of Rum and Newspaper",
        artist: "Juan Gris",
        img: "./images/bottle.jpg",
        info: `In 1913 Juan Gris began using the technique of papier collé developed by Georges Braque and Pablo Picasso, with whom he had been working in close contact since 1911. By 1914 Gris’s handling of the technique was personal and sophisticated, as evidenced by works such as Bottle of Rum and Newspaper, executed in Paris shortly before he left for Collioure at the end of June. Here the pasted elements overlap and intermesh with one another in relationships calculated with mathematical rigor. These collaged papers cover the entire surface of the canvas, simultaneously forming an abstract composition and serving as a multilayered support for naturalistic details.`,
      },
      {
        title: "Head of a Woman",
        artist: "Pablo Picasso",
        img: "./images/head.jpg",
        info: `This is Picasso's first Cubist sculpture and one of more than sixty Cubist paintings, sculptures, and drawings the artist made of his companion Fernande Olivier in 1909. Picasso modeled the bust in Paris after the couple returned from a summer trip to Spain. As in his early Cubist paintings, Fernande’s head is described in facets and voids. Intended to be seen in the round, the composition changes when viewed from different angles. The torque of the neck counters the downward tilt of the head and suggests movement, as if Fernande is about to look over her shoulder.`,
      },
      {
        title: "Violin and Glass",
        artist: "Georges Braque",
        img: "./images/violin.jpg",
        info: `Violon et verre was painted in Paris in the spring of 1913, at the height of Braque's friendship with Picasso and at the climax of an intense debate and rivalry concerned with painting and the ideas of Cubism. It was in Sorgues in September 1912 that Braque, working alongside Picasso, had made the discovery of the papier coll technique, where materials from the everyday world, such as newspaper, wallpaper and oilcloth were placed on the canvas surface. As Golding has observed,`,
      },
      {
        title: "Guernica",
        artist: "Pablo Picasso",
        img: "./images/guernica.jpg",
        info: `Guernica, a large black-and-white oil painting executed by Spanish artist Pablo Picasso in 1937 following the German bombing of Guernica, a city in Spain’s Basque region. The complex painting received mixed reviews when it was shown in the Spanish Republic Pavilion at the world’s fair in Paris, but it became an icon as it traveled the world in ensuing years, raising controversies on its meaning and its rightful home.`,
      },
      {
        title: "Les Demoiselles d'Avignon",
        artist: "Pablo Picasso",
        img: "./images/les.jpg",
        info: `The two figures at the right are the most aggressively abstracted with faces rendered as if they wear African masks. By 1907, when this painting was produced, Picasso had begun to collect such work. Even the striations that represent scarification is evident. Matisse and André Derain had a longer standing interest in such art, but Picasso said that it was only after wandering into the Palais du Trocadero, Paris’s ethnographic museum, that he understood the value of such art. Remember, France was a major colonial power in Africa in the 19th and 20th centuries. Much African art was ripped from its original geographic and artistic context and sold in Paris. Although Picasso would eventually become more sophisticated regarding the original uses and meaning of the non-Western art that he collected, in 1907 his interest was largely based on what he perceived as its alien and aggressive qualities.`,
      },
    ],
    Abstract: [
      {
        title: "Composition VIII (1913)",
        artist: "Wassily Kandinsky",
        img: "./images/composition.jpg",
        info: "A landmark piece of abstract art, considered one of the first entirely non-representational paintings. Kandinsky believed colors and shapes could evoke emotions and spiritual experiences.",
      },
      {
        title: "Guernica (1937)",
        artist: "Pablo Picasso",
        img: "./images/guernica.jpg",
        info: "A powerful example of abstract expressionism depicting the bombing of Guernica during the Spanish Civil War. Picasso uses distorted figures, fragmented shapes, and a monochromatic palette to convey the horror and chaos.",
      },
      {
        title: "Number 14 (1951)",
        artist: "Jackson Pollock",
        img: "./images/number.jpg",
        info: "A classic example of drip painting, known for its energy and freedom. Pollock dripped, flicked, and poured paint onto the canvas.",
      },
      {
        title: "Black Square (1915)",
        artist: "Kazimir Malevich",
        img: "./images/black.jpg",
        info: "A key work of Suprematist art, a movement that sought to create a new visual language based on basic geometric shapes and pure colors. Black Square is a simple yet powerful work with many interpretations.",
      },
      {
        title: "Water Lilies series",
        artist: "Claude Monet",
        img: "./images/water.jpg",
        info: "A beautiful example of how abstraction can capture the essence of a subject. Monet focuses on light, color, and reflection, blurring the lines between representation and abstraction.",
      },
    ],
    Pop: [
      {
        title: "Campbell's Soup Cans (1962)",
        artist: "Andy Warhol",
        img: "./images/campbell.jpg",
        info: "An iconic pop art piece featuring 32 canvases, each displaying a Campbell's Soup can in various flavors. It challenged traditional notions of high and low art, and explored consumerism in everyday life.",
      },
      {
        title: "Drowning Girl (1963)",
        artist: "Roy Lichtenstein",
        img: "./images/drowning.jpg",
        info: "A pop art masterpiece inspired by a comic book panel. Lichtenstein's use of bold outlines, flat colors, and Ben-Day dots creates a unique visual style that captures the essence of pop culture imagery.",
      },
      {
        title: "Balloon Dog (1994)",
        artist: "Jeff Koons",
        img: "./images/baloon.jpg",
        info: "A playful and iconic sculpture resembling a brightly colored balloon dog, crafted from reflective stainless steel. Koons challenges traditional notions of sculpture and explores themes of mass production and consumerism.",
      },
      {
        title: "Love (1965)",
        artist: "Robert Indiana",
        img: "./images/love.jpg",
        info: "A widely recognized pop art piece featuring the word `LOVE` in bold, primary colors stacked on top of each other. It has become a symbol of love, peace, and hope, and is used extensively in popular culture.",
      },
      {
        title: "Whaam! (1963)",
        artist: "Roy Lichtenstein",
        img: "./images/whaam.jpg",
        info: "Another iconic piece by Lichtenstein, featuring a fighter jet releasing a red missile against a backdrop of bold colors and Ben-Day dots. It depicts the power and speed of modern warfare through the lens of pop culture imagery.",
      },
    ],
    Surrealism: [
      {
        title: "The Persistence of Memory (1931)",
        artist: "Salvador Dalí",
        img: "./images/persistence.jpg",
        info: "A dreamlike masterpiece depicting melting clocks on a barren landscape. It explores themes of time, memory, and the subconscious, becoming an iconic image of surrealism.",
      },
      {
        title: "The Son of Man (1964)",
        artist: "René Magritte",
        img: "./images/son.jpg",
        info: "A thought-provoking piece featuring a man in a bowler hat with his face obscured by an apple. It challenges perception and explores the relationship between reality and illusion, a key element in surrealism.",
      },
      {
        title: "The Lobster Telephone (1936)",
        artist: "Salvador Dalí",
        img: "./images/lobster.jpg",
        info: "A bizarre yet humorous creation showcasing a red lobster fused with a standard telephone receiver. It exemplifies Dalí's exploration of the subconscious and the juxtaposition of unexpected objects.",
      },
      {
        title: "Guernica (1937)",
        artist: "Pablo Picasso",
        img: "./images/guernica.jpg",
        info: "While often classified as abstract expressionism, Guernica also incorporates elements of surrealism. The distorted figures, fragmented shapes, and nightmarish scene evoke the horrors of war in a dreamlike and unsettling manner.",
      },
    ],
    Tempera: [
      {
        title: "The Birth of Venus (1486)",
        artist: "Sandro Botticelli",
        img: "./images/birth.jpg",
        info: "An iconic tempera painting depicting the goddess Venus emerging from the sea. It is known for its graceful composition, delicate figures, and vibrant colors, showcasing the beauty and skill achievable with tempera.",
      },
      {
        title: "The Arnolfini Portrait (1434)",
        artist: "Jan van Eyck",
        img: "./images/arnolfili.jpg",
        info: "A detailed and realistic portrait of Giovanni Arnolfini and his wife, believed to be the most expensive tempera painting ever sold. It demonstrates the meticulous attention to detail and lifelike quality achievable with tempera.",
      },
      {
        title: "Crucifixion (1304-1306)",
        artist: "Giotto di Bondone",
        img: "./images/crucifixion.jpg",
        info: "A powerful and moving depiction of the Crucifixion by Giotto, known for its emotional intensity and innovative use of perspective. It demonstrates the ability of tempera to convey religious themes with depth and emotion.",
      },
    ],
    Gouache: [
      {
        title: "A Child's Garden (1924)",
        artist: "Paul Klee",
        img: "./images/cooling.jpg",
        info: "A playful and whimsical gouache painting by Klee, featuring colorful geometric shapes and childlike figures. It demonstrates his unique style and ability to evoke a sense of joy and imagination.",
      },
      {
        title: "The Red Studio (1911)",
        artist: "Henri Matisse",
        img: "./images/red.png",
        info: "A vibrant and expressive gouache painting by Matisse, depicting his studio filled with bold colors and simplified forms. It showcases his mastery of color and his use of gouache to capture the essence of a scene.",
      },
      {
        title: "Woman with a Parrot (1905)",
        artist: "Henri Matisse",
        img: "./images/parrot.jpg",
        info: "A colorful and decorative gouache painting by Matisse, featuring a woman holding a parrot. It highlights his use of flat colors and bold outlines, characteristic of the Fauvism movement.",
      },
      {
        title: "Guernica Study No. 2 (1937)",
        artist: "Pablo Picasso",
        img: "./images/guernica.jpg",
        info: "A preparatory study for Picasso's iconic Guernica painting, done in gouache. It showcases his process and experimentation in creating the powerful masterpiece.",
      },
      {
        title: "Blue Horse (1912)",
        artist: "Franz Marc",
        img: "./images/little.jpg",
        info: "A symbolic and expressive gouache painting by Marc, depicting a vibrant blue horse. It reflects his interest in animal symbolism and the use of color to convey emotions.",
      },
    ],
  }

  const elements = subGallery[id].map((item) => {
    return `<div >
    <img src="${item.img}">
    </div>`
  })

  mainContainer.innerHTML = `<div class="subGalleryItems">${elements.join(
    ""
  )}</div>`

  // document.querySelector(
  //   "#root"
  // ).innerHTML =
}

function setAbstract() {}
