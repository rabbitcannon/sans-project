import React, {Component} from 'react';
import { Form, Input, Rating, Select } from 'semantic-ui-react';
import Axios from "axios";

class AddMovieForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            rating: null
        }
    }

    handleRating = (event, { rating, maxRating }) => {
        this.setState({ rating, maxRating })
    }

    getMovieFormats = () => {
        const formatOptions = [
            { key: 'm', text: 'Male', value: 'male' },
            { key: 'f', text: 'Female', value: 'female' },
            { key: 'o', text: 'Other', value: 'other' },
        ]

        Axios.get('/movie/formats')
            .then(function (data) {
            // handle success
            console.log(data);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        console.log(formatOptions);
        return formatOptions;
    }

    render() {
        // console.log(this.state);

        return (
            <Form loading={this.props.loading}>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-title'
                        control={Input}
                        label='Title'
                        placeholder='Title'
                    />
                    {/*<Form.Field*/}
                    {/*    control={Select}*/}
                    {/*    options={this.getMovieFormats}*/}
                    {/*    label={{ children: 'Format', htmlFor: 'form-select-control-format' }}*/}
                    {/*    placeholder='Format'*/}
                    {/*    search*/}
                    {/*    searchInput={{ id: 'form-select-control-format' }}*/}
                    {/*/>*/}
                    <Form.Field
                        id='form-input-control-length'
                        control={Input}
                        label='Length'
                        placeholder='Length'
                    />
                    <Form.Field
                        id='form-input-control-year'
                        control={Input}
                        label='Year'
                        placeholder='Year'
                    />
                </Form.Group>
                <Form.Group widths={5}>
                    <Rating icon='star' maxRating={5} onRate={this.handleRating} />
                    <pre>{JSON.stringify(this.state.rating, null, 2)}</pre>
                </Form.Group>
            </Form>
        );
    }
}

export default AddMovieForm;
