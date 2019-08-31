import React, {Component} from "react";

class Loader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loaderSize: this.props.loaderSize
        }
    }

    render() {
        const { loaderSize } = this.props;
        const loaderURL = `assets/images/loader_${loaderSize}.svg`;

        return (
            <div className="text-center">
                <img src={loaderURL} alt="loading..."/>
            </div>
        );
    }
}

export default Loader;
