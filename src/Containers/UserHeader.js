import React ,{Component} from "react";
import {connect} from 'react-redux';
import { FetchUser } from '../Actions';


class UserHeader extends Component{

    componentDidMount(){
        this.props.FetchUser(this.props.userId);
    }

    render(){
        const user = this.props.user.find(user => user.id === this.props.userId )
        if(!user){
            return null;
        }
        return <div className = "header">{user.name}</div>
    }
}

const mapStateToProps = (state) =>{
    return{
        user : state.user
    }
    
}

export default connect(mapStateToProps , {FetchUser})(UserHeader);