// import React from 'react'
// import { useParams } from "react-router-dom";
// import logo from '../images/etm.png'
// import {
//     TableCell,
//     TableBody,
//     TableRow,
//     TableHead,
//     TableContainer,
//     Table,
//     Paper,
//   } from "@material-ui/core";
// function createData(month, min, max, avg, change) {
//     return { month, min, max, avg, change };
//   }

// const rows = [
//     createData("April 2023", "$22,991.422", "$33,810.914", "$27,048.731", "-10.00%"),
//     createData("May 2023", "$22,981.112", "$33,795.753", "$27,036.602", "-10.00%"),
//     createData("June 2023", "$22,965.917", "$33,773.407", "$27,018.725", "-10.00%"),
//     createData("July 2023", "$22,946.636", "$33,745.052", "$26,996.042", "-10.00%"),
//     createData("August 2023", "$22,921.785", "$33,708.508", "$26,966.806", "-10.00%"),
//     createData("September 2023", "$22,891.715", "$33,664.287", "$26,931.430", "-10.00%"),
//     createData("October 2023", "$22,857.433", "$33,613.871", "$26,891.097", "-11.00%"),
//     createData("November 2023", "$22,816.359", "$33,553.469", "$26,842.775", "-11.00%"),
//     createData("December 2023", "$22,771.014", "$33,486.785", "$26,789.428", "-11.00%"),

// ]; 
// const Prediction = () => {
//     const { id } = useParams();
//     console.log(id)
    
//   return (
//     <div style={{}}>
//     <h1 style={{marginLeft:"5%",marginTop:"5%"}}>Prediction on 2023</h1>
//       <img src={logo} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
//     <div style={{width:"70%",marginLeft:"15%",marginRight:"15%"}}>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead style={{backgroundColor:"gold"}}>
//           <TableRow>
//             <TableCell>MONTH</TableCell>
//             <TableCell align="right">MINIMUM PRICE</TableCell>
//             <TableCell align="right">MAXIMUM PRICE</TableCell>
//             <TableCell align="right">AVERAGE PRICE</TableCell>
//             <TableCell align="right">CHANGE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody style={{backgroundColor:"#434543"}}>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.month}
//               </TableCell>
//               <TableCell align="right" sty>{row.min}</TableCell>
//               <TableCell align="right">{row.max}</TableCell>
//               <TableCell align="right">{row.avg}</TableCell>
//               <TableCell align="right">{row.change}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>        
//         </Table>
//     </TableContainer>

//     </div>
//     </div>

   
//   )
// }

// export default Prediction

import React from 'react'
import { useParams } from "react-router-dom";
import bitcoin from '../images/bitcoin.png';
import ethereum from '../images/ethereum.png';
import tether from '../images/tether.png';
import bnb from '../images/bnb.png';
import usdCoin from '../images/usd coin.png';
import xrp from '../images/xrp.png';
import cardano from '../images/cardano.png';
import lidoStakedEther from '../images/lido staked ether.png';
import doge from '../images/doge.png';
import polygon from '../images/polygon.png';
import Solana from '../images/Solana.png';
import Chainlink from '../images/Chainlink.png';
import Stellar from '../images/Stellar.png';
import Polkadot from '../images/Polkadot.png';



import {
    TableCell,
    TableBody,
    TableRow,
    TableHead,
    TableContainer,
    Table,
    Paper,
  } from "@material-ui/core";

