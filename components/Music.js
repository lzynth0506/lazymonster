import { MusicData } from "../pages/api/MusicData"

export default function Music() {
    return (
        <section className="container mx-auto p-8 sm:px-12 md:px-14 lg:px-16 sm:text-center 
        lg:text-left">
            <div className="intro-music">
                <h2 className="font-bold text-5xl mb-6 text-red-500">My musics</h2>
                <p className="mb-6">So this my favorite artist including their hits and it was embed from Spotify playlist</p>
            </div>
            <div className="embed-playlists">
                {MusicData.map(music => {
                    return (
                        <iframe key={music.id}
                            className="rounded-lg mb-6" 
                            src={music.embedLink} 
                            width={music.width}
                            height={music.height} 
                            frameBorder="0" 
                            allowFullScreen="" 
                            allow="autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            fullscreen; picture-in-picture" 
                        />
                    )
                })}
            </div>
        </section>
    )
}