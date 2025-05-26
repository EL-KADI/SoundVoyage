"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BookOpen, Music, Globe, Users, X } from "lucide-react"

interface Article {
  id: number
  title: string
  excerpt: string
  image: string
  readTime: string
  category: string
  content: string
  fullContent: string
}

export default function Learn() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const articles: Article[] = [
    {
      id: 1,
      title: "The Ancient Origins of String Instruments",
      excerpt:
        "Discover how string instruments evolved across different civilizations, from the ancient lyres of Mesopotamia to the sophisticated sitars of India. Explore the technological innovations that shaped modern string instruments.",
      image: "https://www.yamaha.com/en/musical_instrument_guide/common/images/violin/structure_main.jpg",
      readTime: "8 min read",
      category: "History",
      content:
        "String instruments represent humanity's earliest attempts to create sustained musical tones. Archaeological evidence suggests that the first string instruments appeared over 4,000 years ago in ancient Mesopotamia.",
      fullContent: `String instruments represent humanity's earliest attempts to create sustained musical tones. Archaeological evidence suggests that the first string instruments appeared over 4,000 years ago in ancient Mesopotamia. The evolution from simple hunting bows to complex instruments like the Chinese guqin and Indian veena demonstrates remarkable innovation across cultures.

The earliest known string instrument is the musical bow, which likely evolved from hunting bows around 15,000 years ago. Ancient civilizations in Egypt, Mesopotamia, and the Indus Valley developed increasingly sophisticated string instruments, including lyres, harps, and early lutes.

The development of string instruments was closely tied to advances in metallurgy, woodworking, and understanding of acoustics. The ancient Greeks made significant contributions to string instrument theory, with Pythagoras discovering the mathematical relationships between string length and pitch.

In Asia, string instruments evolved along different paths. The Chinese developed the guqin over 3,000 years ago, while India created the veena and later the sitar. These instruments incorporated sympathetic strings and complex tuning systems that allowed for microtonal music.

The medieval period saw the development of bowed string instruments in Europe, leading to the violin family that dominates Western classical music today. Meanwhile, the Islamic world contributed the oud, which influenced both European lutes and modern guitars.

Today, string instruments continue to evolve with new materials and technologies, but their fundamental principles remain rooted in ancient discoveries about vibrating strings and resonating chambers.`,
    },
    {
      id: 2,
      title: "Percussion Across Cultures: The Heartbeat of Music",
      excerpt:
        "Explore the rhythmic heartbeat of world music through drums, bells, and percussion instruments that define cultural celebrations and spiritual practices across continents.",
      image: "https://www.carvedculture.com/cdn/shop/articles/cultural-hand-percussion-musical-instruments.jpg?v=1680903490",
      readTime: "6 min read",
      category: "Culture",
      content:
        "Percussion instruments are arguably the oldest musical instruments, with evidence of drums dating back 30,000 years. From the talking drums of West Africa to the gamelan orchestras of Indonesia, percussion serves as both musical foundation and cultural communication.",
      fullContent: `Percussion instruments are arguably the oldest musical instruments, with evidence of drums dating back 30,000 years. From the talking drums of West Africa to the gamelan orchestras of Indonesia, percussion serves as both musical foundation and cultural communication.

The earliest percussion instruments were likely rocks, sticks, and hollow logs used by prehistoric humans for communication and ritual. As civilizations developed, so did their percussion instruments, with each culture creating unique sounds and rhythms that reflected their environment and beliefs.

In Africa, drums became sophisticated communication tools. The talking drums of West Africa could transmit complex messages across vast distances, using tonal patterns that mimicked spoken language. These instruments were central to community life, marking important events and maintaining cultural traditions.

Asian cultures developed intricate percussion ensembles. The Indonesian gamelan features bronze metallophones, gongs, and drums that create shimmering, layered soundscapes. Japanese taiko drumming combines powerful rhythms with spiritual practice, while Indian tabla provides complex rhythmic foundations for classical music.

Native American cultures used drums for spiritual ceremonies, believing that drum rhythms could connect the physical and spiritual worlds. The frame drums of the Arctic peoples and the water drums of the Eastern Woodlands each served specific ceremonial purposes.

In Latin America, African, indigenous, and European percussion traditions merged to create new hybrid forms. Brazilian samba, Cuban rumba, and Mexican mariachi all feature distinctive percussion sections that drive their infectious rhythms.

Modern percussion continues to evolve, incorporating electronic elements and world music influences, but the fundamental human need for rhythm remains constant across all cultures.`,
    },
    {
      id: 3,
      title: "Wind Instruments and Spiritual Practice",
      excerpt:
        "Learn about the sacred role of flutes, horns, and wind instruments in meditation, ceremony, and spiritual expression across different religious and cultural traditions.",
      image: "https://govntravel.com/wp-content/uploads/2024/03/image-15.jpeg",
      readTime: "10 min read",
      category: "Spirituality",
      content:
        "Wind instruments hold special significance in spiritual practices worldwide. The Japanese shakuhachi was used by Zen monks for meditation, while the Native American flute connects players with nature.",
      fullContent: `Wind instruments hold special significance in spiritual practices worldwide. The Japanese shakuhachi was used by Zen monks for meditation, while the Native American flute connects players with nature. These instruments transform breath into sacred sound.

The connection between breath, wind instruments, and spirituality is found across cultures. In many traditions, breath is considered the life force or soul, making wind instruments natural tools for spiritual expression and communication with the divine.

The Japanese shakuhachi flute was central to the practice of suizen, or "blowing meditation," practiced by Zen monks. These monks, called komuso, used the instrument not for entertainment but as a form of meditation and spiritual discipline. The breathy, imperfect tones of the shakuhachi were seen as reflecting the imperfect nature of human existence.

Native American flutes have been used for centuries in courtship, healing, and spiritual ceremonies. The flute's voice is believed to carry prayers to the spirit world and to help players connect with nature and their inner selves. Different tribes developed distinct flute traditions, each with specific ceremonial uses.

In Hindu and Buddhist traditions, wind instruments play important roles in religious music. The bansuri flute is associated with Lord Krishna, whose divine music was said to enchant all living beings. Tibetan long horns and conch shells are used in monastery rituals to call practitioners to meditation and mark important ceremonial moments.

Islamic cultures developed the ney, a reed flute that became central to Sufi mystical practices. The ney's haunting sound represents the soul's longing for union with the divine, and its playing is considered a form of dhikr, or remembrance of God.

Australian Aboriginal cultures use the didgeridoo in dreamtime ceremonies, believing its deep, resonant tones connect players with ancestral spirits and the land itself. The circular breathing technique required to play the didgeridoo is itself a meditative practice.

These traditions demonstrate how wind instruments serve as bridges between the physical and spiritual worlds, using the most fundamental human act - breathing - as a pathway to transcendence.`,
    },
    {
      id: 4,
      title: "Modern Revival of Traditional Music",
      excerpt:
        "How contemporary musicians are bringing ancient instruments into modern compositions and preserving cultural heritage through innovative fusion and educational programs.",
      image: "https://drumbeatssounds.co.ke/wp-content/uploads/2024/01/wd44.jpg",
      readTime: "7 min read",
      category: "Modern",
      content:
        "Today's musicians are finding innovative ways to preserve traditional instruments while making them relevant to contemporary audiences. Artists like Yo-Yo Ma's Silk Road Ensemble demonstrate how ancient instruments can create new musical dialogues.",
      fullContent: `Today's musicians are finding innovative ways to preserve traditional instruments while making them relevant to contemporary audiences. Artists like Yo-Yo Ma's Silk Road Ensemble demonstrate how ancient instruments can create new musical dialogues.

The 21st century has seen a remarkable revival of interest in traditional musical instruments, driven by globalization, world music movements, and efforts to preserve cultural heritage. Musicians worldwide are discovering that ancient instruments offer unique sounds and playing techniques that can't be replicated by modern instruments.

Yo-Yo Ma's Silk Road Ensemble exemplifies this movement, bringing together master musicians from diverse traditions to create new music that honors ancient roots while speaking to contemporary audiences. The ensemble features instruments like the Chinese pipa, Persian kamancheh, and Indian tabla alongside Western instruments, creating unprecedented musical conversations.

In the Celtic world, traditional Irish, Scottish, and Welsh instruments have experienced a renaissance. Young musicians are learning bodhrán, uilleann pipes, and Celtic harps, while bands like The Chieftains and Celtic Woman have brought these sounds to global audiences. Music schools now offer traditional music programs alongside classical training.

Electronic music producers are sampling and incorporating traditional instruments into modern compositions. Artists like Nitin Sawhney blend Indian classical instruments with electronic beats, while groups like Shpongle use didgeridoos and Tibetan singing bowls in psychedelic soundscapes.

World music festivals have become platforms for traditional musicians to share their heritage with international audiences. Events like WOMAD (World of Music, Arts and Dance) and the Festival of Pacific Arts celebrate traditional music while encouraging cross-cultural collaboration.

Educational institutions are playing crucial roles in preservation efforts. Universities offer ethnomusicology programs, while cultural centers provide traditional music instruction. Online platforms like YouTube and Spotify have made traditional music more accessible than ever before.

The challenge for modern practitioners is maintaining authenticity while allowing for innovation. Many traditional musicians emphasize the importance of learning proper techniques and cultural context before attempting fusion or modernization.

This revival demonstrates that traditional instruments remain relevant in our globalized world, offering unique voices that enrich contemporary music while preserving invaluable cultural heritage for future generations.`,
    },
    {
      id: 5,
      title: "The Science of Sound: How Traditional Instruments Work",
      excerpt:
        "Understand the physics behind traditional instruments and how different cultures developed unique approaches to creating and manipulating sound through craftsmanship and innovation.",
      image: "https://resources.cdn.yaclass.in/39c8161e-97ba-45af-9e90-372a44d11e5b/shutterstock1696609963w485.png",
      readTime: "9 min read",
      category: "Science",
      content:
        "Traditional instruments showcase remarkable understanding of acoustics developed through centuries of experimentation. The sympathetic strings of the sitar, the membrane of the Chinese dizi, and the resonating chambers of African drums all demonstrate sophisticated sound engineering.",
      fullContent: `Traditional instruments showcase remarkable understanding of acoustics developed through centuries of experimentation. The sympathetic strings of the sitar, the membrane of the Chinese dizi, and the resonating chambers of African drums all demonstrate sophisticated sound engineering.

The physics of traditional instruments reveals the deep understanding ancient craftsmen had of sound production, even without modern scientific knowledge. Through trial and error over generations, they developed instruments that maximize acoustic efficiency and create unique timbres.

String instruments demonstrate principles of vibration and resonance. The sitar's sympathetic strings vibrate in harmony with the main strings, creating a rich, shimmering sound. The instrument's gourd resonator and long neck are precisely designed to enhance these harmonic interactions. Similarly, the Chinese guqin's seven strings and hollow wooden body create a complex system of resonances that produce its distinctive meditative tone.

Wind instruments showcase understanding of air column physics. The Chinese dizi features a unique membrane made from bamboo inner skin that vibrates when air passes over it, creating the instrument's characteristic buzzing timbre. The shakuhachi's bamboo construction and specific bore shape create its breathy, multiphonic sounds that are impossible to achieve with metal flutes.

Percussion instruments reveal sophisticated knowledge of materials and construction. African djembes use specific wood types and animal skins to create their wide range of tones. The shape of the drum body - wide at the top and narrow at the bottom - creates a Helmholtz resonator that amplifies low frequencies while allowing high frequencies to project clearly.

The Indonesian gamelan demonstrates complex metallurgy and tuning systems. Bronze instruments are carefully tuned to create beating patterns and harmonic relationships that produce the ensemble's characteristic shimmering sound. The slight detuning between paired instruments creates acoustic beats that give gamelan its living, breathing quality.

Traditional instrument makers also understood the importance of materials. Violin makers like Stradivarius used specific wood types and aging processes that modern science is still trying to understand. The density, grain, and resonant properties of different woods were carefully matched to different parts of instruments.

Modern acoustic analysis has revealed that many traditional instruments operate on principles that weren't formally understood until the development of modern physics. The harmonic series, resonance, and wave interference patterns that traditional craftsmen intuited are now explained by scientific theory.

This convergence of ancient wisdom and modern science continues to inform contemporary instrument design, proving that traditional knowledge remains valuable in our technological age.`,
    },
    {
      id: 6,
      title: "Women in Traditional Music: Hidden Stories",
      excerpt:
        "Discover the often overlooked contributions of women to traditional music across cultures, from master performers to instrument makers and cultural preservationists.",
      image: "https://media.npr.org/assets/img/2021/05/28/81k7gm9f0ul_wide-50362e8ad29f7fbb4847dd6b71ce04cc9916cb65.jpg?s=1400&c=100&f=jpeg",
      readTime: "8 min read",
      category: "Culture",
      content:
        "Women have played crucial roles in preserving and developing traditional music, though their contributions are often underrecognized. From the female shamans of Siberia to the master koto players of Japan, women have been guardians of musical tradition.",
      fullContent: `Women have played crucial roles in preserving and developing traditional music, though their contributions are often underrecognized. From the female shamans of Siberia to the master koto players of Japan, women have been guardians of musical tradition.

Throughout history, women's roles in traditional music have been both central and marginalized. While often excluded from formal musical institutions, women have maintained musical traditions within families and communities, serving as the primary transmitters of cultural knowledge from generation to generation.

In many cultures, women were the keepers of lullabies, work songs, and ceremonial music. These seemingly domestic musical roles were actually crucial for cultural preservation. Mothers and grandmothers taught children not just melodies, but the stories, values, and worldviews embedded in traditional songs.

Japanese court music featured prominent female musicians. The koto, Japan's national instrument, was primarily played by court ladies who developed sophisticated playing techniques and compositions. These women created a refined musical culture that influenced Japanese aesthetics for centuries.

In Celtic traditions, women were often the primary singers and storytellers. Irish sean-nós singing, Scottish Gaelic song traditions, and Welsh cerdd dant (string music) were largely preserved by women who passed down ancient ballads and melodies through oral tradition.

African musical traditions often featured women as lead singers and dancers. In West African cultures, women griots (traditional musicians and storytellers) held important social positions as historians and cultural preservationists. Their songs recorded genealogies, historical events, and moral teachings.

Native American traditions included many female musicians and instrument makers. Women often led ceremonial singing and created instruments like pottery drums and rattles. In some tribes, certain songs and instruments were specifically associated with women's ceremonies and coming-of-age rituals.

The Islamic world produced notable female musicians despite social restrictions. In Al-Andalus (medieval Spain), female musicians and poets flourished in court settings. The Sufi tradition included female mystics who used music and poetry in their spiritual practices.

In India, women have been central to classical music traditions. Female vocalists like M.S. Subbulakshmi became legendary figures, while women instrumentalists challenged gender barriers in traditionally male-dominated fields.

Modern ethnomusicology has begun to recognize and document women's contributions to traditional music. Female scholars and musicians are working to recover lost histories and ensure that women's musical knowledge is preserved and celebrated.

Today, women continue to play vital roles in traditional music revival movements, often serving as cultural ambassadors who bring ancient traditions to new audiences while maintaining their authentic character.`,
    },
  ]

  const instrumentFamilies = [
    {
      name: "String Instruments",
      description: "Instruments that produce sound through vibrating strings",
      examples: ["Sitar", "Oud", "Koto", "Erhu", "Fiddle"],
      image: "https://i.fbcd.co/products/resized/resized-750-500/string-preview-964b377f1f772997ff91a6e1b12f1c4f3a893666a185a242996acf45f0fd77c5.jpg",
    },
    {
      name: "Wind Instruments",
      description: "Instruments that produce sound through vibrating air columns",
      examples: ["Shakuhachi", "Ney", "Dizi", "Tin Whistle", "Bansuri"],
      image: "https://static.vecteezy.com/system/resources/thumbnails/019/134/298/small_2x/wind-instruments-set-simple-cute-trumpet-bugle-trombone-tuba-saxophone-french-horn-clarinet-recorder-bagpipes-clipart-cartoon-style-wind-instrument-trumpet-hand-drawn-doodle-style-vector.jpg",
    },
    {
      name: "Percussion Instruments",
      description: "Instruments that produce sound through being struck or shaken",
      examples: ["Tabla", "Taiko", "Bodhrán", "Darbuka", "Cajón"],
      image: "https://www.piggyride.com/blog/wp-content/uploads/2022/01/Untitled-design-2022-01-17T135019.910-1024x536.png",
    },
    {
      name: "Keyboard Instruments",
      description: "Instruments played using a keyboard interface",
      examples: ["Harmonium", "Accordion", "Celesta"],
      image: "https://www.mrqsmusic.com/uploads/1/8/1/9/18198925/keyboards_orig.jpeg",
    },
  ]

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Rich History",
      description: "Dive deep into the historical context and evolution of traditional instruments",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Audio Examples",
      description: "Listen to authentic recordings and understand the unique sound of each instrument",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      description: "Explore instruments from every continent and understand their cultural significance",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cultural Context",
      description: "Learn about the social and ceremonial roles instruments play in different societies",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learn About Musical Heritage
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Deepen your understanding of traditional instruments through stories, history, and cultural insights from
            around the world.
          </p>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-indigo-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Instrument Families</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {instrumentFamilies.map((family, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img src={family.image || "/placeholder.svg"} alt={family.name} className="w-full h-32 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{family.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{family.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {family.examples.slice(0, 3).map((example, i) => (
                      <span
                        key={i}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedArticle(article)}
              >
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{article.excerpt}</p>
                  <button className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Start Your Musical Journey</h2>
          <p className="text-xl mb-6 opacity-90">Ready to explore the sounds and stories of traditional instruments?</p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Instruments
          </a>
        </motion.section>
      </main>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedArticle.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{selectedArticle.readTime}</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{selectedArticle.title}</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {selectedArticle.fullContent.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
