//this is the code for class based 

// import React, { Component } from 'react'
// import Newsitems from './Newsitems'
// import Spinner from './Spinner';
// import propTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultprop ={
//    country : 'in',
//    sizeofpage : 5,
//    category : 'technology'
//   }
//   static propTypes ={
//     country : propTypes.string,
//    sizeofpage : propTypes.number,
//    category : propTypes.string
//   }
//     articles = [ 
//       ]
//       capitalizeFirstletter = (string)=>{
//         return string.charAt(0).toUpperCase()+string.slice(1);
//       }
//     constructor(props){
//         super(props);
//         this.state ={
//             articles : this.articles,
//             loading : false,
//             page:1,
//             totalResults:0
//           }
//           document.title=`${this.capitalizeFirstletter(props.category)}-JHC_News`;
//     }
//     async updateNews(){
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.sizeofpage}`;
//       this.setState({loading : true})
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       console.log(parsedData);
//        this.setState({articles: parsedData.articles , 
//         totalResults: parsedData.totalResults,
//         loading : false
//       })
//     }
//     async componentDidMount(){
//       this.updateNews();
//     } 
//     // privespag = async ()=>{
//     //   this.setState({page: this.state.page-1})
//     //   this.updateNews();
//     // }

//     // nextpag = async ()=>{
//     //   this.setState({page: this.state.page+1})
//     //   this.updateNews();
//     // }
//     fetchMoreData = async() => {
//       this.setState({page: this.state.page+1})
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.sizeofpage}`;
//       this.setState({loading : true})
//       let data = await fetch(url);
//       let parsedData = await data.json()
//       console.log(parsedData);
//        this.setState({articles: this.state.articles.concat(parsedData.articles) , 
//         totalResults: parsedData.totalResults,
//         loading : false
//       })
//     };

//   render() {

//     return (
//       <div>
//         <div className=' '>
//             <h2 className='text-center'>JHC NEW - Top {this.capitalizeFirstletter(props.category)} Headlines</h2><hr  style={{border : '1px solid ' , color:'black'}}/>
//            {/* {this.state.loading && <Spinner/>} */}
//            <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className='container'>
//         <div className='row '>
//         {/* {!this.state.loading && */}
//            {this.state.articles.map((element)=>{
//        return <div className='col-md-4 my-4'key = {element.url}>
//         <Newsitems  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//         </div>        
//             })}
            
//         </div>
//         </div>
//         </InfiniteScroll>
//       </div>
//       {/* <div className='d-flex justify-content-around'>
//       <button disabled={this.state.page<=1} type="button" onClick={this.privespag} className="btn btn-dark"> &larr; Prives </button>
//       <button type="button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/props.sizeofpage)} onClick={this.nextpag} className="btn btn-dark">Next &rarr;</button>
//       </div> */}
//       </div>
//     )
//   }
// }

// export default News




//this is the code for function based 
import React, {useEffect,useState} from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState([]);
    
      const capitalizeFirstletter = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }
    
    const updateNews =async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.sizeofpage}`;
      
      setLoading(true);
      let data = await fetch(url);
      let parsedData = await data.json()
      //props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.articles)
      setLoading(false)
      //props.setProgress(100);
    }
    useEffect(()=>{
      document.title=`${capitalizeFirstletter(props.category)}-JHC_News`;
      updateNews();
      //eslint-disable-next-line
    },[])
   
    const privespag = async ()=>{
      setPage(page-1)
      updateNews();
    }

    const nextpag = async ()=>{
      setPage(page+1)
      updateNews();
    }
    const fetchMoreData = async() => {
     
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.sizeofpage}`;
      setPage(page+1)
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
      setLoading(false)
    };

    return (
      <div>
        <div className=' '>
            <h2 className='text-center'>JHC NEW - Top {capitalizeFirstletter(props.category)} Headlines</h2><hr  style={{border : '1px solid ' , color:'black'}}/>
           {/* {this.state.loading && <Spinner/>} */}
           <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row '>
        {/* {!this.state.loading && */}
           {articles.map((element)=>{
       return <div className='col-md-4 my-4'key = {element.url}>
        <Newsitems  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>        
            })}
            
        </div>
        </div>
        </InfiniteScroll>
      </div>
      {/* <div className='d-flex justify-content-around'>
      <button disabled={this.state.page<=1} type="button" onClick={this.privespag} className="btn btn-dark"> &larr; Prives </button>
      <button type="button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/props.sizeofpage)} onClick={this.nextpag} className="btn btn-dark">Next &rarr;</button>
      </div> */}
      </div>
    )
  }


News.defaultprop ={
  country : 'in',
  sizeofpage : 5,
  category : 'technology'
 }
News.propTypes ={
   country : propTypes.string,
  sizeofpage : propTypes.number,
  category : propTypes.string
 }

export default News
