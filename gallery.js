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

const subGallery = {
  Cubism: [
    {
      title: "Bottle of Rum and Newspaper",
      artist: "Juan Gris",
      img: "./images/bottle.jpg",
      info: `In 1913 Juan Gris began using the technique of papier collé developed by Georges Braque and Pablo Picasso, with whom he had been working in close contact since 1911. By 1914 Gris’s handling of the technique was personal and sophisticated, as evidenced by works such as Bottle of Rum and Newspaper, executed in Paris shortly before he left for Collioure at the end of June. Here the pasted elements overlap and intermesh with one another in relationships calculated with mathematical rigor. These collaged papers cover the entire surface of the canvas, simultaneously forming an abstract composition and serving as a multilayered support for naturalistic details.`,
      artistInfo: `One of Gertrude Stein's favorite artists, and the only Cubist talented enough to make Picasso uncomfortable, Juan Gris built upon the foundations of early Cubism and steered the movement in new directions. A member of the tight-knit circle of avant-garde artists working in Paris, Gris adopted the radically fragmented picture spaces of Pablo Picasso and Georges Braque, imparting to his works a bold, graphic look. Gris's paintings are immediately distinguishable from theirs, informed by his background as an illustrator, with a slick, almost commercial appearance, and crisp design elements throughout.`,
      artistImg: "/images/Cubism/Juan Gris.jpg",
    },
    {
      title: "Head of a Woman",
      artist: "Pablo Picasso",
      img: "./images/head.jpg",
      info: `This is Picasso's first Cubist sculpture and one of more than sixty Cubist paintings, sculptures, and drawings the artist made of his companion Fernande Olivier in 1909. Picasso modeled the bust in Paris after the couple returned from a summer trip to Spain. As in his early Cubist paintings, Fernande’s head is described in facets and voids. Intended to be seen in the round, the composition changes when viewed from different angles. The torque of the neck counters the downward tilt of the head and suggests movement, as if Fernande is about to look over her shoulder.`,
      artistInfo:
        "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
      artistImg: "./images/artist/pablo.jpg",
    },
    {
      title: "Violin and Glass",
      artist: "Georges Braque",
      img: "./images/violin.jpg",
      info: `Violon et verre was painted in Paris in the spring of 1913, at the height of Braque's friendship with Picasso and at the climax of an intense debate and rivalry concerned with painting and the ideas of Cubism. It was in Sorgues in September 1912 that Braque, working alongside Picasso, had made the discovery of the papier coll technique, where materials from the everyday world, such as newspaper, wallpaper and oilcloth were placed on the canvas surface. As Golding has observed,`,
      artistInfo: `Georges Braque 13 May 1882 - 31 August 1963) was a major 20th-century French painter, collagist, draughtsman, printmaker and sculptor. His most notable contributions were in his alliance with Fauvism from 1905, and the role he played in the development of Cubism. Braque's work between 1908 and 1912 is closely associated with that of his colleague Pablo Picasso. Their respective Cubist works were indistinguishable for many years, yet the quiet nature of Braque was partially eclipsed by the fame and notoriety of Picasso`,
      artistImg: "./images/Cubism/Georger Braque.jpg",
    },
    {
      title: "Guernica",
      artist: "Pablo Picasso",
      img: "./images/guernica.jpg",
      info: `Guernica, a large black-and-white oil painting executed by Spanish artist Pablo Picasso in 1937 following the German bombing of Guernica, a city in Spain’s Basque region. The complex painting received mixed reviews when it was shown in the Spanish Republic Pavilion at the world's fair in Paris, but it became an icon as it traveled the world in ensuing years, raising controversies on its meaning and its rightful home.`,
      artistInfo:
        "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
      artistImg: "./images/artist/pablo.jpg",
    },
    {
      title: "Les Demoiselles d'Avignon",
      artist: "Pablo Picasso",
      img: "./images/les.jpg",
      info: `The two figures at the right are the most aggressively abstracted with faces rendered as if they wear African masks. By 1907, when this painting was produced, Picasso had begun to collect such work. Even the striations that represent scarification is evident. Matisse and André Derain had a longer standing interest in such art, but Picasso said that it was only after wandering into the Palais du Trocadero, Paris’s ethnographic museum, that he understood the value of such art. Remember, France was a major colonial power in Africa in the 19th and 20th centuries. Much African art was ripped from its original geographic and artistic context and sold in Paris. Although Picasso would eventually become more sophisticated regarding the original uses and meaning of the non-Western art that he collected, in 1907 his interest was largely based on what he perceived as its alien and aggressive qualities.`,
      artistInfo:
        "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
      artistImg: "./images/artist/pablo.jpg",
    },
  ],
  Abstract: [
    {
      title: "Composition VIII (1913)",
      artist: "Wassily Kandinsky",
      img: "./images/composition.jpg",
      info: "A landmark piece of abstract art, considered one of the first entirely non-representational paintings. Kandinsky believed colors and shapes could evoke emotions and spiritual experiences.",
      artistImg: "./images/Abstract/Wassily Kandinsky.png",
      artistInfo: `Wassily Wassilyevich Kandinsky (16 December [O.S. 4 December] 1866 - 13 December 1944) was a Russian painter and art theorist. Kandinsky is generally credited as one of the pioneers of abstraction in western art. Born in Moscow, he spent his childhood in Odessa, where he graduated from Odessa Art School. He enrolled at the University of Moscow, studying law and economics. Successful in his profession, he was offered a professorship (chair of Roman Law) at the University of Dorpat (today Tartu, Estonia). Kandinsky began painting studies (life-drawing, sketching and anatomy) at the age of 30.`,
    },
    {
      title: "Guernica (1937)",
      artist: "Pablo Picasso",
      img: "./images/guernica.jpg",
      info: "A powerful example of abstract expressionism depicting the bombing of Guernica during the Spanish Civil War. Picasso uses distorted figures, fragmented shapes, and a monochromatic palette to convey the horror and chaos.",
      artistInfo:
        "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
      artistImg: "./images/artist/pablo.jpg",
    },
    {
      title: "Number 14 (1951)",
      artist: "Jackson Pollock",
      img: "./images/number.jpg",
      info: "A classic example of drip painting, known for its energy and freedom. Pollock dripped, flicked, and poured paint onto the canvas.",
      artistImg: "./images/Abstract/Jackson_Pollock.jpg",
      artistInfo: `Paul Jackson Pollock (January 28, 1912 - August 11, 1956) was an American painter. A major figure in the abstract expressionist movement, Pollock was widely noticed for his "drip technique" of pouring or splashing liquid household paint onto a horizontal surface, enabling him to view and paint his canvases from all angles. It was called all-over painting and action painting, since he covered the entire canvas and used the force of his whole body to paint, often in a frenetic dancing style. This extreme form of abstraction divided the critics: some praised the immediacy of the creation, while others derided the random effects.`,
    },
    {
      title: "Black Square (1915)",
      artist: "Kazimir Malevich",
      img: "./images/black.jpg",
      info: "A key work of Suprematist art, a movement that sought to create a new visual language based on basic geometric shapes and pure colors. Black Square is a simple yet powerful work with many interpretations.",
      artistImg: "./images/Abstract/Kazimir Malevich.jpg",
      artistInfo: `Kazimir Severinovich Malevich (23 February 1879[1] - 15 May 1935) was a Russian avant-garde[nb 2] artist and art theorist, whose pioneering work and writing influenced the development of abstract art in the 20th century.[He was born in Kiev, modern-day Ukraine, to an ethnic Polish family. His concept of Suprematism sought to develop a form of expression that moved as far as possible from the world of natural forms (objectivity) and subject matter in order to access "the supremacy of pure feeling and spirituality.Active primarily in Russia, Malevich was a founder of the artists collective UNOVIS and his work has been variously associated with the Russian avant-garde and the Ukrainian avant-garde, and he was a central figure in the history of modern art in Central and Eastern Europe more broadly.`,
    },
    {
      title: "Water Lilies",
      artist: "Claude Monet",
      img: "./images/water.jpg",
      info: "A beautiful example of how abstraction can capture the essence of a subject. Monet focuses on light, color, and reflection, blurring the lines between representation and abstraction.",
      artistImg: "./images/Abstract/Claude_Monet.jpg",
      artistInfo: `Oscar-Claude Monet (14 November 1840 - 5 December 1926) was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long career, he was the most consistent and prolific practitioner of impressionism's philosophy of expressing one's perceptions of nature, especially as applied to plein air (outdoor) landscape painting.`,
    },
  ],
  Pop: [
    {
      title: "Campbell's Soup Cans (1962)",
      artist: "Andy Warhol",
      img: "./images/campbell.jpg",
      info: "An iconic pop art piece featuring 32 canvases, each displaying a Campbell's Soup can in various flavors. It challenged traditional notions of high and low art, and explored consumerism in everyday life.",
      artistImg: "./images/Pop/Andy_Warhol.jpg",
      artistInfo: `Andy Warhol (August 6, 1928 - February 22, 1987) was an American visual artist, film director, producer, and leading figure in the pop art movement. His works explore the relationship between artistic expression, advertising, and celebrity culture that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture. Some of his best-known works include the silkscreen paintings Campbell's Soup Cans (1962) and Marilyn Diptych (1962), the experimental films Empire (1964) and Chelsea Girls (1966), and the multimedia events known as the Exploding Plastic Inevitable (1966-67).`,
    },
    {
      title: "Drowning Girl (1963)",
      artist: "Roy Lichtenstein",
      img: "./images/drowning.jpg",
      info: "A pop art masterpiece inspired by a comic book panel. Lichtenstein's use of bold outlines, flat colors, and Ben-Day dots creates a unique visual style that captures the essence of pop culture imagery.",
      artistImg: "./images/Pop/Roy_Lichtenstein.jpg",
      artistInfo: `Roy Fox Lichtenstein (October 27, 1923 - September 29, 1997) was an American pop artist. During the 1960s, along with Andy Warhol, Jasper Johns, and James Rosenquist, he became a leading figure in the new art movement. His work defined the premise of pop art through parody. Inspired by the comic strip, Lichtenstein produced precise compositions that documented while they parodied, often in a tongue-in-cheek manner. His work was influenced by popular advertising and the comic book style. His artwork was considered to be "disruptive". He described pop art as "not 'American' painting but actually industrial painting". His paintings were exhibited at the Leo Castelli Gallery in New York City.`,
    },
    {
      title: "Balloon Dog (1994)",
      artist: "Jeff Koons",
      img: "./images/baloon.jpg",
      info: "A playful and iconic sculpture resembling a brightly colored balloon dog, crafted from reflective stainless steel. Koons challenges traditional notions of sculpture and explores themes of mass production and consumerism.",
      artistImg: "./images/Pop/Jeff_Koons.JPG",
      artistInfo: `Jeffrey Lynn Koons ( born January 21, 1955) is an American artist recognized for his work dealing with popular culture and his sculptures depicting everyday objects, including balloon animals produced in stainless steel with mirror-finish surfaces. He lives and works in both New York City and his hometown of York, Pennsylvania. His works have sold for substantial sums, including at least two record auction prices for a work by a living artist: US$58.4 million for Balloon Dog (Orange) in 2013 and US$91.1 million for Rabbit in 2019.`,
    },
    {
      title: "Love (1965)",
      artist: "Robert Indiana",
      img: "./images/love.jpg",
      info: "A widely recognized pop art piece featuring the word `LOVE` in bold, primary colors stacked on top of each other. It has become a symbol of love, peace, and hope, and is used extensively in popular culture.",
      artistImg: "./images/Pop/Robert_Indiana.jpg",
      artistInfo: `His iconic image LOVE was first created in 1964 in the form of a card which he sent to several friends and acquaintances in the art world. In 1965, Robert Indiana was invited to propose an artwork to be featured on the Museum of Modern Art's annual Christmas card. Indiana submitted several 12” square oil on canvas variations based on his LOVE image. The museum selected the most intense color combination in red, blue, and green. It became one of the most popular cards the museum has ever offered. Indiana continued to develop his LOVE series, and in 1966, worked with Marian Goodman of Multiples, Inc. to make his first LOVE sculpture in aluminum. In 1970, Indiana completed his first monumental LOVE sculpture in Cor-Ten steel which is in the collection of the Indianapolis Museum of Art.`,
    },
    {
      title: "Whaam! (1963)",
      artist: "Roy Lichtenstein",
      img: "./images/whaam.jpg",
      info: "Another iconic piece by Lichtenstein, featuring a fighter jet releasing a red missile against a backdrop of bold colors and Ben-Day dots. It depicts the power and speed of modern warfare through the lens of pop culture imagery.",
      artistImg: "./images/Pop/Roy_Lichtenstein.jpg",
      artistInfo: `Roy Fox Lichtenstein (October 27, 1923 - September 29, 1997) was an American pop artist. During the 1960s, along with Andy Warhol, Jasper Johns, and James Rosenquist, he became a leading figure in the new art movement. His work defined the premise of pop art through parody. Inspired by the comic strip, Lichtenstein produced precise compositions that documented while they parodied, often in a tongue-in-cheek manner. His work was influenced by popular advertising and the comic book style. His artwork was considered to be "disruptive". He described pop art as "not 'American' painting but actually industrial painting". His paintings were exhibited at the Leo Castelli Gallery in New York City.`,
    },
  ],
  Surrealism: [
    {
      title: "The Persistence of Memory (1931)",
      artist: "Salvador Dalí",
      img: "./images/persistence.jpg",
      info: "A dreamlike masterpiece depicting melting clocks on a barren landscape. It explores themes of time, memory, and the subconscious, becoming an iconic image of surrealism.",
      artistImg: "./images/Surrealism/Salvador_Dalí.jpg",
      artistInfo: `Born in Figueres, Catalonia, Spain, Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age he became increasingly attracted to Cubism and avant-garde movements.He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. Dalí lived in France throughout the Spanish Civil War (1936 to 1939) before leaving for the United States in 1940 where he achieved commercial success. `,
    },
    {
      title: "The Son of Man (1964)",
      artist: "René Magritte",
      img: "./images/son.jpg",
      info: "A thought-provoking piece featuring a man in a bowler hat with his face obscured by an apple. It challenges perception and explores the relationship between reality and illusion, a key element in surrealism.",
      artistImg: "./images/Surrealism/René_Magritte.jpg",
      artistInfo: `Magritte's earliest paintings, which date from about 1915, were Impressionistic in style. During 1916-1918, he studied at the Académie Royale des Beaux-Arts in Brussels, under Constant Montald, but found the instruction uninspiring. He also took classes at the Académie Royale from the painter and poster designer Gisbert Combaz. The paintings he produced during 1918-1924 were influenced by Futurism and by the figurative Cubism of Metzinger.`,
    },
    {
      title: "The Lobster Telephone (1936)",
      artist: "Salvador Dalí",
      img: "./images/lobster.jpg",
      info: "A bizarre yet humorous creation showcasing a red lobster fused with a standard telephone receiver. It exemplifies Dalí's exploration of the subconscious and the juxtaposition of unexpected objects.",
      artistImg: "./images/Surrealism/Salvador_Dalí.jpg",
      artistInfo: `Born in Figueres, Catalonia, Spain, Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age he became increasingly attracted to Cubism and avant-garde movements.He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. Dalí lived in France throughout the Spanish Civil War (1936 to 1939) before leaving for the United States in 1940 where he achieved commercial success.`,
    },
    {
      title: "Guernica (1937)",
      artist: "Pablo Picasso",
      img: "./images/guernica.jpg",
      info: "While often classified as abstract expressionism, Guernica also incorporates elements of surrealism. The distorted figures, fragmented shapes, and nightmarish scene evoke the horrors of war in a dreamlike and unsettling manner.",
      artistInfo:
        "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
      artistImg: "./images/artist/pablo.jpg",
    },
  ],
  Tempera: [
    {
      title: "The Birth of Venus (1486)",
      artist: "Sandro Botticelli",
      img: "./images/birth.jpg",
      info: "An iconic tempera painting depicting the goddess Venus emerging from the sea. It is known for its graceful composition, delicate figures, and vibrant colors, showcasing the beauty and skill achievable with tempera.",
      artistImg: "./images/Tempera/Sandro_Botticelli.jpg",
      artistInfo: `Alessandro di Mariano di Vanni Filipepi (c. 1445[1 - May 17, 1510), better known as Sandro Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work. Since then, his paintings have been seen to represent the linear grace of late Italian Gothic and some Early Renaissance painting, even though they date from the latter half of the Italian Renaissance period.`,
    },
    {
      title: "The Arnolfini Portrait (1434)",
      artist: "Jan van Eyck",
      img: "./images/arnolfili.jpg",
      info: "A detailed and realistic portrait of Giovanni Arnolfini and his wife, believed to be the most expensive tempera painting ever sold. It demonstrates the meticulous attention to detail and lifelike quality achievable with tempera.",
      artistImg: "./images/Tempera/Jan_van_Eyck.jpg",
      artistInfo: `Jan van Eyck (before 1390 - 9 July 1441) was a Flemish painter active in Bruges who was one of the early innovators of what became known as Early Netherlandish painting, and one of the most significant representatives of Early Northern Renaissance art. According to Vasari and other art historians including Ernst Gombrich, he invented oil painting, though most now regard that claim as an oversimplification.`,
    },
    {
      title: "Crucifixion (1304-1306)",
      artist: "Giotto di Bondone",
      img: "./images/crucifixion.jpg",
      info: "A powerful and moving depiction of the Crucifixion by Giotto, known for its emotional intensity and innovative use of perspective. It demonstrates the ability of tempera to convey religious themes with depth and emotion.",
      artistImg: "./images/Fresco/Giotto di Bondone..jpg",
      artistInfo: `Giotto di Bondone known mononymously as Giotto and Latinised as Giottus, was an Italian painter and architect from Florence during
      the Late Middle Ages. He worked during the Gothic and Proto-Renaissance period. Giotto's
      contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was "the most sovereign
      master of painting in his time, who drew all his figures and their postures according to nature" and of
      his publicly recognized "talent and excellence".`,
    },
  ],
  Gouache: [
    {
      title: "Two Women in a Garden",
      artist: "Camille Pissarro",
      artistImg: "./images/Gouache/camille pissaro.jpg",
      artistInfo: `Jacob Abraham Camille Pissarro (10 July 1830 - 13 November 1903) was a Danish-French Impressionist and Neo-Impressionist painter born on the island of St Thomas (now in the US Virgin Islands, but then in the Danish West Indies). His importance resides in his contributions to both Impressionism and Post-Impressionism. Pissarro studied from great forerunners, including Gustave Courbet and Jean-Baptiste-Camille Corot. He later studied and worked alongside Georges Seurat and Paul Signac when he took on the Neo-Impressionist style at the age of 54.
      In 1873 he helped establish a collective society of fifteen aspiring artists, becoming the "pivotal" figure in holding the group together and encouraging the other members. Art historian John Rewald called Pissarro the "dean of the Impressionist painters", not only because he was the oldest of the group, but also "by virtue of his wisdom and his balanced, kind, and warmhearted personality".[1] Paul Cézanne said "he was a father for me. A man to consult and a little like the good Lord", and he was also one of Paul Gauguin's masters. Pierre-Auguste Renoir referred to his work as "revolutionary", through his artistic portrayals of the "common man", as Pissarro insisted on painting individuals in natural settings without "artifice or grandeur".`,
      img: "./images/Gouache/Two Women in a Garden.jpg",
      info: `Camille Pissarro (1888) (Ukraine, Russia)
      Medium: Gouache on silk; framing lines in graphite
      Dimension: 32.5 x 24.6 cm
      Credits: Bequest of Gregoire Tarnopol, 1979, and Gift of Alexander Tarnopol
      This piece by Camille Pissarro shows a peaceful scene where we can see two women are
      immersed in nature's beauty. They are surrounded by beautiful flowers and , her artwork
      shows a sense of calmness and closeness to the two character in her drawing. Her gentle
      brushstrokes and understated color palette beautifully capture the gentle sunlight filtering
      through the foliage, giving a feeling of natural tranquility. Through this heartfelt portrayal of
      ordinary life, She encourages viewers to appreciate the serene moments and the
      companionship found in nature's embrace.`,
    },
    {
      title: "The Scarlet Sunset",
      artist: "Joseph Mallord William Turner",
      artistImg: "./images/Gouache/Joseph Mallord William Turner.jpg",
      artistInfo: `Joseph Mallord William Turner RA (23 April 1775 - 19 December 1851), known in his time as William Turner, was an English Romantic painter, printmaker and watercolourist. He is known for his expressive colouring, imaginative landscapes and turbulent, often violent marine paintings. He left behind more than 550 oil paintings, 2,000 watercolours, and 30,000 works on paper. He was championed by the leading English art critic John Ruskin from 1840, and is today regarded as having elevated landscape painting to an eminence rivalling history painting.

      Turner was born in Maiden Lane, Covent Garden, London, to a modest lower-middle-class family and retained his lower class accent, while assiduously avoiding the trappings of success and fame. A child prodigy, Turner studied at the Royal Academy of Arts from 1789, enrolling when he was 14, and exhibited his first work there at 15. During this period, he also served as an architectural draftsman. He earned a steady income from commissions and sales, which due to his troubled, contrary nature, were often begrudgingly accepted. He opened his own gallery in 1804 and became professor of perspective at the academy in 1807, where he lectured until 1828. He travelled around Europe from 1802, typically returning with voluminous sketchbooks.`,
      img: "./images/Gouache/The Scarlet Sunset.jpg",
      info: `Joseph Mallord William Turner (1830-1840) (London, England)
      Watercolour and gouache on paper, 134 x 189 mm
      Turner depicted the stunning beauty of a sunset over a large body of water. In this artwork,
      we will notice that he skillfully put the rich colors of the sunset sky as it bursts into a blend of
      red, yellow, and darkening tones of orange. As the sun slowly disappear below the horizon, it
      spreads a warm glow over the calm waters, filling the scene with a captivating radiance.
      The painting is filled with a feeling of movement and light, thanks to Turner's confident
      brushwork and colorful expression, giving the sky a sense of liveliness. The interaction
      between light and shadow produces a striking difference, intensifying the scene's drama and
      intensity. In "The Scarlet Sunset," Turner asks viewers to observe the stunning magnificence
      of nature and be amazed by the constantly evolving display of the natural world.`,
    },
    {
      title: "The Adoration of Shepherds",
      artist: "Francois Boucher",
      artistImg: "./images/Gouache/François Boucher.jpg",
      artistInfo: `François Boucher (29 September 1703 - 30 May 1770) was a French painter, draughtsman and etcher, who worked in the Rococo style. Boucher is known for his idyllic and voluptuous paintings on classical themes, decorative allegories, and pastoral scenes. He was perhaps the most celebrated painter and decorative artist of the 18th century. A native of Paris, Boucher was the son of a lesser known painter Nicolas Boucher, who gave him his first artistic training. At the age of seventeen, a painting by Boucher was admired by the painter François Lemoyne. Lemoyne later appointed Boucher as his apprentice, but after only three months, he went to work for the engraver Jean-François Cars.`,
      img: "./images/Gouache/The Adoration of the Shepherds.jpg",
      info: `Francois Boucher (1827) (Paris, France)
      Gouache over black chalk underdrawing, on paper, mounted on canvas
      16 1/4 x 11 in. (41.3 x 27.9 cm)
      Credits: Purchase, David T. Schiff Gift, and Rogers and Harris Brisbane Dick Funds, 1997
      "The Adoration of the Shepherds" is one of the most a breathtaking portrayal of a biblical
      narrative enhanced with Rococo sophistication. Boucher captures the moment of respect as
      shepherds worship the newborn Christ child in this masterpiece. The painting shines softly,
      with gentle pastel colors surrounding the scene, generating a sense of peace and calmness.
      The careful focus on detail by Boucher can be seen in the elegant poses of the characters, the
      detailed clothing they wear, and the gentle looks on their faces. The arrangement of figures in
      the composition creates a feeling of balance and harmony, combining dynamism with a sense
      of peace. With skilled painting techniques and a sophisticated sense of beauty, Boucher takes
      viewers on a journey to a realm of heavenly splendor and reflection, encouraging them to
      partake in celebrating the arrival of the new Savior.`,
    },
    {
      title: "In The Fields",
      artist: "Stepan Feodorovich Kolesnikov",
      artistImg: "./images/Gouache/Stepan Fedorovich Kolesnikov.webp",
      artistInfo: `Stepan Feodorovich Kolesnikov was a Russian realist painter. He depicted snow-covered landscapes and rustic farm scenes in both gouache and oil. The peasants in his work are often portrayed working in fields or celebrating religious festivals. Born on July 11, 1879 in Adrianopol, Russian Empire (currently Ukraine) to a peasant family, Kolesnikov studied at the Odessa School of Art before entering the Imperial Academy of Fine Arts in 1903. In school, he received several awards for his work, winning him the acclaim of the famed painter Ilya Repin. Notably, Kolesnikov was a favorite artist of Tsar Nicolas II, the last Emperor of Russia, who once gifted him an engraved cigarette case. After the Russian revolution, the artist moved to the Balkans, settling in Belgrade, where he lived for the rest of his life. Kolesnikov died on May 27, 1955 in Belgrade, Yugoslavia. His works are in the collections of the Pushkin State Museum of Fine Arts in Moscow and the Odessa Fine Arts Museum.`,
      img: "./images/Gouache/In The Fields.jpg",
      info: `Stepan Feodorovich Kolesnikov (1919) (Ukraine, Russia)
      Medium: Gouache on board
      Dimension: 14.2 x 27.9 cm (55/8 x 11 inches)
      Credits: Sphinx Fine Art London, United Kingdom
      Stepan Feodorovich Kolesnikov portrays the difficult truths of life in the Russian countryside
      in his work. Three farmers attempted to plough the muddy field, but it appears the plough
      has malfunctioned. One of the women is trying to repair the axle as the tall, strong horse
      patiently stands close by. The scenery is depicted with a dull and subdued color scheme,
      offering no hopeful indication of a fruitful outcome from the workers' efforts. The dark soil
      and bare trees highlight the infertile quality of the land and the challenges faced by the
      figures. The characters remain unidentified, prompting Kolesnikov to depict a scene that
      mirrors the widespread challenges faced by agricultural workers in Russia, including the same
      difficulties experienced by all other farmers.`,
    },
    {
      title: "Colburns Butte South Utah",
      artist: "Thomas Moran",
      artistImg: "./images/Gouache/Thomas_Moran.jpg",
      artistInfo: `Thomas Moran (February 12, 1837 - August 25, 1926) was an American painter and printmaker of the Hudson River School in New York whose work often featured the Rocky Mountains. Moran and his family, wife Mary Nimmo Moran and daughter Ruth took residence in New York where he obtained work as an artist. He was a younger brother of the noted marine artist Edward Moran, with whom he shared a studio. A talented illustrator and exquisite colorist, Thomas Moran was hired as an illustrator at Scribner's Monthly. During the late 1860s, he was appointed the chief illustrator for the magazine, a position that helped him launch his career as one of the premier painters of the American landscape, in particular, the American West.

      Moran along with Albert Bierstadt, Thomas Hill, and William Keith are sometimes referred to as belonging to the Rocky Mountain School of landscape painters because of all of the Western landscapes made by this group.`,
      img: "./images/Gouache/Thomas-Moran-Colburns-Butte-South-Utah-1873.jpg",
      info: `Thomas Moran (1873) (United States)
      Medium: Watercolor, gouache and graphite on off-white wove paper
      Dimension: 35.2 x 24 cm
      Credits: Gift of David and Laura Grey, in honor of Kevin J. Avery, 2009
      Thomas Moran's "Colburn's Butte, South Utah" provides a stunning view of the rough terrain
      of the American Southwest. Moran carefully depicts the tall sandstone formation,
      highlighting its complex layers and worn texture against the vast desert scenery. The rich
      tones of the butte, including golden yellows and deep reds, complement the vibrant blue sky,
      forming a stunning contrast that perfectly represents the natural beauty of the area. Moran's
      skillful portrayal encourages onlookers to admire the eternal beauty of the South Utah
      desert, where the magnificent butte serves as a symbol of nature's lasting strength.`,
    },
    {
      title: "Boating Party 1899",
      artist: "Albert Beck Wenzell",
      artistImg: "./images/Gouache/albert beck wenzell.webp",
      artistInfo: `The Bell Époche, prior to World War I, was a prosperous and extravagant era when royalty governed most of Europe. At the same time in the United States, great fortunes were being made through unfettered trusts and monopolies, creating a class of Nouveau Riche. This ambitious society of Robber Barons and their social climbing wives was just as stratified as their real European counterparts, but lacked the accompanying pedigrees. During this period there was a beneficial intermingling of interests. American families sought tittles through arranged marriages of their daughters, and the lavish lifestyles of eligible counts and crown princes required infusions of cash.

      No American artist better presented that colorful era than Albert Beck Wenzell. From a wealthy family himself and with solid academic training in Munich and in Paris he knew his subjects well and could paint them with great authority. His opulently gowned, imperious, and always-beautiful young women were depicted with a dazzling display of artful exaggeration; the young men wore their colorful uniforms or full dress with an assured careless swagger.`,
      img: "./images/Gouache/Boating Party.jpg",
      info: `Albert Beck Wenzell (1899) (London)
      Medium: Gouache and Ink on Paper
      Dimension: 28.5 x 39 in. (72.4 x 99.1 cm.)
      Credits: Fort Washington, PA
      The painting "Boating Party, 1899" by Albert Beck Wenzell shows a peaceful river scene with
      people relaxing and having fun. In this delightful piece of art, Wenzell depicts the joyful
      essence of a boat trip among friends. The artwork emits a feeling of calm and friendship as
      the characters casually row on the water, encircled by rich vegetation and scattered sunlight.
      Wenzell's skillful use of brushes and gentle choice of colors create a calm setting,
      encouraging viewers to visualize themselves enjoying the uncomplicated pleasures of a
      sunny day by the river.`,
    },
    {
      title: "Blessed Are Those Who Have",
      artist: "Adolp Von Menzel",
      artistImg: "./images/Gouache/Adolph_von_Menzel.jpg",
      artistInfo: `Adolph Friedrich Erdmann von Menzel (8 December 1815 - 9 February 1905) was a German Realist artist noted for drawings, etchings, and paintings. Along with Caspar David Friedrich, he is considered one of the two most prominent German painters of the 19th century, and was the most successful artist of his era in Germany.First known as Adolph Menzel, he was knighted in 1898 and changed his name to Adolph von Menzel.

      His popularity in his native country, owing especially to his history paintings, was such that few of his major paintings left Germany, as many were quickly acquired by museums in Berlin. Menzel's graphic work (and especially his drawings) were more widely disseminated; these, along with informal paintings not initially intended for display, have largely accounted for his posthumous reputation.`,
      img: "./images/Gouache/Blessed are those who have.jpg",
      info: `Adolp Von Menzel (1888) (Berlin, Germany)
      Gouache on paper, 27.5 cm x 21.5 cm
      Credits: Museum Georg Schäfer
      This painting shows people gathered around a table, sharing food and conversation. The
      scene he draw makes viewer feels cozy and warm, with soft lighting and relaxed poses.
      Menzel pays close attention to the expressions on people's faces and the textures of the food
      and tablecloth. His painting gives a feeling of happiness and contentment, showing the joy of
      spending time with loved ones and enjoying a meal together.`,
    },
    {
      title: "Fidelia Bridges",
      artist: "Bird's Nest in Cattails",
      artistImg: "./images/Gouache/Fidelia_Bridges.jpg",
      artistInfo: `Fidelia Bridges (May 19, 1834 - May 14, 1923) was an American artist of the late 19th century. She was known for delicately detailed paintings that captured flowers, plants, and birds in their natural settings. Although she began as an oil painter, she later gained a reputation as an expert in watercolor painting. She was the only woman among a group of seven artists in the early years of the American Watercolor Society. Some of her work was published as illustrations in books and magazines and on greeting cards.`,
      img: "./images/Gouache/Fidelia Bridges Bird's Nest in Cattails.jpg",
      info: `Fidelia Bridges (1875) (United States)
      Medium: Watercolor and gouache on light brown wove paper
      Dimension: 14 x 9 7/8 in. (35.6 x 25.1 cm)
      Credits: Anonymous Gift, in memory of Harry Rubin, 1989
      The painting shows a bird's nest nestled among the tall, slender cattails. Bridges uses
      watercolors to capture the soft sunlight filtering through the reeds and the gentle movement
      of the plants in the breeze. The nest is meticulously detailed, showing the care and skill of the
      bird that built it. Bridges' artwork reminds us to appreciate the simple beauty of nature and
      the quiet moments it offers.`,
    },
    {
      title: "A Rocky Coast",
      artist: "William Trost Richards",
      artistImg: "./images/Gouache/William_Trost_Richards.png",
      artistInfo: `Richards was born on November 14, 1833, in Philadelphia, Pennsylvania.In 1846 and 1847, he attended the local Central High School. Between 1850 and 1855, he studied part-time with the German artist Paul Weber, while working as designer and illustrator of ornamental metalwork. Richards's first public exhibit was part of an exhibition in New Bedford, Massachusetts, organized by artist Albert Bierstadt in 1858.
      In 1862, he was elected honorary member of the National Academy of Design and was elected as an Academician in 1871. In 1863, he became a member of the Association for the Advancement of Truth in Art. In 1866, he departed for Europe for one year. Upon his return and for the following six years, he spent the summers on the East Coast.`,
      img: "./images/Gouache/A Rocky Coast.jpg",
      info: `William Trost Richards (1877) (United States)
      Medium: Watercolor and gouache on fibrous brown wove paper
      Dimension: 28 1/8 x 36 1/4 in. (71.4 x 92.1 cm)
      Credits: Catharine Lorillard Wolfe Collection, Bequest of Catharine Lorillard Wolfe
      William Trost Richards' painting "A Rocky Coast" expertly depicts the harsh beauty of a
      coastal scenery. In this artwork, Richards expertly depicts the rocky coast and powerful
      waves with great detail, capturing the raw power and eternal calmness of nature. The
      interplay between light and shadow gives a lively feeling, with the vibrant colors and textures
      adding depth and dimension to the scene. Richards uses his skilled brushwork to encourage
      viewers to deeply engage with the majestic beauty of the rough coastline, where the constant
      interaction of land and sea evokes a sense of wonder and introspection.`,
    },
  ],
  Impressionism: [
    {
      title: "Sunset",
      artist: "Ma'am Regina Santos",
      artistImg: "./images/Impressionism/Ma'am Regina Santos.jpg",
      artistInfo: "",
      img: "./images/Impressionism/sunset.jpg",
      info: ``,
    },
    {
      title: "Waterfalls 2",
      artist: "Ma'am Regina Santos",
      artistImg: "./images/Impressionism/Ma'am Regina Santos.jpg",
      artistInfo: "",
      img: "./images/Impressionism/waterfalls 2.jpg",
      info: ``,
    },
    {
      title: "Bob Ross Painting",
      artist: "Ma'am Regina Santos",
      artistImg: "./images/Impressionism/Ma'am Regina Santos.jpg",
      artistInfo: "",
      img: "./images/Impressionism/bob ross painting.jpg",
      info: ``,
    },
    {
      title: "Apple Harvest",
      artist: "Jacob Abraham Camille Pissarro",
      artistImg: "./images/Impressionism/Pissarro.jpg",
      artistInfo: `Jacob Abraham Camille Pissarro (10 July
      1830 - 13 November 1903) was a Danish-French Impressionist and Neo-Impressionist
      painter born on the island of St Thomas (now in the US Virgin Islands, but then in the
      Danish West Indies). His importance resides in his contributions to both Impressionism
      and Post-Impressionism. Pissarro studied from great forerunners, including Gustave
      Courbet and Jean-Baptiste-Camille Corot. He later studied and worked alongside
      Georges Seurat and Paul Signac when he took on the Neo-Impressionist style at the age
      of 54.`,
      img: "./images/Impressionism/Apple_Harvest.jpg",
      info: `"Apple Harvest" is a painting by the French Impressionist artist Camille Pissarro.
      Created in 1888, it is a part of Pissarro's series of works that capture scenes of rural life
      and agricultural activities.
      
      In "Apple Harvest," Pissarro depicts a countryside scene where peasants are engaged
      in the harvest of apples from orchard trees. The painting captures the laborious yet
      rhythmic nature of the harvest, with figures depicted amidst lush greenery and bountiful
      fruit-laden trees. Pissarro's brushwork and use of color convey a sense of movement
      and vitality, as well as the changing light and atmosphere of the outdoors.`,
    },
    {
      title: "Hay Harvest at Éragny",
      artist: "Jacob Abraham Camille Pissarro",
      artistImg: "./images/Impressionism/Pissarro.jpg",
      artistInfo: `Jacob Abraham Camille Pissarro (10 July
      1830 - 13 November 1903) was a Danish-French Impressionist and Neo-Impressionist
      painter born on the island of St Thomas (now in the US Virgin Islands, but then in the
      Danish West Indies). His importance resides in his contributions to both Impressionism
      and Post-Impressionism. Pissarro studied from great forerunners, including Gustave
      Courbet and Jean-Baptiste-Camille Corot. He later studied and worked alongside
      Georges Seurat and Paul Signac when he took on the Neo-Impressionist style at the age
      of 54.`,
      img: "./images/Impressionism/Hay Harvest.jpg",
      info: `"Hay Harvest at Éragny" is a painting by the French Impressionist artist Camille
      Pissarro. Created in 1901, it is a part of Pissarro's series of works that depict scenes of
      rural life in Éragny-sur-Epte, a village where the artist lived for a significant portion of his
      later life.
      
      In "Hay Harvest at Éragny," Pissarro portrays a pastoral scene of the hay harvest taking
      place in the countryside. The painting captures the laborious yet tranquil process of
      harvesting hay, with figures depicted working in the fields amidst tall grass and
      haystacks. Pissarro's brushwork and use of color convey the warmth and light of a
      summer day, as well as the peacefulness of the rural landscape.`,
    },
    {
      title: "The Artist's Garden at Giverny",
      artist: "Claude Monet",
      artistImg: "./images/Impressionism/Claude_Monet.jpg",
      artistInfo: `Oscar-Claude Monet (14 November 1840 - 5
      December 1926) was a French painter and founder of impressionist painting who is seen as a key
      precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long
      career, he was the most consistent and prolific practitioner of impressionism's philosophy of
      expressing one's perceptions of nature, especially as applied to plein air (outdoor) landscape
      painting. The term "Impressionism" is derived from the title of his painting Impression, soleil levant,
      exhibited in 1874 (the "exhibition of rejects") initiated by Monet and his associates as an alternative
      to the Salon.`,
      img: "./images/Impressionism/Garten_in_Giverny.jpg",
      info: `The Artist's Garden at Giverny is an oil on
      canvas painting by Claude Monet done in 1900, now in the Musée d'Orsay, Paris.
      It is one of many works by the artist of his garden at Giverny over the last thirty years of his life. The
      painting shows rows of irises in various shades of purple and pink set diagonally across the picture
      plane. The flowers are under trees that in allowing dappled light through change the tone of their
      colours. Beyond the trees is a glimpse of Monet's house.`,
    },
    {
      title: "Bridge over a Pond of Water Lilies",
      artist: "Claude Monet",
      artistImg: "./images/Impressionism/Claude_Monet.jpg",
      artistInfo: `Oscar-Claude Monet (14 November 1840 - 5
      December 1926) was a French painter and founder of impressionist painting who is seen as a key
      precursor to modernism, especially in his attempts to paint nature as he perceived it. During his long
      career, he was the most consistent and prolific practitioner of impressionism's philosophy of
      expressing one's perceptions of nature, especially as applied to plein air (outdoor) landscape
      painting. The term "Impressionism" is derived from the title of his painting Impression, soleil levant,
      exhibited in 1874 (the "exhibition of rejects") initiated by Monet and his associates as an alternative
      to the Salon.`,
      img: "./images/Impressionism/Bridge_Over_a_Pond_of_Water_Lilies.jpg",
      info: `Claude Monet's “Bridge over a Pond of Water Lilies”
      painting is an iconic work of Impressionist art. The painting was created in 1899 and
      measures 3' 0'' x 2' 5''. It is an oil painting on canvas that is part of Monet's famous
      series, Water Lilies. This particular piece features the bridge spanning the Giverny water
      lily pond full of lush foliage. In the background one can see the silhouette of trees reflecting
      in the calm water which creates a tranquil atmosphere. The use of bright colors such as
      yellow, orange and green captures the beauty and vitality of this natural setting while also
      conveying the idea of harmony between man-made structures and nature. As viewers take
      in all the details, they are drawn into this peaceful scene which encourages contemplation
      and relaxation.
      The painting has become one of Monet's most well known works, as it represents his love
      for nature and his pioneering style known as impressionism. He was influenced by
      Japanese art which can be seen in the composition of the elements around the bridge. The
      trees are carefully placed in different positions to create depth and movement within the
      painting, while their vibrant green coloring gives them life. Atop the bridge stands a figure
      that is believed to be Leona Davidson, Monet’s muse at this time.`,
    },
    {
      title: "A Cotton Office in New Orleans",
      artist: "Edgar Degas",
      artistImg: "./images/Impressionism/Edgar_Degas.jpg",
      artistInfo: `Edgar Degas (born Hilaire-
      Germain-Edgar De Gas, 19 July 1834 - 27
            September 1917) was a French Impressionist artist famous for his pastel drawings
      and oil paintings.
            Degas also produced bronze sculptures, prints, and drawings. Degas is especially
      identified with the subject of dance; more than half of his works depict dancers
      Although Degas is regarded as one of the founders of Impressionism, he rejected
      the term, preferring to be called a realist,and did not paint outdoors as many
      Impressionists did.
            Degas was a superb draftsman, and particularly masterly in depicting movement,
      as can be seen in his rendition of dancers and bathing female nudes. In addition to
      ballet dancers and bathing women, Degas painted racehorses and racing jockeys,
      as well as portraits. His portraits are notable for their psychological complexity
      and their portrayal of human isolation.`,
      img: "./images/Impressionism/Cotton.jpg",
      info: `A Cotton Office in New Orleans, also known as Interior of an Office of
      Cotton Buyers in New Orleans and Portraits in an Office (New Orleans), is
      an oil painting by Edgar Degas. Degas depicts the interior of his maternal
      uncle Michel Musson's cotton firm in New Orleans. Musson, Degas's
      brothers René and Achille, Musson's son-in-law William Bell, and other
      associates of Musson are shown engaged in various business and leisure
      activities while raw cotton rests on a table in the middle of the office.
      
      Degas created the painting in the early part of 1873 during an extended
      visit with family in New Orleans. His trip coincided with the political
      turbulence of Reconstruction. Degas exhibited the work at the 1876
      Impressionist Exhibition in Paris. Degas hoped to sell the painting to a
      textile manufacturer in Manchester but was unsuccessful. A Cotton
      Office in New Orleans was eventually sold in 1878 to the Municipal
      Museum in Pau, France. Degas was the only major French Impressionist
      to travel to the United States and paint US subjects.`,
    },
    {
      title: "In a Café",
      artist: "Edgar Degas",
      artistImg: "./images/Impressionism/Edgar_Degas.jpg",
      artistInfo: `Edgar Degas (born Hilaire-
      Germain-Edgar De Gas, 19 July 1834 - 27
            September 1917) was a French Impressionist artist famous for his pastel drawings
      and oil paintings.
            Degas also produced bronze sculptures, prints, and drawings. Degas is especially
      identified with the subject of dance; more than half of his works depict dancers
      Although Degas is regarded as one of the founders of Impressionism, he rejected
      the term, preferring to be called a realist,and did not paint outdoors as many
      Impressionists did.
            Degas was a superb draftsman, and particularly masterly in depicting movement,
      as can be seen in his rendition of dancers and bathing female nudes. In addition to
      ballet dancers and bathing women, Degas painted racehorses and racing jockeys,
      as well as portraits. His portraits are notable for their psychological complexity
      and their portrayal of human isolation.`,
      img: "./images/Impressionism/In_a_Café.jpg",
      info: `Painted in 1875-76, the work portrays a woman and man
      sitting side-by-side, drinking a glass of absinthe. They
      appear lethargic and lonely. The man, wearing a hat,
      looks to the right off the edge of the canvas, while the
      woman, dressed more formally in fashionable dress and
      hat, stares vacantly downward. A glass filled with
      absinthe is on the table in front of her. The models used
      in the painting are Ellen Andrée, an actress who also
      appeared in Édouard Manet's paintings Chez le père
      Lathuille and Plum Brandy, and Marcellin Desboutin,a
      painter and etcher.The café where they are taking their
      refreshment is the Café de la Nouvelle-Athènes in Paris.`,
    },
  ],
  Conceptual: [
    {
      title: "Granite Bench",
      artist: "Jenny Holzer",
      img: "./images/Conceptual/granite-bench.jpg",
      artistImg: "./images/Conceptual/Jenny_holzer.jpg",
      artistInfo: `Jenny Holzer (born July 29, 1950) is an American neo-conceptual artist, based in Hoosick, New York. The
      main focus of her work is the delivery of words and ideas in public spaces and includes large-scale
      installations, advertising billboards, projections on buildings and other structures, and illuminated
      electronic displays.
      Holzer belongs to the feminist branch of a generation of artists that emerged around 1980, and was an
      active member of Colab during this time, participating in the famous The Times Square Show.
            Jenny Holzer is an American Conceptual artist best known for her text-based public art projects. Exploring
      how language is used both as a form of communication and as a means of concealment and control, Holzer
            has employed a variety of media throughout her career, including large-scale projections, LED displays, T-
      shirts, and posters.`,
      info: `Jenny Holzer's "Granite Bench" is a sculptural installation that incorporates text into the surface of a
      granite bench. The bench is typically made of high-quality granite and features inscriptions of Holzer's
      signature text-based artworks, such as excerpts from her "Truisms" or "Inflammatory Essays" series.
      
      The text on the granite bench is often carved deeply into the surface, creating a tactile and visually
      striking effect. Holzer's choice of materials, particularly the use of granite, adds a sense of permanence
      and weight to the artwork, anchoring the ephemeral nature of language into a durable form.`,
    },
    {
      title: "MONUMENT",
      artist: "Jenny Holzer",
      img: "./images/Conceptual/monument.png",
      artistImg: "./images/Conceptual/Jenny_holzer.jpg",
      artistInfo: `Jenny Holzer (born July 29, 1950) is an American neo-conceptual artist, based in Hoosick, New York. The
      main focus of her work is the delivery of words and ideas in public spaces and includes large-scale
      installations, advertising billboards, projections on buildings and other structures, and illuminated
      electronic displays.
      Holzer belongs to the feminist branch of a generation of artists that emerged around 1980, and was an
      active member of Colab during this time, participating in the famous The Times Square Show.
            Jenny Holzer is an American Conceptual artist best known for her text-based public art projects. Exploring
      how language is used both as a form of communication and as a means of concealment and control, Holzer
            has employed a variety of media throughout her career, including large-scale projections, LED displays, T-
      shirts, and posters.`,
      info: `"MONUMENT" is a significant art installation created by Jenny Holzer in 2008. The installation is often
      described as a powerful and thought-provoking piece that engages with themes of war, violence, and
      human suffering.
      
      "MONUMENT" typically consists of large-scale projections of declassified U.S. government documents,
      including military logs, intelligence reports, and other official records related to the Iraq and Afghanistan
      wars. These documents are projected onto the facades of prominent buildings, monuments, or other
      architectural structures, effectively transforming them into temporary memorials or sites of
      remembrance.`,
    },
    {
      title: "The Fallen Easel",
      artist: "John Anthony Baldessari",
      img: "./images/Conceptual/fallen easel.jpg",
      artistImg: "./images/Conceptual/John_Baldessari.jpg",
      artistInfo: `John Anthony Baldessari (June 17, 1931 - January 2, 2020) was an American conceptual artist known for
      his work featuring found photography and appropriated images. He lived and worked in Santa Monica
      and Venice, California.
      
      Initially a painter, Baldessari began to incorporate texts and photography into his canvases in the mid-
      1960s. In 1970 he began working in printmaking, film, video, installation, sculpture and photography. He
      
      created thousands of works which demonstrate and, in many cases, combine the narrative potential of
      images and the associative power of language within the boundaries of the work of art. His art has been
      featured in more than 200 solo exhibitions in the U.S. and Europe.His work influenced that of Cindy
      Sherman, David Salle, Annette Lemieux, and Barbara Kruger among others.`,
      info: `An influential pioneer of Conceptual Art, John Baldessari began appropriating film stills, advertisements,
      and found photographs in the 1980s to examine the social impact of mass culture. Using photographic
      excerpts in unorthodox arrangements, he highlights dissonance and gaps in meaning to undermine
      expectations for how images function. The Fallen Easel employs a framed, multipart composition to
      suggest its own physical instability and thereby underscore the “fall” of easel painting from the apex of
      fine art to a grammar of simple color combinations. The colored dots, placed to obscure identities or
      expressions, additionally frustrate conventional markers of meaning in photographs.`,
    },
    {
      title: "Throwing Three Balls in the Air to Get a Straight Line",
      artist: "John Anthony Baldessari",
      img: "./images/Conceptual/Throwing.jpg",
      artistImg: "./images/Conceptual/John_Baldessari.jpg",
      artistInfo: `John Anthony Baldessari (June 17, 1931 - January 2, 2020) was an American conceptual artist known for
      his work featuring found photography and appropriated images. He lived and worked in Santa Monica
      and Venice, California.
      
      Initially a painter, Baldessari began to incorporate texts and photography into his canvases in the mid-
      1960s. In 1970 he began working in printmaking, film, video, installation, sculpture and photography. He
      
      created thousands of works which demonstrate and, in many cases, combine the narrative potential of
      images and the associative power of language within the boundaries of the work of art. His art has been
      featured in more than 200 solo exhibitions in the U.S. and Europe.His work influenced that of Cindy
      Sherman, David Salle, Annette Lemieux, and Barbara Kruger among others.`,
      info: `"Throwing Three Balls in the Air to Get a Straight Line" is a conceptual artwork created by the renowned
      American artist John Baldessari. This piece, created in 1973, is emblematic of Baldessari's interest in
      challenging traditional notions of art and perception.
            In this work, Baldessari explores the idea of randomness and control within artistic creation. The title
      describes a seemingly impossible task—throwing three balls in the air and expecting them to form a
      straight line. It suggests a playful and absurd approach to the creative process, highlighting the tension
      between intention and chance.`,
    },
    {
      title: "One and Three Hammers",
      artist: "Joseph Kosuth",
      img: "./images/Conceptual/hammers.jpg",
      artistImg: "./images/Conceptual/Joseph Kosuth.jpeg",
      artistInfo: `Joseph Kosuth is indeed an American conceptual artist known for his pioneering contributions to
      conceptual art in the 1960s and beyond. Born in 1945 in Toledo, Ohio, Kosuth emerged as a central
      figure in the conceptual art movement, which sought to prioritize ideas and concepts over traditional
      aesthetic concerns.
      One of Kosuth's most famous works is his series of installations titled "One and Three Chairs" (1965). In
      this series, Kosuth presents a physical chair alongside a photograph of the same chair and a dictionary
      definition of the word "chair." Through this juxtaposition, Kosuth explores the relationship between
      language, representation, and reality, questioning the nature of art and the role of the artist.`,
      info: `"One and Three Hammers" is another conceptual artwork created by Joseph Kosuth in 1965, expanding
      upon the themes explored in his "One and Three" series. Like "One and Three Shovels," this piece
      presents three representations of a single object: a physical hammer, a photograph of the same hammer,
      and a dictionary definition of the word "hammer."
      
      Similar to his other works in the series, "One and Three Hammers" challenges traditional notions of art
      by emphasizing the importance of ideas and language over physical objects. By presenting the hammer
      in different forms – physical, pictorial, and textual – Kosuth prompts viewers to contemplate the nature
      of representation, the role of language in defining objects, and the concept of art itself.`,
    },
    {
      title:
        "Chairs, Neon Lights, and Philosophy: The Conceptual Art of Joseph Kosuth",
      artist: "Joseph Kosuth",
      img: "./images/Conceptual/Chairs.jpg",
      artistImg: "./images/Conceptual/Joseph Kosuth.jpeg",
      artistInfo: `Joseph Kosuth is indeed an American conceptual artist known for his pioneering contributions to
      conceptual art in the 1960s and beyond. Born in 1945 in Toledo, Ohio, Kosuth emerged as a central
      figure in the conceptual art movement, which sought to prioritize ideas and concepts over traditional
      aesthetic concerns.
      One of Kosuth's most famous works is his series of installations titled "One and Three Chairs" (1965). In
      this series, Kosuth presents a physical chair alongside a photograph of the same chair and a dictionary
      definition of the word "chair." Through this juxtaposition, Kosuth explores the relationship between
      language, representation, and reality, questioning the nature of art and the role of the artist.`,
      info: `"Chairs, Neon Lights, and Philosophy: The Conceptual Art of Joseph Kosuth" is a title that aptly
      encapsulates the essence of Joseph Kosuth's artistic practice. Kosuth, an American conceptual artist born
      in 1945, is renowned for his groundbreaking contributions to the field of conceptual art during the 1960s
      and beyond.
      
      The inclusion of "Chairs" in the title likely refers to one of Kosuth's seminal works, "One and Three
      Chairs" (1965). This installation features an actual chair, a photograph of the same chair, and a printed
      definition of the word "chair." Through this piece, Kosuth explores the complex relationship between
      objects, language, and representation, prompting viewers to consider the nature of perception and
      meaning.`,
    },
    {
      title: "Existential Time",
      artist: "Joseph Kosuth",
      img: "./images/Conceptual/Existensial time.jpg",
      artistImg: "./images/Conceptual/Joseph Kosuth.jpeg",
      artistInfo: `Joseph Kosuth is indeed an American conceptual artist known for his pioneering contributions to
      conceptual art in the 1960s and beyond. Born in 1945 in Toledo, Ohio, Kosuth emerged as a central
      figure in the conceptual art movement, which sought to prioritize ideas and concepts over traditional
      aesthetic concerns.
      One of Kosuth's most famous works is his series of installations titled "One and Three Chairs" (1965). In
      this series, Kosuth presents a physical chair alongside a photograph of the same chair and a dictionary
      definition of the word "chair." Through this juxtaposition, Kosuth explores the relationship between
      language, representation, and reality, questioning the nature of art and the role of the artist.`,
      info: `"Existential Time" is a concept explored by Joseph Kosuth, a leading figure in the conceptual art
      movement. Kosuth's engagement with existential themes in his art is evident in various works
      throughout his career.
      
      In the context of Kosuth's oeuvre, "Existential Time" likely refers to the philosophical exploration of time
      within the framework of existentialism. Existentialism is a philosophical movement that emphasizes
      individual existence, freedom, and choice. Time, within this philosophical perspective, is often viewed as
      a fundamental aspect of human existence, shaping our experiences, decisions, and perceptions of
      reality.`,
    },
  ],
  Pastel: [
    {
      title: "Woman Combing Her Hair",
      artist: "Edgar Degas",
      img: "./images/Pastel/Woman Combing Her Hair.jpg",
      info: `Edgar Degas (1888-90) (Paris, France)
      Pastel on light green wove paper, 24 1/8 x 18 1/8 in. (61.3 x 46 cm)
      Credits: Gift of Mr. and Mrs. Nate B. Spingold, 1956
      This is the other of two versions of a piece that Degas made around 1885 (State Hermitage
      Museum, St. Petersburg). In this edition, he utilized a fresh method, layering pastel repeatedly
      to create a burnished pigment and rubbed the underlying paper so much that the fibers are
      now projecting like tiny hairs. Degas highlighted unconventional chartreuses and greens when
      depicting the figure's pink flesh, possibly influenced by the use of complementary color
      contrasts by his younger contemporaries like Seurat and Van Gogh.`,
      artistImg: "./images/Pastel/Edgar_Degas.jpg",
      artistInfo: `Edgar Degas (born Hilaire-Germain-Edgar De Gas, 19 July 1834 - 27 September 1917) was a French Impressionist artist famous for his pastel drawings and oil paintings.
      Degas also produced bronze sculptures, prints, and drawings. Degas is especially identified with the subject of dance; more than half of his works depict dancers.[3] Although Degas is regarded as one of the founders of Impressionism, he rejected the term, preferring to be called a realist,[4] and did not paint outdoors as many Impressionists did.`,
    },
    {
      title: "William Merrit Chase Self Portrait",
      artist: "William Merrit Chase",
      img: "./images/Pastel/Self-Portrait_William Merritt Chase.jpg",
      info: `William Merrit Chase (1884) (New York City)
      pastel on paper, 38.74 x 29.85 cm
      Credits: Museum of Fine Arts, Boston
      William Chase's artwork delivers a captivating exploration of the artist's persona and creative
      spirit. On his artwork, he presents himself with a sense of confidence and self-assurance,
      capturing his excellence with producing remarkable dry-medium drawing in the history. His
      artwork is crafted like he's gaze meets the viewer's eye that wants them to sense his intensity
      and determination, conveying his deep connection to his craft and his unwavering
      commitment to artistic excellence. His painting is rendered with a rich palette with a little
      touch chiaroscuro, highlighting Chase's features and emphasizing the play of light and
      shadow across his face. His brushwork adds depth and dimension to the composition, giving
      the portrait with a sense of dynamism.`,
      artistImg: "./images/Pastel/William_Merritt_Chase.jpg",
      artistInfo: `William Merritt Chase was born on November 1, 1849, in Williamsburg (now Nineveh), Indiana, to the family of Sarah Swain and David H. Chase, a local businessman. Chase's father moved the family to Indianapolis in 1861, and employed his son as a salesman in the family business. Chase showed an early interest in art, and studied under local, self-taught artists Barton S. Hays and Jacob Cox.
      At the age of 19, he decided to become a sailor and travelled with his friend to Annapolis where he was commissioned to a merchant ship. After a brief three-month stint in the Navy, Chase understood that it was not for him and his teachers urged him to travel to New York to further his artistic training. He arrived in New York in 1869, met and studied with Joseph Oriel Eaton for a short time, then enrolled in the National Academy of Design under Lemuel Wilmarth, a student of the famous French artist Jean-Léon Gérôme.`,
    },
    {
      title: "Sketch of The Death of Sardanapalus",
      artist: "Eugene Delacroix",
      img: "./images/Pastel/Sketch for the Death of Sardanapalus.jpg",
      info: `Eugene Delacroix (1827) (Paris, France)
      Pastel over graphite, red and white chalk and black Crayon on unbleached paper
      44 x 58 cm
      Credits: Musée du Louvre, Departement des Arts graphiques, Paris
      This painting is a vibrant portrayal of the legendary Assyrian king's intense last moments. As
      chaos and destruction unfold, Sardanapalus boldly commands the destruction of his palace
      and everything inside, including his concubines and treasures, while his enemies approach.
      Delacroix's vivid use of colors and expressive brushwork vividly depicts the chaotic scene,
      prompting viewers to consider the themes of power, defiance, and the fleeting nature of
      human life.`,
      artistImg: "./images/Pastel/Eugène_Delacroix.jpg",
      artistInfo: `Ferdinand Victor Eugène Delacroix (26 April 1798 - 13 August 1863) was a French Romantic artist regarded from the outset of his career as the leader of the French Romantic school.
      In contrast to the Neoclassical perfectionism of his chief rival Ingres, Delacroix took for his inspiration the art of Rubens and painters of the Venetian Renaissance, with an attendant emphasis on colour and movement rather than clarity of outline and carefully modelled form. Dramatic and romantic content characterized the central themes of his maturity, and led him not to the classical models of Greek and Roman art, but to travel in North Africa, in search of the exotic. Friend and spiritual heir to Théodore Géricault, Delacroix was also inspired by Lord Byron, with whom he shared a strong identification with the "forces of the sublime", of nature in often violent action.`,
    },
    {
      title: "Poppies Isle of Shoals",
      artist: "Childe Hassam",
      img: "./images/Pastel/Poppies Isle of Shoals.jpg",
      info: `Childe Hassam (1891) (France)
      pastel on paper, 24.8 x 31.1 cm
      Credits: Metropolitan Museum of Art in New York City, United States.
      On this artwork Hassam shows a beautiful poppy field against the peaceful scenery of the Isle
      of Shoals. In this outstanding piece of art, the bright red poppies contrast beautifully with the
      lush green landscape, their delicate petals appearing to move gracefully in the soft wind.
      Each flower is carefully drawn with precise detail, capturing their vibrant beauty and vitality
      with great accuracy. The vibrant color he chose and confident brushstrokes he provide
      produce lively atmosphere of the scene, giving it with a feeling of energy and motion.
      Hassam skillfully portrays the Isle of Shoals, adding depth and perspective to the
      composition by including the distant horizon and shimmering waters, creating a feeling of
      vastness and peace. The captivating effect is produced by the interaction of light and shadow
      as the sun shines through the leaves, creating enchanting designs on the ground. By skillfully
      incorporating color, light, and composition, Hassam takes observers to a tranquil rural setting
      brimming with the eternal charm of nature, encouraging them to lose themselves in its
      enchanting appeal.`,
      artistImg: "./images/Pastel/Childe_Hassam.jpg",
      artistInfo: `Frederick Childe Hassam (October 17, 1859 - August 27, 1935) was an American Impressionist painter, noted for his urban and coastal scenes. Along with Mary Cassatt and John Henry Twachtman, Hassam was instrumental in promulgating Impressionism to American collectors, dealers, and museums. He produced over 3,000 paintings, oils, watercolors, etchings, and lithographs over the course of his career, and was an influential American artist of the early 20th century.`,
    },
    {
      title: "Flower Clouds",
      artist: "Odilon Redon",
      img: "./images/Pastel/Flower Clouds.jpg",
      info: `Odilon Redon (1903) (Paris, France)
      pastel on paper, 445 mm (17.51 in) x 542 mm (21.33 in)
      Credits: Art Institute of Chicago
      The painting "Flower Clouds" by Odilon Redon captivates viewers with its enchanting dreamy
      ambiance and vivid imagery. Redon expertly combines elements of imagination and truth in
      this piece, showing a group of flowers intertwined with airy clouds. The gentle, muted colors
      and intricate brush strokes create a feeling of otherworldly loveliness and peace, drawing
      viewers into its captivating atmosphere. Although it has a ethereal feel, there is also an
      element of puzzlement and uncertainty present, as the combination of elements from nature
      implies more profound concepts of transcendence and interconnectedness.
      Redon's skillful method and powerful visuals encourage viewers to ponder the profound
      mysteries of life and the connection between the earthly and celestial dimensions. "Flower
      Clouds" represents Redon's distinctive vision and artistic skill, providing insight into a realm
      where creativity is the ruler and beauty has no limits.`,
      artistImg: "./images/Pastel/Odilon_Redon.jpg",
      artistInfo: `Odilon Redon (born Bertrand Redon; 20 April 1840 - 6 July 1916) was a French Symbolist artist.
      Early in his career, both before and after fighting in the Franco-Prussian War, Redon worked almost exclusively in charcoal and lithography, works known as his noirs. He gained recognition after his drawings were mentioned in the 1884 novel À rebours (Against Nature) by Joris-Karl Huysmans. During the 1890s, Redon began working in pastel and oil, which quickly became his favorite medium, abandoning his previous style of noirs completely after 1900. He developed a keen interest in Hindu and Buddhist religion and culture, which increasingly showed in his work.`,
    },
    {
      title: "Dandelion",
      artist: "Jean Francois Millet",
      img: "./images/Pastel/Dandelion by Jean Francois Millet.jpg",
      info: `Jean Francois Millet (1867 - 1868) (Barbizon, France)
      Pastel on wove paper, 16 x 19 3/4 in (40.6 x 50.2 cm)
      Credits: Museum of Fine Arts, Boston
      His artwork exudes a sense of peaceful rural beauty and hints at wild nature. His intriguing
      artwork invites viewers to explore a world where the dandelion, typically ignored, becomes
      the focal point in the lush countryside of Barbizon. Using skillful brushstrokes, he depicts the
      fragile charm of these sturdy wildflowers, each flower showcasing the strength and liveliness
      of life in the rural scenery.
      By skillfully combining light and darkness, Millet creates a feeling of peaceful reflection in the
      scene, as though time has stopped to appreciate the transient charm of the dandelions.
      Among the rolling fields and distant horizons, the dandelions sway elegantly in the soft
      breeze, their yellow heads bowing in quiet communication with the earth. In "Dandelions,"
      Millet encourages viewers to appreciate the deep beauty found in the simplicity of nature,
      prompting them to take a moment to admire the complex web of life that is present all
      around us, even in the most unassuming of locations.`,
      artistImg: "./images/Pastel/Jean-François_Millet.jpg",
      artistInfo: `Jean-François Millet ( 4 October 1814 - 20 January 1875) was a French artist and one of the founders of the Barbizon school in rural France. Millet is noted for his paintings of peasant farmers and can be categorized as part of the Realism art movement. Toward the end of his career, he became increasingly interested in painting pure landscapes. He is known best for his oil paintings but is also noted for his pastels, Conté crayon drawings, and etchings.`,
    },
    {
      title: "Boating Couple",
      artist: "Pierre-Auguste Renoir",
      img: "./images/Pastel/Boating Couple.jpg",
      info: `Pierre-Auguste Renoir (1881) (Paris, France)
      Pastels, 584 x 451 mm
      Credits: Given in memory of Governor Alvan T. Fuller by the Fuller Foundation. Museum of
      Fine Arts, Boston
      "Boating Couple" portray a delightful moment of relaxation and love, possibly featuring Aline
      Charigot and the artist himself. In the artwork, there is a depiction of a couple peacefully
      enjoying a boat ride on a calm river. The soft brushstrokes and warm palette in Renoir's work
      give the figures a feeling of closeness and love. The woman, thought to be Aline Charigot, the
      future wife of Renoir, lovingly leans towards the man, commonly believed to be Renoir. The
      verdant plants and scattered sunlight in the backdrop contribute to the peaceful and
      picturesque feel of the artwork. Renoir's mastery in portraying light and motion effectively
      conveys the happiness and love of the couple, encouraging viewers to partake in the joy and
      serenity of the moment.`,
      artistImg: "./images/Pastel/Pierre_Auguste_Renoir.jpg",
      artistInfo: `Pierre-Auguste Renoir (25 February 1841 - 3 December 1919) was a French artist who was a leading painter in the development of the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that "Renoir is the final representative of a tradition which runs directly from Rubens to Watteau."
      He was the father of actor Pierre Renoir (1885-1952), filmmaker Jean Renoir (1894-1979) and ceramic artist Claude Renoir (1901-1969). He was the grandfather of the filmmaker Claude Renoir (1913-1993), son of Pierre.`,
    },
    {
      title: "Baby in his Mother's Arms",
      artist: "Mary Cassatt",
      img: "./images/Pastel/Baby in his Mother's arms, sucking his finger.jpg",
      info: `Mary Cassatt (1889) (France)
      pastel on paper, 100.3 x 65.4 cm (39 1/2 x 25 3/4 in)
      Credits: Louvre Museum
      Her work depicts a beautiful portrait of mother love and infant purity. Cassatt's artwork
      depicts a tranquil moment shared between a mother and her child, highlighting their close
      attachment. The mother, seated on a chair, gently holds her baby on her arms, providing
      comfort and reassurance. She looks down at her kid with delicate care, showing both
      affection and serenity.
      The baby is cuddled securely in the mother's bosom, looks quiet and comfortable while
      sucking on his finger. Her artwork shows delicate brushwork and soft, muted hues provide a
      warm and intimate atmosphere, while the delicate play of light and shadow lends depth and
      texture to the piece. Her superb depiction of this intimate moment with mother and infant
      prompts viewers to consider the general themes of love, caring, and the enduring tie between
      parent and child.`,
      artistImg: "./images/Pastel/Cassatt-Mary.jpg",
      artistInfo: `Mary Stevenson Cassatt (May 22, 1844 - June 14, 1926) was an American painter and printmaker. She was born in Allegheny, Pennsylvania (now part of Pittsburgh's North Side), and lived much of her adult life in France, where she befriended Edgar Degas and exhibited with the Impressionists. Cassatt often created images of the social and private lives of women, with particular emphasis on the intimate bonds between mothers and children.

      She was described by Gustave Geffroy as one of "les trois grandes dames" (the three great ladies) of Impressionism alongside Marie Bracquemond and Berthe Morisot. In 1879, Diego Martelli compared her to Degas, as they both sought to depict movement, light, and design in the most modern sense.`,
    },
    {
      title: "The Salon in the Rue des Moulins",
      artist: "Henri de Toulouse-Lautrec",
      img: "./images/Pastel/The Salon in the Rue des Moulins.jpg",
      info: `Henri de Toulouse-Lautrec (1894) (Paris, France)
      Pastels, 111.5 cm (43.8 in) x 132.5 cm (52.1 in)
      Credits: Musee Toulouse-Lautrec, Albi, France
      This painting of him shows a moment in a brothel situated on Rue des Moulins in Paris. This
      painting shows the inside of a brothel, with lots women, the probably are prostitutes, and
      their customers chatting and relaxing. The artwork is known because for its vibrant colors
      and complex details, showing the artist's unique style of creating strong lines. Toulouse-
      Lautrec artwork remain in history and provides a peek into the secretive realm of Parisian
      nightlife in the late 1800s, illuminating the social and cultural trends of that time.`,
      artistImg: "./images/Pastel/Henri de Toulouse-Lautrec.jpg",
      artistInfo: `Henri Marie Raymond de Toulouse-Lautrec-Monfa (24 November 1864 - 9 September 1901), known as Toulouse Lautrec (French: [tuluz lotʁɛk]), was a French painter, printmaker, draughtsman, caricaturist, and illustrator whose immersion in the colourful and theatrical life of Paris in the late 19th century allowed him to produce a collection of enticing, elegant, and provocative images of the sometimes decadent affairs of those times.`,
    },
  ],
  Fresco: [
    {
      title: "The Vision of the Cross",
      artist: "Gianfrancesco Penni",
      img: "./images/Fresco/The Vision of the Cross.jpeg",
      info: `Giotto di Bondone c. 1267 - January 8,
        1337), known mononymously as Giotto and Latinised as Giottus, was an Italian painter and architect from Florence during
        the Late Middle Ages. He worked during the Gothic and Proto-Renaissance period. Giotto's
        contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was "the most sovereign
        master of painting in his time, who drew all his figures and their postures according to nature" and of
        his publicly recognized "talent and excellence". Giorgio Vasari described Giotto as making a decisive
        break from the prevalent Byzantine style and as initiating "the great art of painting as we know it
        today, introducing the technique of drawing accurately from life, which had been neglected for more
        than two hundred years".`,
      artistInfo: `Gianfrancesco Penni (1488/1496-1528), also known as Giovan Francesco, was an Italian painter.
      His brother Bartolommeo was an artist of the Tudor court of Henry VIII, and another brother, Luca,
      ended up as one of the Italian artists of the School of Fontainebleau.`,
      artistImg: "./images/Fresco/Gianfrancesco-Penni.jpg",
    },
    {
      title: "The Calling of the First Apostles",
      artist: " Domenico Ghirlandaio",
      img: "./images/Fresco/The Calling of the First Apostle.jpg",
      info: `"The Calling of the First Apostles" is a renowned painting by the Italian Renaissance
      artist Domenico Ghirlandaio, completed around 1481-1482. It is currently housed in the
      Sistine Chapel in Vatican City. This masterpiece depicts a pivotal moment from the New
      Testament, specifically the Gospel of Matthew (4:18-22) and the Gospel of Mark (1:16-
      20), where Jesus calls the fishermen Simon Peter and Andrew to become his disciples.
      In the painting, the scene unfolds on the shores of the Sea of Galilee. Jesus, depicted in
      the center, stands on the shore surrounded by a radiant golden light, symbolizing his
      divine presence. He gestures towards Simon Peter and Andrew, who are kneeling
      before him, their fishing nets lying abandoned on the ground. The expressions on their
      faces reflect a mix of awe, reverence, and acceptance of Jesus's call.`,
      artistInfo: `Domenico di Tommaso Curradi di Doffo Bigordi (2 June 1448 - 11 January 1494), professionally
      known as Domenico Ghirlandaio (also spelt as Ghirlandajo), was an Italian
      Renaissance painter born in Florence. Ghirlandaio was part of the so-called "third generation" of
      the Florentine Renaissance, along with Verrocchio, the Pollaiolo brothers and Sandro Botticelli.
      Ghirlandaio led a large and efficient workshop that included his brothers Davide
      Ghirlandaio and Benedetto Ghirlandaio, his brother-in-law Bastiano Mainardi from San Gimignano,
      and later his son Ridolfo Ghirlandaio. Many apprentices passed through Ghirlandaio's workshop,
      including the famous Michelangelo. His particular talent lay in his ability to posit depictions of
      contemporary life and portraits of contemporary people within the context of religious narratives,
      bringing him great popularity and many large commissions.`,
      artistImg: "./images/Fresco/Domenico Ghirlandaio.jpg",
    },
    {
      title: "Funerary Monument to Sir John Hawkwood",
      artist: "Paolo Uccello",
      img: "./images/Fresco/Funerary Monument to Sir John Hawkwood.jpg",
      info: `The Funerary Monument (or Equestrian Monument) to Sir John Hawkwood is a fresco by Paolo
      Uccello, commemorating English condottiero John Hawkwood, commissioned in 1436 for Florence
      Cathedral. The fresco is an important example of art commemorating a soldier-for-hire who fought in
      the Italian peninsula and is a seminal work in the development of perspective.
      The politics of the commissioning and recommissioning of the fresco have been analyzed and
      debated by historians. The fresco is often cited as a form of "Florentine propaganda" for its
      appropriation of a foreign soldier of fortune as a Florentine hero and for its implied promise to
      other condottieri of the potential rewards of serving Florence. The fresco has also been interpreted
      as a product of internal political competition between the Albizzi and Medici factions in Renaissance
      Florence, due to the latter's modification of the work's symbolism and iconography during its
      recommissioning.`,
      artistInfo: `Paolo Uccello,
      born Paolo di Dono, was an Italian painter and mathematician who was notable for his pioneering
      work on visual perspective in art. In his book Lives of the Most Excellent Painters, Sculptors, and
      Architects, Giorgio Vasari wrote that Uccello was obsessed by his interest in perspective and would
      stay up all night in his study trying to grasp the exact vanishing point. Uccello used perspective to
      create a feeling of depth in his paintings. His best known works are the three paintings representing
      the battle of San Romano, which were wrongly entitled the Battle of Sant'Egidio of 1416 for a long
      period of time.`,
      artistImg: "./images/Fresco/Paolo Uccello.jpg",
    },
    {
      title: "Sistine Chapel Ceiling",
      artist: "MichaelAngelo",
      img: "./images/Fresco/Sistine Chapel Ceiling.jpg",
      info: `The Sistine Chapel ceiling (Italian: Soffitto della Cappella Sistina), painted
      in fresco by Michelangelo between 1508 and 1512, is a cornerstone work of High Renaissance art.
      The Sistine Chapel is the large papal chapel built within the Vatican between 1477 and 1480
      by Pope Sixtus IV, for whom the chapel is named. The ceiling was painted at the commission
      of Pope Julius II.`,
      artistInfo: `6 March 1475 - 18 February
      1564), known mononymously as Michelangelo was an Italian
      sculptor, painter, architect, and poet of the High Renaissance. Born in the Republic of Florence, his
      work was inspired by models from classical antiquity and had a lasting influence on Western art.
      Michelangelo's creative abilities and mastery in a range of artistic arenas define him as an
      archetypal Renaissance man, along with his rival and elder contemporary, Leonardo da Vinci.`,
      artistImg:
        "./images/Fresco/MichaelAngelo ARTIST of Sistine Chapel Ceiling.jpg",
    },
    {
      title: "The Flight into Egypt",
      artist: "Giotto di Bondone",
      img: "./images/Fresco/The Flight into Egypt.jpg",
      info: `The flight into Egypt is a story recounted in the Gospel of Matthew (Matthew 2:13-23) and in New Testament apocrypha. Soon after the visit by the Magi, an angel appeared to Joseph in a dream telling him to flee to Egypt with Mary and the infant Jesus since King Herod would seek the child to kill him. The episode is frequently shown in art, as the final episode of the Nativity of Jesus in art, and was a common component in cycles of the Life of the Virgin as well as the Life of Christ. Within the narrative tradition, iconic representation of the "Rest on the Flight into Egypt" developed after the 14th century.`,
      artistInfo: `Giotto di Bondone known mononymously as Giotto and Latinised as Giottus, was an Italian painter and architect from Florence during
        the Late Middle Ages. He worked during the Gothic and Proto-Renaissance period. Giotto's
        contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was "the most sovereign
        master of painting in his time, who drew all his figures and their postures according to nature" and of
        his publicly recognized "talent and excellence".`,
      artistImg: "./images/Fresco/Giotto di Bondone..jpg",
    },
  ],
  Miniature: [
    {
      title: "Tatsuya Tanaka Miniature",
      artist: "Tatsuya Tanaka",
      img: "./images/Miniature/Tatsuya Tanaka Miniature.jpg",
      artistImg: "./images/Miniature/Tanaka.jpg",
      artistInfo: `Born in Kumamoto, Kyusyu in 1981, Tanaka Tatsuya is a Japanese photographer.
      He started posting miniature images every day in 2011, calling it "Miniature
      Calendar." Since then, more than 4,000 images have been posted on his website,
      and he now has 2.5 million+ followers on Instagram.
      Born: 1981 (age 43 years), Kumamoto, Kumamoto, Japan`,
      info: `In 2011, Japanese Art director and photographer Tatsuya Tanaka realized his
      penchant for miniature art and started creating his awe-inspiring miniature
      dioramas. Four years later, the artist still adds to his diorama collection on a daily
      basis, and his creations are getting ever stranger and more creative; a mango slice
      suddenly becomes a small island bedecked with a palm tree, a circuit board is
      converted into a golf field with actual players, and a rolled up magazine is
      miraculously transformed into a wave for a surfer! The photographer's knack lies in
      imagining everyday objects in ingenious ways and his fantastical childlike
      imagination leaves us enthralled.`,
    },
    {
      title: "Devastated by calamities and catastrophes",
      artist: "Thomas Doyle",
      img: "./images/Miniature/Thomas-Doyle.jpg",
      artistImg: "./images/Miniature/tom.jpg",
      artistInfo: `Tom Doyle is a highly acclaimed music journalist and author of three books:
      The Glamour Chase: The Maverick Life of Billy MacKenzie, Man on the Run:
      Paul McCartney in the 1970s, and Captain Fantastic: Elton John's Stellar Trip
      Through The '70s. ...
      Born: May 1, 1967
      Died: October 8, 2016 (age 49 years)
      Partner: Jane Ellen Miller`,
      info: `American sculptor Thomas Doyle has been famously crafting splendid
      isolated spaces and microcosmic idyllic scenes which have been devastated
      by calamities and catastrophes. His 1:43 scale series feature tiny human
      figures, immaculate green landscapes, over-the-edge and buried houses, and
      demolished estates. Doyle's unsettling works are sometimes sealed under
      glass, and exude a prurient feel as the large-as-God observers look down
      upon frightening and strange moments in the lives of people as a shady
      intruder loiters outside their windows or their homes are destroyed and
      shattered down to the ground. These moments in time are blurry and
      distorted, wrapped in a dreamlike atmosphere!`,
    },
    {
      title: "Needle Housing Snow White And The Seven Dwarfs.",
      artist: "Willard Wigan",
      img: "./images/Miniature/Willard-Wigan-1.jpg",
      artistImg: "./images/Miniature/willard.jpg",
      artistInfo: `Willard Wigan, MBE is a British sculptor from Ashmore Park Estate,
      Wednesfield, England, the son of Jamaican immigrants, who makes micro
      miniature sculptures. His sculptures are typically placed in the eye of a needle
      or on the head of a pin. A single sculpture can be as small as 0.005 mm.
      Born: June 1957 (age 66 years), Wednesfield, Wolverhampton, United
      Kingdom
      Known for: Sculpture
      Award: Order of the British Empire`,
      info: `Dyslexic Artist Willard Wigan gives a whole new meaning to thinking outside
      the box with his micro sculptures, tiny to the extreme that most of his creations
      could easily fit inside a miniature box! He has incredulously recreated scenes
      from pop-culture and Bible. His art sometimes occupy the head of a pin, like
      the sculpture of Homer hoisting Bart Simpson into the air, or the eye of a
      needle housing snow white and the seven dwarfs. Those creations are so
      miniature that they can only be viewed under a high-powered microscope. His
      unique perspective and ingenuity have earned him money, fame,
      appreciation, and respect from people around the world.`,
    },
    {
      title: "Life-like Foods Out Of Air Dry Clay",
      artist: "Lim Pui Wan",
      img: "./images/Miniature/Lim-Pui-Wan.jpg",
      artistImg: "./images/Miniature/lim.jpg",
      artistInfo: `Lim Pui Wan is a Malaysian miniature artist who discovered her love of
      miniatures at the age of 14 and has, since 2014 under “Picoworm”,
      become a full-time professional miniature artist. In 2020, she was even
      part of Ryan Reynold's “Ryan Doesn't Know” Snapchat series!`,
      info: `Going by the name PicoWorm, the Malaysian clay art hobbyist is making
      people crazy over her miniature designs which she regularly posts on
      
      her myriad social media platforms. Her artist name is inspired from pico-
      a terrifically small unit in metric system-, and worm taken from a
      
      “bookworm”. She crafts her life-like foods out of air dry clay and paints
      over them with acrylic. She displays her amazing creations in her
      realistic doll-sized provision shop, reminiscent of the retro looking
      mom-and-pop outlets sprawling all over Singapore and Malaysia,
      complete with Coca-Cola posters and a calendar at the back.`,
    },
    {
      title: "Sets for a Film I'll Never Make",
      artist: "Daniel Agdag",
      img: "./images/Miniature/Daniel-Agdag.jpg",
      artistImg: "./images/Miniature/daniel.jpg",
      artistInfo: `Daniel Agdag's works are mechanical manifestation of his thoughts, feelings
      and ideas told through hidden narratives within the details of his work. They
      appear as systems; structural, social or mechanical. Often described as
      'architectural in form, whimsical in nature and inconceivably intricate'.
      Drawn to the utilitarian origins and monochromatic presentation of his
      primary material cardboard, Agdag creates a paradox of fragility and
      strength with structures that resemble architectural forms and machines by
      using a medium that is essentially paper.`,
      info: `Daniel Agdag has beautifully designed a series of astoundingly detailed
      sculptures using just PVA glue and sliced cardboard, and named his collection
      
      'Sets for a Film I'll Never Make'. The Melbourne-based award-winning film-
      maker and artist flaunts his breathtaking talent and eye for detail with these
      
      accurate collections of miniature models of potential film sets. Featuring
      buildings and industrial machinery, the pieces in his miniature models are
      created in the art deco style that when photographed, makes the models look
      like they have just stepped out of a vintage film-noir.`,
    },
    {
      title: "Micro Matter",
      artist: "Rosa De Jong",
      img: "./images/Miniature/Rosa-de-Jong.jpg",
      artistImg: "./images/Miniature/rosa.jpg",
      artistInfo: `The beauty of Amsterdam-based artist and designer Rosa de Jong's work lies
      not only in her infinite creativity but also in her intricate, creative, and perfect
      execution. Art and design come in a variety of shapes and forms, some big,
      some small, and some confined in a miniature glass container.`,
      info: `Nothing leaves the eye riveted to the spot more than artistic creations that are
      so much shockingly smaller than life. Artist Rosa de Jong has ingeniously
      leveraged her numerous talents to create Micro Matter: a series of miniature
      models featuring stunning architecture set against a backdrop of lush
      greenery. Her sculptures are so tiny that one can fit them into test tubes
      snuggly, as they continue to capture the gaze with their vertical, clean lines.
      Each creation portrays a different incarnation of how industry meets nature,
      and depicts a snapshot of Mother Earth and manmade architecture and
      construction that lies upon its surface.`,
    },
    {
      title: "Realities of Urban Settings",
      artist: "Joshua Smith",
      img: "./images/Miniature/Joshua-Smith-1.jpg",
      artistImg: "./images/Miniature/joshua.jpg",
      artistInfo: `Joshua Smith was an Australian artist who won the Archibald Prize in 1944
      with his portrait of Hon Sol Rosevear, MP, Speaker of the Australian House
      of Representatives, but is better known as the subject of the previous year's
      controversial Archibald Prize win, Mr Joshua Smith by artist William Dobell.
      Wikipedia
      Born: March 12, 1905
      Died: July 22, 1995 (age 90 years), Sydney, Australia
      Artworks: Dame Mary Gilmore, Still life, Portrait group`,
      info: `Artist Joshua Smith works at 1:20 scale to create painstaking works that
      beautifully embody the layered realities of urban settings in myriad cities such
      as Los Angeles, Sydney, and Hong Kong. His miniature buildings perfectly
      depict the detritus and details left by the diverse population of those cities,
      introducing elements of the city's street artists, inhabitants, and workers,
      which are visible through details such as the heavily graffitied exteriors, road
      sign posts, and takeout food sitting on the roof of the building.`,
    },
    {
      title: "Britannica",
      artist: "Michael Chesko",
      img: "./images/Miniature/Michael-Chesko.jpg",
      artistImg: "./images/Miniature/michael.jpg",
      artistInfo: `Michael Chesko is an accomplished artist, scholar, and advocate whose
      vibrant canvases convey deep emotions and stories. With a keen intellect, he
      explores philosophy and psychology, challenging conventions through
      insightful writings. Committed to social justice, he volunteers and mentors,
      fostering inclusivity. Chesko's multidimensional pursuits illuminate the human
      experience with creativity, intellect, and compassion.`,
      info: `While working in the early 1980s as an Engineer for Motorola, Michael Chesko
      developed an affinity for miniatures, which ultimately led to the creation of an
      extensive imaginary city named Britannica! Using just fingernail files, Xacto
      blades, and Balsa wood as his tools and mediums, ten years of pure creativity
      made him realize that instead of daydreaming or lusting after fantasy, he could
      in fact demand the exactitude of reality? His most ambitious work to date,
      Midtown Manhattan, is a testament of what sheer creativity mingled with
      ingenuity can achieve.`,
    },
  ],
  Portraiture: [
    {
      title: "Portrait Of Lady Agnew Of Lochnaw",
      img: "./images/Portraiture/Portrait Of Lady Agnew Of Lochnaw.jpg",
      artist: "John Singer Sargent",
      artistImg: "./images/Portraiture/John Singer Sargent.jpg",
      artistInfo: `John Singer Sargent was an American expatriate artist, considered the "leading
      portrait painter of his generation" for his evocations of Edwardian-era luxury. He
      created roughly 900 oil paintings and more than 2,000 watercolors, as well as
      countless sketches and charcoal drawings.
      Born: January 12, 1856, Florence, Italy
      Died: April 1925 (age 69 years), London, United Kingdom
      Periods: Impressionism, American Renaissance
      Known for: Painting
      Influenced by: Diego Velázquez, James McNeill Whistler, Jean Auguste Dominique
      Ingres, Léon Bonnat
      Parents: FitzWilliam Sargent, Mary Sargent`,
      info: `Lady Agnew (born Gertrude Vernon) is the subject of this painting, which was
      ordered by her husband, the Scottish barrister Sir Andrew Noel Agnew. The
      lady establishes a strong rapport with the observer through her direct stare
      and informal stance. Her exquisite white gown with lilac accent blends well
      with the vibrant, patterned upholstery of the Chinese silk wall hanging from
      the eighteenth century and the French chairs. Sargent's smooth brushstrokes
      exude an air of luxury and comfort. The artist said he sometimes got his best
      results only after a few sittings. He finished the Portrait Of Lady Agnew Of
      Lochnaw in six sessions. The work's exhibition at the Royal Academy in
      London in 1893 helped establish Lady Agnew as a society hostess and the
      Sargent's portrait painter status.`,
    },
    {
      title: "The Desperate Man (Self-Portrait)",
      img: "./images/Portraiture/The Desperate Man.jpg",
      artist: "Gustave Courbet",
      artistImg: "./images/Portraiture/Jean Désiré Gustave Courbet.jpg",
      artistInfo: `Jean Désiré Gustave Courbet was a French painter who led the Realism
      movement in 19th-century French painting. Committed to painting only what
      he could see, he rejected academic convention and the Romanticism of the
      previous generation of visual artists.
      Born: June 10, 1819, Ornans, France
      Died: December 31, 1877 (age 58 years), La Tour-de-Peilz, Switzerland
      Period: Realism
      Known for: Painting, sculpting
      Influenced by: Rembrandt, Caravaggio, Peter Paul Rubens, Hokusai,
      Francisco de Zurbarán, Diego Velázquez
      Parents: Régis Courbet, Sylvie Oudot`,
      info: `Self-portraits are prevalent throughout Courbet's career, and many of these
      self-portraits, including the one above, are Romantic in style, demonstrating
      clean lines and precision. In The Desperate Man, Courbet pulls his hair while
      staring at the observer directly with his eyes wide open, conveying the
      subject's emotional and psychological state. Courbet utilized his self-portraits
      to prove himself as an artist and as a means of self-promotion and publicity.
      He believed that artists should depict the world as they perceive it; thus, his
      
      realistic artwork in the late 1840s favored many young realist and neo-
      romantic painters. In addition to feeling his desperation when one looks at this
      
      self-portrait, the observer also gets a sense of Gustave Courbet's personality.
      Brave, cunning, radical, aspirational, and determined. Determined to influence
      the direction of art history by protesting against cliches and challenging
      established painting forms.`,
    },
    {
      title: "Portrait Of Madame X",
      img: "./images/Portraiture/Portrait Of Madame X.jpg",
      artist: "John Singer Sargent",
      artistImg: "./images/Portraiture/John Singer Sargent.jpg",
      artistInfo: `John Singer Sargent was an American expatriate artist, considered the
      "leading portrait painter of his generation" for his evocations of Edwardian-era
      luxury. He created roughly 900 oil paintings and more than 2,000 watercolors,
      as well as countless sketches and charcoal drawings.
      Born: January 12, 1856, Florence, Italy
      Died: April 1925 (age 69 years), London, United Kingdom
      Periods: Impressionism, American Renaissance
      Known for: Painting
      Influenced by: Diego Velázquez, James McNeill Whistler, Jean Auguste
      Dominique Ingres, Léon Bonnat
      Parents: FitzWilliam Sargent, Mary Sargent`,
      info: `John Singer Sargent was the most famous portrait painter of his time, also
      hailed as the "leading portrait painter of his generation." In 1874 he went to
      Paris to study painting. Ten years later, in 1884, at the Paris Salon, Sargent
      debuted arguably one of his best-known paintings, Portrait Of Madame X,
      which portrays a Parisian beauty named Madame Gautreau. Sargent thought
      it was his best work and was unpleasantly startled when it sparked a stir
      because reviewers thought it was eccentric and provocative. After failing in
      Paris, Sargent relocated permanently to London. His art didn't instantly appeal
      to the English taste. However, it all changed in 1887. That year, his painting
      of two little girls lighting Japanese lanterns won the British public's hearts. He
      started to receive extraordinary acclaim in England and the United States.
      Clients flocked to his studio in Chelsea, where he charged around $5,000 for
      a full-length portrait.`,
    },
    {
      title: "Girl With A Pearl Earring",
      img: "./images/Portraiture/Girl With A Pearl Earring.jpg",
      artist: "Johannes Vermeer",
      artistImg: "./images/Portraiture/Johannes Vermeer.jpg",
      artistInfo: `Johannes Vermeer was a Dutch Baroque Period painter who specialized
      in domestic interior scenes of middle-class life. He is considered one of
      the greatest painters of the Dutch Golden Age. During his lifetime, he
      was a moderately successful provincial genre painter, recognized in
      Delft and The Hague.
      Born: October 31, 1632, Delft, Netherlands
      Died: December 15, 1675 (age 43 years), Delft, Netherlands
      Periods: Baroque, Baroque painting, Dutch Golden Age
      Influenced by: Carel Fabritius, Gabriël Metsu, Cesare Ripa, Dirck van
      Baburen, Leonaert Bramer
      Children: Cornelia Vermeer, Catharina Vermeer, MORE
      Parents: Reynier Janszoon Vermeer, Digna Baltens`,
      info: `The Girl With A Pearl Earring, one of Vermeer's most famous paintings, was
      created in 1665, ten years before his terrible demise. The work has gone by
      several names throughout the ages, and only in the 20th century did it
      receive its current title. A young woman is depicted in the painting in a small,
      dark environment that focuses the viewer's attention solely on her. She is
      decked out in a gold jacket with a visible white collar underneath, the titular
      pearl earring, and a blue and gold headpiece. Unlike many of Vermeer's
      subjects, she is not focused on a routine task and unaware of the viewer.
      Instead, she turns her head over her shoulder and meets the viewer's gaze,
      her lips parted as if she was about to speak.`,
    },
    {
      title: "Portrait Of Adele Bloch Bauer I",
      img: "./images/Portraiture/Portrait Of Adele Bloch Bauer.jpg",
      artist: "Gustav Klimt",
      artistImg: "./images/Portraiture/Gustav Klimt.jpg",
      artistInfo: `Gustav Klimt was an Austrian symbolist painter and one of the most prominent
      members of the Vienna Secession movement. Klimt is noted for his paintings,
      murals, sketches, and other objets d'art. Klimt's primary subject was the
      female body, and his works are marked by a frank eroticism.
      Born: July 14, 1862, Baumgarten, Vienna, Austria
      Died: February 6, 1918 (age 55 years), Vienna, Austria
      Periods: Art Nouveau, Vienna Secession, Symbolism, Modern art
      Children: Gustav Ucicky, Gustav Zimmermann, Otto Zimmermann
      Influenced by: Pierre-Auguste Renoir, Hans Makart, Albrecht Dürer
      Grandchild: Gustav Zimmermann`,
      info: `There is little doubt that Klimt was influenced by Egyptian art when he created
      this portrait of Adele Bloch Bauer I, the wife of sugar industrialist Ferdinand
      Bloch-Bauer. Bauer twice commissioned Klimt to create portraits of his wife.
      In this particular painting, Adele is depicted by Klimt in an ambiguous position.
      It's unclear whether she's standing or sitting in an armchair draped in sinuous
      spirals. Her face is encircled by a golden halo with elaborate decorations. The
      sensuality of the woman depicted in the portrait is conveyed by her heated
      cheeks and rouged lips. Adele Bloch-Bauer is also decked out in expensive
      jewelry, including a choker made of diamonds that Ferdinand had given her
      as a wedding gift. Given that Adele struggled with health issues throughout
      her life, the all-seeing eye and golden triangle symbols on her dress may have
      been added as amulets. This painting was later stolen by the Nazis in 1941
      and was only recovered after 60 years.`,
    },
    {
      title: "Vsevolod Mikhailovich Garshin",
      img: "./images/Portraiture/Vsevolod Mikhailovich Garshin.jpg",
      artist: "Ilya Repin",
      artistImg: "./images/Portraiture/Ilya Yefimovich Repin.jpg",
      artistInfo: `Ilya Yefimovich Repin was a Ukrainian-born Russian painter. He became one
      of the most renowned artists in Russia in the 19th century. His major works
      include Barge Haulers on the Volga, Religious Procession in Kursk Province,
      Ivan the Terrible and His Son Ivan; and Reply of the Zaporozhian Cossacks.
      Born: August 5, 1844, Chuhuiv, Ukraine
      Died: September 29, 1930 (age 86 years), Repino, Saint Petersburg, Russia
      Period: Realism
      Parents: Tatiana Stepanovna, Yefim Vasilyevich Repin
      Spouse: Vera Repina (m. 1872)
      Children: Yury Repin, Nadezhda Repina, Tatyana Repina, Vera Repina`,
      info: `In 1884, Ilya Repin created his portrait of Vsevolod Mikhailovich Garshin.
      During the Russo-Turkish War, writer Vsevolod Garshin was a military man.
      After the war, he was appointed an officer, but Garshin withdrew and
      concentrated on his literature. The horrors and gloom he encountered on the
      battlefield shocked him. He expressed his profound empathy and boundless
      compassion for others through his written work. Repin's portrait captures his
      love of literature and his inherent kindness and makes it eternal. In the scene
      depicted in the portrait, Garshin suddenly turns to face the spectator while
      reading a book at his desk. It's hard to look away because of how intense his
      gaze is. His expression conveys a profound melancholy and anguish. But
      there's also evidence of the man's kindness. His melancholy and compassion
      combine to create a painting of incredible intricacy and arguably one of Ilya
      Repin's best works.`,
    },
    {
      title: "Portrait Of Madame De Florian",
      img: "./images/Portraiture/Portrait Of Madame De Florian.jpg",
      artist: "Giovanni Boldini",
      artistImg: "./images/Portraiture/Giovanni Boldini.jpg",
      artistInfo: `Giovanni Boldini was an Italian genre and portrait painter who lived and
      worked in Paris for most of his career. According to a 1933 article in Time
      magazine, he was known as the "Master of Swish" because of his flowing
      style of painting.
      Born: December 31, 1842, Ferrara, Italy
      Died: July 11, 1931 (age 88 years), Paris, France
      Movement: Macchiaioli
      Spouse: Emilia Cardona Boldini (m. 1929-1931)
      Award: Legion of Honour
      Parents: Antonio Boldini, Benvenuta Caleffi`,
      info: `Parisian actress and socialite Marthe de Florian was well known for her
      alluring beauty. She was also the subject of many rumors. People
      speculated that she had relationships with several notable men, including
      future French Prime Minister Georges Clemenceau and painter Giovanni
      Boldini, the master behind the portrait above. However, until 2010 when the
      apartment seemingly frozen in time was discovered, the latter connection
      was only an assumption. One of the many findings in Madame Marthe de
      Florian's apartment in Paris was a portrait of herself painted by Giovanni
      Boldini, wearing a lovely pink muslin evening gown. A card with a
      handwritten love letter from the artist discovered in the flat and a brief
      mention found in a 1951 book that the artist's widow Emilia Cardona
      commissioned supported the portrait's origin. The image had never been
      listed, displayed, or published. According to the book, the painting might
      have been created in 1888, when the actress was 24 years old.`,
    },
    {
      title: "Mona Lisa",
      img: "./images/Portraiture/Mona Lisa.jpg",
      artist: "Leonardo Da Vinci",
      artistImg: "./images/Portraiture/Leonardo di ser Piero da Vinci.jpg",
      artistInfo: `Leonardo di ser Piero da Vinci was an Italian polymath of the High
      Renaissance who was active as a painter, draughtsman, engineer, scientist,
      theorist, sculptor, and architect.
      Born: April 15, 1452, Anchiano, Italy
      Died: May 2, 1519 (age 67 years), Château du Clos Lucé, Amboise, France
      Periods: Renaissance, Italian Renaissance, High Renaissance
      Place of burial: Chapel of Saint-Hubert, Amboise, France
      Business partners: Bramantino, Cristoforo Lombardo
      Ancestors: Piero Fruosino di Antonio da Vinci,`,
      info: `Leonardo has frequently been referred to as the prototypical "Renaissance
      man," a person whose seemingly limitless curiosity was only surpassed by his
      inventiveness. He is regarded as one of the finest artists and possibly the
      person with the broadest range of talents ever. However, Leonardo was and
      is primarily known for his paintings. The Last Supper and the portrait of
      the Mona Lisa, two of his creations, are arguably the most well-known,
      frequently imitated, and often parodied paintings of all time. Leonardo da Vinci
      was one of the first painters to use aerial perspective. His work was among
      the first portraits to show the subject in front of a made-up landscape. Before
      him, portraits lacked mystery; artists merely depicted physical attributes
      without considering the soul. If they did, they attempted to convey the soul
      through gestures, symbolic items, or inscriptions. The Mona Lisa remains a
      mystery to this day; the soul is present yet inaccessible.`,
    },
  ],
}

