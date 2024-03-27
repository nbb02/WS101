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
    },
    {
      title: "Guernica",
      artist: "Pablo Picasso",
      img: "./images/guernica.jpg",
      info: `Guernica, a large black-and-white oil painting executed by Spanish artist Pablo Picasso in 1937 following the German bombing of Guernica, a city in Spain’s Basque region. The complex painting received mixed reviews when it was shown in the Spanish Republic Pavilion at the world’s fair in Paris, but it became an icon as it traveled the world in ensuing years, raising controversies on its meaning and its rightful home.`,
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
      title: "Two Women in a Garden",
      artist: "Camille Pissarro",
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
      img: "./images/sunset.jpg",
    },
    {
      title: "Waterfalls 2",
      artist: "Ma'am Regina Santos",
      img: "./images/waterfalls 2.jpg",
    },
    {
      title: "Bob Ross Painting",
      artist: "Ma'am Regina Santos",
      img: "./images/bob ross painting.jpg",
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
    },
  ],
  Portraiture: [
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
      info: `The flight into Egypt is a story recounted in the Gospel of Matthew (Matthew 2:13–23) and in New Testament apocrypha. Soon after the visit by the Magi, an angel appeared to Joseph in a dream telling him to flee to Egypt with Mary and the infant Jesus since King Herod would seek the child to kill him. The episode is frequently shown in art, as the final episode of the Nativity of Jesus in art, and was a common component in cycles of the Life of the Virgin as well as the Life of Christ. Within the narrative tradition, iconic representation of the "Rest on the Flight into Egypt" developed after the 14th century.`,
      artistInfo: `Giotto di Bondone known mononymously as Giotto and Latinised as Giottus, was an Italian painter and architect from Florence during
        the Late Middle Ages. He worked during the Gothic and Proto-Renaissance period. Giotto's
        contemporary, the banker and chronicler Giovanni Villani, wrote that Giotto was "the most sovereign
        master of painting in his time, who drew all his figures and their postures according to nature" and of
        his publicly recognized "talent and excellence".`,
      artistImg: "./images/Fresco/Giotto di Bondone..jpg",
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
