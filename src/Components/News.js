import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : true,
      page : 1,
      totalArticles : undefined
    }
  }

  async componentDidMount(){
    this.fetchData()
  }

  async componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.setState({articles : [], length : 6, loading : true})
      this.fetchData();
    }
  }

  async fetchData(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=93d782635582495eb09ec95e56976ee9&page=${this.state.page}&pagesize=6`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles, totalArticles : parsedData.totalResults, loading : false})
  }

  handleNextBtn = async () => {
    console.log("Next clicked");
  
    this.setState(
      prevState => ({  
        page: prevState.page + 1,
        loading: true
      }),
      async () => {
        console.log(this.state.page);
  
        if (this.state.page <= Math.ceil(this.state.totalArticles / 6)) {
          await this.fetchData();
        }
      }
    );
  }
  
  handlePrevBtn = async () => {
    console.log("Pervious clicked");
  
    this.setState(
      prevState => ({  
        page: prevState.page - 1,
        loading : true
      }),
      async () => {
        console.log(this.state.page);
          await this.fetchData();
      }
    );
  }


  render() {
    return (
        <>
            <div className="container">
                <h2>Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title = {element.title} description = {element.description} imgURL = {element.urlToImage} detailURL = {element.url}/>
                        </div>
                        }
                      ) 
                    }
                </div>

                <div className="container d-flex justify-content-between">
                  <button type='button' className='btn btn-sm btn-primary' onClick={this.handlePrevBtn} disabled={this.state.page==1}> &larr; Previous</button>
                  <button type='button' className='btn btn-sm btn-primary' onClick={this.handleNextBtn} disabled={this.state.page >=  Math.ceil(this.state.totalArticles/6)}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
  }
}
