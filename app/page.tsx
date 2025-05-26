"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import InteractiveMap from "@/components/InteractiveMap"
import InstrumentCard from "@/components/InstrumentCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

interface Instrument {
  id: string
  name: string
  country: string
  image: string
  story: string
  soundUrl: string
  type: string
}

export default function Home() {
  const [instruments, setInstruments] = useState<Instrument[]>([])
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const mockInstruments: Record<string, Instrument[]> = {
    Egypt: [
      {
        id: "oud-egypt",
        name: "Oud",
        country: "Egypt",
        image: "https://static.independent.co.uk/2022/02/22/17/iStock-967312320.jpg",
        story:
          "The oud is a pear-shaped stringed instrument commonly used in Middle Eastern music. With its deep, resonant sound, it has been the backbone of Arabic classical music for over a thousand years, often called the king of instruments.",
        soundUrl:"/Sounds/Oud.mp3",
        type: "string",
      },
      {
        id: "darbuka-egypt",
        name: "Darbuka",
        country: "Egypt",
        image: "https://www.ethnicmusical.com/wp-content/uploads/2023/08/clay-darbuka-dohola.jpg",
        story:
          "The darbuka is a goblet-shaped drum that produces sharp, crisp sounds. Essential in belly dance music and folk celebrations, its rhythmic patterns form the heartbeat of Middle Eastern percussion traditions.",
        soundUrl: "/Sounds/Darbuka.mp3",
        type: "percussion",
      },
      {
        id: "qanun-egypt",
        name: "Qanun",
        country: "Egypt",
        image: "https://media.skilldeer.com/550x450/bcaf6f39dfc2e71dd1e7e28a91fc4e2817c502f4.png",
        story:
          "The qanun is a plucked string instrument with 72 strings arranged in groups of three. Its bright, shimmering sound is essential in Arabic classical music and provides both melody and rhythmic accompaniment.",
        soundUrl: "/Sounds/Qanun.mp3",
        type: "string",
      },
      {
        id: "ney-egypt",
        name: "Ney",
        country: "Egypt",
        image: "https://www.maqamworld.com/instr/nay.jpg",
        story:
          "The ney is an end-blown flute made of reed or bamboo. Its haunting, breathy sound represents the human soul in Sufi music and is considered one of the oldest musical instruments still in use.",
        soundUrl: "/Sounds/Ney.mp3",
        type: "wind",
      },
      {
        id: "riq-egypt",
        name: "Riq",
        country: "Egypt",
        image: "https://salamuzik.com/cdn/shop/articles/all-about-riq.jpg?v=1579526473",
        story:
          "The riq is a type of tambourine with cymbals around its frame. It provides rhythmic accompaniment in Arabic music and requires great skill to master its complex playing techniques.",
        soundUrl: "/Sounds/Riq.mp3",
        type: "percussion",
      },
      {
        id: "kawala-egypt",
        name: "Kawala",
        country: "Egypt",
        image: "https://www.flautanativa.com/wp-content/uploads/2018/07/kawala-G-01.jpg",
        story:
          "The kawala is a rim-blown flute made from reed. Popular in folk music, it produces a warm, mellow tone and is often used in pastoral and romantic songs throughout the Middle East.",
        soundUrl: "/Sounds/Kawala.mp3",
        type: "wind",
      },
    ],
    India: [
      {
        id: "sitar-india",
        name: "Sitar",
        country: "India",
        image: "https://prosadfreeman.com/cdn/shop/articles/Sitar.png?v=1747199476&width=1100",
        story:
          "The sitar is a plucked stringed instrument with sympathetic strings that create its distinctive resonant sound. Central to Hindustani classical music, it gained global recognition through masters like Ravi Shankar.",
        soundUrl: "/Sounds/Sitar.mp3",
        type: "string",
      },
      {
        id: "tabla-india",
        name: "Tabla",
        country: "India",
        image: "https://centerforworldmusic.org/wp-content/uploads/2015/03/Tabla_Pair.jpg",
        story:
          "The tabla consists of two drums that produce a wide range of sounds and rhythms. This percussion instrument is fundamental to Indian classical music, capable of complex rhythmic patterns called talas.",
        soundUrl: "/Sounds/Tabla.mp3",
        type: "percussion",
      },
      {
        id: "veena-india",
        name: "Veena",
        country: "India",
        image: "https://cdn10.bigcommerce.com/s-ta610c/products/87/images/3045/veena_geared_tuners__65213.1685648034.1280.1280.png?c=2",
        story:
          "The veena is an ancient plucked string instrument considered the mother of all Indian stringed instruments. Sacred to Goddess Saraswati, it produces deep, meditative tones perfect for classical ragas.",
        soundUrl: "/Sounds/Veena.mp3",
        type: "string",
      },
      {
        id: "bansuri-india",
        name: "Bansuri",
        country: "India",
        image: "https://phamoxmusic.com/wp-content/uploads/2024/01/Bansuri-Bamboo-Flute.jpg",
        story:
          "The bansuri is a transverse bamboo flute associated with Lord Krishna. Its sweet, melodious sound is capable of expressing the full range of human emotions and is central to Indian classical music.",
        soundUrl: "/Sounds/Bansuri.mp3",
        type: "wind",
      },
      {
        id: "mridangam-india",
        name: "Mridangam",
        country: "India",
        image: "https://indianmusicexperience.org/wp-content/uploads/2021/10/mridangam-1.jpg",
        story:
          "The mridangam is a double-headed drum fundamental to Carnatic music. Made from jackfruit wood and animal skin, it provides rhythmic foundation and can produce a vast array of tonal variations.",
        soundUrl: "/Sounds/Mridangam.mp3",
        type: "percussion",
      },
      {
        id: "harmonium-india",
        name: "Harmonium",
        country: "India",
        image: "https://i.ebayimg.com/images/g/5SAAAOSw4uVnMH5p/s-l1600.jpg",
        story:
          "The harmonium is a reed organ that became integral to Indian music. Though originally European, it was adapted to Indian musical needs and is now essential in classical, folk, and devotional music.",
        soundUrl: "/Sounds/Harmonium.mp3",
        type: "keyboard",
      },
    ],
    Japan: [
      {
        id: "koto-japan",
        name: "Koto",
        country: "Japan",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Japanese_Koto.jpg",
        story:
          "The koto is a traditional Japanese stringed instrument with 13 strings. Used in gagaku court music and modern compositions, its delicate plucking technique creates ethereal melodies that embody Japanese aesthetics.",
        soundUrl: "/Sounds/Koto.mp3",
        type: "string",
      },
      {
        id: "shakuhachi-japan",
        name: "Shakuhachi",
        country: "Japan",
        image: "https://sonica.jp/instruments/images/shakuhachi_image1.jpg",
        story:
          "The shakuhachi is a bamboo flute known for its breathy, meditative sound. Originally used by Zen monks for meditation, it produces haunting melodies that connect the player with nature and spirituality.",
        soundUrl: "/Sounds/Shakuhachi.mp3",
        type: "wind",
      },
      {
        id: "shamisen-japan",
        name: "Shamisen",
        country: "Japan",
        image: "https://p.turbosquid.com/ts-thumb/s1/blOe7f/Vq/shamisenblackmb3dmodel001/jpg/1618300008/600x600/fit_q87/e773756518b380cde5f82b24547e89b3c6a7007c/shamisenblackmb3dmodel001.jpg",
        story:
          "The shamisen is a three-stringed instrument played with a large plectrum. Essential in kabuki theater and geisha performances, its percussive plucking creates dramatic and expressive musical narratives.",
        soundUrl: "/Sounds/Shamisen.mp3",
        type: "string",
      },
      {
        id: "taiko-japan",
        name: "Taiko",
        country: "Japan",
        image: "https://efaoyrkjedg.exactdn.com/wp-content/uploads/2013/03/11142953/Taikoza-Japanese-Drumming-and-Dancing-program.jpg?strip=all&lossy=1&quality=50&ssl=1",
        story:
          "Taiko are traditional Japanese drums of various sizes. Used in festivals, ceremonies, and performances, their powerful rhythms embody the spirit of Japanese culture and community celebration.",
        soundUrl: "/Sounds/Taiko.mp3",
        type: "percussion",
      },
      {
        id: "biwa-japan",
        name: "Biwa",
        country: "Japan",
        image: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/503051/1019251/main-image",
        story:
          "The biwa is a short-necked lute used in narrative storytelling. With its distinctive pear-shaped body and four strings, it accompanies epic tales and historical narratives in Japanese tradition.",
        soundUrl: "/Sounds/Biwa.mp3",
        type: "string",
      },
      {
        id: "fue-japan",
        name: "Fue",
        country: "Japan",
        image: "https://www.senzoku-online.jp/TMDL/gallery/04-hue/p3.jpg",
        story:
          "The fue is a traditional Japanese flute family including various types. Used in gagaku court music and folk traditions, these flutes create delicate, airy melodies that evoke natural landscapes.",
        soundUrl: "/Sounds/Fue.mp3",
        type: "wind",
      },
    ],
    Brazil: [
      {
        id: "berimbau-brazil",
        name: "Berimbau",
        country: "Brazil",
        image: "https://casadelacultura.gob.ec/wp-content/uploads/2021/06/BERIBAU-1024x615.jpg",
        story:
          "The berimbau is a single-string percussion instrument central to capoeira. Its rhythmic patterns guide the martial art's movements and create the hypnotic atmosphere of this Afro-Brazilian tradition.",
        soundUrl: "/Sounds/Berimbau.mp3",
        type: "percussion",
      },
      {
        id: "cuica-brazil",
        name: "Cuíca",
        country: "Brazil",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD3iBrPbhwjbOBjYYl_z2TJarpyEov8KrHFzQ0FI-geiJJEDCMEyHV-Z6o8isKxdhbYcZ7iDGtuwslpntEFqumgB40JUpO1u0VW4KjD5crMfZ4lVT1rxhAZrYx6zbYTn62PobcGAv57xo/s1600/cuica.jpg",
        story:
          "The cuíca is a friction drum that produces a distinctive squeaking sound. Essential in samba music, it creates the characteristic 'laughing' or 'crying' sounds that define Brazilian carnival rhythms.",
        soundUrl: "/Sounds/Cuíca.mp3",
        type: "percussion",
      },
      {
        id: "pandeiro-brazil",
        name: "Pandeiro",
        country: "Brazil",
        image: "https://www.stars-music.com/medias/pearl/cropped-bp510-pandeiro-10-137185.png",
        story:
          "The pandeiro is a Brazilian tambourine with metal jingles. Fundamental to samba, choro, and forró music, it requires complex hand techniques to produce its intricate rhythmic patterns.",
        soundUrl: "/Sounds/Pandeiro.mp3",
        type: "percussion",
      },
      {
        id: "cavaquinho-brazil",
        name: "Cavaquinho",
        country: "Brazil",
        image: "https://cavaquinhos.pt/images/continente/historia/01.jpg",
        story:
          "The cavaquinho is a small four-stringed guitar central to Brazilian popular music. Its bright, cheerful sound is essential in samba, choro, and pagode, providing rhythmic and melodic accompaniment.",
        soundUrl: "/Sounds/Cavaquinho.mp3",
        type: "string",
      },
    ],
    Spain: [
      {
        id: "flamenco-guitar-spain",
        name: "Flamenco Guitar",
        country: "Spain",
        image: "https://turkowiakguitars.com/wp-content/uploads/2022/04/IMG_2027-1920px.jpg",
        story:
          "The flamenco guitar is lighter and more percussive than classical guitars. Its bright, aggressive sound supports the passionate rhythms and melodies of flamenco music and dance.",
        soundUrl: "/Sounds/Flamenco Guitar.mp3",
        type: "string",
      },
      {
        id: "cajon-spain",
        name: "Cajón",
        country: "Spain",
        image: "https://www.carlbouchaux.com/wp-content/uploads/2017/02/Cajon.png",
        story:
          "The cajón is a box-shaped percussion instrument played by slapping the front face. Originally from Peru but adopted in flamenco, it provides the rhythmic foundation for modern flamenco performances.",
        soundUrl: "/Sounds/Cajón.mp3",
        type: "percussion",
      },
    ],
    China: [
      {
        id: "erhu-china",
        name: "Erhu",
        country: "China",
        image: "https://wesomeka.wesleyan.edu/vim2/files/original/e0f7acd3ee95af607d3881f9b8ff1f17.JPG",
        story:
          "The erhu is a two-stringed bowed instrument known as the Chinese violin. Its expressive, sometimes melancholic sound can mimic human voice and is central to Chinese classical and folk music.",
        soundUrl: "/Sounds/Erhu.mp3",
        type: "string",
      },
      {
        id: "guzheng-china",
        name: "Guzheng",
        country: "China",
        image: "https://i.ytimg.com/vi/VUr2S8w6SUI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTwud-i2A6ejjNXYQk-wrQXlZS7w",
        story:
          "The guzheng is a plucked string instrument with 21 strings. Its elegant, flowing melodies have graced Chinese music for over 2,500 years, representing refinement and cultural sophistication.",
        soundUrl: "/Sounds/Guzheng.mp3",
        type: "string",
      },
      {
        id: "dizi-china",
        name: "Dizi",
        country: "China",
        image: "https://www.uscycs.org/uploads/1/2/0/5/120584729/77_orig.jpg",
        story:
          "The dizi is a transverse bamboo flute with a unique membrane that gives it a bright, buzzing timbre. Essential in Chinese opera and folk music, it can express both joy and sorrow.",
        soundUrl: "/Sounds/Dizi.mp3",
        type: "wind",
      },
      {
        id: "pipa-china",
        name: "Pipa",
        country: "China",
        image: "https://images.squarespace-cdn.com/content/v1/5730074b27d4bdb4d519cd05/1569696488126-P35HZNTVU3WDM4BQH4X0/20190928_144654.jpg?format=2500w",
        story:
          "The pipa is a four-stringed lute with a pear-shaped body. Known for its wide range of techniques and expressive capabilities, it can produce everything from gentle melodies to dramatic battle scenes.",
        soundUrl: "/Sounds/Pipa.mp3",
        type: "string",
      },
    ],
    Mexico: [
      {
        id: "mariachi-guitar-mexico",
        name: "Mariachi Guitar",
        country: "Mexico",
        image: "https://casablancamexican.com/wp-content/uploads/2016/02/El-Mariachi-Casa-Blanca-Mexican-Restauran.jpg",
        story:
          "The mariachi guitar provides harmonic foundation for mariachi ensembles. Its warm, full sound supports the passionate vocals and creates the romantic atmosphere of traditional Mexican music.",
        soundUrl: "/Sounds/Mariachi Guitar.mp3",
        type: "string",
      },
      {
        id: "vihuela-mexico",
        name: "Vihuela",
        country: "Mexico",
        image: "https://www.hermesmusic.com/cdn/shop/files/H_-Jimenez-El-Quetzal-Vihuela-mariachi-www_hermesmusic_com.jpg?v=1715471087",
        story:
          "The vihuela is a high-pitched five-string guitar essential to mariachi music. Its bright, rhythmic strumming provides the characteristic 'galloping' rhythm that drives mariachi performances.",
        soundUrl: "/Sounds/Vihuela.mp3",
        type: "string",
      },
      {
        id: "guitarron-mexico",
        name: "Guitarrón",
        country: "Mexico",
        image: "https://m.media-amazon.com/images/I/31PvjqAyXnS._SS1000_.jpg",
        story:
          "The guitarrón is a large, deep-bodied bass guitar that provides the rhythmic and harmonic foundation of mariachi music. Its deep, resonant tones anchor the ensemble's sound.",
        soundUrl: "/Sounds/Guitarrón.mp3",
        type: "string",
      },
      {
        id: "maracas-mexico",
        name: "Maracas",
        country: "Mexico",
        image: "https://www.tts-group.co.uk/dw/image/v2/AAXQ_PRD/on/demandware.static/-/Sites-TTSGroupE-commerceMaster/default/dw751e34ef/images/hi-res/1011001_00_MES1334_1.jpg?sw=443",
        story:
          "Maracas are shaken percussion instruments made from gourds filled with seeds or beads. Essential in Mexican folk music, they provide rhythmic accompaniment and festive atmosphere to celebrations.",
        soundUrl: "/Sounds/Maracas.mp3",
        type: "percussion",
      },
    ],
    Ireland: [
      {
        id: "bodhrán-ireland",
        name: "Bodhrán",
        country: "Ireland",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/177-bodhran-playing-hinnerk-ruemenapf-0067.jpg/250px-177-bodhran-playing-hinnerk-ruemenapf-0067.jpg",
        story:
          "The bodhrán is a frame drum played with a wooden beater called a tipper. Central to Irish traditional music, its rhythmic patterns drive reels, jigs, and other Celtic dance tunes.",
        soundUrl: "/Sounds/Bodhrán.mp3",
        type: "percussion",
      },
      {
        id: "fiddle-ireland",
        name: "Irish Fiddle",
        country: "Ireland",
        image: "https://i0.wp.com/stringsmagazine.com/wp-content/uploads/2020/04/Fiddler.stock_-e1647365044591.jpg?fit=800%2C482&ssl=1",
        story:
          "The Irish fiddle is identical to a violin but played in a distinctive style. Its lively, ornamented melodies are the heart of Irish traditional music, expressing both joy and melancholy.",
        soundUrl: "/Sounds/Irish Fiddle.mp3",
        type: "string",
      },
      {
        id: "tin-whistle-ireland",
        name: "Tin Whistle",
        country: "Ireland",
        image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152979580/settings_images/283528f-f2ed-063-aca4-012c88f7758f_How_Hard_is_it_to_Learn_the_Tin_Whistle.jpg",
        story:
          "The tin whistle is a simple six-hole flute that produces sweet, clear tones. Easy to learn but difficult to master, it's often the first instrument learned by Irish traditional musicians.",
        soundUrl: "/Sounds/Tin Whistle.mp3",
        type: "wind",
      },
      {
        id: "uilleann-pipes-ireland",
        name: "Uilleann Pipes",
        country: "Ireland",
        image: "https://cdn.prod.website-files.com/61432560ffbcf0596f057fc1/6167eb074a866c800c072da9_uilleann-pipes.jpg",
        story:
          "The uilleann pipes are complex bagpipes unique to Ireland. Capable of playing in multiple octaves with intricate ornamentation, they're considered among the most sophisticated bagpipes in the world.",
        soundUrl: "/Sounds/Uilleann Pipes.mp3",
        type: "wind",
      },
    ],
  }

  const handleCountrySelect = async (country: string) => {
    setSelectedCountry(country)
    setLoading(true)

    setTimeout(() => {
      setInstruments(mockInstruments[country] || [])
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">SoundVoyage</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore traditional musical instruments from cultures around the world. Click on a country to discover its
            musical heritage.
          </p>
        </motion.section>

        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InteractiveMap onCountrySelect={handleCountrySelect} />
        </motion.section>

        {selectedCountry && (
          <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Traditional Instruments from {selectedCountry}
            </h2>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instruments.map((instrument, index) => (
                  <motion.div
                    key={instrument.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <InstrumentCard instrument={instrument} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>
        )}
      </main>

      <Footer />
    </div>
  )
}
