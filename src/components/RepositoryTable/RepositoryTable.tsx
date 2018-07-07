import React from 'react';
import { Repository } from "../../models/Repository";
import styles from './RepositoryTable.css';
import { RepositoryTableRow } from "../RepositoryTableRow/RepositoryTableRow";

type Props = {
    repositories: Repository[]
};

export const RepositoryTable = (props: Props) => {
    const rows = props.repositories.map((repository: Repository, key: number) =>
        <RepositoryTableRow repository={repository} key={key}/>
    );

    if (!rows.length) {
        return (<h3 className={styles.notFound}>Not found :(</h3>);
    }

    return (
        <table className={styles.repositoryTable}>
            <thead>
            <tr>
                <th/>
                <th>Author</th>
                <th>Repository</th>
                <th>Link</th>
                <th>Stars</th>
            </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
};