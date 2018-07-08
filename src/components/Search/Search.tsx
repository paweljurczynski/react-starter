import React, { Component } from "react";
import debounce from 'lodash.debounce';
import styles from './Search.css';

type Props = {
    onSearch: any
}

type State = {
    searchValue: string
}

export class Search extends Component<Props, State> {
    onSearch = () => this.props.onSearch(this.state.searchValue);
    debouncedOnSearch = debounce(this.onSearch, 300);

    state = {
        searchValue: ''
    };

    onChange = (event) => {
        this.setState({ searchValue: event.target.value }, this.debouncedOnSearch);
    };

    render() {
        return (
            <form className={`input-field ${styles.searchField} `}>
                <input id="search_input"
                       type="text"
                       onChange={this.onChange}
                       value={this.state.searchValue}
                />
                <label htmlFor="search_input">Find repository</label>
            </form>
        )
    }
}