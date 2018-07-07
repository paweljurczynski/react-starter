import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { fetchRepositories } from "../../actions/github";
import { AppState } from "../../models/State";
import { Search } from "../../components/Search/Search";
import { Repository } from "../../models/Repository";
import { Loader } from "../../components/Loader/Loader";
import { RepositoryTable } from "../../components/RepositoryTable/RepositoryTable";
import moment from 'moment';
import styles from './RepositoryList.css';

const monthAgo = moment().subtract(1, 'month').format('LL');

type Props = {
    repositories: Repository[],
    fetchRepositories: any,
    loading: boolean
}

type State = {
    repositories: Repository[],
    loading: boolean
}

class RepositoryList extends Component<Props, State> {
    componentDidMount() {
        this.props.fetchRepositories();
    }

    render() {
        const { repositories, loading } = this.props;

        return (
            <>
                <header className={styles.header}>
                    <h1 className={styles.page__title}>The Hottest Repositories</h1>
                    <h2 className={styles.page__subtitle}>Since {monthAgo}</h2>
                </header>
                <Search onSearch={this.props.fetchRepositories}/>
                {
                    loading ? <Loader/> : <RepositoryTable repositories={repositories}/>
                }
            </>
        );
    }
}

export default connect((state: AppState) => ({
    repositories: state.github.repositories,
    loading: state.ui.loading,
}), dispatch => ({
    fetchRepositories: (predicate: string) => dispatch<any>(fetchRepositories(predicate))
}))(RepositoryList);