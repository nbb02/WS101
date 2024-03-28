const artistData = [
  {
    name: "Vincent Van Gogh",
    img: "./images/artist/vincent.jpg",
    bg: "Post-Impressionist painter known for his swirling brushstrokes and vibrant colors",
    info: "Van Gogh is a revered artist known for his expressive use of color and brushwork. Though not commercially successful during his lifetime, his emotional and symbolic paintings like 'Starry Night' and 'Sunflowers' have gained widespread recognition.",
    story:
      "Van Gogh's artistic journey is a testament to perseverance and the power of self-expression. Despite facing mental health challenges, he poured his emotions into his art, leaving behind a legacy of profound beauty and enduring influence.",
    arts: [
      {
        img: "./images/starry.jpg",
        title: "The Starry Night",
        info: `Vincent van Gogh (June, 1889) (Dutch, Zundert 1853-1890 Auvers-sur-Oise)
        oil on canvas, 29 x 36 1/4 in. (73.7 x 92.1 cm)
        Credits: The Museum of Modern Art, New York. Acquired through the Lillie P. Bliss Bequest (by
        exchange), 1941
        In 1889, while staying at the Saint-Paul-de-Mausole institution near Saint-Rémy-de-Provence,
        Vincent van Gogh created Starry Night. Van Gogh lived comfortably in the hospital, with
        greater liberties than any other patient. If he attended, he was free to depart the medical
        facility grounds and paint, read, or withdraw into his own room. He was even assigned a
        studio. While he experienced the occasional relapse into paranoia and fits (he were officially
        diagnosed with epileptic fits), it appeared that his mental health was improving.
        Unfortunately, he relapsed. When the sadness worsened, he began to have hallucinations and
        suicidal thoughts. As a result, his art took on a different tone.`,
      },
      {
        img: "./images/wheatfield.jpg",
        title: "Wheatfield with Crows",
        info: `Vincent van Gogh (1853 - 1890), Auvers-sur-Oise, July 1890
        oil on canvas, 50.5 cm x 103 cm
        Credits: Van Gogh Museum, Amsterdam
        This painting was one of his famous artworks. Many people say that this was his final piece of
        work. It is believed that the ominous sky, the crows, and the dead-end path all symbolize the
        impending end of his life. However, that is simply a long-standing misconception. Indeed, he
        created multiple other pieces following this one.
        Van Gogh aimed to convey both 'sadness, extreme loneliness' and the 'healthy and fortifying'
        aspects of the countryside in his wheatfields under stormy skies.`,
      },
      {
        img: "./images/cafe.jpg",
        title: "Café Terrace at Night",
        info: `Vincent van Gogh (September 1888 - September 16, 1888) (Arles)
        oil on canvas, 81 cm x 65 cm
        Credits: Kröller-Müller Museum, Netherlands
        This vibrant outdoor scene is a picturesque portrayal, capturing the perspective of a relaxed
        observer who appreciates the beauty of their surroundings without moral contemplation. It
        evokes the sentiment expressed by Van Gogh when he wrote about the night being more
        vividly alive and richly colored than the day. The colors are abundant, and the viewer's gaze
        meanders along the interlocking and irregular shapes of adjacent areas, resembling a jigsaw
        puzzle. Distinguishing between a single prominent object and the background is challenging,
        as both distant and nearby elements are equally defined. The yellow hues of the café
        contrast with the distant blue-black of the street and the violet-blue of the foreground door.
        Interestingly, the composition unifies with a paradoxical juxtaposition: the awning's closest
        corner, with its strongest contrast, touches the distant blue sky. Lines converging into depth,
        such as the lintel of the door, align strictly parallel to other lines, like the slope of the yellow
        awning and the roof of the building above, which lie in perpendicular planes. In this
        composition, the upward dimension holds as much importance and expressiveness as the
        sense of depth, contributing to an overall sense of unengaged observation and exploration.`,
      },
      {
        img: "./images/self.jpg",
        title: "Self-Portrait or Portrait of Theo van Gogh",
        info: `Vincent van Gogh (1853 - 1890), Paris, Summer 1887
        oil on cardboard, 19.0 cm x 14.1 cm
        Credits: Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)
        
        A painting by Vincent van Gogh, which was long assumed to be a self-portrait, has been
        shown by experts to be his brother. It is supposed to be the only one of its kind and is on
        exhibit at the Van Gogh Museum in Amsterdam. "People often find it funny that there were no
        portraits of Theo because they were so close," museum spokesperson Linda Snoek said. The
        1887 painting is said to be. Learn more about Theo. produced during the couple's Parisian
        cohabitation. The discovery was made by chief researcher Louis van Tilborgh of the museum,
        who compared it to another self-portrait by the artist. "These are two small, detailed
        portraits that, when you you see them, you think they belong together," van Tilborgh said.
        Despite their physical resemblance, he saw that Vincent and his brother had different facial
        traits, such as different ears and beard colors. ..In order to resemble pictures of himself from
        the time, where he had wider ears, Theo also shaved his cheeks. Later on, someone painted
        the famous image of Vincent, which shows him shortly after he amputated one of his ears.
        Although it has been conserved, the picture is on display at the Netherlands Museum as a
        part of an exhibition featuring recently discovered artwork by the painter from Antwerp and
        Paris between 1885 and 1888.`,
      },
      {
        img: "./images/selfhat.jpg",
        title: "Self-Portrait with Grey Felt Hat",
        info: `Vincent van Gogh (1853 - 1890), Paris, September-October 1887
        oil on cotton, 44.5 cm x 37.2 cm
        Credits: Van Gogh Museum, Amsterdam (Vincent van Gogh Foundation)
        
        The painting was completed by Van Gogh around the winter season of 1887 - 1888, after
        spending over two years in Paris. The work shows that he researched pointillist technique and
        utilized it in a unique way. The short finish lines were positioned by him in various directions.
        They create a sort of halo around his head shape. One of Van Gogh's greatest color
        experiments in Paris is also depicted in the painting. Using broad brushstrokes, he blended
        blue and orange for the backdrop and red and green for the eyes and beard. The hues go well
        together. The purple lines are now blue due to the fading of the red pigment, which lessens
        the contrast with the yellow.`,
      },
      {
        img: "./images/sunflower.jpg",
        title: "Sunflower",
        info: `Vincent van Gogh (1853 - 1890), Arles, January 1889
        oil on canvas, 95 cm x 73 cm
        Credits: Van Gogh Museum, Amsterdam
        Van Gogh's Sunflower paintings are among his greatest-known works. at 1888 and 1889, he
        finished his work at Arles, southern France. Vincent created five big paintings featuring
        sunflowers in a vase, using only three different shades of yellow, and no other colors were
        used. By doing this, he showed that it was achievable to produce a picture with multiple
        shades of one color, while maintaining its effectiveness.
        Van Gogh considered the sunflower paintings to be important because they conveyed a
        feeling of 'gratitude', he stated. He placed the initial pair in the living space of his
        acquaintance, the artist Paul Gauguin, who stayed with him temporarily at the Yellow House.
        Gauguin was struck by the sunflowers, which he believed were unmistakably Vincent's. During
        his friend's visit, Van Gogh painted a new version which Gauguin later requested as a gift, but
        Vincent was hesitant to give it to him. He later created two unbound copies, with one of them
        currently housed in the Van Gogh Museum.`,
      },
      {
        title: "Starry Night over the Rhone",
        img: "./images/VincentVanGogh/over.jpg",
        info: `Vincent van Gogh (September, 1888) (Arles)
        oil on canvas, 72.5 cm x 92 cm (28.5 in x 36.2 in)
        Credits: housed in the Musée d'Orsay in Paris, France.
        Vincent van Gogh's masterpiece "Starry Night over the Rhone" represents a majestic
        portrayal of the night sky, with swirling stars reflected in the sparkling Rhone River. His
        brilliant colors and vigorous strokes capture the mesmerizing beauty of both the celestial and
        terrestrial realms, transporting viewers into a state of awe and introspection.`,
      },
      {
        title: "The Night Café",
        img: "./images/VincentVanGogh/night.jpg",
        info: `Vincent van Gogh (September 5 - September 8, 1888) (Arles)
        oil on canvas, 72.4 cm x 92.1 cm (28.5 in x 36.3 in)
        Credits: Yale University Art Gallery
        The artwork was created on a canvas primed for industrial use, measuring 30 (French
        standard). It portrays the interior of a café, featuring a partly obscured doorway at the center
        background, suggesting a passage to more secluded areas. Positioned along the left and right
        walls, five patrons occupy tables, while a waiter stands near a billiard table in the center,
        facing the observer.
        The individuals depicted are characterized as "three drunks and derelicts in a large public
        room [...], huddled down in sleep or stupor." One expert noted that the café was a nocturnal
        gathering spot for local destitute individuals and prostitutes, portrayed lounging at tables
        and socializing at the far end of the establishment.
        Rendered in strikingly contrasting and vibrant hues, the ceiling is green, the upper walls are
        red, and the gas ceiling lamps and floor are predominantly yellow. The application of paint is
        thick, with numerous lines converging towards the rear doorway. The perspective appears
        somewhat downward, directing attention towards the floor.`,
      },
      {
        title: "Self Portrait with Bandaged Ear",
        img: "./images/VincentVanGogh/bandage.jpg",
        info: `Vincent van Gogh (1889)
        oil on canvas, 60 cm x 49 cm (24 in x 19 in)
        Credits: Courtauld Gallery, London
        
        Van Gogh depicts himself wearing a blue cap with black fur and a green overcoat in this self-
        portrait, with a bandage on his ear that stretches under his chin. There is an open window
        
        behind him, along with a canvas on an easel containing some vague marks, and a Japanese
        woodblock print titled Geishas in a Landscape by Satō Torakiyo from the 1870s.`,
      },
    ],
  },
  {
    name: "Pablo Picasso",
    img: "./images/artist/pablo.jpg",
    bg: "Pioneering artist who co-founded Cubism and experimented with diverse styles",
    info: "Picasso is a towering figure in modern art, famous for co-founding Cubism and constantly evolving his artistic style. From his Blue Period to his abstract works, he challenged artistic conventions and left an indelible mark on the art world.",
    story:
      "Picasso's relentless exploration and innovation continue to inspire artists to push boundaries. His vast and diverse body of work reflects the artistic movements of his time and his own boundless creativity.",
    arts: [
      {
        title: "The Old Guitarist",
        img: "./images/PabloPicasso/old.jpg",
        info: `Pablo Picasso (1903-04) (Paris, France)
oil on panel, 122.9 cm x 82.6 cm (48.4 in x 32.5 in)
Credits: Art Institute of Chicago
This Pablo Picasso painting effectively conveys sadness and hopelessness. In this brilliant
piece of art, a musician who is bent over and blind is clutching a guitar tightly to his body,
depicted in shades of blue that are dark and solemn. Although the composition is simple, the
figure's stretched out limbs and skeletal appearance express a deep feeling of loneliness and
difficulty. The musician's shut eyes and lowered head indicate deep thought and acceptance
of his situation, with the guitar providing comfort and representing his artistic persona.
In "The Old Guitarist," Picasso explore the massive themes of destitution, solitude, and the
transformative influence of art. The monochromatic colors and emotional brushstrokes in the
painting create a feeling of sadness, encouraging viewers to connect with the hardships of
the less fortunate. Although the topic is grim, the painting radiates a calm grace and strength,
portraying the enduring human struggle to find comfort and significance in the face of
challenges.`,
      },
      {
        title: `Les Demoiselles d'Avignon (The Young Ladies of Avignon)`,
        img: "./images/PabloPicasso/demoiselles.jpg",
        info: `Pablo Picasso (1907) (Paris, France)
        oil on canvas, 243.9 cm x 233.7 cm (96 in x 92 in)
        Credits: Museum of Modern Art. Acquired through the Lillie P. Bliss Bequest, New York City
        On this famous artwork of Pablo Picasso he created during 1907 known as 'Les Demoiselles
        d'Avignon'. He challenged traditional artistic conventions in this piece by employing dramatic
        distortions of the female body and incorporating geometric shapes in a unique manner. This
        deviation from conventional portrayal disrupted the usual anticipation of ideal feminine
        beauty in artwork. Moreover, Picasso's groundbreaking technique clearly shows the impact of
        African art. It took nine months to finish this extensive painting, showcasing Picasso's
        unmatched imagination and resourcefulness.`,
      },
      {
        title: "Ma Jolie (Woman with a Zither or Guitar)",
        img: "./images/PabloPicasso/jolie.jpg",
        info: `Pablo Picasso (1912) (Paris, France)
        oil on canvas, 39 3/8 x 25 3/4 in. (100 x 65.4 cm.)
        Credits: The Museum of Modern Art, New York
        "Ma Jolie," is a significant piece that showcases the Pablo Picasso's own version of studying
        intricate shapes of Cubism. The name, meaning "My Lovely Daughter" in English, implies a
        personal attachment to the topic. Nevertheless, the painting rejects conventional
        representation techniques and instead opts for a fragmented and abstract portrayal of the
        figure. Picasso uses geometric shapes, layers that overlap, and various viewpoints to break
        down the structure of his subject, resulting in a dynamic and multi-dimensional arrangement.
        In spite of the disorder, there is still an overall feeling of unity and equilibrium in the
        organization of shapes, showcasing Picasso's expertise in Cubist concepts.
        "Ma Jolie" stands out because of its vibrant color choices and dynamic brushstrokes,
        resulting a sense of liveliness and motion within the artwork. The bold colors he chose and
        energetic strokes give the painting a feeling of happiness and festivity, portraying the
        subject's beauty and charm. With his creative use of form and color, Picasso goes beyond
        conventional ideas of representation, encouraging audiences to connect with the painting on
        a more profound, abstract level. "Ma Jolie" serves as evidence of Picasso's innovative
        perspective and long-lasting impact on the development of contemporary art.`,
      },
      {
        title: "Guernica",
        img: "./images/PabloPicasso/guernica.jpg",
        info: `Pablo Picasso (1937) (Paris, France)
        oil on canvas, 3.49 m x 7.77 m
        Credits: Museo Nacional Centro de Arte Reina Sofía Madrid, Spain
        "Pablo Picasso's 'Guernica', stands as a magnificent portrayal of the miseries of war. This
        substantial artwork portrays the devastation resulting from the Spanish Civil War that took
        place in the town of Guernica." Picasso portrays the turmoil and suffering of the scene with
        bold colors of gray, black, and white: a wounded horse at the center, contorted figures in pain,
        and buildings consumed by fire. Picasso uses broken shapes and emotive brushstrokes to
        communicate the chaos and harshness of war, presenting a scathing criticism of aggression
        and a lasting call for harmony.
        Even with its disturbing visuals, "Guernica" is still seen as a representation of defiance and
        strength, respected as a major piece of art from the 20th century. Displayed at the Museo
        Reina Sofia in Madrid, this exceptional piece still enchants viewers globally, acting as a strong
        symbol of the consequences of war on humanity and the lasting significance of kindness and
        understanding.`,
      },
      {
        title: "Weeping Woman",
        img: "./images/PabloPicasso/weeping.jpg",
        info: `Pablo Picasso (1937) (Paris, France)
        oil on canvas, 61 cm x 50 cm (23 15/60 in x 19 11/16 in)
        Credits: Tate Modern, London
        This artwork effectively portrays the intense emotion of deep distress felt by the person in it.
        With a contorted face and tears flowing, the woman in the painting represents profound
        sadness. Picasso uses a bright range of colors and energetic brushstrokes to express the
        depth of her feelings, contrasting lively tones with dark shadows. Picasso highlights the
        universality of the woman's pain by focusing on her twisted facial expressions, showing a
        common human experience of suffering that goes beyond personal situations.
        In this impactful representation, Picasso encourages spectators to relate to the deep sorrow
        and distress shown in the artwork. The painting's powerful depiction of human suffering
        serves as a moving testament to the shared experience of pain and the ability to empathize.
        "The Weeping Woman" prompts viewers to reflect on the profoundness of human emotions
        and the significance of showing compassion during difficult times through its emotional
        portrayal.`,
      },
      {
        title: "Le Petit Picador Jaune",
        img: "./images/PabloPicasso/petit.png",
        info: `Pablo Picasso (1889) (Mougins, France)
        oil on wood, 24 x 19 cm
        Credits: Paris, Collection Claude Picasso
        "Le Petit Picador Jaune" ("The Little Yellow Picador") is a mesmerizing piece created by Pablo
        Picasso. In this painting from his later years, Picasso demonstrates his ongoing exploration of
        color, form, and composition. The artwork showcases a pint-sized picador, a horseback
        bullfighter, depicted in bright yellow against a colorful backdrop. Picasso's unique artistic
        approach is visible in the simplified and abstract shapes of the figures, along with the
        dynamic lines that suggest movement and liveliness.
        Even though the picador is small, there is a strong aura of presence and power coming from
        them. The vibrant yellow color creates a strong contrast with the backdrop, highlighting the
        main focus and giving the painting a feeling of liveliness. Picasso's unique way of portraying
        the bullfight confronts established ideas about bravery and manliness, prompting spectators
        to rethink the cultural importance of this famous Spanish custom. In "Le Petit Picador Jaune,"
        Picasso showcases his timeless talent for reimagining and giving fresh perspective to
        traditional themes, revitalizing the ancient practice of bullfighting.`,
      },
      {
        title: "Portrait of Dora Maar",
        img: "./images/PabloPicasso/dora.jpg",
        info: `Pablo Picasso (1937) (Paris, France)
        oil on canvas, 92 cm x 65 cm (36 in x 26 in)
        Credits: Musée Picasso, Paris
        This painting of Pablo Picasso shows romantic partner and source of inspiration, Dora Maar,
        using strong lines and vivid colors. Despite the abstract nature of her work, Maar's powerful
        stare still manages to convey her strength and intelligence. The painting portrays the
        emotional intricacy of their bond, showcasing subtle signs of both unease and liveliness.
        Picasso's art prompts viewers to contemplate love, desire, and the profoundness of human
        relationships by depicting his captivating muse.`,
      },
      {
        title: "Figure At The Seaside",
        img: "./images/PabloPicasso/seaside.jpg",
        info: `Pablo Picasso (1931) (Paris, France)
        oil on canvas, 65 x 80 centimeters (25.6 x 31.5 inches)
        Credits: Musée Picasso, Paris
        In the summer of 1931, Picasso traveled to the French Riviera Resort where he created a
        collection of beach scenes, including the one depicted here. The painting is believed to be
        influenced by the artist's affair with a 19-year old model and his worsening relationship with
        his wife, Olga.
        This famous painting by Picasso accurately reflects Pablo Picasso's unique painting style and
        
        his incorporation of intricate details that are easily visible. This painting shows two mantis-
        headed creatures sitting side by side.
        
        The surrealists found this painting to be very popular due to the animal's tendency to
        consume the male partner after mating, creating another powerful visual symbol.`,
      },
      {
        title: "Woman in a Red Armchair",
        img: "./images/PabloPicasso/armchair.jpg",
        info: `Pablo Picasso (1932) (Paris, France)
        oil on canvas, 144 x 112 cm
        Credits: Metropolitan Museum of Art in New York City, United States.
        In the mid-1920s, Picasso's depictions of the female figure started to show a more
        aggressively twisted and exaggerated form. This could be partially justified by a shift in the
        artist's personal situation. Without a doubt, the initial indicators of strain in Picasso's
        relationship with Olga Khokhlova started to appear during this period. Also, one should take
        into account other factors, including Picasso's understanding of the burgeoning Surrealist
        movement, which focuses on metamorphosis. Even though the Surrealists welcomed him,
        Picasso mostly stayed on the outskirts of the movement, participating in their exhibitions
        only sometimes and keeping a separate identity from the core group. Nevertheless, the
        influence of Surrealism on his art is very apparent.`,
      },
    ],
  },
  {
    name: "Michelangelo",
    img: "./images/artist/michaelangelo.jpg",
    bg: "Renaissance polymath: sculptor, painter, architect, and poet",
    info: "Michelangelo was a true Renaissance man, excelling in sculpture, painting, architecture, and poetry. His iconic works, like the Sistine Chapel ceiling and the David sculpture, showcase his mastery of anatomy and ability to imbue figures with life and emotion.",
    story:
      "Michelangelo's artistic achievements continue to inspire awe centuries later. He is a symbol of artistic genius and the boundless potential of human creativity during the Renaissance era.",
    arts: [
      {
        title: "The Torment of Saint Anthony",
        img: "/images/MichaelAngelo/The Torment of Saint Anthony.PNG",
        info: `Michael Angelo (1888) (Rome, Italy)
      Medium: tempera on panel painting
      Dimension: 47 cm x 35 cm
      Credits: Kimbell Art Museum
      While it may not be one of his most famous works, The Torment of Saint Anthony is essential
      for the advancement of the talented artist's career. It is the earliest painting he created,
      completed around 1487 when he was around 12 or 13 years old. During that period, the
      youthful Michelangelo was gaining experience in the workshop of Domenico Ghirlandaio, a
      renowned artist from the Florentine school. It is said that Michelangelo planned to study the
      fish vendors at the market to accurately depict their colorful scales on the demonic
      creatures. The piece, a copy of a print by German artist Martin Schongauer, brought him
      significant recognition as it became the initial artwork to be acquired by an American
      collection.`,
      },
      {
        title: "The Rape of Ganymede",
        img: "/images/MichaelAngelo/The Rape of Ganymede.jpg",
        info: `Michael Angelo (1570 - 1630) (Rome, Italy)
      Type: oil on paper
      Dimension: 91.2 x 116.7 cm
      Credits: Fogg Museum (Harvard Art Museums), Cambridge, MA, US
      Michelangelo made several meticulously detailed mythological drawings for the young
      nobleman Tommaso de' Cavalieri as signs of their friendship. On this painting, the stories of
      Greek mythology, Zeus, disguised as an eagle, kidnapped Ganymede, a handsome shepherd
      boy, and took him to Olympus to be the one who poured drinks for the gods. Ganymede, clad
      only in a flowing robe, is carried upward by a big black eagle gripping his ankles as he grasps
      the top of its wings. A small white and brown dog is barking at the flying group while a
      landscape of ruins can be seen in the distance.`,
      },
      {
        title: "The Punishment of Tityus",
        img: "/images/MichaelAngelo/The Punishment  of Tityus.jpg",
        info: `Michael Angelo (1532) (Rome, Italy)
      Type: Black chalk; charcoal on the verso
      Dimension: 19 cm x 33.0 cm
      Credits: Royal Collection
      
      The illustration depicts the legendary character Tityus restrained on a massive boulder; at
      the summit of the boulder appears to be a type of vegetation or tree stem with roots. The
      trunk seems to show a human face in profile with its mouth wide open, appearing to be
      screaming. The only thing marking the location is the rock as everything else is empty except
      for a horizon line. Tityus's body is contorted with his head turned backwards, one arm raised
      above his head, and the other arm presumably tied near his hip as the hand is not visible; one
      leg lies flat while the other is at a ninety-degree angle. A vulture, approximately the size of a
      human, hovers over Tityus. The vulture is hunched over the contorted form of Tityus, its
      wings outstretched and its head moving towards Tityus' midsection.`,
      },
      {
        title: "The Last Judgement",
        img: "/images/MichaelAngelo/The Last Judgement.jpg",
        info: `Michael Angelo (1536 - 1541) (Rome, Italy)
      Type: fresco painting, painted on the altar wall of Sistine Chapel
      Dimension: 13.7 m x 12 m
      Credits: Sistine Chapel Vatican City, Rome, Italy.
      His artwork was one of the most enormous painting that people can found on the wall behind
      the altar in the Sistine Chapel in Vatican City. This artwork, is created between 1536 and 1541,
      it portrays about the return of Christ and the ultimate judgment of souls. On his artwork,
      Christ is shown at the center, circled by angels, saints, and the resurrected souls.
      Michelangelo captivates viewers with his intense and emotional scene through his skilled use
      of color, composition, and anatomy. Michelangelo's grand creation encourages reflection on
      timeless topics such as redemption, salvation, and divine justice.`,
      },
      {
        title: " The Crucifixion of St. Peter",
        img: "/images/MichaelAngelo/The Crucifixion of Peter.jpg",
        info: `Michael Angelo (1546 - 1550) (Rome, Italy)
      Type: fresco painting, painted on the two main wall of Capella Paolina, Vatican Palace
      Dimension: 13.7 m x 12 m
      Credits: Cappella Paolina, Vatican Palace, Vatican City
      Michelangelo was commissioned by Pope Paul III in 1541 to paint his final fresco during his
      lifetime, The Crucifixion of St. Peter. Situated in the Pauline Chapel of the Vatican Palace, the
      painting shows a sorrowful event - the saint being crucified by Roman Empire soldiers. During
      that period, the scandal was caused by the excessive size of this painting. Nevertheless, these
      atypical proportions were intentional in order for the images to appear in the correct
      
      dimensions when viewed from below by an observer. Michelangelo was famous for his self-
      confidence. Allegedly, he is depicted with a blue turban in the top left corner of the painting.`,
      },
      {
        title: "The Creation of Adam",
        img: "/images/MichaelAngelo/The Creation of Adam.jpg",
        info: `Michael Angelo (1508 - 1512) (Rome, Italy)
      Type: fresco painting, painted at the ceiling of Sistine Chapel
      Dimension: 280 cm x 570 cm
      Credits: Sistine Chapel Vatican City, Rome, Italy.
      Michelangelo's famous masterpiece, embellishes the ceiling of the Sistine Chapel in Vatican
      City, Rome. Created from 1508 to 1512, this grand fresco shows the biblical moment from the
      Book of Genesis when God gives life to Adam, the initial man. The art piece depicts the
      powerful instant of divine formation, showing God extending his arm towards Adam as he lies
      in a state of expectation. The artwork is highly praised for its lively arrangement, emotive
      characters, and profound symbolism, encapsulating the core of mankind's spiritual and
      existential quest. With his skilled artistry and deep understanding, Michelangelo prompts
      viewers to ponder the enduring concepts of creation, divinity, and the connection between
      God and humanity.`,
      },
      {
        title: " Dono Tondi",
        img: "/images/MichaelAngelo/Doni Tondi.png",
        info: `Michael Angelo (1506 - 1507) (Florence, Italy)
      Medium: tempera, oil painting
      Dimension: 120 cm
      Credits: National Gallery of London Uffizi, Florence
      Michelangelo completed Dono Tondi (or Doni Madonna) shortly after finishing his well-known
      works Pietà and David. The round artwork was created with a combination of oil and tempera,
      a method that was similarly employed by Sandro Botticelli for The Birth of Venus. Agnolo
      Doni, a wealthy Florentine, commissioned Dono Tondi for his marriage to Maddalena, a noble
      Tuscan woman. This 120 cm diameter painting possesses remarkable characteristics. Initially,
      its round form symbolizes the concept of flawlessness. After that, its shimmering hues. In
      conclusion, its pyramid-like structure represents the firmness of the Holy Trinity. It is
      believed that the dramatic poses of the models influenced the development of the Mannerist
      artistic style, which appeared in Italy during the 1520s. The masterpiece has been part of the
      Uffizi Gallery's collection since 1635, and it is the sole artwork by the artist exhibited in
      Florence.`,
      },
    ],
  },
  {
    name: "Leonardo da Vinci",
    img: "./images/artist/leonarado.jpg",
    bg: "Renaissance genius: painter, sculptor, inventor, and scientist",
    info: "Da Vinci, epitomizing the Renaissance ideal, was a master painter, sculptor, inventor, and scientist. His iconic paintings like the Mona Lisa and The Last Supper showcase his remarkable technical skill and ability to capture the human form and emotions.",
    story:
      "Leonardo da Vinci's insatiable curiosity and pursuit of knowledge in various fields made him a true Renaissance Man. His artistic and scientific contributions continue to influence and inspire generations.",
    arts: [
      {
        title: "The Vitruvian Man ",
        img: "/images/LeonardoDaVinci/the-vitruvian-man.jpg",
        info: `The Vitruvian Man (Italian: Le proporzioni del corpo umano secondo Vitruvio, which is translated to "The
        proportions of the human body according to Vitruvius"), or simply L'Uomo Vitruviano (Italian), is a drawing by Leonardo da Vinci around 1490. It is accompanied
        by notes based on the work of the architect Vitruvius. The drawing, which is in pen and ink on paper,
        depicts a man in two superimposed positions with his arms and legs apart and inscribed in a circle and
        square. The drawing and text are sometimes called the Canon of Proportions or, less often, Proportions
        of Man. It is kept in the Gabinetto dei disegni e stampe of the Gallerie dell'Accademia, in Venice, Italy,
        under reference 228. Like most works on paper, it is displayed to the public only occasionally, so it isn't
        part of the normal exhibition of the museum.`,
      },
      {
        title: "Lady with an Ermine",
        img: "/images/LeonardoDaVinci/Lady with an Ermine.jpg",
        info: `The portrait Lady with an ermine (1489-1490) by Leonardo Da Vinci depicts Cecilia Gallerani, the
      teenage mistress of Ludovico Sforza, the regent and later the Duke of Milan. While some scholars
      doubted this identification, ample evidence affirms Cecilia Gallerani is the subject of Lady with an
      ermine. The earliest mention of the portrait appears in a sonnet by court poet Bernardo Bellincioni, in
      which he notes that it seems as if Cecilia is listening to an unseen speaker. Further confirmation exists in
      a correspondence between Cecilia and Isabella d'Este, the marquise of Mantua. In her letter, the
      marquise asks Cecilia to send her the portrait so she can compare Leonardo's work to that of another
      master, Giovanni Bellini. Most importantly, the correspondence reveals that although Ludovico
      commissioned the painting, Cecilia owned it.`,
      },
      {
        title: "Madonna Litta",
        img: "/images/LeonardoDaVinci/Madonna Litta.jpg",
        info: `The Madonna Litta, attributed to Leonardo da Vinci or his workshop, portrays the Virgin Mary cradling the
      infant Jesus with tender grace. Mary's serene countenance exudes maternal love and divine reverence as
      she gazes down at her child, her expression suffused with a sense of timeless devotion. Jesus, depicted as
      a playful yet contemplative infant, reaches out to his mother or grasps her hand, symbolizing the intimate
      bond between mother and son. The backdrop, typically minimalistic, offers a tranquil setting that
      accentuates the central figures' significance.`,
      },
      {
        title: "The Madonna of the Carnation",
        img: "/images/LeonardoDaVinci/Madonna of the Carnation.jpg",
        info: `The Madonna of the Carnation, a.k.a. Madonna with Vase or Madonna with Child, is a Renaissance oil
      painting by Leonardo da Vinci created around 1478-1480. It is permanently displayed at the Alte
      Pinakothek gallery in Munich, Germany.
      The central and centered motif is the young Virgin Mary seated with Baby Jesus on her lap. Depicted in
      precious clothes and jewellery, with her left hand Mary holds a carnation (interpreted as a healing
      symbol). The faces are put into light while all other objects are darker, e.g. the carnation is covered by a
      shadow. The child is looking up, the mother is looking down — there is no eye contact. The setting of the
      portrait is a room with two windows on each side of the figures.`,
      },
      {
        title: "Mona Lisa",
        img: "/images/LeonardoDaVinci/Mona Lisa.jpg",
        info: `One of the most iconic and recognizable paintings in the world is the Mona Lisa (ca. 1503-1519) painted
      by Leonardo da Vinci. The unique appeal of the portrait lies in its enigmatic nature, Mona Lisa's smile
      radiates mystery, sensuality and contentment. This was achieved through sfumato, Leonardo's painting
      technique that softened the transition between colors. This depth and complexity of expression is the
      reason the Mona Lisa is regarded as the pinnacle of portraiture. The interest in the portrait was further
      amplified by its mysterious history: the identity of the sitter, who commissioned the painting, how long
      Leonardo worked on the portrait and how it entered the French royal collection are all topics of scholarly
      debate.`,
      },
      {
        title: "The Last Supper",
        img: "/images/LeonardoDaVinci/The Last Supper.jpg",
        info: `One of the most famous paintings in the world, The Last Supper by Leonardo da Vinci was painted in the
      late 15th century for the Dominican monastery Santa Maria delle Grazie in Milan. The wall painting was
      commissioned by the Duke of Milan, Ludovico Sforza, who was Leonardo's patron during his first extended
      stay in Milan.
      The composition of The Last Supper is neatly arranged - Jesus is positioned in the center of a long table
      and the Apostles are to his left and right. The room is relatively plain: dark tapestries cover the walls on
      either side, while three windows on the back wall reveal a landscape that recalls the countryside of Milan.
      Leonardo created the illusion of space by using linear perspective - a technique in which all parallel lines
      in the painting converge in a single vanishing point.`,
      },
    ],
  },
  {
    name: "Rembrandt",
    img: "./images/artist/rembrandt.webp",
    bg: "Dutch Golden Age master known for dramatic lighting and use of chiaroscuro",
    info: "Rembrandt, a leading figure of the Dutch Golden Age, is renowned for his use of light and shadow (chiaroscuro) to create dramatic effects. His portraits, including The Night Watch, capture the essence of his subjects with remarkable depth and psychological insight.",
    story:
      "Rembrandt's innovative use of light and shadow revolutionized portraiture and continues to influence artists. His ability to capture the complexities of the human experience resonates deeply with viewers across centuries.",
    arts: [
      {
        title: "Belshazzar's Feast",
        img: "./images/Rembrandt/Belshazzar_s Feast.jpg",
        info: `Rembrandt based this painting off of the story of Belshazzar as well as the writing on the wall in Book of
        Daniel in the Old Testament. Although Amsterdam was part of the Holy Roman Empire at the time, it
        also had a large Jewish population, and so this is a story of which many of Rembrant’s contemporaries
        would have been familiar. The artist's intention at the time was to create a portrait of a religious story to
        which the public, who were largely illiterate, could refer. Rembrandt produced many stories from the
        bible for the same purpose, including Return of the Prodigal Son and Christ with the Sick around Him.`,
      },
      {
        title: "The Night Watch",
        img: "./images/Rembrandt/The Night Watch.jpg",
        info: `The best known work by Rembrandt, this painting resides at the State Museum in Amsterdam, where it is
        lauded as one of the most famous paintings in the world. For much of its history, the painting was covered
        with a thick layer of varnish, giving the impression that it was a night scene, hence the name. The varnish
        was removed in 1940, revealing the bright colors of the painting. The painting has also suffered damage
        at the hand of art dealers, who in 1715 cut the painting down on three side on order to fit it between two
        columns, and vandals, who have purposely tried to ruin the painting. In 1975, an unemployed school
        teacher attacked the work, leaving a large section of zig-zags scratches. The painting was successfully
        restored, although the scratches are still somewhat visible. In 1990, the painting was attacked again, by a
        man who threw acid on the canvas. The acid was quickly neutralized, however, and the painting was
        saved.`,
      },
      {
        title: "The Prodigal Son in the Brothel",
        img: "./images/Rembrandt/The Prodigal Son in the Brothel.jpg",
        info: `The Prodigal Son in the Brothel is a painting by the Dutch master Rembrandt. It is housed in the
        Gemäldegalerie Alte Meister of Dresden, Germany. It is signed "REMBRANDT F.".
        It portrays two people who had been identified as Rembrandt himself and his wife Saskia. In the Protestant
        contemporary world, the theme of the prodigal son was a frequent subject for works of art due to its
        moral background. Rembrandt himself painted a Return of the Prodigal Son in 1669.
        The left side of the canvas was cut, perhaps by the artist himself, to remove secondary characters and
        focus the observer's attention on the main theme.
        
        The pigment analysis shows Rembrandt's choice of the usual baroque pigments such as red ochre, lead-
        tin-yellow, madder lake and smalt and also his elaborate multilayer painting technique.`,
      },
      {
        title: "Saskia van Uylenburgh as Flora",
        img: "./images/Rembrandt/Saskia van Uylenburgh as Flora.jpg",
        info: `Rembrandt painted his wife Saskia van Uylenburgh as Flora, goddess of spring and flowers, three times:
        in 1634,1635 and 1641. In this work he combined elements of pastoral and historical portraits. Created in
        the year of their marriage, this painting shows the love and admiration the artist felt for the young woman.
        The contrast between the young sitter's diffident pose and the sumptuousness of her richly embroidered
        clothes and accessories gives the image a special charm.`,
      },
      {
        title: "The Storm on the Sea of Galilee",
        img: "./images/Rembrandt/The Storm on the Sea of Galilee.jpg",
        info: `The Storm on the Sea of Galilee is the only seascape ever painted by Rembrandt. It depicts Jesus calming
        the waves of the sea, saving the lives of the fourteen men aboard the vessel. Of these fourteen men, it is
        said Rembrandt included a self portrait of himself in the boat, next to Jesus and his twelve disciples. On
        March 18, 1990, the painting was stolen by thieves disguised as police officers. They broke into the Isabella
        Stewart Gardener Museum in Boston, Massachusetts, and stole this painting, along with twelve other
        works. The paintings have never been recovered, and it is considered the biggest art theft in history. The
        empty frames of the paintings still hang in their original location, waiting to be recovered.`,
      },
    ],
  },
  {
    name: "Salvador Dalí",
    img: "./images/artist/salvador.jpg",
    bg: "Surrealist painter known for dreamlike imagery and subconscious exploration",
    info: "Dalí, a prominent figure in Surrealism, is known for his dreamlike paintings that explore the subconscious mind. His melting clocks and elongated figures, like those in The Persistence of Memory, challenge our perception of reality.",
    story:
      "Dalí's work continues to captivate viewers with its dreamlike imagery and exploration of the human psyche. He is a key figure in Surrealism, a movement that challenged artistic conventions and delved into the subconscious.",
    arts: [
      {
        title: "The Disintegration of the Persistence of Memory",
        img: "./images/SalvadorDali/The Disintegration of the Persistence of Memory.jpg",
        info: `Dali repeated his theme of the melting watches many times, most notably in the 1950's with The
        Disintegration of the Persistence of Memory. Although it measures a small 10 by 13 inches, it is full of
        allusions to the first painting, albeit with a flooded landscape, depicting the changes in the landscape from
        both above and below the water. Whereas some interpretations of the first work claim that it represents
        Einstein's theory of relativity, interpretations of this work state that it represents the newly emerging
        ideas of quantum mechanics and the coming of the digital age. Later in his career Dali also created many
        lithographs and sculptures with variants on the theme of soft watches.`,
      },
      {
        title: "Young Virgin Auto-Sodomized by Her Own Chastity",
        img: "./images/SalvadorDali/Young Virgin Auto-Sodomized by Her Own Chastity.jpg",
        info: `This painting documents Dali's interest in exaggerating the representation of the female form and the
        possibilities of an abstracted background. The main force within the painting is clearly its sexual allusion:
        the horned shapes hovering around the woman are overtly phallic, and the painting's title offers a direct
        clue about the aggressively sexual tone of the work. Dali's preoccupation with the phallus was a central
        theme throughout his career, though the degrees to which his works were representational or abstract
        differed period to period.`,
      },
      {
        title:
          "Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening",
        img: "./images/SalvadorDali/Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening.jpg",
        info: `Dream Caused by the Flight of a Bee Around a Pomegranate a Second Before Awakening (1944) is a
        surrealist painting by Salvador Dalí. A short, alternate title for the painting is Dream Caused by the Flight
        of a Bee. It was painted in 1944, while Dalí and his wife, Gala, were living in America.
        
        In this "hand-painted dream photograph", as Dalí generally called his paintings, there is a seascape of
        distant horizons and calm waters, perhaps Port Lligat, amidst which Gala is the subject of the scene. Next
        to the naked body of the sleeping woman, which levitates above a flat rock that floats above the sea, Dalí
        depicts two suspended droplets of water and a pomegranate, a Christian symbol of fertility and
        resurrection. Above the pomegranate flies a bee, an insect that traditionally symbolizes the Virgin.`,
      },
      {
        title: "The Persistence of Memory",
        img: "./images/SalvadorDali/The Persistence of Memory.jpg",
        info: `The Persistence of Memory (1931) is one of the most iconic and recognizable paintings of Surrealism.
        Frequently referenced in popular culture, the small canvas (24x33 cm) is sometimes known as “Melting
        Clocks”, “The Soft Watches” and “The Melting Watches”. The painting depicts a dreamworld in which
        common objects are deformed and displayed in a bizarre and irrational way: watches, solid and hard
        objects appear to be inexplicably limp and melting in the desolate landscape. Dalí paints his fantastical
        vision in a meticulous and realistic manner: he effortlessly integrates the real and the imaginary in order
        “to systemize confusion and thus to help discredit completely the world of reality”.`,
      },
      {
        title: "The Great Masturbator",
        img: "./images/SalvadorDali/The Great Masturbator.jpg",
        info: `The Great Masturbator (1929) is an autobiographical painting, in which the artist addresses his anxieties,
        fears, and sexual obsessions. At the center of the painting is a large amorphous form that is a distorted
        self-portrait of the artist: Dalí depicts himself with his eyes shut and a large grasshopper placed on his
        mouth. Similar versions of the self-portrait appear in Dalí's other paintings including the famous
        masterpiece The Persistence of Memory (1931). According to Dalí, he based the self-portrait on a rock
        formation in Cap de Creus, located along the shore of his homeland, Catalonia. Some scholars have also
        drawn a parallel between the self-portrait and a section of Hieronymus Bosch's The Garden of Earthly
        Delights (1510-1515) - on the right side of the left panel Bosch depicts rocks, bushes, and small animals
        that resemble the profile with the prominent nose and long eyelashes.`,
      },
    ],
  },
  {
    name: "Frida Kahlo",
    img: "./images/artist/frida.jpg",
    bg: "Surrealist self-portrait artist known for exploring themes of identity and pain",
    info: "Kahlo, a prominent Mexican artist, is known for her self-portraits that explore themes of identity, gender, and the human experience. Her vibrant style and unflinching portrayal of physical and emotional pain have resonated with audiences worldwide.",
    story:
      "Frida Kahlo's art transcends the boundaries of self-portraiture, becoming a powerful exploration of identity, pain, and the resilience of the human spirit.",
    arts: [
      {
        title: "The Two Fridas",
        img: "./images/FridaKahlo/two.jpg",
        info: `This picture was made soon after her divorce from Diego Rivera. This image depicts Frida's two
          distinct personas. The traditional Frida in Tehuana attire, with a broken heart, sits next to the
          autonomous, modern Frida. Frida wrote about this picture in her diary, claiming that it was inspired
          by a childhood acquaintance she never met. She later stated that it was an expression of her despair
          and loneliness as a result of her separation from Diego.
          In this picture, two Fridas are holding hands. Both have visible hearts, and the classic Frida's heart
          has been sliced and torn open. The surgical pincers held in the traditional Frida's lap sliced off the
          main artery that runs from the ripped heart to her right hand. Her white clothing is flowing with
          blood, and she is in danger of bleeding to death. The stormy sky with agitated clouds may represent
          Frida's inner torment. The Instituto Nacional de Bellas Artes (National Institute of Fine Arts) in
          Mexico City purchased this painting in 1947. At the time, the buying price was 4,000 Pesos (about
          $1,000), plus 36 Pesos for the frame. That was the highest price Frida had received for a painting
          during her lifetime.`,
      },
      {
        title: "Frida and Diego Rivera",
        img: "./images/FridaKahlo/frida-and-diego-rivera.jpg",
        info: `Frida's artwork of her and Diego depicts the ups and downs of their marriage. She creates Frieda
        and Diego Rivera, 1931, as a wedding portrait. This was completed after two years of married
        living. Frida used a stiff attitude in this painting, which was inspired by naive nineteenth-century
        painters like Jose Maria Estrada, whose work affected Diego Rivera as well. An instructive
        inscription on a strip in the snout of a pigeon (a device purchased by Frida and Diego from
        craftsmen such as Estrada and well-known artisans) is as simple in tone as the picture is folkloric
        in style:
        Later Frida was to remark:
        Being the wife of Diego is the most marvelous thing in the world ... I let him play matrimony with
        other women. Diego is not anybody's husband and never will be, but he is a great comrade."
        This painting, Frieda and Diego Rivera, depicts what the Riveras' marriage will eventually become.
        Rivera, as solidly planted as an oak, appears huge next to his wife. He dismisses her, shaking his
        palette and brushes; he is the wonderful maestro. Frida, whose little feet barely touch the earth,
        makes a beeline for her great partner. This painting depicts her favorite picture, the genius's adoring
        wife.
        She clutched his hand with the softest possible grasp. Frida realized that Diego belonged to
        nobody. Even while she painted this portrait, Rivera was having an affair with tennis star Helen
        Wills. He painted her naked image on the ceiling of the Luncheon Club of the Pacific Stock
        Exchange in San Francisco.`,
      },
      {
        title: "Diego and I",
        img: "./images/FridaKahlo/diego-and-i.jpg",
        info: `Diego and I depicts Frida's deep sadness over Diego Rivera. Felix nearly divorced Frida after
        having an affair with Maria. Maria Felix was a stunning cinema star who was also a close friend
        of Frida's. Frida was trying to joke about this affair, as she often did with Rivera's earlier affairs,
        but Diego and I reveal that she was deeply hurt. In this painting, she has loose hair whirling around
        her neck, indicating strangling. She had misplaced her backup mask. It is clear that the source of
        her sorrow is her husband Diego, for whom her brows serve as a platform. A third eye appears on
        her spouse's brow, alluding to Rivera's widespread mental and visual keenness. Only Frida's eyes
        meet ours in the pyramid of five eyeballs that this artwork depicts. Diego, whose artistic venue
        was encircling and enormous, looks out above visitors' heads into the past.
        Frida's diary reveals that Rivera was always on her mind, with most of it being a love sonnet to
        him: "DIEGO. I am alone." Then a few pages later: "My Diego. I am no longer alone. You
        accompany me. You put me to sleep and you revive me." She also sketched two faces that resemble
        vases. "Don't cry at me," one of them warns. In a more romantic moment, she wrote, "Diego,
        nothing is comparable to your hands and nothing is equal to the gold-green of your eyes. My body
        fills itself with you for days and days. You are the mirror of the night."
        The intense light of lightning. The moisture of the ground. Your armpit is my haven. My fingertips
        make contact with your blood. All my joy is to feel your life spring forth from your fountain-
        flower, which I keep, to fill all the courses of my nerves that belong to you."`,
      },
      {
        title: "The Broken Column",
        img: "./images/FridaKahlo/the-broken-column.jpg",
        info: `Pain and anguish are a recurring theme in Frida's paintings. Frida showed her grief and suffering
        in the most direct and horrible way in her painting The Broken Column. The nails are embedded
        in her face and entire body. A split in her torso resembles an earthquake fault. The earth with its
        black ravines may be seen in the background. She paints herself naked at first, but then covers
        her lower half with what appears to be a hospital bed sheet.
        A fractured column is used in place of her spine. The column appears to be about to collapse into
        rubble. The column, which penetrates from the loins to the chin, has a phallic appearance, and
        the sexual connotation is amplified by Frida's beautiful breasts and body.
        Frida's painting appears to be both beautiful and forceful. Despite having her entire body
        supported by the corset, she conveys a message of spiritual success. She has tears on her face,
        but she looks straight ahead, urging both herself and her audience to confront her dilemma.`,
      },
      {
        title: "Henry Ford Hospital",
        img: "./images/FridaKahlo/henry-ford-hospital.jpg",
        info: `Frida represents herself in Henry Ford Hospital, lying naked on the bed, bleeding profusely. This
        picture, like Four Inhabitants of Mexico, depicts a very intimate space. The body is twisted, and
        the bed is tipped up, which adds to the sense of helplessness and detachment. The discomfort
        was evident in the way she painted her body: from the waist up, she turns toward the observer;
        from the waist down, she faces away.
        This picture reflects Frida's feelings while she was experiencing a miscarriage at Henry Ford
        Hospital. Six items fly around her. A boy fetus, her and Diego's long-awaited son. The fetus is
        modeled by a medical drawing. An orchid resembles a uterus. The tummy she clutches against
        the crimson ribbons, which resemble umbilical cords. The snail represents the slowness of the
        operation.
        This is also the first painting in which Frida employed sheet metal as a support. Diego Rivera
        wanted Frida to feel better after her miscarriage, so he encouraged her to attempt painting on tin
        panels. He suggested she paint the years of her life if she couldn't find anything else to paint.
        This picture combines truth and fantasy and is depicted in a direct, primitivistic style.`,
      },
      {
        title: "Self-Portrait with Necklace of Thorns",
        img: "./images/FridaKahlo/self-portrait-with-necklace-of-thorns.jpg",
        info: `Frida Kahlo painted Self-Portrait with Thorn Necklace and Hummingbird in 1940. Despite its
        small size (approximately 16x24), this artwork piques people's interest because it contains many
        features that are indicative of Frida Kahlo. Frida Kahlo confronts the viewer in this photograph,
        which is set against a background of enormous green leaves and a yellow leaf directly behind her.
        The thorns wrap around her neck like a necklace, which is clutched by a black monkey. Her neck
        is wounded from the piercing thorns. A black cat is on the right side, behind her shoulder. A
        hummingbird is perched on the thorn that wraps around her throat. Her expression is composed
        and somber. It also appears that she is patiently tolerating the agony.
        Frida Kahlo included so many metaphorical creatures in this artwork. She wasn't painting a
        realistic image, but rather employing symbolic components to describe her emotions. A bird
        frequently represents freedom and life. Especially a beautiful hummingbird that is constantly
        hovering above flowers. However, in this artwork, the hummingbird appears black and dead. This
        could be a symbol of Frida herself. Frida suffered from bodily agony for the majority of her life following the bus accident when she was eighteen years old. After that, she suffered roughly thirty-
        five surgery to correct her body. She has spent several years incapacitated and is unable to bear children. This is a painting depicting her sorrow.`,
      },
      {
        title: "Self-Portrait with Cropped Hair",
        img: "./images/FridaKahlo/self-portrait.JPG",
        info: `Frida Kahlo made the artwork "Self-Portrait with Cropped Hair" in 1940. Kahlo's self-portrait
        depicts her with short hair, wearing a man's suit and tie, and carrying a pair of scissors. The work
        is a powerful depiction of Kahlo's resistance and independence, as well as her investigation of
        gender identity and societal expectations.
        The choice to depict oneself with cropped hair was significant since it represented Kahlo's
        rejection of traditional gender standards and her assertion of personal freedom. The suit and tie
        further question traditional notions of femininity and masculinity, blurring the lines between the
        two. The picture is frequently regarded as a commentary about Kahlo's courage and resilience in
        the face of adversity, as well as her unwillingness to adhere to societal standards. It is still one of
        Kahlo's most recognizable and acclaimed paintings, exhibiting her ability to combine personal
        experience with artistic expression.`,
      },
      {
        title: "The Wounded Deer",
        img: "./images/FridaKahlo/the-wounded-deer.jpg",
        info: `Frida utilized a young deer with her head in this painting, and she was severely shot by arrows.
        The background is a forest with dead trees and broken branches, evoking a sense of terror and
        desperation. The stormy, lightning-lit sky is far away, providing some hope, but the darling will
        never be able to get there.
        In 1946, Frida Kahlo had a spine procedure in New York. She hoped that this surgery would
        relieve her acute back pain, but it failed. This picture reflected her displeasure about the
        operation. After returning to Mexico, she had both physical agony and emotional sadness. In this
        picture, she portrayed herself as a young stag, her head topped with antlers. This young stag has
        been pierced by arrows and is bleeding. The artist inscribed "Carma" in the lower-left corner,
        which signifies "destiny" or "fate". Frida, like in her other self-portraits, conveyed her anguish at
        being unable to change her own fate in this work.
        Frida painted this portrait with her pet deer, "Granizo" as the model. She had many pets that she
        used as surrogate children, and deer were her favorite. This picture has been interpreted in
        various ways by people. Some say she was frustrated by the botched surgery. Others claimed it
        depicted her inability to control her own destiny. Some individuals suggested it had sexual
        overtones and mentioned her troubles in various relationships.`,
      },
      {
        title: "Without Hope",
        img: "./images/FridaKahlo/without-hope.jpg",
        info: `This painting was created in 1945, when Frida Kahlo was obliged to eat according to her doctor's
        prescription. In the back of this painting, Frida Kahlo wrote the following explanation:
        
        “I have no hope...Everything moves in rhythm with what is in the belly. "
        Frida Kahlo was suffering from a lack of appetite as a result of her multiple surgeries and illnesses.
        She got extremely skinny and emaciated. Her doctor, Dr. Eloesser, advised her to stay in bed and
        eat puréed meals every two hours to gain weight.
        Frida Kahlo was suffering from a lack of appetite as a result of her multiple surgeries and illnesses.
        She got extremely skinny and emaciated. Her doctor, Dr. Eloesser, advised her to stay in bed and
        eat puréed meals every two hours to gain weight.
        Frida Kahlo's painting reflects her experience with the "forced feeding" diet. The horrible cuisine
        with animals and skulls was held by the wooden structure that formerly kept her painting canvases.
        Her arms appear to be pinned underneath, rendering her unable to assist with the issue. The
        background is a barren Mexican landscape with both the sun and the moon visible. The situation
        appears to be without hope.`,
      },
    ],
  },
  {
    name: "Henri Matisse",
    img: "./images/artist/henri.jpg",
    bg: "Pioneering Fauvist painter known for vibrant colors and expressive forms",
    info: "Matisse, initially a lawyer, discovered his passion for art after an illness. He revolutionized modern art with his bold colors and use of form to evoke emotions. Paintings like 'Dance' and 'The Red Room' solidified his place as a giant of modern art.",
    story:
      "Matisse's journey from lawyer to artistic icon is a testament to the power of following one's passion. Despite facing challenges, he persevered and created a legacy of joy and color through his art.",
  },
  {
    name: "Claude Monet",
    img: "./images/artist/claude.jpg",
    bg: "Impressionist master who captured fleeting moments of light and atmosphere",
    info: "Monet, a leading figure in Impressionism, used light and brushstrokes to capture the essence of a scene rather than realistic details. His iconic 'Water Lilies' series exemplifies his focus on light and atmosphere.",
    story:
      "Monet's innovative techniques and emphasis on capturing a moment in time significantly influenced the course of modern art, inspiring generations of artists to come.",
    arts: [
      {
        title: "Impression, Sunrise",
        img: "./images/ClaudeMonet/Monet_-_Impression,_Sunrise.jpg",
        info: `Impression, Sunrise. This famous painting, Impression, Sunrise, was created from a scene in the port of Le Havre.
        Monet depicts a mist, which provides a hazy background to the piece set in the French harbor. The
        orange and yellow hues contrast brilliantly with the dark vessels, where little, if any detail is
        immediately visible to the audience. It is a striking and candid work that shows the smaller boats
        in the foreground almost being propelled along by the movement of the water. This has, once
        again, been achieved by separate brushstrokes that also show various colors "sparkling" on the sea.
        From the 15th April to 15th May 1874 Monet exhibited his work together with Camille Pissarro,
        Alfred Sisley, Edouard Manet, Paul Cezanne, Edgar Degas, and some other thirty artists. They
        organized their exhibition on their own as they were usually rejected at the Paris Salon. Most
        visitors were disgusted and even outraged over such a graffiti. Monet's Impression, Sunrise
        enjoyed the most attention and some visitors even claimed that they were absolutely unable to
        recognize what was shown at all.`,
      },
      {
        title: "Woman with a Parasol",
        img: "./images/ClaudeMonet/woman-with-a-parasol.jpg",
        info: `Monet stopped painting figures after the 1860s to concentrate on landscapes, Put he returned to
        the earlier subject in the 1880s. There are many reasons cited for this decision which seem to center
        around Monet wishing to use a model to pose for a beach scene with nude bathers. It is reported
        that Alice was less than thrilled with the idea. As a result, Monet still pursued his desire to paint
        figures, but chose instead to concentrate on clothed members of his large extended family.
        Woman with a Parasol was painted outdoors, probably in a single session of several hours'
        duration. The artist intended the work to convey the feeling of a casual family outing rather than a
        formal portrait, and used pose and placement to suggest that his wife and son interrupted their
        stroll while he captured their likenesses.
        
        In this painting of Camille and his son Jeon, Monet has adopted an unusual low viewpoint, so the
        artist is looking up at his subject. This has the effect of increasing Camille's import as she fills the
        upper parts of the canvas, giving her an almost iconic feel. Her skirts appear to whip round with
        the wind, adding movement to on otherwise static image the small figure of Jeon is used by Monet
        to balance the overall composition.`,
      },
      {
        title: "Bridge over a Pond of Water Lilies",
        img: "./images/ClaudeMonet/3bridge1.jpg",
        info: `Claude Monet's “Bridge over a Pond of Water Lilies” painting is an iconic work of Impressionist
        art. The painting was created in 1899 and measures 3' 0'' x 2' 5''. It is an oil painting on canvas that
        is part of Monet's famous series, Water Lilies. This particular piece features the bridge spanning
        the Giverny water lily pond full of lush foliage. In the background one can see the silhouette of
        trees reflecting in the calm water which creates a tranquil atmosphere. The use of bright colors
        such as yellow, orange and green captures the beauty and vitality of this natural setting while also
        conveying the idea of harmony between man-made structures and nature. As viewers take in all
        the details, they are drawn into this peaceful scene which encourages contemplation and relaxation.
        The painting has become one of Monet's most well known works, as it represents his love for
        nature and his pioneering style known as impressionism. He was influenced by Japanese art which
        can be seen in the composition of the elements around the bridge. The trees are carefully placed in
        different positions to create depth and movement within the painting, while their vibrant green
        coloring gives them life. Atop the bridge stands a figure that is believed to be Leona Davidson,
        Monet's muse at this time.`,
      },
      {
        title: "San Giorgio Maggiore at Dusk",
        img: "./images/ClaudeMonet/san-giorgio-maggiore-at-dusk.jpg",
        info: `San Giorgio Maggiore at Dusk is an oil painting by Claude Monet that was painted in 1908. The
        painting is owned by National Museum Cardiff, the national art gallery of Wales. The original
        painting is oil on canvas and the dimension is 65.2cm x 92.4cm (25.7 in x 36.4 in).
        The term impression signifies the sensory information registered on the retina prior to any
        recognition of the object. For example, the eye sees tiny black spots before it recognizes them as
        faraway pedestrians. When you go out to paint, try to forget what objects you have before you, a
        tree, a house, a field or whatever Monet explained to a neighbor in Giverny, merely think here is
        a little square of blue, here an oblong of pink, here a streak of yellow, and paint it just as it looks
        to you, the exact color and shape, until it gives you your own naïve impression of the scene before
        you.`,
      },
      {
        title: "The Poppy Field",
        img: "./images/ClaudeMonet/poppies.jpg",
        info: `Claude Monet painted The Poppy Field near Argenteuil in 1873 on his return from the United
        Kingdom (in 1871) when he settled in Argenteuil with his family until 1878. It was a time that
        provided the artist with great fulfillment as a painter, despite the failing health of Camille. Paul
        Durand-Ruel, Monet's art dealer, helped support him during this time, where he found great
        comfort from the picturesque landscapes that surrounded him and provided him with plenty of
        subject matter from which to choose. It was a time that Monet's Plein air works would develop,
        and this particular painting was shown at the first Impressionist exhibition of 1874.
        This beautifully depicted summer's day is captured in all its glory with the vibrant poppies
        complementing the wispy clouds in a clear blue sky. In the landscape, a mother and child pair in
        the foreground and another in the background are merely a pretext for drawing the diagonal line
        that structures the painting. Two separate color zones are established, one dominated by red, the
        other by a bluish-green. The young woman with the sunshade and the child in the foreground is
        probably the artist's wife, Camille, and their son Jean.`,
      },
      {
        title: "Bouquet of Sunflowers",
        img: "./images/ClaudeMonet/Bouquet of Sunflowers.jpg",
        info: `Claude Monet French 1881. In November 1888, Van Gogh wrote: "Gauguin was telling me the other day—that he'd seen a
        painting by Claude Monet of sunflowers in a large Japanese vase, very fine. But—he likes mine
        better. I'm not of that opinion." Critics had earlier praised the "brio and daring" of Monet's
        technique when he showed this still life, depicting sunflowers that grew along the pathway to his
        garden at Vétheuil, at the 1882 Impressionist exhibition.`,
      },
      {
        title: "The Water Lilies 1919",
        img: "./images/ClaudeMonet/WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg",
        info: `The Water Lilies is a 1919 painting by impressionist Claude Monet, one of his Water Lilies series.
        The painting, the left hand panel of a large pair, depicts a scene in Monet's French pond showing
        light reflecting off the water with water lilies on the surface. It is on display in New York's
        Metropolitan Museum of Art.
        One of Monet's larger paintings, it shows the beauty of the sunset reflecting off the water. In 1919,
        Claude Monet was an elderly man who had already had been painting for almost 70 years, and his
        Water Lilies series came during a time when he was mainly painting water lilies in his pond, the
        pond's bridge, and his garden.`,
      },
      {
        title: "The Japanese Footbridge",
        img: "./images/ClaudeMonet/The-Japanese-Footbridge.jpg",
        info: `Ten years after moving to Giverny in 1883, Claude Monet envisioned turning a small pond on an
        adjacent parcel of land into an Asian-influenced water garden. Overcoming the resistance of
        locals wary of introducing foreign plants into the region, Monet won approval to expand the
        pond by diverting water from the Epte River. He encircled the basin with a vivacious
        arrangement of flowers, trees, and bushes, and the next year filled it with water lilies. He added a
        Japanese-style wooden bridge in 1895, then a few years later started to paint the pond and its
        water lilies—and never stopped, making them the obsessive focus of his intensely searching
        work for the next quarter century.`,
      },
      {
        title: "Women in the Garden",
        img: "./images/ClaudeMonet/women-in-the-garden.jpg",
        info: `Monet began a large painting of the garden of the property he rented in the Paris suburbs in 1866.
        The work was so large that a pulley system was required along with a trench - into which the
        painting could be lowered on the pulley - so that he could work on the upper areas of the canvas.
        The aim of this work was to discover how figures - within a landscape - could give the impression that air and light moved around them. He organized this by painting shadows, light with purposely-
        used color, sunshine filtering through the foliage, and reflections glowing through the darker gloom. Camille, it is known, posed for the three figures on the left of the piece, but the faces of all
        the figures are left vague and are not composed in a portraiture style.
        Monet has skilfully rendered the white of the dresses, anchoring them firmly in the structure of the
        composition - a symphony of greens and browns - provided by the central tree and the path.
        Finished in the studio, the painting was refused by the jury of the 1867 Salon which, apart from
        the lack of subject and narrative, deplored the visible brushstrokes which is regarded as a sign of
        carelessness and incompleteness. Women in the Garden was a huge achievement as an early plein
        air work for Monet, the challenges it had presented were immense, but he overcame them to create
        this stunning masterpiece.`,
      },
    ],
  },
  {
    name: "Andy Warhol",
    img: "./images/artist/andy.jpg",
    bg: "Pop Art icon who explored consumerism, fame, and mass media",
    info: "Warhol blurred the lines between high and low culture by incorporating popular imagery from Campbell's Soup Cans to Marilyn Monroe into his art. He used repetition and bold colors to challenge traditional notions of art.",
    story:
      "Warhol's work serves as a commentary on our consumerist society and the rise of mass media. His art continues to spark conversations about fame, identity, and the ever-changing cultural landscape.",
    arts: [
      { title: "", img: "./images/AndyWarhol", info: `` },
      { title: "", img: "./images/AndyWarhol", info: `` },
      { title: "", img: "./images/AndyWarhol", info: `` },
      { title: "", img: "./images/AndyWarhol", info: `` },
      { title: "", img: "./images/AndyWarhol", info: `` },
    ],
  },
  {
    name: "Edvard Munch",
    img: "./images/artist/edvard.jpg",
    bg: "Expressionist painter known for raw emotions and existential themes",
    info: "Munch's expressive works, like 'The Scream,' explore themes of anxiety, alienation, and the human condition. His use of bold colors, distorted forms, and emotional intensity paved the way for Expressionism.",
    story:
      "Munch's art resonates deeply with viewers due to its portrayal of universal human emotions. His groundbreaking work continues to influence artists and challenge viewers to confront the complexities of existence.",
    arts: [
      {
        title: "Ashes",
        img: "./images/EdvardMunch/ashes.jpg",
        info: `Ashes is an oil on canvas painting by the Norwegian symbolist painter Edvard Munch. Painted in 1894–95 it is now in the collection of the National Gallery of Norway in Oslo.
        The work depicts a critical scene in a lovemaking tryst between a couple in the forest, which has left the man hunched over in shame or dejection and the disheveled woman wide-eyed and motionless in frustration or despair. The picture's title suggests that, for whatever reason, the heat of their passion had burnt out at that moment.
        It is probably not insignificant that the scene was painted at a time when Munch himself was having a brief clandestine affair with Millie Thaulow, the wife of a cousin, during which they too would meet in the woods. In fact the artist wrote afterwards on a lithograph of the work "I felt our love lying on the earth like a heap of ash".
        In 1925, at the age of 62, Munch produced a second more impressionistic version of the painting which hangs in Oslo's Munch Museum. If the incident portrayed in the painting was of a personal nature, it had clearly left its mark.`,
      },
      {
        title: "The Sick Child",
        img: "./images/EdvardMunch/sick.jpg",
        info: `The Sick Child (Norwegian: Det syke barn) is the title given to a group of six paintings and a number of lithographs, drypoints and etchings completed by the Norwegian artist Edvard Munch between 1885 and 1926. All record a moment before the death of his older sister Johanne Sophie (1862-1877) from tuberculosis at 15. Munch returned to this deeply traumatic event repeatedly in his art over a period of more than 40 years. In the works, Sophie is typically shown on her deathbed accompanied by a dark-haired, grieving woman assumed to be her aunt Karen; the studies often show her in a cropped head shot. In all the painted versions Sophie is sitting in a chair, obviously suffering from pain, propped by a large white pillow, looking towards an ominous curtain likely intended as a symbol of death. She is shown with a haunted expression, clutching hands with a grief-stricken older woman who seems to want to comfort her but whose head is bowed as if she cannot bear to look the younger girl in the eye.`,
      },
      {
        title: "Evening On Karl Johan",
        img: "./images/EdvardMunch/evening.jpg",
        info: `The painting depicts a crowd of black-coated figures with corpse-white faces walking through the main street in Kristiana (now Oslo). This scene is a manifestation of one of Munch's anxiety dreams, transformed into an artwork that conveys unease and threat through its cropping techniques.`,
      },
      {
        title: "Separation",
        img: "./images/EdvardMunch/separation.jpg",
        info: `In the painting Separation from 1896 we see a young fair-haired woman looking out to sea while her hair flows out to the man's chest, as if they are still tied together even though she is leaving him. This is an example of the hair symbolism that we find in many of Munch's motifs.
        The man is dressed in black, the colour of sorrow and despair. He is clutching his heart with a bleeding hand.. In front of him a plant or flower is growing; its shape and colour look as if it could be his own bleeding heart.
        The colour red symbolises love, pain and blood. The red heart-shaped plant reflects Munch's ideas that all art draws nourishment from the life-blood of the artist.
        The flowing shoreline, a feature of many of Munch's love motifs, is based on Aasgaardsstrand.
        `,
      },
      {
        title: "Self-Portrait with Cigarette",
        img: "./images/EdvardMunch/burning.jpg",
        info: `Self-Portrait with Cigarette (Norwegian: Selvportrett med sigarett) is an 1895 painting by the Norwegian artist Edvard Munch. Munch's use of the cigarette and physical decay as a rejection of societal values aroused controversy following the self-portrait's 1895 exhibition. As of 2021, the work is held by the National Gallery in Oslo. The artist is surrounded by a dark shadow as he holds a smoking cigarette. John Ravenal compares the painting's dramatic lighting to that of a stage. Sue Prideaux writes that "Munch appears from the cigarette smoke like a genie from a bottle". The cigarette, which the art historian Patricia Berman calls "a nexus for marginal social identities in the 1890s", was a symbol for "deviancy" and the "social dissolution" between class and gender boundaries. Thus, its inclusion in the self-portrait rejects traditional values and associates Munch with bohemianism and decadence. Berman also believes that the artist's depiction of himself with a "thin, dissolving body" and "sallow skin" employs physical decay to challenge social and health norms.`,
      },
      {
        title: "Jealousy",
        img: "./images/EdvardMunch/jealousy.jpg",
        info: `This painting brings together the Adam and Eve theme with the portrayal of Stainislaw Przybyszewski - Munch's Polish poet fried, with his prominent bearded features.
        Przybyszewski's likeness in Jealousy has often been lined to Munch's presumably amorous relationship with the poet's wife, Dagny Juell, whom he painted in 1893 - the year of her marriage. the charged triangular situation, which in various degrees of recognizability reveals the features of the same protagonists, is also reflected in an oil of 1913 at the Munch-museet and in other related versions, among them Passion. Thus passion, jealousy, the biblical allegory of temptation, and an autobiographical incident converge in Munch's work, recurring in paintings and prints at different times.
        `,
      },
      {
        title: "Night in Saint Cloud",
        img: "./images/EdvardMunch/cloud.jpg",
        info: `Munch first created Night in Saint Cloud in 1890, while living in the Parisian suburb of Saint-Cloud. In the years 1889-91, Edvard Munch lived in France, supported by an artist's bursary from the Norwegian state. When cholera broke out in Paris in December 1889, Munch moved to St. Cloud, outside the city. There he rented the floor above a café, which commanded a beautiful view of the Seine.
        If the Sick Child is a loving tribute to Munch's favorite sister, this painting is a far more complex and darker memorial to the artist's father who had died the previous year.
        Munch's use of the drapes in this Night in Saint Cloud invoked a device that had been employed by a number of the Old Masters as a trompe-l'oeil way of drawing the viewer into the composition, pointing to the artifice of the scene, and also showcasing their own ability to paint something as lifelike as the drapery hanging in front of a picture; this was the case, for example, in The Art of Painting by Johannes Vermeer, and Danae by Rembrandt. Munch's friend, the Danish poet Emanuel Goldstein, posed for the enigmatic top-hatted figure silhouetted in the moonlight.
        `,
      },
    ],
  },
  {
    name: "Johannes Vermeer",
    img: "./images/artist/johannes.webp",
    bg: "Golden Age master known for meticulously detailed paintings with light & shadow",
    info: "Vermeer, a master of light and shadow, painted domestic scenes bathed in soft light. His meticulous attention to detail and use of perspective are evident in works like 'Girl with a Pearl Earring' and 'The Milkmaid.'",
    story:
      "Though underappreciated during his lifetime, Vermeer's work has gained immense recognition for its technical mastery and captivating beauty. He continues to inspire artists with his use of light and shadow.",
    arts: [
      {
        title: "The Procuress",
        img: "./images/JohannesVermeer/procuress.jpg",
        info: `The Procuress (Dutch: De koppelaarster) is a 1656 oil-on-canvas painting by the then 24-year-
          old Johannes Vermeer. It can be seen in the Gemäldegalerie Alte Meister in Dresden. It is his
          
          first genre painting and shows a scene of contemporary life, an image of mercenary love perhaps in
          a brothel. It differs from his earlier biblical and mythological scenes. It is one of only three paintings
          Vermeer signed and dated (the other two are The Astronomer and The Geographer). In 1696 the
          painting, being sold on an auction in Amsterdam, was named "A merry company in a room".
          The woman in black, the leering coupler, "in a nun's costume", could be the eponymous procuress,
          while the man to her right, "wearing a black beret and a doublet with slashed sleeves", has been
          identified as a self portrait of the artist; there is a resemblance with the painter in Vermeer's The Art
          of Painting.`,
      },
      {
        title: "The Astronomer",
        img: "./images/JohannesVermeer/astronomer.jpg",
        info: `The Astronomer (Dutch: De astronoom) is a painting finished in about 1668 by the Dutch Golden
          Age painter Johannes Vermeer. It is in oil on canvas with dimensions 51 cm × 45 cm (20 in × 18 in).
          
          Johannes Vermeer, The Geographer 1668-69 oil on canvas; 53×47 cm. Steadelsches
          Kunstinstitut, Frankfurt, Germany. The Geographer used the same model and other elements
          as The Astronomer.
          Portrayals of scientists were a favourite topic in 17th-century Dutch painting and Vermeer's oeuvre
          includes both this astronomer and the slightly later The Geographer. Both are believed to portray the
          same man, possibly Antonie van Leeuwenhoek.A 2017 study indicated that the canvas for the two
          works came from the same bolt of material, confirming their close relationship.
          The painting shows an astronomer looking at a globe. The astronomer's profession is shown by the
          celestial globe (version by Jodocus Hondius) and the book on the table, the 1621 edition of Adriaan
          Metius's Institutiones Astronomicae Geographicae. Symbolically, the volume is open to Book III, a
          section advising the astronomer to seek "inspiration from God" and the painting on the wall shows
          the Finding of Moses—Moses may represent knowledge and science ("learned in all the wisdom of
          the Egyptians").`,
      },
      {
        title: "The Geographer",
        img: "./images/JohannesVermeer/geographer.jpg",
        info: `The Geographer (Dutch: De geograaf) is a painting created by Dutch artist Johannes Vermeer in
          1668-1669, and is now in the collection of the Städel museum in Frankfurt, Germany. It is closely
          related to Vermeer's The Astronomer, for instance using the same model in the same dress, and has
          sometimes been considered a pendant painting to it. A 2017 study indicated that the canvas for the
          two works came from the same bolt of material.
          
          The geographer, dressed in a Japanese-style robe then popular among scholars, is shown to be
          "someone excited by intellectual inquiry", with his active stance, the presence of maps, charts, a
          globe and books, as well as the dividers he holds in his right hand, according to Arthur K. Wheelock
          Jr. "The energy in this painting [...] is conveyed most notably through the figure's pose, the massing
          of objects on the left side of the composition, and the sequence of diagonal shadows on the wall to
          the right."`,
      },
      {
        title: "Woman with a Pearl Necklace",
        img: "./images/JohannesVermeer/necklace.jpg",
        info: `Woman with a Pearl Necklace by Johannes Vermeer is a Dutch Golden Age painting of about
          1664. Painted in oils on canvas, Johannes Vermeer portrayed a young Dutch woman, most likely of
          upper-class descent, dressing herself with two yellow ribbons, pearl earrings, and a pearl necklace.
          As a very popular artist of the 17th century, the Dutch Golden Age, Vermeer depicted many women
          in similar circumstances within interior, domestic scenes. The same woman also appears in The
          Love Letter and A Lady Writing a Letter.
          
          Painted in 1664, this 21 5/8 X 17 3/4 inch scene depicts a young Dutch woman looking left toward a
          window's light source. Dressed in a yellow, fur-trimmed coat, this young woman most likely comes
          from an upper-class family. With Vermeer's distinctive style, it incorporates the color yellow, a
          draped curtain, framed pictures on the walls, a light source from the left, as well as domestic tools,
          and an expressive profile.`,
      },
      {
        title: "Girl Reading a Letter at an Open Window",
        img: "./images/JohannesVermeer/reading.jpg",
        info: `Girl Reading a Letter at an Open Window (Dutch: Brieflezend meisje bij het venster), also known
          as Lady reading at an open window, is an oil painting by Dutch Golden Age painter Johannes
          Vermeer. Completed in approximately 1657-1659, the painting is on display at
          the Gemäldegalerie in Dresden, which has held it since 1742. For many years, the attribution of the
          painting—which features a young Dutch woman reading a letter before an open window—was lost,
          with first Rembrandt and then Pieter de Hooch being credited for the work before it was properly
          identified in 1880. After World War II, the painting was briefly in possession of the Soviet Union. In
          2017, tests revealed that the painting had been altered after the painter's death.
          The painting was laboriously restored to its original composition between 2018 and 2021 using
          scalpel and microscope. It now shows Cupid in a “painting within a painting” on the wall, and since
          the restoration, hangs at the museum in Dresden as Vermeer painted it.`,
      },
      {
        title: "View of Delft",
        img: "./images/JohannesVermeer/delft.jpg",
        info: `View of Delft (Dutch: Gezicht op Delft) is an oil painting by Johannes Vermeer, painted c. 1659–
        1661. The painting of the Dutch artist's hometown is among his best known. It is one of three known
        paintings of Delft by Vermeer, along with The Little Street and the lost painting House Standing in
        Delft, and his only cityscape.
        
        ] According to art historian Emma Barker, cityscapes across water,
        which were popular in the Netherlands at the time, celebrated the city and its trade. Vermeer's View
        of Delft has been held in the Dutch Royal Cabinet of Paintings at the Mauritshuis in The Hague since
        its establishment in 1822.`,
      },
      {
        title: "The Little Street (Het Straatje)",
        img: "./images/JohannesVermeer/street.jpg",
        info: `The Little Street (Het Straatje) is a painting by the Dutch painter Johannes Vermeer, executed c.
        1657-1658. It is exhibited at the Rijksmuseum of Amsterdam, and signed, below the window in the
        lower left-hand corner, "I V MEER".
        "The Little Street" is a renowned painting by the Dutch Golden Age artist Johannes
        Vermeer, completed around 1658. It is housed in the Rijksmuseum in Amsterdam. The
        painting depicts a tranquil and intimate scene of a typical Dutch street corner in the city
        of Delft. Vermeer's meticulous attention to detail and his mastery of light and shadow
        are evident in this work.
        In the painting, a narrow street is bordered by two rows of modest houses with brick
        facades. The buildings are rendered with precision, showcasing their architectural
        features such as stepped gables and small windows. The street is paved with
        cobblestones, and a small patch of grass grows in front of the houses.`,
      },
      {
        title: "The Allegory of Faith",
        img: "./images/JohannesVermeer/allegory.jpg",
        info: `The Allegory of Faith, also known as Allegory of the Catholic Faith, is a Dutch Golden Age
        painting by Johannes Vermeer from about 1670-1672. It has been in the Metropolitan Museum of
        Art in New York since 1931.
        This and Art of Painting are his only works that fall under history painting in the
        contemporary hierarchy of genres, though they still have his typical composition of one or two figures
        in a domestic interior. Both share several features: the perspective is almost the same, and there is
        a multicolor tapestry at the left of each painting, pulled to the left to disclose the scene. The Art of
        Painting also uses symbolism from Cesare Ripa of Clio, muse of history. Vermeer's Love Letter uses
        a similar gilt panel. The Allegory and The Art of Painting differ markedly in style and purpose from
        Vermeer's other works.`,
      },
      {
        title: "The Love Letter",
        img: "./images/JohannesVermeer/letter.jpg",
        info: `The Love Letter (Dutch: De liefdesbrief) is a 17th-century genre painting by Jan Vermeer. The
        painting shows a servant maid commenting to her mistress on a letter the woman holds. The
        painting is in the Rijksmuseum Amsterdam.
        
        The tied-up curtain in the foreground creates the impression that the viewer is looking at an intensely
        private, personal scene. There is also an element of trompe-l'œil as Dutch paintings were often hung
        with little curtains to conserve them, and the device of painted curtains is seen in other Dutch works
        
        of the period. The diagonals on the chequered floor create the impression of depth and three-
        dimensionality. The fact that it is a love letter that the woman has received is made clear by the fact
        
        that she is carrying a cittern, a form of lute used in the period as a symbol of love - often carnal
        love; luit was also a slang term for vagina. This idea is further reinforced by the slippers at the very
        bottom of the picture. The removed slipper was another symbol of sex. The floor brush would appear
        to represent domesticity, and its placement at the side of the painting may suggest that domestic
        concerns have been forgotten or pushed aside.`,
      },
    ],
  },
]
const rootElement = document.querySelector("#root")

