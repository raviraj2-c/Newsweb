import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import propTypes from 'prop-types'

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
    constructor(){
        super();
        this.state ={
            articles : this.articles,
            loading : false,
            page:1
          }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a47d99f8b787454cb606df2cfcbddace&pageSize=${this.props.sizeofpage}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
       this.setState({articles: parsedData.articles , 
        totalResults: parsedData.totalResults,
        loading : false
      })
    } 
    privespag = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a47d99f8b787454cb606df2cfcbddace&page=${this.state.page - 1}&pageSize=${this.props.sizeofpage}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
       this.setState({
        page : this.state.page - 1,
        articles: parsedData.articles,
        loading : false
       })
    }

    nextpag = async ()=>{
      if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.sizeofpage))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a47d99f8b787454cb606df2cfcbddace&page=${this.state.page + 1}&pageSize=${this.props.sizeofpage}`;
      this.setState({loading : true})
      let data = await fetch(url);
      let parsedData = await data.json()
       this.setState({
        page : this.state.page + 1,
        articles: parsedData.articles,
        loading : false
       })
      } 
    }

  render() {

    return (
      <div>
        <div className='container my-2 '>
            <h2 className='text-center'>JHC NEW - Top Headlines</h2><hr  style={{border : '1px solid ' , color:'black'}}/>
           {this.state.loading && <Spinner/>}
        <div className='row '>
            {!this.state.loading && this.state.articles.map((element)=>{
       return <div className='col-md-4 my-4'key = {element.url}>
        <Newsitems  title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88):""} imgurl={element.urlToImage} newsurl={element.url}/>
        </div>        
            })}
        </div>
      </div>
      <div className='d-flex justify-content-around'>
      <button disabled={this.state.page<=1} type="button" onClick={this.privespag} className="btn btn-dark"> &larr; Prives </button>
      <button type="button" disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.sizeofpage)} onClick={this.nextpag} className="btn btn-dark">Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
