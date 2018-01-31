export class AlbumService {
    constructor() {

    }

    getAlbums() {
        return [
            {
                id: 1,
                title: "Appetite For Destruction",
                artist: "Guns N' Roses",
                year: 1987,
                record: "Geffen"
            },
            {
                id: 2,
                title: "Back in Black",
                artist: "AC/DC",
                year: 1980,
                record: "Geffen"
            }
        ]
    }
}