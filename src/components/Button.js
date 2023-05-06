import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {

    clickHandler = () => {
        this.props.clickHandler(this.props.name);
    }

    render() {
        return (
            <button onClick={this.clickHandler} className="component-button">
                {this.props.name}
            </button>
        )
    }

}

Button.propTypes = {
    name: PropTypes.string,
    clickHandler: PropTypes.func
};


export default Button;