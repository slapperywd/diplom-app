import React, { Component } from 'react';
import MainNavbar from './Navbar';
import TestRuns from '../mock/testruns';
import { Table } from 'reactstrap';
import editIcon from '../icons/edit-icon.png';
import deleteIcon from '../icons/delete-icon.png';
import runIcon from '../icons/run-icon.png';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DeleteTestrunModal from './DeleteTestrunModal'
import AddTestRunModal from './AddTestrunModal'

class TestRun extends Component {
    render() {
        return (
            <div>
                <MainNavbar />

                <div className="testrun-list container">
                    <Breadcrumb>
                        <BreadcrumbItem><a href="/">Тест группы</a></BreadcrumbItem>
                    </Breadcrumb>
                    <div class="row">
                        <div class="col-sm">
                            <AddTestRunModal />
                        </div>
                        <div class="col-sm">
                       
                        </div>
                        <div class="col-sm">
                            <DeleteTestrunModal />
                        </div>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Имя</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {TestRuns.map(testRun =>
                                <tr>
                                    <th scope="row">{testRun.id}</th>
                                    <td>{testRun.name}</td>
                                    <td><img src={runIcon} alt="старт" height="30px" width="30px" /></td>
                                    <td><img src={editIcon} alt="редактировать" height="30px" width="30px" /></td>
                                    <td><img src={deleteIcon} alt="удалить" height="30px" width="30px" /></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default TestRun;