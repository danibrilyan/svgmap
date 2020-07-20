import React, {useState} from 'react';
import './App.css';
// import { ReactSVG } from 'react-svg'
import PetaPapua from '../PetaPapuaSVG.svg';

import { SvgLoader, SvgProxy } from 'react-svgmt';

export default function Papua() {
    function showTooltip(evt, text) {
        let tooltip = document.getElementById("tooltip");
        setnamaKabupaten(text)
        var datachange = dataKabupaten.map(x=>{if(x.name===text){return({name:x.name, flag:!x.flag})}else{return x}})
        console.log(datachange)
        setDataKabupaten(dataKabupaten.map(x=>{if(x.name===text){return({name:x.name, flag:!x.flag})}else{return x}}))
        tooltip.style.display = "block";
        tooltip.style.left = evt.pageX + 10 + 'px';
        tooltip.style.top = evt.pageY + 10 + 'px';
      }
      
      function hideTooltip() {
        var tooltip = document.getElementById("tooltip");
        tooltip.style.display = "none";
        setDataKabupaten(defaultKabupaten)
      }
    
    const defaultKabupaten = [{name:"Kabupaten_Nabire", flag:false}, {name:"Kabupaten_Kepulauan_Yapen", flag:false}, {name:"Kabupaten_Biak_Numfor", flag:false}, {name:"Kabupaten_Supiori", flag:false}, {name:"Kabupaten_Merauke", flag:false},
      {name:"Kabupaten_Jayawijaya", flag:false}, {name:"Kabupaten_Jayapura", flag:false}, {name:"Kabupaten_Paniai", flag:false}, {name:"Kabupaten_Puncak_Jaya", flag:false}, {name:"Kabupaten_Mimika", flag:false},
      {name:"Kabupaten_Boven_Digoel", flag:false}, {name:"Kabupaten_Mappi", flag:false}, {name:"Kabupaten_Asmat", flag:false}, {name:"Kabupaten_Yahukimo", flag:false}, {name:"Kabupaten_Pegunungan_Bintang", flag:false},
      {name:"Kabupaten_Tolikara", flag:false}, {name:"Kabupaten_Sarmi", flag:false}, {name:"Kabupaten_Keerom", flag:false}, {name:"Kabupaten_Waropen", flag:false}, {name:"Kabupaten_Mamberamo_Raya", flag:false},
      {name:"Kabupaten_Nduga", flag:false}, {name:"Kabupaten_Lanny_Jaya", flag:false}, {name:"Kabupaten_Mamberamo_Tengah", flag:false}, {name:"Kabupaten_Puncak", flag:false}, {name:"Kabupaten_Dogiyai", flag:false},
      {name:"Kabupaten_Intan_Jaya", flag:false}, {name:"Kabupaten_Deiyai", flag:false}, {name:"Kota_Jayapura", flag:false}, {name:"Kabupaten_Yalimo", flag:false}
     ]
    
    const [namaKabupaten, setnamaKabupaten] = useState('')
    
    const [dataKabupaten, setDataKabupaten] = useState([{name:"Kabupaten_Nabire", flag:false}, {name:"Kabupaten_Kepulauan_Yapen", flag:false}, {name:"Kabupaten_Biak_Numfor", flag:false}, {name:"Kabupaten_Supiori", flag:false}, {name:"Kabupaten_Merauke", flag:false},
                            {name:"Kabupaten_Jayawijaya", flag:false}, {name:"Kabupaten_Jayapura", flag:false}, {name:"Kabupaten_Paniai", flag:false}, {name:"Kabupaten_Puncak_Jaya", flag:false}, {name:"Kabupaten_Mimika", flag:false},
                            {name:"Kabupaten_Boven_Digoel", flag:false}, {name:"Kabupaten_Mappi", flag:false}, {name:"Kabupaten_Asmat", flag:false}, {name:"Kabupaten_Yahukimo", flag:false}, {name:"Kabupaten_Pegunungan_Bintang", flag:false},
                            {name:"Kabupaten_Tolikara", flag:false}, {name:"Kabupaten_Sarmi", flag:false}, {name:"Kabupaten_Keerom", flag:false}, {name:"Kabupaten_Waropen", flag:false}, {name:"Kabupaten_Mamberamo_Raya", flag:false},
                            {name:"Kabupaten_Nduga", flag:false}, {name:"Kabupaten_Lanny_Jaya", flag:false}, {name:"Kabupaten_Mamberamo_Tengah", flag:false}, {name:"Kabupaten_Puncak", flag:false}, {name:"Kabupaten_Dogiyai", flag:false},
                            {name:"Kabupaten_Intan_Jaya", flag:false}, {name:"Kabupaten_Deiyai", flag:false}, {name:"Kota_Jayapura", flag:false}, {name:"Kabupaten_Yalimo", flag:false}
                        ])

    const [pilihKabupaten, setpilihKabupaten] = useState('')
    
    const [ijinMasuk, setijinMasuk] = useState([])

    const [ijinKeluar, setijinKeluar] = useState([
    {
        name: 'Kabupaten_Nabire',
        value: 100
    },
    {
        name: 'Kabupaten_Biak_Numfor',
        value: 200
    },
    {
        name: 'Kabupaten_Merauke',
        value: 50
    },
    {
        name: 'Kabupaten_Jayapura',
        value: 12
    },
    {
        name: 'Kabupaten_Asmat',
        value: 18
    },
    {
        name: 'Kabupaten_Pegunungan_Bintang',
        value: 77
    },
    ])
    return (
        <>
            <div id="tooltip" display="none" style={{position: 'absolute', display: 'none'}}>
                <div style={{backgroundColor:'#CFCFCF'}}>
                <span style={{padding:5, fontSize:18, fontWeight:'bold'}}>{namaKabupaten}</span>
                <button onClick={hideTooltip}>Tutup</button>
                </div>
                <div style={{padding:5}}>
                <p>Jumlah Permohonan: 100 orang</p>
                <p>Sedang diproses : 10 orang</p>
                <p>Ditolak : 10 orang</p>
                <p>Diterima :  10 orang</p>
                <p>Dalam perjalanan : 10 orang</p>
                </div>
            </div>

            <button onClick={()=>{
                    
                if(ijinMasuk.length==0){
                    console.log('1',ijinMasuk.length)
                    setijinMasuk(
                    [   
                    {
                        name: 'Kabupaten_Nabire',
                        value: 100
                    },
                    {
                        name: 'Kabupaten_Biak_Numfor',
                        value: 200
                    },
                    {
                        name: 'Kabupaten_Merauke',
                        value: 50
                    },
                    {
                        name: 'Kabupaten_Jayapura',
                        value: 12
                    },
                    {
                        name: 'Kabupaten_Asmat',
                        value: 18
                    },
                    {
                        name: 'Kabupaten_Pegunungan_Bintang',
                        value: 77
                    },
                    ]
                    )
                }
                else{
                    console.log('2',ijinMasuk.length)
                    setijinMasuk([])
                }
                }}>Ijin Masuk Hari ini</button>
                <button>Ijin Keluar Hari ini</button>
                <SvgLoader path={PetaPapua} >
                {
                    dataKabupaten.map((item)=>{
                    if(item.flag){
                        return(
                        <SvgProxy key={item.name} selector={"#"+item.name} fill="green"/>
                        )
                    }
                    else{
                        return(
                        <SvgProxy key={item.name} selector={"#"+item.name} fill="CDCDCD"/>
                        )
                    }
                    })
                }
                <SvgProxy selector={"#Papua"} fill="#CDCDCD" stroke="black"/>
                <SvgProxy selector={"#Papua_Barat"} fill="#CFCFCF" />
                
                
                <SvgProxy
                    key={"path"}
                    selector={"path"}
                    onClick={(e)=>{           
                    showTooltip(e,e.srcElement.id)
                    }}
                />
        
                {
                    ijinMasuk.length > 0 ?
                    ijinMasuk.map(item=>{
                        return(
                        <SvgProxy
                            key={item.name}
                            selector={"#"+item.name}
                            fill="green"
                        />
                        )
                    })
                    :
                    null
                    // defaultKabupaten.map(item=>{
                    //   return(
                    //     <SvgProxy key={item.name} selector={"#"+item.name} fill="CDCDCD"/>
                    //   )
                    // })
                    
                }
                
                </SvgLoader>
                
            <div style={{float:'left'}}><p>0</p></div>
            <div style={{float:'right'}}><p>100</p></div>
            <div style={{width:'100%', height:20, background:'linear-gradient(to right, #ffffcc 0%, #009900 100%)'}}></div>
        </>
    )
}
