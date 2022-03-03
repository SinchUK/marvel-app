import './charInfo.css';




const CharInfo = () => {
    return (
        <div className="charinfo_block">
            <div >
                <div className="cahrinfo_head">
                    <img src="./img/loki.png" alt="avatar"/>
                    <div className="charinfo_links">
                        <p>LOKI</p>
                        <div>
                            <a>
                                <div className="btn-red">HOME PAGE</div>
                            </a>
                            <a>
                                <div className="btn-gray">WIKI</div>
                            </a>
                        </div>
                    </div>
                </div>
                <p>
                    In Norse mythology, Loki is a god or jötunn (or both). 
                    Loki is the son of Fárbauti and Laufey, and the brother 
                    of Helblindi and Býleistr. By the jötunn Angrboða, Loki 
                    is the father of Hel, the wolf Fenrir, and the world serpent 
                    Jörmungandr. By Sigyn, Loki is the father of Nari and/or 
                    Narfi and with the stallion Svaðilfari as the father, Loki 
                    gave birth—in the form of a mare—to the eight-legged horse 
                    Sleipnir. In addition, Loki is referred to as the father of 
                    Váli in the Prose Edda.
                </p>
                <div className="charinfo_details">
                    <h3>Comics: </h3>
                    <p>All-Winners Squad: Band of Heroes (2011) #3</p>
                    <p>Alpha Flight (1983) #50</p>
                    <p>Amazing Spider-Man (1999) #503</p>
                    <p>Amazing Spider-Man (1999) #504</p>
                    <p>AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</p>
                    <p>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</p>
                    <p>Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</p>
                    <p>Vengeance (2011) #4</p>
                    <p>Avengers (1963) #1</p>
                    <p>Avengers (1996) #1</p>
                </div>
            </div>
            <div className="poster">
                <img src="./img/bg_asset.png" alt="poster" />
            </div>
        </div>
        

    )
}

export default CharInfo; 