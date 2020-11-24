import React, { Component } from 'react'
import './body.css'
import './genres.css'
import { connect } from 'react-redux'


class Recently extends Component {
    state = {
        mode: this.props.anyplay.mode,
        leftg: 3,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        swipe: false,
        size: window.innerWidth,

    }



    leftg = () => {
        this.setState({
            leftg: this.state.leftg + 20
        })
    }
    rightg = () => {
        this.setState({
            leftg: this.state.leftg - 20
        })
    }



    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                mode: nextProps.anyplay.mode,
            })
        }
    }

    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })

        }

        window.addEventListener('resize', wide, false)


    }



    componentDidMount() {
        this.size()
        setInterval(() => {
            this.setState({
                swipe: !this.state.swipe
            })
        }, 15000)

    }

    render() {
        return (
            <div className="genres-page">


                {this.state.swipe === true ? <div style={{ height: this.state.size <= 900 ? '300px' : '400px' }} className="highlights">
                    <img style={{ height: this.state.size <= 900 ? '300px' : '400px' }} src={'./uploads/high.png'} alt='h-light' className='h-light' />
                    <div className="h-text">
                        <div className="border-text">
                            <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Highlight:mulani</h1>
                            <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Trailer</h1>
                            <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Royal Challenger Bangalore off a nervy Super-
                                over win against Mumbai indians in Match 10 Dream IPL 2020
                        </p>
                            <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Dream IPL 2020</p>
                        </div>
                        <div className="watch">
                            <img src={'./uploads/play.png'} alt='watch' className='play-watch' />
                            <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Watch Now</p>
                        </div>

                    </div>
                </div> :

                    <div style={{ height: this.state.size <= 900 ? '300px' : '400px' }} className="highlightss">
                        <img style={{ height: this.state.size <= 900 ? '300px' : '400px' }} src={'./uploads/gggg.jpg'} alt='h-light' className='h-light' />
                        <div className="h-text">
                            <div className="border-text">
                                <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Highlight:Watch More</h1>
                                <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Trailer</h1>
                                <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Royal Challenger Bangalore off a nervy Super-
                                    over win against Mumbai indians in Match 10 Dream IPL 2020
        </p>
                                <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Dream IPL 2020</p>
                            </div>
                            <div className="watch">
                                <img src={'./uploads/play.png'} alt='watch' className='play-watch' />
                                <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Watch Now</p>
                            </div>

                        </div>
                    </div>


                }












                <div style={{ fontSize: '9px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Recently Uploaded</h1></div>

                <div className="genres-page-wrap">
                    {this.state.card.slice(0, 9).map(e => {
                        return (<div style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e} className="cards-genreg">
                            <img src={'./uploads/mulan.jpg'} alt='mulan' className='card-icon-genre' />

                            <div className="card-info-genre">
                                <p className='in-genre'>ACTION</p>


                            </div>
                        </div>)
                    })}



                </div>
                <div className="adds"><h1>Adds...</h1></div>


                <div className="genre-infinity-scrollv">

                    <div className="movie-type">
                        <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Suggestions</h1> <div className="more-link"><p className="m">more</p></div></div>
                        <div className="slide-overflow">


                            <div className="movie-wrap">
                                <div className="movie-wrap-2">
                                    {this.state.card.slice(0, 17).map(e => {
                                        return (<div style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e} className="cards-genre">
                                            <img src={'./uploads/mulan.jpg'} alt='mulan' className='card-icon-genre' />

                                            <div className="card-info-genre">
                                                <p className='in-genre'>ACTION</p>


                                            </div>
                                        </div>)
                                    })}
                                </div>
                            </div>
                            <div className="inwrap">
                                <div onClick={this.leftg} className="left"><p className="slide-text">left</p></div>

                                <div onClick={this.rightg} className="right"><p className="slide-text">right</p></div>
                            </div>
                        </div>

                    </div>


                </div>


                <div className="adds"><h1>Adds...</h1></div>



            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};

export default connect(mapStateToProps)(Recently);