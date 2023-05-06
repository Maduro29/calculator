import React from "react";
import PropTypes from "prop-types";
import "../assets/Button.css";

class Button extends React.Component {

    clickHandler = () => {
        this.props.clickHandler(this.props.name);
    }
    
    render() {
        let className = "component-button";
        if (this.props.orange) {
            className += " orange";
        }
        if (this.props.wide) {
            className += " wide";
        }

        return (
            <div className={className}>
                <button onClick={this.clickHandler} className="component-button">
                    {this.props.name}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func
};


export default Button;