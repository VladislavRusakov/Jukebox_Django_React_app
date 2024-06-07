const local_data =  [
    {   
        id: 1,
        artist: "Casiopea",
        title: "Mint Jams",
        color: "white",
        isPlayed: false,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_Vt_9uvqNdAD5dYjn0DIbqB0NafO8y5ogYRqw00GYA&s",
        youtubeUrl: "https://www.youtube.com/watch?v=6GEI3PpXEAo"
    },

    {   
        id: 2,
        artist: "Ryo Fukui",
        title: "Scenery",
        color: "red",
        isPlayed: false,
        imageUrl: "https://soulbrother.com/wp-content/uploads/2018/08/100784.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=Hrr3dp7zRQY"
    },

    {   
        id: 3,
        artist: "Kindaichi Band",
        title: "The adventure of Kohsuke Kindaichi",
        color: "black",
        isPlayed: false,
        imageUrl: "https://4.bp.blogspot.com/-y6c_SGehlm0/XAmxpvRV7JI/AAAAAAAG9J8/RjbgAb9AWBovhhuwZekSwBrYZs11hbCGgCLcBGAs/s1600/R-7686012-1446719846-5179.jpeg.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=_-LZudHEk7k"
    },

    {   
        id: 4,
        artist: "Herbie Hancock",
        title: "Head Hunters",
        color: "blue",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/54/Herbie-Hancock-Head-Hunters.png",
        youtubeUrl: "https://youtu.be/3m3qOD-hhrQ"
    },
    
    {   
        id: 5,
        artist: "Jiro Inagaki",
        title: "Funky Stuff",
        color: "black",
        isPlayed: false,
        imageUrl: "https://sun9-72.userapi.com/impg/EMPib3qwajVChRnYyA-UKj8uUxgrrqkG6rdVmA/UjpKb8LIiAk.jpg?size=600x600&quality=95&sign=6f30fa2695ef573bc1ec4a119610821e&c_uniq_tag=5wsbPVXFqpZrw8AaW4HvW9nTIfwqRbzQ6sTixw8G--g&type=album",
        youtubeUrl: "https://youtu.be/kjxxVkSd0XA"
    },
    
    {   
        id: 6,
        artist: "Jiro Inagaki",
        title: "In The Groove",
        color: "white",
        isPlayed: false,
        imageUrl: "https://i.discogs.com/k4sOXtPJx3dxp57VxT86dJ5rNvSc9nuqY1EaV5Au2_Y/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1Mjg4/ODI1LTE3MDg2MTA3/MzEtMzA0My5qcGVn.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=tJ6fyxjF-tU"
    },
    
    {   
        id: 7,
        artist: "Casiopea",
        title: "Casiopea",
        color: "black",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/ca/CasiopeaSelfTitleAlbumCover.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=tZd4jjhLkWg"
    },
    
    {   
        id: 8,
        artist: "Yuji Ohno",
        title: "Cosmos",
        color: "black",
        isPlayed: false,
        imageUrl: "https://i.discogs.com/S6vsF-luktU1HhklocwukMhrqvPtDKXmxsmBg1uKrXw/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0ODAy/NjItMTIyMjg1MTky/OC5qcGVn.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=np6zhvdwako"
    },
    
    {   
        id: 9,
        artist: "Ryo Fukui",
        title: "Mellow Dream",
        color: "white",
        isPlayed: false,
        imageUrl: "https://f4.bcbits.com/img/0012930481_71.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=KxlvMmUjpTY"
    },
    
    {   
        id: 10,
        artist: "Nucleus",
        title: "Alleycat",
        color: "yellow",
        isPlayed: false,
        imageUrl: "https://i.discogs.com/Docl3MeGs-47HNncEzs6XIPSkkOLrSgafrbLFPlY9BA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzNjQw/NjM4LTE2NTU3NTQz/OTUtNDQ1OS5qcGVn.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=giYvwLM-JEo"
    },
    
    {   
        id: 11,
        artist: "Grover Washington",
        title: "Feels So Good",
        color: "blue",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/29/Feels_So_Good_Grover.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=520vLSJtuTg"
    },
    
    {   
        id: 12,
        artist: "Grover Washington",
        title: "A Secret Place",
        color: "black",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/ab/ASecretPlace.JPG",
        youtubeUrl: "https://www.youtube.com/watch?v=A-ESa_Nnv0s"
    },
    
    {   
        id: 13,
        artist: "Grover Washington",
        title: "Winelight",
        color: "white",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e7/Winelight.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=zAxobRJVYEQ"
    },
    
    {   
        id: 14,
        artist: "Grover Washington",
        title: "Mister Magic",
        color: "black",
        isPlayed: false,
        imageUrl: "https://i.scdn.co/image/ab67616d0000b273dd15e56df5c95b6bb1c8e1d5",
        youtubeUrl: "https://www.youtube.com/watch?v=EmucX5avn8M"
    },
    
    {   
        id: 15,
        artist: "Jiro Inagaki",
        title: "Blockbuster",
        color: "white",
        isPlayed: false,
        imageUrl: "https://e.snmc.io/i/1200/s/74ba03bbc757aad37f6b05a3698b6b09/2627318",
        youtubeUrl: "https://www.youtube.com/watch?v=wzkL5SAEgi4"
    },

    {   
        id: 16,
        artist: "Himiko Kikuchi",
        title: "Flying Beagle",
        color: "black",
        isPlayed: false,
        imageUrl: "https://cdsvinyljapan.com/cdn/shop/files/4547366657739.jpg?v=1707068805",
        youtubeUrl: "https://youtu.be/HHOn8u-c2wk"
    },

    {   
        id: 17,
        artist: "Masayoshi Takanaka",
        title: "An Insatiable High",
        color: "white",
        isPlayed: false,
        imageUrl: "https://i.discogs.com/9CNY1HNQZdu2I_58OOv6wi-TNPjjbzI15b4lYn6yOqU/rs:fit/g:sm/q:90/h:600/w:590/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTYy/NTkwLTE2NjAxNjc3/NzAtNDMzNy5qcGVn.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=PQDGuUc-yrk"
    },

    {   
        id: 18,
        artist: "Makoto Matsushita",
        title: "First Light",
        color: "white",
        isPlayed: false,
        imageUrl: "https://i.pinimg.com/736x/5c/b5/fb/5cb5fb947e3073189a6f8395872a89fa.jpg",
        youtubeUrl: "https://youtu.be/o1rclw8Rugs"
    },

    {   
        id: 19,
        artist: "Masayoshi Takanaka",
        title: "Brasilian Skies",
        color: "white",
        isPlayed: false,
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/ff/Brasilian_Skies_cover.jpg",
        youtubeUrl: "https://youtu.be/g8u3ff8dNjk"
    },

    {
        "id": 20,
        "artist": "Himiko Kikuchi",
        "title": "Sevilla Breeze",
        "isPlayed": false,
        "imageUrl": "https://lastfm.freetls.fastly.net/i/u/500x500/9daaaa00e71adc14a288a574627ce601.jpg",
        "youtubeUrl": "https://youtu.be/ih5aLZ4uCRQ"
    },

    {
        "id": 21,
        "artist": "Masayoshi Takanaka",
        "title": "Finger Dancin'",
        "isPlayed": false,
        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273c4217fc8b371ec8d8151b24b",
        "youtubeUrl": "https://youtu.be/4SoDlfUJFTA"
    },

    {
        "id": 22,
        "artist": "Ryo Kawasaki",
        "title": "Juice",
        "isPlayed": false,
        "imageUrl": "https://www.hhv-mag.com/wp-content/uploads/2022/08/922244_1-500x500.jpg",
        "youtubeUrl": "https://youtu.be/kVYgvrvL4k8"
    },

    {
        "id": 23,
        "artist": "Masayoshi Takanaka",
        "title": "All of me",
        "isPlayed": false,
        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273ae381ac4ac3ca881220e1126",
        "youtubeUrl": "https://youtu.be/FBWbfkzYr7k"
    },
    {
        "id": 24,
        "artist": "Curtis Mayfield",
        "title": "Curtis",
        "isPlayed": false,
        "imageUrl": "https://i.discogs.com/Sd2PLCe7XvibMkcPnKAwScVKKRwt0QvDnTbm2JFH1wg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NTA1/NjUtMTMwNTYyMzk4/Mi5qcGVn.jpeg",
        "youtubeUrl": "https://youtu.be/084Z5BuaLrE"
    },
    {
        "id": 25,
        "artist": "Curtis Mayfield",
        "title": "Superfly",
        "isPlayed": false,
        "imageUrl": "https://i.scdn.co/image/ab67616d0000b273e79241d6d1bdc22e09ec29d5",
        "youtubeUrl": "https://youtu.be/i8NOIBRhJMo"
    },
    {
        "id": 26,
        "artist": "Hiromasa Suzuki",
        "title": "High-Flying",
        "isPlayed": false,
        "imageUrl": "https://f4.bcbits.com/img/a1813634632_65",
        "youtubeUrl": "https://youtu.be/oZame1Brs9k"
    },
    {
        "id": 27,
        "artist": "Hiromasa Suzuki",
        "title": "Skip Step Colgen",
        "isPlayed": false,
        "imageUrl": "https://i.discogs.com/pBKk7Uhg_JniwhDQlodS6Nd7mPSiMVWQ7hbOiCK8mag/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2OTAx/MzM3LTE2MTI2NDgy/MzMtMjU5Ny5qcGVn.jpeg",
        "youtubeUrl": "https://youtu.be/xMuUp8lSYfc"
    },
    {
        "id": 28,
        "artist": "Hiromasa Suzuki",
        "title": "A Lonely Falling Star",
        "isPlayed": false,
        "imageUrl": "https://www.jazzmusicarchives.com/images/covers/hiromasa-suzuki-colgen-band-a-lonely-falling-star-20210312144944.jpg",
        "youtubeUrl": "https://youtu.be/iMi5Aiv0dwM"
    },
    {
        "id": 29,
        "artist": "Hiromasa Suzuki",
        "title": "Galaxy",
        "isPlayed": false,
        "imageUrl": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ffcce4a58553994243e0b3e0",
        "youtubeUrl": "https://youtu.be/p5czaHiSPLg"
    },
    {
        "id": 30,
        "artist": "Hiromasa Suzuki",
        "title": "Primrose",
        "isPlayed": false,
        "imageUrl": "https://e.snmc.io/i/1200/s/f7ba0f36854c459a5605640a3ef2bf20/4680279",
        "youtubeUrl": "https://youtu.be/_iCeS9Srrq8"
    },
    {
        "id": 31,
        "artist": "Jiro Inagaki",
        "title": "Head Rock",
        "isPlayed": false,
        "imageUrl": "https://lightintheattic.net/cdn/shop/files/inagak_jiro_headrock.jpg?v=1713204568",
        "youtubeUrl": "https://youtu.be/inY4r9xtacY"
    },
    {
        "id": 32,
        "artist": "Jiro Inagaki",
        "title": "Memory Lane",
        "isPlayed": false,
        "imageUrl": "https://www.jazzmessengers.com/72670-large_default/memory-lane-limited-japanese-lp-obi.jpg",
        "youtubeUrl": "https://youtu.be/pad5vu3ZV9M"
    },
    {
        "id": 33,
        "artist": "Hiroshi Suzuki",
        "title": "Cat",
        "isPlayed": false,
        "imageUrl": "https://i.ebayimg.com/images/g/ge0AAOSwcAVjLXqw/s-l400.jpg",
        "youtubeUrl": "https://youtu.be/jqvMGE9xzT8"
    },
    {
        "id": 34,
        "artist": "Himiko Kikuchi",
        "title": "Beam",
        "isPlayed": false,
        "imageUrl": "https://lastfm.freetls.fastly.net/i/u/500x500/9b12b95ef097e77b447a9879b8b95cab.jpg",
        "youtubeUrl": "https://youtu.be/hCR5R_wcWvA"
    }
]

export default local_data;