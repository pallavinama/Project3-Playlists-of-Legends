let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/playlistoflegends",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

let championSeeds = [
  {
    name: "Aatrox",
    title: "the Darkin Blade",
    role: "Fighter",
    image: "Aatrox.png",
    lore:
      "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
    genre: "",
  },
  {
    name: "Ahri",
    title: "the Nine-Tailed Fox",
    role: "Mage",
    image: "Ahri.png",
    lore: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy. She revels in toying with her prey by manipulating their emotions before devouring their life essence. Despite her predatory nature, Ahri retains a sense of empathy as she receives flashes of memory from each soul she consumes.",
    genre: "",
  },
  {
    name: "Akali",
    title: "the Rogue Assassin",
    role: "Assassin",
    image: "Akali.png",
    lore: "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
    genre: "",
  },
  {
    name: "Alistar",
    title: "the Minotaur",
    role: "Tank",
    image: "Alistar.png",
    lore: "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
    genre: "",
  },
  {
    name: "Amumu",
    title: "the Sad Mummy",
    role: "Tank",
    image: "Amumu.png",
    lore: "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
    genre: "",
  },
];

db.Champion.deleteMany({})
  .then(() => db.Champion.collection.insertMany(championSeeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
