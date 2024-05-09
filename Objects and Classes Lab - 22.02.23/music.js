function musicList(arr) {
    let songSum = Number(arr.shift());
    let comand = arr.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < songSum; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (comand === 'all') {
        songs.forEach((x) => console.log(x.name));
    } else {
        let filtered = songs.filter((x) => x.type === comand);
        filtered.forEach((x) => console.log(x.name));
    }
}
