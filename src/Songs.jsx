import React from "react";
import SongCard from "./SongCard";
import Mack from "./mack";
import Back from "./back";

export default function Songs (){
  const songs =[
    {
      id:1,
      title:"Komko",
      image:"/cover/komko.jpg",
      audioUrl:"/assets/Komko[baby_mama].mp3"
    },
    {
      id:2,
      title:"baby commando",
      image:"/cover/commado.jpg",
      audioUrl:"/assets/Travissbillz-Bundle[prod_by_Landie]_(1).mp3"
    },
    {
      id:3,
      title:"Bundle",
      image:"/cover/trav-bloody.jpg",
      audioUrl:"/assets/Travissbillz-_Baby_commando.mp3"
    },
    {
      id:4,
      title:"Churm bucket",
      image:"/cover/trav-w-bloody.jpg",
      audioUrl:"/assets/Travissbillz-Charm Bucket.mp3"
    },
    {
      id:5,
      title:"Gw3tsa",
      image:"/cover/bloody earthquake _Gw3tsa_ in bold sticky night club with red light real less cartoonish.jpg",
      audioUrl:"/assets/TravissBillz-Gwetsa.mp3"
    },
    {
      id:6,
      title:"Oloko",
      image:"/cover/oloko.jpg",
      audioUrl:"/assets/TravissBillz-Oloko.mp3"
    }
  ]
  
  return(
       <div>
      <Back/>
       <div>
       {
        songs.map((song)=>(
          <SongCard key={song.id} song={song} />

        )

        )
       }
       </div>
     <p style={{color:"red",fontSize:"20px"}}>More Traviss Billz songs on <a href="https://audiomack.com/travissbillz/song/charm-bucket?share-user-id=115773982"> <Mack/>  </a> </p>  
       
       </div>
  )
}