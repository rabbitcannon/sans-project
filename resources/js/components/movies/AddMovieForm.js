import React, {Component} from 'react';
import {
    Button, Form, Input, Rating, Container, Message
} from 'semantic-ui-react';
import Axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";

const formatOptions = [
    {key: '1', text: 'VHS', value: 1},
    {key: '2', text: 'Blu-Ray', value: 2},
    {key: '3', text: 'Streaming', value: 3},
];


Axios.get('/movie/formats')
    .then((response) => {

        // _.map((response.data, (format, index)) => {
        //     // key: response.data[index],
        //     console.log(format);
        //     // formatOptions.push(key: format.id, format);
        //     // formatOptions.push(format.id, format.format)
        // });
        // this.setState({formats: response.data})
    }).catch((error) => {
        // handle error
        console.log(error);
    }).finally(() => {
        // always executed
    });

class AddMovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorTitle: false,
            errorFormat: false,
            errorLength: false,
            errorYear: false,
            errorRating: false,
            formats: [],
            formatSelect: null,
            loading: false,
            rating: null,
        }
    }

    componentDidUpdate = () => {
        // this.getMovieFormats();
    }

    handleRating = (event, { rating, maxRating }) => {
        this.setState({ rating, maxRating });
    }

    toggleFormLoading = () => {
        this.setState(prevState => ({ loading: !prevState.loading }));

        let submitButton = document.getElementById("add-movie-btn");
        submitButton.innerHTML = "<img src='assets/images/loader_18.svg' />Saving...";
        submitButton.disabled = true;
    }

    submitAddMovieForm = () => {
        let user_id = document.getElementById("user_id").value;
        let title = document.getElementById("form-input-control-title").value;
        let format = this.state.formatSelect;
        let length = document.getElementById("form-input-control-length").value;
        let year = document.getElementById("form-input-control-year").value;

        if(title == "") {
            this.setState({errorTitle: true});
        }
        else {
            this.setState({errorTitle: false});
        }

        if(format == null) {
            this.setState({errorFormat: true});
        }
        else {
            this.setState({errorFormat: false});
        }

        if(length == "") {
            this.setState({errorLength: true});
        }
        else {
            this.setState({errorLength: false});
        }

        if(year == "") {
            this.setState({errorYear: true});
        }
        else {
            this.setState({errorYear: false});
        }

        if(this.state.rating == null) {
            this.setState({errorRating: true});
        }
        else {
            this.setState({errorRating: false});
        }

        if(title != "" && format != null && length != "" && year != "" && this.state.rating != null) {
            Axios.post('/movie', {
                user_id: user_id,
                title: title,
                format: format,
                length: length,
                year: year,
                rating: this.state.rating
            }).then(() => {
                this.toggleFormLoading();
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                this.props.getMovieList();

                setTimeout(() => {
                    this.props.toggleModal();
                }, 1000);
            });
        }
    }

    // getMovieFormats = () => {
    //     const formatOptions = [];
    //
    //     Axios.get('/movie/formats')
    //         .then((response) => {
    //
    //             response.data.map((format) => {
    //                 // formatOptions.push({id: format.id, format: format.format})
    //                 // console.log(format)
    //                 formatOptions.push(format);
    //                 // formatOptions.push(format.id, format.format)
    //             });
    //             // this.setState({formats: response.data})
    //             console.log(formatOptions)
    //         })
    //         .catch((error) => {
    //             // handle error
    //             console.log(error);
    //         })
    //         .finally(() => {
    //             // always executed
    //         });
    //
    //     return formatOptions;
    //
    // }

    render() {
        const {
            loading, errorTitle, errorFormat,
            errorLength, errorYear, errorRating
        } = this.state;

        return (
            <div>
                <Form loading={loading}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            error={errorTitle}
                            id='form-input-control-title'
                            control={Input}
                            label='Title'
                            placeholder='Title'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Select
                            error={errorFormat}
                            label='Format'
                            options={formatOptions}
                            placeholder='Format'
                            onChange={(event, { value }) => this.setState({formatSelect: value})}
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-length'
                            error={errorLength}
                            control={Input}
                            label='Length(in minutes)'
                            placeholder='Length'
                        />
                    </Form.Group>
                    <Form.Group widths='equal'>
                        <Form.Field
                            error={errorYear}
                            id='form-input-control-year'
                            control={Input}
                            label='Year'
                            placeholder='Year'
                        />
                    </Form.Group>
                    <Form.Group widths={'equal'}>
                        <Container textAlign='center'>
                            <div>
                                <b>Rating</b>
                                <hr />
                                <Rating icon='star' maxRating={5} onRate={this.handleRating} size='huge' />
                                {
                                    (errorRating == true)
                                    ? <Message negative content='Please set an rating for your movie.' />
                                    : ""
                                }
                            </div>
                        </Container>
                    </Form.Group>

                    <Form.Group widths={'equal'}>
                        <Container textAlign='center'>
                            <Button id="add-movie-btn" type="submit" color='green' onClick={this.submitAddMovieForm}>
                                <FontAwesomeIcon icon={faSave} /> Save
                            </Button>
                        </Container>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default AddMovieForm;
