import React from 'react';
import { Repository } from "../../models/Repository";

import styles from './RepositoryTableRow.css';

type Props = {
    repository: Repository
}

export const RepositoryTableRow = (props: Props) => {
    const { repository } = props;
    const avatarURL = `${repository.owner.avatar_url}&size=20`;

    return (
        <tr>
            <td><img src={avatarURL} alt="" className={styles.owner__avatar}/></td>
            <td>{repository.owner.login}</td>
            <td><a href={repository.html_url} target="_blank">{repository.name}</a></td>
            <td><a href={repository.html_url} target="_blank">{repository.html_url}</a></td>
            <td>
                <div className={styles.star}>
                    <i className="material-icons">star</i>
                    { repository.stargazers_count }
                </div>
            </td>
        </tr>
    )
};