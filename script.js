let audioElement = new Audio("songs/3.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let vBar = document.getElementById("vBar");
let muteButton = document.getElementById("muteButton");
let startTime = document.getElementById("startTime");
let endTime = document.getElementById("endTime");
let masterSongName = document.getElementById("masterSongName");
let masterSongArtist = document.getElementById("masterSongArtist");
let card = Array.from(document.getElementsByClassName("card"));
let songIndex = 2;
let songThumbnail = document.getElementById("songThumbnail");
let songPrevious = document.getElementById("songPrevious");
let songNext = document.getElementById("songNext");
let forSeek = document.getElementById("forSeek");
let backSeek = document.getElementById("backSeek");
let songs = [
  {
    songName: "Perfect",
    songArtist: "Ed Sheeran",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpeg",
  },
  {
    songName: "Until I Found Her",
    songArtist: "Stephan Sanchez",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpeg",
  },
  {
    songName: "Make You Mine",
    songArtist: "Public",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpeg",
  },
  {
    songName: "Deja-vu",
    songArtist: "Olivia Rodrigo",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpeg",
  },
  {
    songName: "Pehli Nazar Mein",
    songArtist: "Atif Aslam",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpeg",
  },
  {
    songName: "Ajab Si",
    songArtist: "KK",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpeg",
  },
  {
    songName: "Taake Jhake",
    songArtist: "Arijit Singh",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpeg",
  },
  {
    songName: "Chaleya",
    songArtist: "Arijit Singh",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpeg",
  },
  {
    songName: "Photograph",
    songArtist: "Ed Sheeran",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpeg",
  },
  {
    songName: "Lover",
    songArtist: "Taylor Swift",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpeg",
  },
  {
    songName: "Night We Met",
    songArtist: "Lord Huron",
    filePath: "songs/11.mp3",
    coverPath: "covers/11.jpeg",
  },
  {
    songName: "7 Years",
    songArtist: "Lukas Graham",
    filePath: "songs/12.mp3",
    coverPath: "covers/12.jpeg",
  },
  {
    songName: "Calm Down",
    songArtist: "Rema",
    filePath: "songs/13.mp3",
    coverPath: "covers/13.jpeg",
  },
  {
    songName: "Dusk Till Down",
    songArtist: "Sia ,Zayn",
    filePath: "songs/14.mp3",
    coverPath: "covers/14.jpeg",
  },
  {
    songName: "Maniac",
    songArtist: "Conan Grey",
    filePath: "songs/15.mp3",
    coverPath: "covers/15.jpeg",
  },
  {
    songName: "Sugar",
    songArtist: "Maroon 5",
    filePath: "songs/16.mp3",
    coverPath: "covers/16.jpeg",
  },
  {
    songName: "Brown Rang",
    songArtist: "Yo Yo Honey Singh",
    filePath: "songs/17.mp3",
    coverPath: "covers/17.jpeg",
  },
  {
    songName: "Baller",
    songArtist: "Shubh",
    filePath: "songs/3.mp3",
    coverPath: "covers/18.jpeg",
  },
  {
    songName: "Dil Nu",
    songArtist: "AP Dhillon",
    filePath: "songs/3.mp3",
    coverPath: "covers/19.jpeg",
  },
  {
    songName: "Check It Out",
    songArtist: "Paradox",
    filePath: "songs/3.mp3",
    coverPath: "covers/20.jpeg",
  },
];

let searchBar = document.getElementById("searchBar");
let songContainer = document.getElementById("songContainer");
searchBar.addEventListener("keyup", () => {
  let filter, i, txtValue;
  let div = songContainer.getElementsByClassName("songcard");
  filter = searchBar.value.toUpperCase();
  console.log(searchBar.value);
  for (i = 0; i < div.length; i++) {
    txtValue = div[i].textContent || div[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
});
let songcard = Array.from(document.getElementsByClassName("songcard"));
songcard.forEach((element, i) => {
  // i = Math.floor(Math.random() * 21);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
  element.getElementsByClassName("artistname")[0].innerText =
    songs[i].songArtist;
  element.getElementsByTagName("i")[0].id = i;
});
Array.from(document.getElementsByClassName("playNow")).forEach((element) => {
  element.addEventListener("click", (e) => {
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    masterSongArtist.innerHTML = songs[songIndex].songArtist;
    songThumbnail.style.backgroundImage = `url('covers/${songIndex + 1}.jpeg')`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
});

Array.from(document.getElementsByClassName("songItems")).forEach((element) => {
  element.addEventListener("click", (e) => {
    songIndex = parseInt(e.target.id);
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName;
    masterSongArtist.innerHTML = songs[songIndex].songArtist;
    songThumbnail.style.backgroundImage = `url('covers/${songIndex + 1}.jpeg')`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  });
});

songPrevious.addEventListener("click", () => {
  if (songIndex == 0) {
    songIndex = 19;
  } else {
    songIndex--;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  masterSongArtist.innerHTML = songs[songIndex].songArtist;
  songThumbnail.style.backgroundImage = `url('covers/${songIndex + 1}.jpeg')`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
songNext.addEventListener("click", () => {
  if (songIndex == 19) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  masterSongArtist.innerHTML = songs[songIndex].songArtist;
  songThumbnail.style.backgroundImage = `url('covers/${songIndex + 1}.jpeg')`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
backSeek.addEventListener("click", () => {
  audioElement.currentTime -= 5;
});
forSeek.addEventListener("click", () => {
  audioElement.currentTime += 5;
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
  }
});
audioElement.addEventListener("timeupdate", () => {
  endTime.firstChild.innerHTML = (
    "0" + parseInt(audioElement.duration / 60)
  ).slice(-2);
  endTime.lastChild.innerHTML = (
    "0" + parseInt(audioElement.duration % 60)
  ).slice(-2);
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  startTime.firstChild.innerHTML = (
    "0" + parseInt(audioElement.currentTime / 60)
  ).slice(-2);
  startTime.lastChild.innerHTML = (
    "0" + parseInt(audioElement.currentTime % 60)
  ).slice(-2);
  if (progress == 100) {
    songNext.click();
  }
});

audioElement.addEventListener("volumechange", () => {
  vBar.value = audioElement.volume * 100;
  if (vBar.value == 0) {
    muteButton.classList.remove("fa-volume-high");
    muteButton.classList.add("fa-volume-xmark");
  } else {
    muteButton.classList.remove("fa-volume-xmark");
    muteButton.classList.add("fa-volume-high");
  }
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

vBar.addEventListener("change", () => {
  audioElement.volume = vBar.value / 100;
});

muteButton.addEventListener("click", () => {
  if (audioElement.volume != 0) {
    audioElement.volume = 0;
    muteButton.classList.remove("fa-volume-high");
    muteButton.classList.add("fa-volume-xmark");
  } else {
    audioElement.volume = 0.1;
    muteButton.classList.remove("fa-volume-xmark");
    muteButton.classList.add("fa-volume-high");
  }
});

document.onkeydown = function (e) {
  if (e.which == 39) {
    audioElement.currentTime += 5;
  } else if (e.which == 37) {
    audioElement.currentTime -= 5;
  } else if (e.which == 38) {
    audioElement.volume += 0.1;
  } else if (e.which == 40) {
    audioElement.volume -= 0.1;
  } else if (e.which == 190) {
    songNext.click();
  } else if (e.which == 188) {
    songPrevious.click();
  } else if (e.which == 191) {
    if (audioElement.paused) {
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    } else {
      audioElement.pause();
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    }
  }
};
