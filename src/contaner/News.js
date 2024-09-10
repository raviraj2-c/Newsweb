import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultprop ={
   country : 'in',
   sizeofpage : 5,
   category : 'technology'
  }
  static propTypes ={
    country : propTypes.string,
   sizeofpage : propTypes.number,
   category : propTypes.string
  }
    articles = [ 
      ]
      capitalizeFirstletter = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }
    constructor(props){
        super(props);
        this.state ={
            articles : this.articles,
            loading : false,
            page:1,
            totalResults:0
          }
          document.title=`${this.capitalizeFirstletter(this.props.category)}-JHC_News`;
    }
    async updateNews(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.sizeofpage}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
       this.setState({articles: parsedData.articles , 
        totalResults: parsedData.totalResults,
        loading : false
      })
    }
    async componentDidMount(){
      this.updateNews();
    } 
    // privespag = async ()=>{
    //   this.setState({page: this.state.page-1})
    //   this.updateNews();
    // }

    // nextpag = async ()=>{
    //   this.setState({page: this.state.page+1})
    //   this.updateNews();
    // }
    fetchMoreData = async() => {
      this.setState({page: this.state.page+1})
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.sizeofpage}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
       this.setState({articles: this.state.articles.concat(parsedData.articles) , 
        totalResults: parsedData.totalResults,
        loading : false
      })
    };

  render() {

    return (
      <div>
        <div className=' '>
            <h2 className='text-center'>JHC NEW - Top {this.capitalizeFirstletter(this.props.category)} Headlines</h2><hr  style={{border : '1px solid ' , color:'black'}}/>
           {/* {this.state.loading && <Spinner/>} */}
           <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row '>
        {/* {!this.state.loading && */}
           {this.state.articles.map((element)=>{
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
      <button type="button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.sizeofpage)} onClick={this.nextpag} className="btn btn-dark">Next &rarr;</button>
      </div> */}
      </div>
    )
  }
}

export default News
