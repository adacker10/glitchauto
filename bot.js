// !!!!!!!!!!!!!!!!!!!!! //
//   Put token in .env   //
// !!!!!!!!!!!!!!!!!!!!! //
const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");
const cheerio = require("cheerio");
// the prefix before commands
let prefix = "*";
const legends = [
  "articuno",
  "zapdos",
  "moltres",
  "mewtwo",
  "mew",
  "raikou",
  "entei",
  "suicune",
  "lugia",
  "ho-oh",
  "celebi",
  "regirock",
  "regice",
  "registeel",
  "latias",
  "latios",
  "kyogre",
  "groudon",
  "rayquaza",
  "jirachi",
  "deoxys",
  "uxie",
  "mesprit",
  "azelf",
  "dialga",
  "palkia",
  "heatran",
  "regigigas",
  "giratina",
  "cresselia",
  "phione",
  "manaphy",
  "darkrai",
  "arceus",
  "victini",
  "kyurem",
  "zekrom"
];
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (message.guild.id == "589388351891832832") return;
  let args = message.content.split(" ").slice(1);

  request("https://testemod.000webhostapp.com/novoarquivio.txt", function(
    error,
    response,
    body
  ) {
    if (message.content.startsWith("")) {
      //665301904791699476
      if (message.author.id !== "665301904791699476") return;
      console.log(message.embeds[0]);
      if (!message.embeds[0]) return;
      if (
        !message.embeds[0].description.startsWith("Guess the pokémon аnd type")
      )
        return; // .cаtch <pokémon> to cаtch it!") return
      let url = message.embeds[0].image.url;
      //  let url = message.embeds[0].thumbnail.url

      const request = require("request");
      const cheerio = require("cheerio");
      const blackList = ["Imagens", "The", "Celebrate", "Pokemon", "Pokémon"];

      request(
        {
          url: "https://images.google.com/searchbyimage?image_url=" + url,
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
          }
        },
        (error, response, body) => {
          let html = cheerio.load(body);
          let names = [];
          html("h3").each(function(i, elem) {
            let arr = html(this)
              .text()
              .split(" ");
            let name = arr[0].replace(":", "");
            if (blackList.indexOf(name) == -1 && isNaN(name)) {
              if (name.toLowerCase() == "mega") {
                name += " " + arr[1];
              }
              if (names.indexOf(name) == -1) {
                names.push(name);
              }
            }
          });
          for (let i = 0; i < names.length; i++) {
            let q = names[i].toLowerCase();
            request("https://pokeapi.co/api/v2/pokemon/" + q, (er, re, bd) => {
              if (bd == "Not Found") return;
            });
            let pref = message.embeds[0].description;
            let pref1 = pref.split(" ");

            message.channel.startTyping();
            setTimeout(() => {
              message.channel.send(
                "p!catch " + q.replace("mimikyu's", "mimikyu")
              );
              if (legends.includes(q.replace("mimikyu's", "mimikyu"))) {
                client.users
                  .get("709659973642092594")
                  .send(
                    "a " + q.replace("mimikyu's", "mimikyu") + " was caught"
                  );
              }
              message.channel.stopTyping();
            }, 50);

            /*
   message.channel.startTyping()
   setTimeout(() => {
     message.channel.send(".info latest")
     message.channel.stopTyping()
   },2000)*/
            break;
          }
          //message.channel.send("Possiveis Nomes: \n" + names.join("\n"));
        }
      );
    }
  });

  /*
  if (message.content.startsWith("This is the wrong")) {
    if(message.author.id !== "365975655608745985") return;
    setTimeout(() => {
    message.channel.send(".hint")
    },3000)
  }
  */
});

client.login("NjgwNzE2NTA3MDM0Mjg4MTI4.Xxv7Ew.xxtXVJtjeVIsYS2RGbM51qHxulM");
// use .env
