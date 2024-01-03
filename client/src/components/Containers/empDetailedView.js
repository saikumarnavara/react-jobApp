import React, { useState } from 'react'

const EmpDetailedView = ({ close, data }) => {

    return (
        <div class="modal-dialog modal-dialog-centered" role="document" style={styles.modal}>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Employee Full Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                        onClick={() => { close() }}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {
                        data && <div>
                            <p>Emp Id: {data.EmpId}</p>
                            <p>Name: {data.Name}</p>
                            <p>Designation: {data.Designation}</p>
                            <p>DOJ: {data.doj}</p>
                            <p>Phone: {data.phone}</p>
                            <p>Address: {data.address}</p>
                        </div>
                    }
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal"
                        onClick={() => { close() }}>Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    )

}

const styles = {
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        width: '60%',
        backgroundColor: 'grey',
        position: 'fixed',
        zIndex: 1
    }
}
export default EmpDetailedView
