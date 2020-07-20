import React, {useEffect, useState} from 'react'
import './App.css';
import indonesiasvg from '../indonesia.svg';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import _ from 'lodash'
export default function Indonesia() {
    const [total_permohoan, settotal_permohoan] = useState(0)
    const [datamaps, setdatamaps] = useState([])
    const [detailProvinsi, setdetailProvinsi] = useState({})
    const dataPermohonan = [
        {
            tag :'ID-JA',
            name : "Jambi",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-JB',
            name : "Jawa Barat",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-KI',
            name : "Kalimantan Timur",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-KB',
            name : "Kalimantan Barat",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-SN',
            name : "Sulawesi Selatan",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-SB',
            name : "Sumatera Barat",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-NT',
            name : "Nusa Tenggara Timur",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-KB',
            name : "Kalimantan Barat",
            value : Math.floor(Math.random() * Math.floor(100))
        },
        {
            tag :'ID-LA',
            name : "Lampung",
            value : Math.floor(Math.random() * Math.floor(100))
        },
    ]
    
    const colorFillSelector = [
        {value : 0, color : '#c9e7fb'},
        {value : 5, color : '#86c2ec'},
        {value : 10, color : '#80bae5'},
        {value : 15, color : '#79b2dd'},
        {value : 20, color : '#75acd8'},
        {value : 25, color : '#71a7d3'},
        {value : 30, color : '#6ba0cc'},
        {value : 35, color : '#6498c4'},
        {value : 40, color : '#5d90bc'},
        {value : 45, color : '#5485b2'},
        {value : 50, color : '#4e7eab'},
        {value : 55, color : '#4674a2'},
        {value : 60, color : '#3d6a98'},
        {value : 65, color : '#376391'},
        {value : 70, color : '#315b8a'},
        {value : 75, color : '#2d5585'},
        {value : 80, color : '#264d7d'},
        {value : 85, color : '#224878'},
        {value : 90, color : '#1b4070'},
        {value : 95, color : '#103464'},
        {value : 100, color : '#002153'},
    ]

    useEffect(()=>{
        // dataPermohonan.map(item=>total_data = total_data+ item.value)
        var valuemap = _.map(dataPermohonan, "value")
        var maxdata = _.max(valuemap)
        var totaldata = _.sum(valuemap)
        settotal_permohoan(maxdata)
        var data = dataPermohonan.map(item=>{
            var rasio = parseInt(item.value/maxdata*100)
            // 0 >= 30 > 5
            var color = colorFillSelector.filter(x=>x.value >= rasio && rasio+5 > x.value).map(y=>y.color)[0]
            console.log('color', rasio , color)
            return {
                tag:item.tag, 
                name:item.name, 
                value:item.value, 
                persentage : parseInt(item.value/totaldata*100), 
                rasio : rasio, 
                color : color
            }
        })
        setdatamaps(_.sortBy(data, "persentage").reverse())
    },[])

    function hideTooltip() {
        var tooltip = document.getElementById("tooltipProvinsi");
        tooltip.style.display = "none";
    }

    function showTooltip(evt, text) {
        let tooltip = document.getElementById("tooltipProvinsi");
        
        var datadetail = datamaps.filter(x=>x.tag === text).map(item=>item)
        console.log('text',text, datadetail.length>0 ? datadetail[0] : {})
        setdetailProvinsi(datadetail.length>0 ? datadetail[0] : {})
        if(datadetail.length>0){
            tooltip.style.display = "block";
            tooltip.style.left = evt.pageX + 10 + 'px';
            tooltip.style.top = evt.pageY + 10 + 'px';
        }
        
      }
    return (
        <div>
            <div id="tooltipProvinsi" class="tooltip" display="none" style={{position: 'absolute', display: 'none'}}>
                <div style={{backgroundColor:'#CFCFCF'}}>
                <span style={{padding:5, fontSize:18, fontWeight:'bold'}}>{detailProvinsi.name}</span>
                <button onClick={hideTooltip}>Tutup</button>
                </div>
                <div style={{padding:5}}>
                <p>Jumlah Permohonan: {detailProvinsi.value} orang</p>
                <p>Sedang diproses : {detailProvinsi.persentage} orang</p>
                {/* <p>Ditolak : 10 orang</p>
                <p>Diterima :  10 orang</p>
                <p>Dalam perjalanan : 10 orang</p> */}
                </div>
            </div>
            <center>
                <SvgLoader path={indonesiasvg} >
                    <SvgProxy selector={"path"} fill="#e4eff7" stroke="black"/>
                    {
                        datamaps.map(item=>{
                        return(
                            <SvgProxy selector={"#"+item.tag} fill={item.color} stroke="black"/>
                        )
                        })
                    }
                    <SvgProxy
                        key={"path"}
                        selector={"path"}
                        onClick={(e)=>{           
                            showTooltip(e,e.srcElement.id)
                        }}
                    />
                </SvgLoader>
            </center>
                <div style={{float:'left'}}><p>Min : 1 Permohonan</p></div>
                <div style={{float:'right'}}><p>Max: {total_permohoan} Permohonan</p></div>
                <div style={{width:'100%', height:10, background:'linear-gradient(to right, #90cdf7 0%, #002153 100%)'}}></div>
                <br/>
                <table style={{width:'100%', border:'1px solid #000'}}>
                    <thead>
                        <tr>
                        <th style={{width:20,textAlign:'center'}}>No</th>
                        <th style={{textAlign:'left'}}>Provinsi</th>
                        <th style={{width:200,textAlign:'center'}}>Jumlah Permohonan</th>
                        <th style={{width:50,textAlign:'center'}}>%</th>
                        <th style={{width:50,textAlign:'center'}}>Rasio</th>
                        <th style={{width:50,textAlign:'center'}}>Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datamaps.map((item, index)=>{
                                return(
                                    <tr>
                                        <td style={{width:20,textAlign:'center'}}>{index+1}</td>
                                        <td style={{textAlign:'left'}}>{item.name}</td>
                                        <td style={{width:200,textAlign:'center'}}>{item.value}</td>
                                        <td style={{width:50,textAlign:'center'}}>{item.persentage}</td>
                                        <td style={{width:50,textAlign:'center'}}>{item.rasio}</td>
                                        <td style={{width:50,textAlign:'center'}}>{item.color}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
        </div>
    )
}
