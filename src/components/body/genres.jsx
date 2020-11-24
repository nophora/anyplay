import React, { Component } from 'react'
import './body.css'
import './genres.css'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';


class Genres extends Component {
    state = {
        leftg: 3,
        slice: 20,
        relise: '',
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 18, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 118, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],

        mode: this.props.anyplay.mode
    }



    chandleScroll = () => {
       
        if (this.state.card.length > this.state.slice && (typeof this.state.relise === 'string' || this.state.relise === true)) {


            this.setState({ relise: false })

            setTimeout(() => {
                this.setState({
                    slice: this.state.slice + 23,
                    relise: true,
                })
            }, 3000)
        }

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



    render() {
        return (
            <div className="genres-page">
                <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Popular Movies</h1></div>

                <div className="genres-page-wrap">

                    {this.state.card.slice(0, this.state.slice).map(e => {
                        return (<div style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e} className="genre-cards">
                            <img src={'./uploads/mulan.jpg'} alt='mulan' className='card-icon' />
                            <div className="pg">
                                <div className="pg-div"><p>pg 13</p></div>
                            </div>
                            <div className="card-info">
                                <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='in'>you name</p>
                                <div className='info-text'>
                                    <div className="free">free</div>
                                    <div className="complite">complite</div>
                                </div>

                            </div>
                        </div>)
                    })}




                </div>

                <div className="genre-infinity-scroll">
                    <InfiniteScroll
                        style={{ overflow: 'hidden' }}
                        dataLength={this.state.slice}//This is important field to render the next data
                        next={this.chandleScroll}
                        hasMore={this.state.card.length > this.state.slice}
                        loader={this.state.relise === false && <div className='load-infinity'></div>}>
                    </InfiniteScroll>



                </div>


                {this.state.card.length < this.state.slice && <div className="genre-infinity-scrollv">

                    <div className="movie-type">
                        <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Genres</h1> <div className="more-link"><p className="m">more</p></div></div>
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


                </div>}

                {this.state.card.length < this.state.slice && <div className="adds"><h1>Adds...</h1></div>}




            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};

export default connect(mapStateToProps)(Genres);