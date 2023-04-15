import React, { useState,useEffect } from "react";
import { Container} from "@material-ui/core";

export default function News(){
  const newsUrl = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa";
  // const [newsData,setNewData] = UseState([]);


  const [newsData, setNewsData] = useState(0);
  const [ind, setInd]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

  useEffect(() => {
  fetchUrl(newsUrl).catch((err) => console.log("Error!", err.message));
    
  },[]);

  const fetchUrl = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    if ((response.status !== 200) | !response.ok) {
      throw new Error();
    }
    console.log("Response: " + response.status);
    console.log(data.Data)
    setNewsData(data.Data)
    console.log(newsData)
  };
  
  
 

  return (
      <div class={{}}>
       {newsData.length>0 && 
      //  <Newslist data={newsData}></Newslist>
      
       <div>
      <ul>
        {/* <h1 style={{color:'gold'}}>CryptoNews</h1> */}

       {ind.map(element => {
        console.log(element)
         return(
           <>
          <div style={{margin:'auto',marginTop:"7%",marginBottom:"7%",padding:"10px",backgroundColor:'white',display: 'flex',width:"60%",border: '5px solid white',borderRadius: '25px',paddingTop:"120px",paddingBottom:"120px"}} key={element}>
          <div style={{position:"relative",left:"-50px",top:"-160px"}}>
          <img src={newsData[[element]].imageurl} alt={newsData[[element]].source_info.name} style={{margin:'5px',borderRadius:"50%",width:"100px",border: '5px solid orange' }}></img>
          </div>
          <div>
          <div style={{position:"relative",top:"-115px",left:"-40px"}}>
          <h3 style={{color:'gold',fontSize:'20px'}}>{new Date(newsData[[element]].published_on * 1000).toLocaleDateString("en-US")}</h3>
          </div>
          <div style={{position:"relative",left:"-40px"}}>
          <h2 style={{color:'gold',fontSize:'25px'}}>{newsData[[element]].title}</h2>
          <p style={{color:'black',fontSize:'20px'}}>{newsData[[element]].body }<h2 style={{fontSize:'25px'}}> Source: {newsData[[element]].source_info.name}</h2></p>

          <div>
          {<button style={{borderRadius: '25px' ,backgroundColor: 'black',padding: '10px 20px',marginTop:"20px"}}><a class="btn_primary" style={{fontSize:'25px'}} href={newsData[[element]].url }>Read More</a></button> }
            
            
          </div>
          </div>
          </div>
          </div>
          
          </>
        )
      })}
      </ul>
       </div>
       }
      </div>
      
  )
}


// const Newslist = ({data}) => {
//   console.log(data)
//   console.log(typeof(data))
  
  
//   const ListItems = data.map((number) =>
//   <li>hii</li>
// );

// const ListItems = data.array.forEach(element => {
//   return(
//     <>
//     <li>hii</li>
//     </>
//   )
// });

//   return (
//     <div>
//       <li>ff</li>
//       {/* {data>0 && <li>{data[0].body}</li>} */}
//       <ListItems></ListItems>
//     </div>
//   )
// }

// <div class="wrapper">
// <div class="blog_post">
// <div class="img_pod">
// <img src="${c[1]}" alt="${c[2]}, ${c[7]}"></img>
// </div>
// <div class="container_copy">
// <h3>${c[4]}</h3>
// <h1>${c[3]}</h1>
// <p>${c[5]} <br><h5> Source: ${c[2]}</h5></p>

// <div>
// <a class="btn_primary" href='${c[6]}'>Read More</a>
// </div>
// </div> 
// `; 



// const prepare = (data) => {
//   for (let keys of Object.keys(data.Data)) {
//     let key = data.Data[keys];
//     let c = [
//       key.id,
//       key.imageurl,
//       key.source_info.name,
//       key.title,
//       new Date(key.published_on * 1000).toLocaleDateString("en-US"),
//       key.body,
//       key.url,
//       key.tags,
//       key.categories,
//     ];
//     fillPage(c);
//   }
// };

// {/* <div class="wrapper">
// <div class="blog_post">
// <div class="img_pod">
// <img src="{newsData[[element]].imageurl}" alt="{newsData[[element]].source_info.name},{newsData[[element]].tags}"></img>
// </div>
// <div class="container_copy">
// <h3>{newsData[[element]].new Date(key.published_on * 1000).toLocaleDateString("en-US")}</h3>
// <h1>{newsData[[element]].title}</h1>
// <p>{newsData[[element]].body }<h5> Source: {newsData[[element]].source_info.name}</h5></p>

// <div>
// <a class="btn_primary" href='{newsData[[element]].url}'>Read More</a>
// </div>
// </div> 
// </div> 
// </div>
// </div> 
// </> */}