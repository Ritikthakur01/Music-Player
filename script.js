const music =new Audio('audio/19.mp3');
// music.play();
const songs= [
    {
        id: '1',
        song_Name: 'On My Way <br> <div class="subtitle">Alan Walker</div>',
        poster: "images/1.jpg",
    },
    {
        id: '2',
        song_Name: 'Fade <br> <div class="subtitle">Alan Walker</div>',
        poster: "images/2.jpg",
    },
    {
        id: '3',
        song_Name: 'Cartoon-On & On <br><div class="subtitle">Daniel Levi</div>',
        poster: "images/3.jpg",
    },
    {
        id: '4',
        song_Name: 'Warriyo-Mortals <br><div class="subtitle">Mortals</div>',
        poster: "images/4.jpg",
    },
    {
        id: '5',
        song_Name: 'Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>',
        poster: "images/5.jpg",
    },
    {
        id: '6',
        song_Name: 'Electronic Music <br><div class="subtitle">Electro</div>',
        poster: "images/6.jpg",
    },
    {
        id: '7',
        song_Name: 'Tamasha <br><div class="subtitle">A.R. Rahman</div>',
        poster: "images/7.jpg",
    },
    {
        id: '8',
        song_Name: 'Suna Hai <br><div class="subtitle">Jubin Nautiyal</div>',
        poster: "images/8.jpg",
    },
    {
        id: '9',
        song_Name: 'Dilbar <br><div class="subtitle">Neha kakkar</div>',
        poster: "images/9.jpg",
    },
    {
        id: '10',
        song_Name: 'Duniya <br><div class="subtitle">Dhvani</div>',
        poster: "images/10.jpg",
    },
    {
        id: '11',
        song_Name: 'Lagdi Lahore Di <br><div class="subtitle">Guru</div>',
        poster: "images/11.jpg",
    },
    {
        id: '12',
        song_Name: 'Putt Jatt Daa <br><div class="subtitle">Diljit Dosanjh</div>',
        poster: "images/12.jpg",
    },
    {
        id: '13',
        song_Name: 'Aadat <br><div class="subtitle">Atif Aslam</div>',
        poster: "images/13.jpg",
    },
    {
        id: '14',
        song_Name: 'Vaaste <br><div class="subtitle">Dhvani</div>',
        poster: "images/14.jpg",
    },
    {
        id: '15',
        song_Name: 'Lut Gaye <br><div class="subtitle">Emraan Hashmi</div>',
        poster: "images/15.jpg",
    },
    {
        id: '16',
        song_Name: 'Meri Zindagi Hai Tu <br><div class="subtitle">Jubin Nautiyal</div>',
        poster: "images/16.jpg",
    },
    {
        id: '17',
        song_Name: 'Zaroori Tha <br><div class="subtitle">Rahat Fateh</div>',
        poster: "images/17.jpg",
    },
    {
        id: '18',
        song_Name: 'Pasoori <br><div class="subtitle">Ali Sethi</div>',
        poster: "images/18.jpg",
    },
    {
        id: '19',
        song_Name: 'Pagal <br><div class="subtitle">AP Dhillon</div>',
        poster: "images/19.jpg",
    },
    {
        id: '20',
        song_Name: 'Vande Mataram <br><div class="subtitle">Lata</div>',
        poster: "images/20.jpg",
    },

]

Array.from(document.getElementsByClassName('song-item')).forEach((e,i)=>{
     e.getElementsByTagName('img')[0].src=songs[i].poster;
     e.getElementsByTagName('h5')[0].innerHTML=songs[i].song_Name;
});

let masterPlay=document.getElementById("masterplay");
let wave=document.getElementById("wave");

masterPlay.addEventListener('click',() => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

const makeAllplay = ()=>{
    Array.from(document.getElementsByClassName('playlist-play')).forEach((el)=>{   
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
}  

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('song-item')).forEach((el)=>{   
        el.style.background = 'rgba(105,105,105,.0)';
    })
}  

let index=0;
let title=document.getElementById('title-name');
let song_poster=document.getElementById('poster-music-controller');
Array.from(document.getElementsByClassName('playlist-play')).forEach((e)=>
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`audio/${index}.mp3`;
        song_poster.src=`images/${index}.jpg`;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        wave.classList.add('active1');

        let songTitles=songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss=>{
            let{song_Name}=elss;
             title.innerHTML=song_Name;
        });


        makeAllBackground();
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background = "#0b1320;"

        makeAllplay();
        el.target.classList.remove("fa-circle-play");
        el.target.classList.add("fa-circle-pause");

        music.play();
    })
)

let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');

let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);

    if(sec1<10){
        sec1=` 0${sec1}`
    }
    currentend.innerText=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr / 60);
    let sec2=Math.floor(music_curr % 60);

    if(sec2<10){
        sec2=` 0${sec2}`
    }
    currentstart.innerText=`${min2}:${sec2}`;

    let progessbar=parseInt((music_curr / music_dur) * 100);
    seek.value=progessbar;
    let seekbar=seek.value;

    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
})
seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon=document.getElementById('vol-icon');
let vol1=document.getElementById('vol1');
let vol_bar=document.getElementById('vol-bar');
let vol_dot=document.getElementById('vol-dot');

vol1.addEventListener('change',()=>{
    if(vol1.value==0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-mute');
    }
    if(vol1.value > 0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-mute');
    }
    if(vol1.value > 50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-mute');
    }
    let vol_a=vol1.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;

    music.volume=vol_a / 100;
})



let pop_song_left=document.getElementsByClassName('fa-sort-up');
let pop_song_right=document.getElementsByClassName('fa-sort-down');
let pop_song_main=document.getElementsByClassName('popular-song-main')[0];

pop_song_right.addEventListener('click',()=>
{pop_song_main.scrollLeft += 200;})

pop_song_left.addEventListener('click',()=>
{pop_song_main.scrollLeft -= 200;})

let pop_art_left=document.getElementById('pop-art-left');
let pop_art_right=document.getElementById('pop-art-right');
let pop_art_main=document.getElementsByClassName('popular-artist-main')[0];

pop_art_right.addEventListener('click',() => {
    pop_art_main.scrollLeft += 200;
})
pop_art_left.addEventListener('click',() => {
    pop_art_main.scrollLeft -= 200;
})


