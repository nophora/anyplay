import React, { Component } from 'react'
import './anyplay.css'
import Body from './components/body/body.jsx'
import Genres from './components/body/genres.jsx'
import Action from './components/body/action.jsx'
import Recently from './components/body/recently.jsx'

import { connect } from 'react-redux'
import Mode from './mode'


class Anyplay extends Component {
    state = {
        mode: false,
        more: false,
        seachi: '',
        switch: false,
    }


    switch = () => {
        this.setState({
            switch: !this.state.switch
        })
    }
    mode = () => {
        this.setState({
            mode: !this.state.mode
        })
        setTimeout(() => {
            this.props.Mode(this.state.mode)
        }, 30)
    }
    more = () => {
        this.setState({
            more: !this.state.more
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                mode: nextProps.anyplay.mode,
            })
        }
    }
    handleSeach = event => {
        this.setState({ seachi: event.target.value })
    }
    render() {
        //<Genres /><Action /><Recently />
        return (
            <div className={this.state.mode === false ? "mode-UI-Light" : "mode-UI-Black"}>

                {this.state.switch === true ? <Genres /> :
                    <Body />}

                <div className="navbar">
                    <div className="options">
                        <div className="option1">Movies</div>
                        <div className="option1">Shows</div>
                        <div className="option1">Browse</div>
                        <div className="option1">Plans</div>
                        <div className="option1-more">
                            <div className="option1-more-2">
                                <div onClick={this.more} className="op-more"><p>more</p><img src={'./uploads/play.png'} alt='mors' className='drop-icon' /></div>
                                {this.state.more && <div className="more-points">
                                    <div className="point1"><p className="pc">option1</p></div>
                                    <div onClick={this.mode} className="point1"><p className="pc">{this.state.mode === false ? 'Dark UI' : 'Light UI'}</p></div>
                                    <div className="point1"><p className="pc">option3</p></div>
                                    <div className="point1"><p className="pc">option4</p></div>

                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className="more-options">
                        <div className="search-and-more">
                            <div className="search-wrap">
                                <input value={this.state.seachi} onChange={this.handleSeach} placeholder='search...' className='search-input' />
                            </div>
                            <div onClick={this.switch} className="more-box"></div>
                        </div>
                    </div>
                </div>


            </div>);
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};


export default connect(mapStateToProps, { Mode })(Anyplay);