import React from 'react';
import Cookies from 'js-cookie'
import { GLOBAL_CONSTANT } from './../utils/constants'
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {compose} from 'redux';


const AuthModalPage = React.lazy(() => import('./../pages/AuthModalPage'));

const withAuthContext = (WrappedComponent) => {
    class HOC extends React.Component {

        state = {
            isAuthenticated: false,
        }

        componentWillMount() {
             const cookie = Cookies.get(GLOBAL_CONSTANT.Cookie);
             if(cookie){
                 this.setState({...this.state, isAuthenticated: true})
             }
        }


        render() {
            debugger;
            return (
                this.state.isAuthenticated ? <WrappedComponent
                    {...this.props}
                /> : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from : this.props.match.url}
                    }}
                />
            );
        }
    }

    return HOC;
};

function mapStateToProps(store){
    return {

    }
}


export default compose(connect(mapStateToProps,null),withAuthContext);