const rootElement = document.querySelector("#root")
function setGallery() {
  const galleryElements = galleryData.map((item) => {
    return `<div class="types" id="${item.type}">
    <p>${item.type} Arts</p>
      <img src="${item.img}">
    </div>`
  })
  rootElement.innerHTML = `
  <div id="galleryBoxes">${galleryElements.join("")}</div>`
  const galleryDivs = document.querySelectorAll(".types")
  galleryDivs.forEach((item) => {
    item.addEventListener("click", () => {
      setSubGallery(item.id)
    })
  })
}

function setImageInfo(imageInfo) {
  const imgtype = imageInfo.split("_")[0]
  const imgTitle = imageInfo.split("_")[1]
  const imageData = subGallery[imgtype].find((item) => item.title === imgTitle)

  const { info, artist, artistImg, img, artistInfo } = imageData
  rootElement.innerHTML = `<div class="imageInfo">
    <div>
      <p>${imgTitle}</p>
      <p>${info}</p>
    </div>
    <div>
      <img src="${img}">
    </div>
    <div>
      <img src="${artistImg}">
    </div>
    <div>
      <p>${artist}</p>
      <p>${artistInfo}</p>
    </div>
    <button class="close" id="closeImageInfo">X</button>
    </div>`

  document
    .querySelector("#closeImageInfo")
    .addEventListener("click", () => setSubGallery(imgtype))
}

function setSubGallery(id) {
  const elements = subGallery[id].map((item) => {
    return `<div class="galleryImages" id="${id}_${item.title}">
        <img src="${item.img}">
        <p>${item.title}</p>
        </div>`
  })
  rootElement.innerHTML = `<div class="subGalleryItems"><button class="close">X</button>${elements.join(
    ""
  )}</div>`

  const closeButton = document.querySelector(".close")
  closeButton.addEventListener("click", setGallery)

  const images = document.querySelectorAll(".galleryImages")
  images.forEach((item) => {
    item.addEventListener("click", () => setImageInfo(item.id))
  })
}

setGallery()
