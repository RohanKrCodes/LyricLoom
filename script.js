document.addEventListener("DOMContentLoaded", function () {
  const popularSongsContainer = document.getElementById("popularSongs");
  const trendingSongsContainer = document.getElementById("trendingSongs");
  const audio = new Audio();
  let currentSong = null;
  let songIndex = 0;
  let songs = [];

  function toggleSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("show-sidebar");
  }

  function createSongCard(song, index) {
    return `<div class="SongsCard" data-index="${index}">
                <img src="${song.coverPath}" alt="">
                <div class="plays">
                    <i style="color: rgb(214, 39, 98); font-size: 20px" class="fas fa-play"></i>
                </div>
                <div class="infos">
                    <div class="songName">${song.name}</div>
                    <div class="artist">${song.artist}</div>
                </div>
            </div>`;
  }

  function fetchSongsAndCovers() {
    // Simulated list of songs and covers (replace this with actual data)
    const popularSongs = [
      {
        name: "Perfect",
        artist: "Ed Sheeran",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpeg",
      },
      {
        name: "Until I Found Her",
        artist: "Stephan Sanchez",
        filePath: "songs/2.mp3",
        coverPath: "covers/2.jpeg",
      },
      {
        name: "Make You Mine",
        artist: "Public",
        filePath: "songs/3.mp3",
        coverPath: "covers/3.jpeg",
      },
      {
        name: "Deja-vu",
        artist: "Olivia Rodrigo",
        filePath: "songs/4.mp3",
        coverPath: "covers/4.jpeg",
      },
      {
        name: "Pehli Nazar Mein",
        artist: "Atif Aslam",
        filePath: "songs/5.mp3",
        coverPath: "covers/5.jpeg",
      },
      {
        name: "Ajab Si",
        artist: "KK",
        filePath: "songs/6.mp3",
        coverPath: "covers/6.jpeg",
      },
      {
        name: "Taake Jhake",
        artist: "Arijit Singh",
        filePath: "songs/7.mp3",
        coverPath: "covers/7.jpeg",
      },
      {
        name: "Chaleya",
        artist: "Arijit Singh",
        filePath: "songs/8.mp3",
        coverPath: "covers/8.jpeg",
      },
      {
        name: "Photograph",
        artist: "Ed Sheeran",
        filePath: "songs/9.mp3",
        coverPath: "covers/9.jpeg",
      },
      {
        name: "Lover",
        artist: "Taylor Swift",
        filePath: "songs/10.mp3",
        coverPath: "covers/10.jpeg",
      },
      // Add more songs here
    ];

    const trendingSongs = [
      {
        name: "Night We Met",
        artist: "Lord Huron",
        filePath: "songs/11.mp3",
        coverPath: "covers/11.jpeg",
      },
      {
        name: "7 Years",
        artist: "Lukas Graham",
        filePath: "songs/12.mp3",
        coverPath: "covers/12.jpeg",
      },
      {
        name: "Calm Down",
        artist: "Rema",
        filePath: "songs/13.mp3",
        coverPath: "covers/13.jpeg",
      },
      {
        name: "Dusk Till Down",
        artist: "Sia ,Zayn",
        filePath: "songs/14.mp3",
        coverPath: "covers/14.jpeg",
      },
      {
        name: "Maniac",
        artist: "Conan Grey",
        filePath: "songs/15.mp3",
        coverPath: "covers/15.jpeg",
      },
      {
        name: "Sugar",
        artist: "Maroon 5",
        filePath: "songs/16.mp3",
        coverPath: "covers/16.jpeg",
      },
      {
        name: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        filePath: "songs/17.mp3",
        coverPath: "covers/17.jpeg",
      },
      {
        name: "Baller",
        artist: "Shubh",
        filePath: "songs/18.mp3",
        coverPath: "covers/18.jpeg",
      },
      {
        name: "Dil Nu",
        artist: "AP Dhillon",
        filePath: "songs/19.mp3",
        coverPath: "covers/19.jpeg",
      },
      {
        name: "Check It Out",
        artist: "Paradox",
        filePath: "songs/20.mp3",
        coverPath: "covers/20.jpeg",
      },
      // Add more songs here
    ];

    // Simulate asynchronous behavior using Promise
    return new Promise((resolve, reject) => {
      // Simulate delay for fetching data
      setTimeout(() => {
        resolve([popularSongs, trendingSongs]);
      }, 1000); // Adjust the delay as needed
    });
  }

  function playSong(song) {
    audio.src = song.filePath;
    audio.play();
    updatePlayerUI(song);
    updateLibraryUI(song);
    currentSong = song;
    const songCard = document.querySelector(
      `.SongsCard[data-index="${songIndex}"]`
    );
    if (songCard) {
      songCard.classList.add("playing");
    }
  }

  function pauseSong() {
    audio.pause();
  }

  function updatePlayerUI(song) {
    const songInfo = document.querySelector(".song-info");
    const songImg = songInfo.querySelector("img");
    const songName = songInfo.querySelector(".song-name");
    const artist = songInfo.querySelector(".artist");

    songImg.src = song.coverPath;
    songName.textContent = song.name;
    artist.textContent = song.artist;
  }

  function updateLibraryUI(song) {
    const library = document.querySelector(".library");
    library.innerHTML = `
      <div class="lib">
        <i style="color: palevioletred" class="fas fa-music"></i>
        <div class="info">
          <div class="songName">${song.name}</div>
          <div class="artist">${song.artist}</div>
        </div>
        <div style="color: palevioletred" class="play">
          Play<i class="fas fa-play"></i>
        </div>
      </div>
    `;
  }

  function handleSongCardClick(event) {
    const songCard = event.target.closest(".SongsCard");
    if (songCard) {
      const index = parseInt(songCard.dataset.index);
      const song = songs[index];
      if (currentSong && currentSong.filePath === song.filePath) {
        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      } else {
        playSong(song);
      }
    }
  }

  function addSongCards(container, songs) {
    songs.forEach((song, index) => {
      const songCardHTML = createSongCard(song, index);
      container.innerHTML += songCardHTML;
    });
  }

  fetchSongsAndCovers()
    .then(([popularSongs, trendingSongs]) => {
      songs = popularSongs.concat(trendingSongs);
      addSongCards(popularSongsContainer, popularSongs);
      addSongCards(trendingSongsContainer, trendingSongs);
      const defaultSong = popularSongs[0]; // Default song is "Perfect" by Ed Sheeran
      playSong(defaultSong);
      pauseSong(); // Start with the song paused
    })
    .catch((error) => {
      console.error("Error fetching songs and covers:", error);
    });

  document.addEventListener("click", handleSongCardClick);

  const playPauseBtn = document.getElementById("play-pause");
  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  const prevBtn = document.getElementById("prev");
  prevBtn.addEventListener("click", function () {
    if (songIndex > 0) {
      songIndex--;
      const prevSong = songs[songIndex];
      playSong(prevSong);
    }
  });

  const nextBtn = document.getElementById("next");
  nextBtn.addEventListener("click", function () {
    if (songIndex < songs.length - 1) {
      songIndex++;
      const nextSong = songs[songIndex];
      playSong(nextSong);
    }
  });

  audio.addEventListener("ended", function () {
    // Placeholder for ended song logic
    if (songIndex < songs.length - 1) {
      songIndex++;
      const nextSong = songs[songIndex];
      playSong(nextSong);
    } else {
      // Restart the playlist or stop playback
      // For now, we'll just pause the playback
      audio.pause();
    }
  });

  const seekBar = document.getElementById("seek-bar");
  seekBar.addEventListener("input", function () {
    const seekTime = audio.duration * (seekBar.value / 100);
    audio.currentTime = seekTime;
  });

  audio.addEventListener("timeupdate", function () {
    const progress = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progress;
  });

  const volumeBar = document.getElementById("volume-bar");
  volumeBar.addEventListener("input", function () {
    audio.volume = volumeBar.value / 100;
  });
  const closeIcon = document.querySelector(".close-icon");
  closeIcon.addEventListener("click", toggleSidebar);

  const hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.addEventListener("click", toggleSidebar);
});
