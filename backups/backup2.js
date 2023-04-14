import {
    Button,
    LinearProgress,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";
  import ReactHtmlParser from "react-html-parser";
  import CoinInfo from "../components/CoinInfo";
  import { SingleCoin } from "../config/api";
  import { numberWithCommas } from "../components/CoinsTable";
  import { CryptoState } from "../CryptoContext";
  import { doc, setDoc } from "firebase/firestore";
  import { db } from "../firebase";
  
  const CoinPage = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState();
  
    const { currency, symbol, user, setAlert, watchlist } = CryptoState();
  
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin(id));
  
      setCoin(data);
    };
  
    const inWatchlist = watchlist.includes(coin?.id);
  
    const addToWatchlist = async () => {
      const coinRef = doc(db, "watchlist", user.uid);
      try {
        await setDoc(
          coinRef,
          { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
          { merge: true }
        );
  
        setAlert({
          open: true,
          message: `${coin.name} Added to the Watchlist !`,
          type: "success",
        });
      } catch (error) {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      }
    };
  
    const removeFromWatchlist = async () => {
      const coinRef = doc(db, "watchlist", user.uid);
      try {
        await setDoc(
          coinRef,
          { coins: watchlist.filter((wish) => wish !== coin?.id) },
          { merge: true }
        );
  
        setAlert({
          open: true,
          message: `${coin.name} Removed from the Watchlist !`,
          type: "success",
        });
      } catch (error) {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      }
    };
  
    useEffect(() => {
      fetchCoin();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const useStyles = makeStyles((theme) => ({
      container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      },
      sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        borderRight: "2px solid grey",
      },
      heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
      },
      description: {
        width: "100%",
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
      },
      marketData: {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        },
        [theme.breakpoints.down("xs")]: {
          alignItems: "start",
        },
      },
    }));
  
    const classes = useStyles();
  
    if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;
  
    return (
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ marginBottom: 20 }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {numberWithCommas(coin?.market_cap_rank)}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </Typography>
            </span>
            {user && (
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  height: 40,
                  backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
                }}
                onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
              >
                {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
              </Button>
            )}
          </div>
        </div>
        <CoinInfo coin={coin} />
      </div>
    );
  };
  
  export default CoinPage;
 
  


// import {
//   Button,
//   LinearProgress,
//   makeStyles,
//   Typography,
//   Input,
//   MenuItem,
//   Select,
// } from "@material-ui/core";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ReactHtmlParser from "react-html-parser";
// import CoinInfo from "../components/CoinInfo";
// import { SingleCoin } from "../config/api";
// import { numberWithCommas } from "../components/CoinsTable";
// import { CryptoState } from "../CryptoContext";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../firebase";
// import * as React from 'react';





// const CoinPage = () => {
//   const { id } = useParams();
//   const [tempCurrency, setTempCurrency] = React.useState('USD');
//   const [coin, setCoin] = useState();
//   const [input, setinput] = useState({crypto:0,price:0});
//   const {setCurrency} = CryptoState();
//   const updateinput=(e)=>
//   {
//   const name = e.target.name;
//   const value = e.target.value;
//   setinput({ ...input, [name]: value }); 
//   if(name==='crypto'){
//     setinput({ ...input, 'price': value*coin?.market_data.current_price[currency.toLowerCase()],[name]: value });
//   }
//   else if(name==='price'){
//     setinput({ ...input, 'crypto': value/coin?.market_data.current_price[currency.toLowerCase()],[name]: value });
//   }  
// }
//   const { currency, symbol, user, setAlert, watchlist } = CryptoState();

//   const fetchCoin = async () => {
//     const { data } = await axios.get(SingleCoin(id));

//     setCoin(data);
//   };

//   const inWatchlist = watchlist.includes(coin?.id);

//   const addToWatchlist = async () => {
//     const coinRef = doc(db, "watchlist", user.uid);
//     try {
//       await setDoc(
//         coinRef,
//         { coins: watchlist ? [...watchlist, coin?.id] : [coin?.id] },
//         { merge: true }
//       );

//       setAlert({
//         open: true,
//         message: `${coin.name} Added to the Watchlist !`,
//         type: "success",
//       });
//     } catch (error) {
//       setAlert({
//         open: true,
//         message: error.message,
//         type: "error",
//       });
//     }
//   };

//   const removeFromWatchlist = async () => {
//     const coinRef = doc(db, "watchlist", user.uid);
//     try {
//       await setDoc(
//         coinRef,
//         { coins: watchlist.filter((wish) => wish !== coin?.id) },
//         { merge: true }
//       );

//       setAlert({
//         open: true,
//         message: `${coin.name} Removed from the Watchlist !`,
//         type: "success",
//       });
//     } catch (error) {
//       setAlert({
//         open: true,
//         message: error.message,
//         type: "error",
//       });
//     }
//   };

