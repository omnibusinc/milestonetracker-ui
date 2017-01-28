/**
 *
 *
 * Expects following properties:
 */

import React from "react";

import { Table } from "react-bootstrap";

export default function CampaignMilestones(props) {
    return (
        <div to={ { pathname: `${ props.url }` } }>
            <p>{ props.description }</p>
            <Table striped bordered condensed hover>
                <tbody>
                    <tr>
                        <td>Website</td>
                        <td>
                            <a
                              href={ props.url }
                              target="_blank"
                            >
                            { props.url }
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{ props.status }</td>
                    </tr>
                    <tr>
                        <td>MiniMe Token Address</td>
                        <td>{ props.tokenAddress }</td>
                    </tr>
                    <tr>
                        <td>Vault Address</td>
                        <td>{ props.vaultAddress }</td>
                    </tr>
                    <tr>
                        <td>Milestone Tracker Address</td>
                        <td>{ props.milestoneTrackerAddress }</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

CampaignMilestones.propTypes = {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    status: React.PropTypes.string.isRequired,
    tokenAddress: React.PropTypes.string.isRequired,
    vaultAddress: React.PropTypes.string.isRequired,
    milestoneTrackerAddress: React.PropTypes.string.isRequired,
};
