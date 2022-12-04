import DataTable from "./../components/DataTable"
import ModifyBreadcrumb from "./../components/Breadcrumb"

import LogData from "./../utils/data/log"

const LogPage = () => {
    const breadcrumbData = [
        {
            label: "Notification",
            path: "/log",
            isCurrentPage: true,
        }
    ]

    const columns = [
        {
            Header: "No",
            accessor: "no",
        },
        {
            Header: "User",
            accessor: "user",
        },
        {
            Header: "Action",
            accessor: "action",
        },
        {
            Header: "Time",
            accessor: "time",
        },
    ]

    return (
        <>
            <ModifyBreadcrumb data={ breadcrumbData } />
            <DataTable columns={ columns } data={ LogData }  />
        </>
    )
}

export default LogPage