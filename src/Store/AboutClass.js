import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurrentLang from '../Store/Action'

 class AboutClass extends Component {

    changeLange = () => {
        this.props.CurrentLang(this.props.lang === 'ar' ? 'en' : 'ar')
    } 

  render() {
    console.log(this.props)
    return (
      <div dir={this.props.lang === 'ar' ? "rtl" : "ltr"} className={this.props.lang === 'ar' ? "text-right" : "text-left"}>
        AboutClass
        <h2>{this.props.lang}</h2>
        <button onClick={this.changeLange}>click Class</button>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => { 
    return {
        lang : state.lang
    }
}
// const mapStateToProps = ({ lang }) => ({ 
//     lang
// })

export default connect(mapStateToProps, {CurrentLang})(AboutClass)
