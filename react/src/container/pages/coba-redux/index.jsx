import React from 'react';
import { connect } from 'react-redux'
import ActionType from '../../../Redux/globalActionType';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useAuth0 } from "@auth0/auth0-react";


function Penjumlahan(props) {
    const { loginWithRedirect } = useAuth0();
    const handleChange = (event) => {
      
        var value = parseInt(event.target.value);
        var newValue = (isNaN(value) ? 0 : value);
        console.log(newValue)
        props.handleChangeRedux(newValue)
    }
    console.log(props)
    return (

        <>
            <button onClick={props.handlePlus}>penjumlahan</button>
            <br />
            <input type="text" value={props.count} onChange={handleChange} />
            <br />
            <button onClick={props.handleMinus}>Kurang</button>
            <br />
            <button onClick={() => loginWithRedirect()}>Log In</button>
            <br />
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="outlined" className={'trans-btn-costome'} >
                    Back
                    </Button>
            </Link>
            

        </>
    )
}

// export default Penjumlahan;

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: ActionType.PENJUMLAHAN }),
        handleMinus: () => dispatch({ type: ActionType.PENGURANGAN }),
        handleChangeRedux: (newValue) => dispatch({ type: ActionType.CHANGE_COUNT, newValueRedux: newValue }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Penjumlahan);