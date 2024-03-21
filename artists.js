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
  },
  {
    name: "Leonardo da Vinci",
    img: "./images/artist/leonarado.jpg",
    bg: "Renaissance genius: painter, sculptor, inventor, and scientist",
    info: "Da Vinci, epitomizing the Renaissance ideal, was a master painter, sculptor, inventor, and scientist. His iconic paintings like the Mona Lisa and The Last Supper showcase his remarkable technical skill and ability to capture the human form and emotions.",
    story:
      "Leonardo da Vinci's insatiable curiosity and pursuit of knowledge in various fields made him a true Renaissance Man. His artistic and scientific contributions continue to influence and inspire generations.",
  },
  {
    name: "Rembrandt",
    img: "./images/artist/rembrandt.webp",
    bg: "Dutch Golden Age master known for dramatic lighting and use of chiaroscuro",
    info: "Rembrandt, a leading figure of the Dutch Golden Age, is renowned for his use of light and shadow (chiaroscuro) to create dramatic effects. His portraits, including The Night Watch, capture the essence of his subjects with remarkable depth and psychological insight.",
    story:
      "Rembrandt's innovative use of light and shadow revolutionized portraiture and continues to influence artists. His ability to capture the complexities of the human experience resonates deeply with viewers across centuries.",
  },
  {
    name: "Salvador Dalí",
    img: "./images/artist/salvador.jpg",
    bg: "Surrealist painter known for dreamlike imagery and subconscious exploration",
    info: "Dalí, a prominent figure in Surrealism, is known for his dreamlike paintings that explore the subconscious mind. His melting clocks and elongated figures, like those in The Persistence of Memory, challenge our perception of reality.",
    story:
      "Dalí's work continues to captivate viewers with its dreamlike imagery and exploration of the human psyche. He is a key figure in Surrealism, a movement that challenged artistic conventions and delved into the subconscious.",
  },
  {
    name: "Frida Kahlo",
    img: "./images/artist/frida.jpg",
    bg: "Surrealist self-portrait artist known for exploring themes of identity and pain",
    info: "Kahlo, a prominent Mexican artist, is known for her self-portraits that explore themes of identity, gender, and the human experience. Her vibrant style and unflinching portrayal of physical and emotional pain have resonated with audiences worldwide.",
    story:
      "Frida Kahlo's art transcends the boundaries of self-portraiture, becoming a powerful exploration of identity, pain, and the resilience of the human spirit.",
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
  },
  {
    name: "Andy Warhol",
    img: "./images/artist/andy.jpg",
    bg: "Pop Art icon who explored consumerism, fame, and mass media",
    info: "Warhol blurred the lines between high and low culture by incorporating popular imagery from Campbell's Soup Cans to Marilyn Monroe into his art. He used repetition and bold colors to challenge traditional notions of art.",
    story:
      "Warhol's work serves as a commentary on our consumerist society and the rise of mass media. His art continues to spark conversations about fame, identity, and the ever-changing cultural landscape.",
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
  <img src=${data.img} />
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