function setArtists() {
  const artistElements = artistData.map((item) => {
    return `<div class="artistBox" id="${item.name.split(" ")[0]}">
  <div class="bgblur">
  <img src="${item.img}">
  </div>
  <p>${item.name}</p>
  <img src="${item.img}">
  </div>`
  })
  rootElement.innerHTML = `<div id="artistBoxes">${artistElements.join(
    ""
  )}</div>`
  setInfo()
}

function setImageInfo(data) {
  const infoBox = document.querySelector("#float")
  infoBox.innerHTML = `
  <div>
  <img src="${data.img}" />
  <p>${data.artist}</p>
  <p>${data.title}</p>
  </div>
  <div class="infotext">
  <p>${data.info}</p>
  </div>
  <button class="closeInfo">Close</button>
  `

  const floatElement = document.querySelector("#float")
  floatElement.style.display = floatElement.innerHTML === "" ? "none" : "flex"

  document.querySelector(".closeInfo").addEventListener("click", () => {
    const floatElement = document.querySelector("#float")
    floatElement.style.display = "none"
  })
}

function setInfo() {
  const artistBoxes = document.querySelectorAll(".artistBox")
  artistBoxes.forEach((item) => {
    item.addEventListener("click", () => {
      const artistName = item.id
      const artistInfo = artistData.find(
        (artist) => artist.name.split(" ")[0] === artistName
      )

      rootElement.innerHTML = `
        <div class="artistInfoBox">
        <button class="close">X</button>
          <div class="imagesButton">
            <p>${artistInfo.bg}</p>
            <p>${artistInfo.info}</p>
            <h3>Famous Artworks</h3>
            <div class="artworks">
              ${
                artistInfo?.arts
                  ?.map(
                    (item) =>
                      `<div class="artistArtworks" id="${item.title}_${artistInfo.name}">
                      <p>${item.title}</p>
                      <img src="${item.img}">
                      </div>`
                  )
                  .join("") ?? ""
              }
            </div>  
          </div>
          <div class="withImage">
            <img src="${artistInfo.img}">
            <h2>${artistInfo.name}</h2>
            <p>${artistInfo.story}</p>
          </div>
          <div id="float"></div>
        </div>
        `

      const floatElement = document.querySelector("#float")
      floatElement.style.display =
        floatElement.innerHTML === "" ? "none" : "flex"

      const imageButtons = document.querySelectorAll(".artistArtworks")

      imageButtons.forEach((item) => {
        item.addEventListener("click", () => {
          const data = item.id.split("_")
          console.log(data)

          const artist = artistData.find((item) => item.name === data[1])
          const artworkInfo = artist?.arts?.find(
            (item) => item.title === data[0]
          )

          setImageInfo({ artist: data[1], ...artworkInfo })
        })
      })

      const closeButton = document.querySelector(".close")
      closeButton?.addEventListener("click", () => {
        setArtists()
      })
    })
  })
}

setArtists()
