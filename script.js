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
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
  element.getElementsByClassName("artistname")[0].innerText =
    songs[i].songArtist;
  element.getElementsByTagName("i")[0].id = i;
});

// Function to update time and progress bar
function updateTime() {
  // Update current time
  let currentTimeMinutes = Math.floor(audioElement.currentTime / 60);
  let currentTimeSeconds = Math.floor(audioElement.currentTime % 60);
  startTime.firstElementChild.textContent = String(currentTimeMinutes).padStart(
    2,
    "0"
  );
  startTime.lastElementChild.textContent = String(currentTimeSeconds).padStart(
    2,
    "0"
  );

  // Update end time
  let durationMinutes = Math.floor(audioElement.duration / 60);
  let durationSeconds = Math.floor(audioElement.duration % 60);
  endTime.firstElementChild.textContent = String(durationMinutes).padStart(
    2,
    "0"
  );
  endTime.lastElementChild.textContent = String(durationSeconds).padStart(
    2,
    "0"
  );

  // Update progress bar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;

  // Check if progress is 100% and play next song
  if (progress == 100) {
    if (songIndex < songs.length - 1) {
      songIndex++;
      playSong(songIndex);
    }
  }
}

// Function to play a song
function playSong(index) {
  audioElement.src = songs[index].filePath; // Update the source of the audio element
  masterSongName.innerHTML = songs[index].songName;
  masterSongArtist.innerHTML = songs[index].songArtist;
  songThumbnail.style.backgroundImage = `url('${songs[index].coverPath}')`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
}

// Loop through each songcard element
songcard.forEach((element, i) => {
  element.addEventListener("click", () => {
    songIndex = i;
    playSong(songIndex);
  });
});

songPrevious.addEventListener("click", () => {
  if (songIndex == 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }
  playSong(songIndex);
});

songNext.addEventListener("click", () => {
  if (songIndex == songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  playSong(songIndex);
});

// Event listeners for seek buttons
backSeek.addEventListener("click", () => {
  audioElement.currentTime -= 5;
});

forSeek.addEventListener("click", () => {
  audioElement.currentTime += 5;
});

// Event listener for master play button
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

// Event listener for volume change
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

// Event listener for progress bar change
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// Event listener for volume bar change
vBar.addEventListener("change", () => {
  audioElement.volume = vBar.value / 100;
});

// Event listener for mute button
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

// Keyboard shortcuts
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

// Update time and progress bar on timeupdate event
audioElement.addEventListener("timeupdate", updateTime);