//   useEffect(() => {
//     fetchCoin();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const useStyles = makeStyles((theme) => ({
//     container: {
//       display: "flex",
//       [theme.breakpoints.down("md")]: {
//         flexDirection: "column",
//         alignItems: "center",
//       },
//     },
//     sidebar: {
//       width: "30%",
//       [theme.breakpoints.down("md")]: {
//         width: "100%",
//       },
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       marginTop: 25,
//       borderRight: "2px solid grey",
//     },
//     heading: {
//       fontWeight: "bold",
//       marginBottom: 20,
//       fontFamily: "Montserrat",
//     },
//     description: {
//       width: "100%",
//       fontFamily: "Montserrat",
//       padding: 25,
//       paddingBottom: 15,
//       paddingTop: 0,
//       textAlign: "justify",
//     },
//     marketData: {
//       alignSelf: "start",
//       padding: 25,
//       paddingTop: 10,
//       width: "100%",
//       [theme.breakpoints.down("md")]: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       },
//       [theme.breakpoints.down("xs")]: {
//         alignItems: "start",
//       },
//     },
//   }));

//   const classes = useStyles();

//   if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

//   return (
//     <div className={classes.container}>
//       <div className={classes.sidebar}>
//         <img
//           src={coin?.image.large}
//           alt={coin?.name}
//           height="200"
//           style={{ marginBottom: 20 }}
//         />
//         <Typography variant="h3" className={classes.heading}>
//           {coin?.name}
//         </Typography>
//         <Typography variant="subtitle1" className={classes.description}>
//           {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
//         </Typography>
//         <div className={classes.marketData}>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Rank:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {numberWithCommas(coin?.market_cap_rank)}
//             </Typography>
//           </span>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Current Price:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.current_price[currency.toLowerCase()]
//               )}
//             </Typography>
//           </span>
//           <span style={{ display: "flex" }}>
//             <Typography variant="h5" className={classes.heading}>
//               Market Cap:
//             </Typography>
//             &nbsp; &nbsp;
//             <Typography
//               variant="h5"
//               style={{
//                 fontFamily: "Montserrat",
//               }}
//             >
      
//               {symbol}{" "}
//               {numberWithCommas(
//                 coin?.market_data.market_cap[currency.toLowerCase()]
//                   .toString()
//                   .slice(0, -6)
//               )}
//               M
//             </Typography>
//           </span>
//           <div style={{backgroundColor:"grey",width:"100%"}}>
//         <img src={coin?.image.large} alt="" style={{height:"50px",float:"left"}}></img>
      
  
//         <Input
//         style={{backgroundColor:"#ebebeb",height: 50,width:150}}
//         type="number"
//         name='crypto'
//         value={input.crypto}
//         onChange={(e)=>updateinput(e)}
//         slotProps={{
//           input: {
      
//           step: 1 ,
//           },
//       }}
//       />
//       <Select
//               variant="outlined"
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//               value={currency}
//               style={{ width: 85, height: 50,marginLeft:'50px',backgroundColor:"#aafaa2" }}
//               onChange={(e) => setCurrency(e.target.value)}
//             >
//               <MenuItem value={"USD"}>USD</MenuItem>
//               <MenuItem value={"INR"}>INR</MenuItem>
//               <MenuItem value={"AED"}>AED</MenuItem>
//               <MenuItem value={"EUR"}>EUR</MenuItem>
//               <MenuItem value={"JPY"}>JPY</MenuItem>
//               <MenuItem value={"KRW"}>KRW</MenuItem>
//               <MenuItem value={"CNY"}>CNY</MenuItem>
//               <MenuItem value={"CAD"}>CAD</MenuItem>
//               <MenuItem value={"AUD"}>AUD</MenuItem>
//               <MenuItem value={"ZAR"}>ZAR</MenuItem>
//               <MenuItem value={"TRY"}>TRY</MenuItem>
//               <MenuItem value={"BRL"}>BRL</MenuItem>
//             </Select>
//       <Input
//       startDecorator={{ USD: '$', INR: '฿', JPY: '¥' }[currency]}
//       style={{backgroundColor:"#ebebeb",margin:"0px",height: 50,width:150}}
//       type="number"
//       name="price"
//       value={input.price}
//       onChange={(e)=>updateinput(e)}
//       defaultValue={1}
//       slotProps={{
//           input: {
      
//           step: 1 ,
//           },
//       }}
//       />

//       </div>
//           {user && (
//             <Button
//               variant="outlined"
//               style={{
//                 width: "100%",
//                 height: 40,
//                 backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
//               }}
//               onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
//             >
//               {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
//             </Button>
//           )}
//         </div>
//       </div>
//       <CoinInfo coin={coin} />
//     </div>
//   );
// };

// export default CoinPage;  