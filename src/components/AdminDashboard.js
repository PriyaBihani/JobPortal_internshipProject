import React from 'react'

const AdminDashboard = () => {
    return (
        <div className="fluid-container admin">
            <h1 className="text-center p-5 text-light "><span className="heading">Admin Dashboard</span> </h1>
            <div className="appl-lists">
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" colspan='4' className="text-center">Field</th>
                        <th scope="col" className="text-center" >Date Applied</th>
                        <th scope="col" className="text-center" >
                            <button className="btn">Delete All</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td colspan='4' className="text-center">Front end development</td>
                        <td className="text-center" >3 November 2020</td>
                        <td className="text-center"><img src="https://www.svgrepo.com/show/79556/delete.svg" style={{ width: "30px", height: "30px" }}/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td colspan='4' className="text-center">Back end development</td>
                        <td className="text-center" >4 November 2020</td>
                        <td className="text-center"><img src="https://www.svgrepo.com/show/79556/delete.svg" style={{ width: "30px", height: "30px" }}/></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="4" className="text-center" >Full stack development</td>
                        <td className="text-center" >16 November 2020</td>
                        <td className="text-center"><img src="https://www.svgrepo.com/show/79556/delete.svg" style={{ width: "30px", height: "30px" }}/></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminDashboard
