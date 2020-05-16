import React from "react";
import axios from "axios";

const SpotifyPlaylist = () => {
    const charMusic = [
        ({266: ["Aatrox", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({103: ["Ahri", "k-pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DX14fiWYoe7Oh"]}),
        ({84: ["Akali", "k-hip hop", "https://open.spotify.com/embed/playlist/37i9dQZF1DWW46Vfs1oltB"]}),
        ({12: ["Alistar", "latin pop", "https://open.spotify.com/embed/playlist/2kKzN3kRYDzBctlaWs7CP2"]}),
        ({32: ["Amumu", "blues", "https://open.spotify.com/embed/playlist/37i9dQZF1DXd9rSDyQguIk"]}),
        ({34: ["Anivia", "R&B", "https://open.spotify.com/embed/playlist/37i9dQZF1DX4SBhb3fqCJd"]}),
        ({1: ["Annie", "nursery rhymes", "https://open.spotify.com/embed/playlist/3Dque26tKZMMRIUtjpBXHJ"]}),
        ({22: ["Ashe", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({136: ["Aurelion Sol", "space ambient", "https://open.spotify.com/embed/playlist/5MTGyQmulkcK6VjLlZyI0O"]}),
        ({268: ["Azir", "pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({432: ["Bard", "bard", "https://open.spotify.com/embed/playlist/6L0JnTTHHQJfcqf8U8WqvQ"]}),
        ({53: ["Blitzcrank", "techno", "https://open.spotify.com/embed/playlist/3QEYvCsVXZj8KuzE0bDmcI"]}),
        ({63: ["Brand", "Pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({201: ["Braum", "country", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"]}),
        ({51: ["Caitlyn", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({164: ["Camille", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({69: ["Cassiopeia", "pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({31: ["Cho'Gath", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({42: ["Corki", "old school rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1spT6G94GFC"]}),
        ({122: ["Darius", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({131: ["Diana", "techno", "https://open.spotify.com/embed/playlist/3QEYvCsVXZj8KuzE0bDmcI"]}),
        ({36: ["Dr. Mundo", "Rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({119: ["Draven", "Metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({245: ["Ekko", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({60: ["Elise", "dark minimal techno", "https://open.spotify.com/embed/playlist/0Y4FAiSXVLZms2IDy7BdsU"]}),
        ({28: ["Evelynn", "dark minimal techno", "https://open.spotify.com/embed/playlist/0Y4FAiSXVLZms2IDy7BdsU"]}),
        ({81: ["Ezreal", "disco", "https://open.spotify.com/embed/playlist/37i9dQZF1DX2GKumqRIZ7g"]}),
        ({9: ["Fiddlesticks", "acoustic chill", "https://open.spotify.com/embed/playlist/37i9dQZF1DWYGZAMYFDM8S"]}),
        ({114: ["Fiora", "rap francais", "https://open.spotify.com/embed/playlist/4a3RNiNF7hljyo5KcV1cHo"]}),
        ({105: ["Fizz", "water", "https://open.spotify.com/embed/playlist/3mjDGZmAWzJP46TM2cJFFo"]}),
        ({3: ["Galio", "swedish electropop", "https://open.spotify.com/embed/playlist/0tzhiEaqJf7jAyUsfnWapv"]}),
        ({41: ["Gangplank", "sea shanties", "https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"]}),
        ({86: ["Garen", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({150: ["Gnar", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({79: ["Gragas", "reggaeton flow", "https://open.spotify.com/embed/playlist/5UX5ntuv8pbq9Z2kteVNB5"]}),
        ({104: ["Graves", "sea shanties", "https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"]}),
        ({120: ["Hecarim", "Soft rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6xOPeSOGone"]}),
        ({74: ["Heimerdinger", "pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({420: ["Illaoi", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({39: ["Irelia", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({427: ["Ivern", "country", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"]}),
        ({40: ["Janna", "country", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"]}),
        ({59: ["Jarvan IV", "Classic rock", "https://open.spotify.com/embed/playlist/5BygwTQ3OrbiwVsQhXFHMz"]}),
        ({24: ["Jax", "Metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({126: ["Jayce", "techno", "https://open.spotify.com/embed/playlist/3QEYvCsVXZj8KuzE0bDmcI"]}),
        ({202: ["Jhin", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({222: ["Jinx", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({145: ["Kai'Sa", "Pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({429: ["Kalista", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({43: ["Karma", "R&B", "https://open.spotify.com/embed/playlist/37i9dQZF1DX4SBhb3fqCJd"]}),
        ({30: ["Karthus", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({38: ["Kassadin", "pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({55: ["Katarina", "dance", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]}),
        ({10: ["Kayle", "dance", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]}),
        ({141: ["Kayn", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({85: ["Kennen", "pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"]}),
        ({121:["Kha'Zix", "vapor trap", "https://open.spotify.com/embed/playlist/7o7kEPpjIe3yRRPbDFJSIR"]}),
        ({203: ["Kindred", "opera", "https://open.spotify.com/embed/playlist/2PjVPkj4a9kBvQIXaZ6UUt"]}),
        ({240:["Kled", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({96: ["Kog'Maw", "dance", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]}),
        ({7: ["LeBlanc", "hard rock", "https://open.spotify.com/embed/playlist/5cwIrjOMWTiGCYB5Z9oQix"]}),
        ({64: ["Lee Sin", "gregorian chants", "https://open.spotify.com/embed/playlist/5dEIAWS7FNY5ZKMKPHSQkw"]}),
        ({89: ["Leona", "Soft rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6xOPeSOGone"]}),
        ({127: ["Lissandra", "opera", "https://open.spotify.com/embed/playlist/2PjVPkj4a9kBvQIXaZ6UUt"]}),
        ({236: ["Lucian", "rap", "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"]}),
        ({117: ["Lulu", "R&B", "https://open.spotify.com/embed/playlist/37i9dQZF1DX4SBhb3fqCJd"]}),
        ({99: ["Lux", "dance", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]}),
        ({54: ["Malphite", "rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U"]}),
        ({90: ["Malzahar", "dance", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]}),
        ({57: ["Maokai", "country", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"]}),
        ({11: ["Master Yi", "post-grunge", "https://open.spotify.com/embed/playlist/37i9dQZF1DWVwr24yj95lH"]}),
        ({21: ["Miss Fortune", "electro house", "https://open.spotify.com/embed/playlist/317O0e8iWJLClLGDKtieRe"]}),
        ({82: ["Mordekaiser", "gothic metal", "https://open.spotify.com/embed/playlist/76PSrknbBdEiQxvoinpYAm"]}),
        ({25: ["Morgana", "gauze pop", "https://open.spotify.com/embed/playlist/4E6S3FTk9Pw4rGquldcIBc"]}),
        ({267: ["Nami", "water", "https://open.spotify.com/embed/playlist/3mjDGZmAWzJP46TM2cJFFo"]}),
        ({75: ["Nasus", "Soft rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6xOPeSOGone"]}),
        ({111: ["Nautilus", "video game music", "https://open.spotify.com/embed/playlist/7lv2JeRaHu2unEJgENSXoP"]}),
        ({76: ["Nidalee", "new wave", "https://open.spotify.com/embed/playlist/6G1YyVYzXjAbZ32bOLx7Em"]}),
        ({56: ["Nocturne", "reggaeton", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8SfyqmSFDwe"]}),
        ({20: ["Nunu & Willump", "EDM", "https://open.spotify.com/embed/playlist/3Di88mvYplBtkDBIzGLiiM"]}),
        ({2: ["Olaf", "viking metal", "https://open.spotify.com/embed/playlist/5zJUWXCt4CSyMovh8kGkqO"]}),
        ({61: ["Orianna", "disco house", "https://open.spotify.com/embed/playlist/3p1B8RM5G6WJH2B558GMpQ"]}),
        ({516: ["Ornn", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({80: ["Pantheon", "instrumental death metal", "https://open.spotify.com/embed/playlist/2vivknVOeJD7BUYnnuztrE"]}),
        ({78: ["Poppy", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({555: ["Pyke", "grunge", "https://open.spotify.com/embed/playlist/37i9dQZF1DX11ghcIxjcjE"]}),
        ({133: ["Quinn", "speed metal", "https://open.spotify.com/embed/playlist/1REn1DbDB5SwaHTY6Dj53V"]}),
        ({497:["Rakan", "deep groove house", "https://open.spotify.com/embed/playlist/4N8MlfkShNcpyyBjaLbltx"]}),
        ({33:["Rammus", "speed metal", "https://open.spotify.com/embed/playlist/1REn1DbDB5SwaHTY6Dj53V"]}),
        ({421:["Rek'Sai", "lo-fi beats", "https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM"]}),
        ({58:["Renekton", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({107:["Rengar", "hard rock", "https://open.spotify.com/embed/playlist/5cwIrjOMWTiGCYB5Z9oQix"]}),
        ({92:["Riven", "stomp and holler", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8gLrc0tlHvS"]}),
        ({68:["Rumble", "electronic trap", "https://open.spotify.com/embed/playlist/4Q5I1TYJxp7OWcCjSL91Hj"]}),
        ({13: ["Ryze", "hip hop", "https://open.spotify.com/embed/playlist/37i9dQZF1DX7Mq3mO5SSDc"]}),
        ({113:["Sejuani", "alternative rock", "https://open.spotify.com/embed/playlist/6UkcmQf7tYlGKX18IL8cyd"]}),
        ({35:["Shaco", "funk", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6drTZKzZwSo"]}),
        ({98:["Shen", "Pop edm", "https://open.spotify.com/embed/playlist/4aUEH3uhbofktrFkXOOaKj"]}),
        ({102:["Shyvana", "melodic rap", "https://open.spotify.com/embed/playlist/7ARx895Fpc4tIVqb10Q2tr"]}),
        ({27:["Singed", "melodic rap", "https://open.spotify.com/embed/playlist/7ARx895Fpc4tIVqb10Q2tr"]}),
        ({14:["Sion", "metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DWWOaP4H0w5b0"]}),
        ({15:["Sivir", "desert rock", "https://open.spotify.com/embed/playlist/5e8TsnrR4KWy0ueFQdFnd7"]}),
        ({72:["Skarner", "psychedelic rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DWSDoVybeQisg"]}),
        ({37:["Sona", "EDM", "https://open.spotify.com/embed/playlist/3Di88mvYplBtkDBIzGLiiM"]}),
        ({16:["Soraka", "country", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1lVhptIYRda"]}),
        ({50:["Swain", "modern rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX1helbHcrYM1"]}),
        ({134:["Syndra", "electropop", "https://open.spotify.com/embed/playlist/2a5i2ZtEXGKwVGL16J8N0p"]}),
        ({223:["Tahm Kench", "country rock", "https://open.spotify.com/embed/playlist/0v4DvG8cBpHGOBOxVuVvgV"]}),
        ({163:["Taliyah", "Soft rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6xOPeSOGone"]}),
        ({91:["Talon", "alt emo", "https://open.spotify.com/embed/playlist/0PRV0xDSm6ynDR0oVGAS1a"]}),
        ({44:["Taric", "Glam Rock", "https://open.spotify.com/embed/playlist/3LDsuqXWE1fuMHLUcog9A7"]}),
        ({17:["Teemo", "electro house", "https://open.spotify.com/embed/playlist/317O0e8iWJLClLGDKtieRe"]}),
        ({412:["Thresh", "country rock", "https://open.spotify.com/embed/playlist/0v4DvG8cBpHGOBOxVuVvgV"]}),
        ({18:["Tristana", "power pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DX5W4wuxak2hE"]}),
        ({48:["Trundle", "garage rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DXbMYUPb05hjJ"]}),
        ({23:["Tryndamere", "alt metal", "https://open.spotify.com/embed/playlist/3hMuAfaMcg9dWAwNTTuvXR"]}),
        ({4:["Twisted Fate", "Smooth jazz", "https://open.spotify.com/embed/playlist/37i9dQZF1DXdwTUxmGKrdN"]}),
        ({29:["Twitch", "Rap metal", "https://open.spotify.com/embed/playlist/6CTIvv7IVwwUE781bmb6mf"]}),
        ({77:["Udyr", "Afrobeat", "https://open.spotify.com/embed/playlist/4HXMPRVKOAfzoUwws8fqHW"]}),
        ({6:["Urgot", "Industrial Metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DX29LQDcJ6Xy7"]}),
        ({110:["Varus", "Europop", "https://open.spotify.com/embed/playlist/0gr8wuZtmPIiPLm1v7X0Py"]}),
        ({67:["Vayne", "hip hop", "https://open.spotify.com/embed/playlist/37i9dQZF1DX7Mq3mO5SSDc"]}),
        ({45:["Veigar", "electro pop", "https://open.spotify.com/embed/playlist/2a5i2ZtEXGKwVGL16J8N0p"]}),
        ({161:["Vel'Koz", "electro pop", "https://open.spotify.com/embed/playlist/2a5i2ZtEXGKwVGL16J8N0p"]}),
        ({254:["Vi", "Punk Rock", "https://open.spotify.com/embed/playlist/39sVxPTg7BKwrf2MfgrtcD"]}),
        ({112:["Viktor", "Electro-Industrial", "https://open.spotify.com/embed/playlist/0ZVLhUadGf0IkCOecGIgtf"]}),
        ({8:["Vladamir", "Dark Ambient", "https://open.spotify.com/embed/playlist/1mhHpC0idew8lgWQkEJnOL"]}),
        ({106:["Volibear", "Celtic Metal", "https://open.spotify.com/embed/playlist/2vtxc6HXhrdMDBtmbnAc9q"]}),
        ({19:["Warwick", "Industrial Metal", "https://open.spotify.com/embed/playlist/37i9dQZF1DX29LQDcJ6Xy7"]}),
        ({19:["Wukong", "Comedy", "https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A4PDKZIGNpydaoI7pZuxyh7"]}),
        ({498:["Xayah", "Pop Punk", "https://open.spotify.com/embed/playlist/37i9dQZF1DXa9wYJr1oMFq"]}),
        ({101:["Xerath", "Electropunk", "https://open.spotify.com/embed/playlist/1KZDrVv1mAvRsXCnrEOlbK"]}),
        ({5:["Xin Zhao", "Chinese Rock", "https://open.spotify.com/embed/playlist/3CgsCde2Ol4MYOHqVdU56S"]}),
        ({157:["Yasuo", "J-Rock", "https://open.spotify.com/embed/playlist/37i9dQZF1DX6ntWKaOqGAp"]}),
        ({83:["Yorick", "Doom Metal", "https://open.spotify.com/embed/playlist/2U3Th7plQNPh2zgekCyyXm"]}),
        ({154:["Zac", "Future House", "https://open.spotify.com/embed/playlist/7DyH8C8HXh5RzYKKEy2BQI"]}),
        ({238:["Zed", "Anime Rock", "https://open.spotify.com/embed/playlist/7iGccimTeIzPtW2PjsFeVI"]}),
        ({115: ["Ziggs", "Industrial Techno", "https://open.spotify.com/embed/playlist/4RM93CShh3QYRKPnHmChSm"]}),
        ({26: ["Zilean", "EDM", "https://open.spotify.com/embed/playlist/3Di88mvYplBtkDBIzGLiiM"]}),
        ({142: ["Zoe", "Bubblegum Pop", "https://open.spotify.com/embed/playlist/0TpyQSkJmYJJ7SGQgGXDBG"]}),
        ({143: ["Zyra", "Dance Pop", "https://open.spotify.com/embed/playlist/37i9dQZF1DX8tZsk68tuDw"]})
    ]
    return (
        <>
        <div className="row">
        <div className="col">
          <iframe
            // src="https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"
            src="https://embed.spotify.com/follow/1/?uri=spotify:artist:4ikPJGH7I7IyhdBJs1GMhh&size=detail&theme=light"
            width="500"
            height="75"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <iframe
            src="https://open.spotify.com/embed/playlist/2DsYfCPWDxZtFzHRj9mO4h"
            // src="https://embed.spotify.com/follow/1/?uri=spotify:artist:4ikPJGH7I7IyhdBJs1GMhh&size=detail&theme=light"
            width="500"
            height="500"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div> 
      </>
    )
};

export default SpotifyPlaylist;