const Prediction = () => {
    let{ id,} = useParams();
    id=id.toLowerCase()
    let c=id.toUpperCase()
    let rows = []
    
    function createData(month, min, max, avg, change) {
        return { month, min, max, avg, change };
      }
    if (id==="bitcoin")
    {
    rows = [
        createData("April 2023", "$22,991.422", "$33,810.914", "$27,048.731", "-10.00%"),
        createData("May 2023", "$22,981.112", "$33,795.753", "$27,036.602", "-10.00%"),
        createData("June 2023", "$22,965.917", "$33,773.407", "$27,018.725", "-10.00%"),
        createData("July 2023", "$22,946.636", "$33,745.052", "$26,996.042", "-10.00%"),
        createData("August 2023", "$22,921.785", "$33,708.508", "$26,966.806", "-10.00%"),
        createData("September 2023", "$22,891.715", "$33,664.287", "$26,931.430", "-10.00%"),
        createData("October 2023", "$22,857.433", "$33,613.871", "$26,891.097", "-11.00%"),
        createData("November 2023", "$22,816.359", "$33,553.469", "$26,842.775", "-11.00%"),
        createData("December 2023", "$22,771.014", "$33,486.785", "$26,789.428", "-11.00%"),
    ]; 

    }
    else if(id==="ethereum")
    {
        rows = [
            createData("April 2023", "$1,604.893", "$2,360.136", "$1,888.109", "-10.00%"),
            createData("May 2023", "$1,601.843", "$2,355.651", "$1,884.521", "-11.00%"),
            createData("June 2023", "$1,597.945", "$2,349.919", "$1,879.935", "-11.00%"),
            createData("July 2023", "$1,593.405", "$2,343.243", "$1,874.595", "-11.00%"),
            createData("August 2023", "$1,587.871", "$2,335.105", "$1,868.084", "-11.00%"),
            createData("September 2023", "$1,581.423", "$2,325.622", "$1,860.498", "-12.00%"),
            createData("October 2023", "$1,574.253", "$2,315.078", "$1,852.062", "-12.00%"),
            createData("November 2023", "$1,565.805", "$2,302.654", "$1,842.123", "-13.00%"),
            createData("December 2023", "$1,556.573", "$2,289.079", "$1,831.263", "-13.00%"),
        ];        

    }
    else if(id==="tether")
    {
        rows = [
            createData("April 2023", "$0.85680208766426", "$1.260", "$1.008", "0.00%"),
            createData("May 2023", "$0.85680229168655", "$1.260", "$1.008", "0.00%"),
            createData("June 2023", "$0.8568025192075", "$1.260", "$1.008", "0.00%"),
            createData("July 2023", "$0.85680275627046", "$1.260", "$1.008", "0.00%"),
            createData("August 2023", "$0.85680301944762", "$1.260", "$1.008", "0.00%"),
            createData("September 2023", "$0.85680330192987", "$1.260", "$1.008", "0.00%"),
            createData("October 2023", "$0.8568035944503", "$1.260", "$1.008", "0.00%"),
            createData("November 2023", "$0.85680391776744", "$1.260", "$1.008", "0.00%"),
            createData("December 2023", "$0.85680425097015", "$1.260", "$1.008", "0.00%"),
            ];
    }
    else if(id==="bnb")
    {
        rows =[createData("April 2023", "$248.417", "$365.319", "$292.255", "-9.00%"),
        createData("May 2023", "$247.747", "$364.334", "$291.468", "-10.00%"),
        createData("June 2023", "$246.850", "$363.014", "$290.411", "-10.00%"),
        createData("July 2023", "$245.765", "$361.419", "$289.135", "-10.00%"),
        createData("August 2023", "$244.401", "$359.414", "$287.531", "-11.00%"),
        createData("September 2023", "$242.770", "$357.014", "$285.611", "-12.00%"),
        createData("October 2023", "$240.911", "$354.281", "$283.425", "-12.00%"),
        createData("November 2023", "$238.671", "$350.986", "$280.789", "-13.00%"),
        createData("December 2023", "$236.167", "$347.304", "$277.843", "-14.00%")
        ]
        
    }
    else if(id==="usd coin")
    {
        rows = [
            createData("April 2023", "$0.85680208766426", "$1.260", "$1.008", "0.00%"),
            createData("May 2023", "$0.85680229168655", "$1.260", "$1.008", "0.00%"),
            createData("June 2023", "$0.8568025192075", "$1.260", "$1.008", "0.00%"),
            createData("July 2023", "$0.85680275627046", "$1.260", "$1.008", "0.00%"),
            createData("August 2023", "$0.85680301944762", "$1.260", "$1.008", "0.00%"),
            createData("September 2023", "$0.85680330192987", "$1.260", "$1.008", "0.00%"),
            createData("October 2023", "$0.8568035944503", "$1.260", "$1.008", "0.00%"),
            createData("November 2023", "$0.85680391776744", "$1.260", "$1.008", "0.00%"),
            createData("December 2023", "$0.85680425097015", "$1.260", "$1.008", "0.00%"),
            ] 
    }
    else if(id==="xrp")
    {   
        rows = [
            createData("April 2023", "$0.5705858939704", "$0.83909690289765", "$0.67127752231812", "27.00%"),
            createData("May 2023", "$0.57093277348912", "$0.83960701983694", "$0.67168561586955", "27.00%"),
            createData("June 2023", "$0.57127624408227", "$0.8401121236504", "$0.67208969892032", "27.00%"),
            createData("July 2023", "$0.5715939694348", "$0.84057936681588", "$0.67246349345271", "27.00%"),
            createData("August 2023", "$0.5719069433141", "$0.84103962252074", "$0.67283169801659", "27.00%"),
            createData("September 2023", "$0.57220412903575", "$0.84147666034669", "$0.67318132827735", "27.00%"),
            createData("October 2023", "$0.57247650738312", "$0.84187721673988", "$0.6735017733919", "27.00%"),
            createData("November 2023", "$0.57274238465894", "$0.84226821273373", "$0.67381457018698", "27.00%"),
            createData("December 2023", "$0.57298372328436", "$0.842623122477", "$0.6740984979816", "27.00%")
          ];
          

        
    }
    else if(id==="cardano")
    {
        rows = [
            createData("April 2023", "$0.4724611272892", "$0.69479577542529", "$0.55583662034024", "33.00%"),
            createData("May 2023", "$0.46868263004333", "$0.68923916182843", "$0.55139132946274", "32.00%"),
            createData("June 2023", "$0.46409239425049", "$0.68248881507425", "$0.5459910520594", "30.00%"),
            createData("July 2023", "$0.45889608292843", "$0.6748471807771", "$0.53987774462168", "29.00%"),
            createData("August 2023", "$0.45263084657537", "$0.66563359790496", "$0.53250687832397", "27.00%"),
            createData("September 2023", "$0.4453067495597", "$0.65486286699956", "$0.52389029359965", "25.00%"),
            createData("October 2023", "$0.4370303248453", "$0.64269165418426", "$0.51415332334741", "23.00%"),
            createData("November 2023", "$0.42699135012108", "$0.62792845606042", "$0.50234276484833", "20.00%"),
            createData("December 2023", "$0.4155503129592", "$0.61110340141059", "$0.48888272112847", "17.00%")
        ]
        
    }
    else if(id==="lido staked ether")
    {
        rows = [
            createData("April 2023", "$1,450.768", "$2,133.482", "$1,706.786", "-15.00%"),
            createData("May 2023", "$1,460.634", "$2,147.991", "$1,718.393", "-14.00%"),
            createData("June 2023", "$1,475.219", "$2,169.440", "$1,735.552", "-13.00%"),
            createData("July 2023", "$1,493.835", "$2,196.817", "$1,757.453", "-12.00%"),
            createData("August 2023", "$1,517.882", "$2,232.179", "$1,785.743", "-11.00%"),
            createData("September 2023", "$1,546.862", "$2,274.798", "$1,819.838", "-9.00%"),
            createData("October 2023", "$1,579.537", "$2,322.848", "$1,858.278", "-7.00%"),
            createData("November 2023", "$1,617.955", "$2,379.345", "$1,903.476", "-5.00%"),
            createData("December 2023", "$1,659.271", "$2,440.104", "$1,952.083", "-2.00%")
        ]
               
    }
    else if(id==="doge")
    {
        rows = [
            createData("April 2023", "$0.092012087272591", "$0.13531189304793", "$0.10824951443834", "23.00%"),
            createData("May 2023", "$0.091922120317897", "$0.13517958870279", "$0.10814367096223", "23.00%"),
            createData("June 2023", "$0.091807619365434", "$0.13501120494917", "$0.10800896395933", "23.00%"),
            createData("July 2023", "$0.091674897302709", "$0.13481602544516", "$0.10785282035613", "23.00%"),
            createData("August 2023", "$0.091513902108212", "$0.13457926780619", "$0.10766341424496", "22.00%"),
            createData("September 2023", "$0.091327349771025", "$0.13430492613386", "$0.10744394090709", "22.00%"),
            createData("October 2023", "$0.091121128453542", "$0.1340016594905", "$0.1072013275924", "22.00%"),
            createData("November 2023", "$0.090879632157191", "$0.13364651787822", "$0.10691721430258", "22.00%"),
            createData("December 2023", "$0.090617493910061", "$0.13326102045597", "$0.10660881636478", "21.00%")
        ]
        
    }
    else if(id==="polygon")
    {
        rows = [
            createData("April 2023", "$1.223", "$1.798", "$1.438", "26.00%"),
            createData("May 2023", "$1.225", "$1.801", "$1.441", "26.00%"),
            createData("June 2023", "$1.227", "$1.804", "$1.444", "26.00%"),
            createData("July 2023", "$1.229", "$1.808", "$1.446", "26.00%"),
            createData("August 2023", "$1.232", "$1.811", "$1.449", "27.00%"),
            createData("September 2023", "$1.234", "$1.815", "$1.452", "27.00%"),
            createData("October 2023", "$1.237", "$1.819", "$1.455", "27.00%"),
            createData("November 2023", "$1.240", "$1.823", "$1.459", "27.00%"),
            createData("December 2023", "$1.243", "$1.828", "$1.462", "28.00%")
        ]
                
    }
    else if(id==="solana")
    {
        rows = [
            createData("April 2023", "$22.522", "$33.120", "$26.496", "7.00%"),
            createData("May 2023", "$22.344", "$32.859", "$26.287", "6.00%"),
            createData("June 2023", "$22.141", "$32.560", "$26.048", "5.00%"),
            createData("July 2023", "$21.925", "$32.243", "$25.794", "4.00%"),
            createData("August 2023", "$21.682", "$31.886", "$25.509", "3.00%"),
            createData("September 2023", "$21.420", "$31.501", "$25.201", "2.00%"),
            createData("October 2023", "$21.149", "$31.102", "$24.881", "0.00%"),
            createData("November 2023", "$20.851", "$30.663", "$24.530", "0.00%"),
            createData("December 2023", "$20.546", "$30.215", "$24.172", "-1.00%")
        ]

    }
    else if(id==="chainlink")
    {
        rows = [
            createData("April 2023", "$6.621", "$9.737", "$7.790", "0.00%"),
            createData("May 2023", "$6.598", "$9.702", "$7.762", "0.00%"),
            createData("June 2023", "$6.569", "$9.661", "$7.728", "0.00%"),
            createData("July 2023", "$6.538", "$9.614", "$7.692", "0.00%"),
            createData("August 2023", "$6.501", "$9.560", "$7.648", "-1.00%"),
            createData("September 2023", "$6.460", "$9.500", "$7.600", "-2.00%"),
            createData("October 2023", "$6.415", "$9.434", "$7.547", "-2.00%"),
            createData("November 2023", "$6.364", "$9.359", "$7.487", "-3.00%"),
            createData("December 2023", "$6.309", "$9.278", "$7.422", "-4.00%")
        ]
        
    }
    else if(id==="stellar")
    {
        rows = [
            createData("April 2023", "$0.12508890885866", "$0.18395427773332", "$0.14716342218666", "37.00%"),
            createData("May 2023", "$0.12502832132958", "$0.18386517842585", "$0.14709214274068", "37.00%"),
            createData("June 2023", "$0.12495030988375", "$0.1837504557114", "$0.14700036456912", "37.00%"),
            createData("July 2023", "$0.12485934640488", "$0.18361668588954", "$0.14689334871163", "37.00%"),
            createData("August 2023", "$0.12474874888006", "$0.18345404247068", "$0.14676323397654", "37.00%"),
            createData("September 2023", "$0.1246206142339", "$0.18326560916751", "$0.146612487334", "36.00%"),
            createData("October 2023", "$0.12447924796991", "$0.18305771760281", "$0.14644617408225", "36.00%"),
            createData("November 2023", "$0.12431426072013", "$0.1828150892943", "$0.14625207143544", "36.00%"),
            createData("December 2023", "$0.12413598320534", "$0.18255291647843", "$0.14604233318275", "36.00%")
        ]
        
    }
    else
    {
        rows = [
            createData("April 2023", "$5.324", "$7.829", "$6.263", "-5.00%"),
            createData("May 2023", "$5.314", "$7.815", "$6.252", "-5.00%"),
            createData("June 2023", "$5.317", "$7.818", "$6.255", "-5.00%"),
            createData("July 2023", "$5.332", "$7.841", "$6.273", "-5.00%"),
            createData("August 2023", "$5.362", "$7.885", "$6.308", "-4.00%"),
            createData("September 2023", "$5.407", "$7.951", "$6.361", "-3.00%"),
            createData("October 2023", "$5.464", "$8.036", "$6.429", "-2.00%"),
            createData("November 2023", "$5.538", "$8.145", "$6.516", "-1.00%"),
            createData("December 2023", "$5.623", "$8.269", "$6.616", "0.00%")
        ]
    }  
  return (
    <div style={{}}>
    <h1 style={{marginLeft:"5%",marginTop:"5%",fontFamily:"sans-serif" ,color:"gold"}}>{c} Price Prediction for 2023</h1>
      
            
            {id==="bitcoin" &&
                <img src={bitcoin} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",marginBottom:"5%",backgroundColor:"white"}}></img>
            }
            {id==="ethereum" &&     
                <img src={ethereum } alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
            }
            {id==="tether" && 
                <img src={tether} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
            }
            {id==="bnb" && 
                <img src={bnb} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>       
            }
            {id==="usd coin" && 
                <img src={usdCoin} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
            }
            {id==="xrp" &&   
                <img src={xrp} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>        
            }
            {id==="cardano" && 
                <img src={cardano} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>     
            }
            {id==="lido staked ether" && 
                <img src={lidoStakedEther} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>               
            }
            {id==="doge" && 
                <img src={doge} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>       
            }
            {id==="polygon" && 
                <img src={polygon} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>               
            }
            {id==="solana" && 
                <img src={Solana} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
            }
            {id==="chainlink" && 
                <img src={Chainlink} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>       
            }
            {id==="stellar" && 
                <img src={Stellar} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>       
            }
            {id==="polkadot" &&  
                <img src={Polkadot} alt='no data' style={{width:"80%",margin:"10%",marginTop:"5%",backgroundColor:"white"}}></img>
            } 
    <div style={{width:"70%",marginLeft:"15%",marginRight:"15%"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead style={{backgroundColor:"gold"}}>
          <TableRow>
            <TableCell>MONTH</TableCell>
            <TableCell align="right">MINIMUM PRICE</TableCell>
            <TableCell align="right">MAXIMUM PRICE</TableCell>
            <TableCell align="right">AVERAGE PRICE</TableCell>
            <TableCell align="right">CHANGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:"#434543"}}>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{color:"white"}}>
                {row.month}
              </TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.min}</TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.max}</TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.avg}</TableCell>
              <TableCell align="right" style={{color:"white"}}>{row.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>        
        </Table>
    </TableContainer>

    </div>
    </div>

   
  )
}

export default Prediction

