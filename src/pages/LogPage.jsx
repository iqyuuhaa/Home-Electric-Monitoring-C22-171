import DataTable from "./../components/DataTable"
import ModifyBreadcrumb from "./../components/Breadcrumb"

import { getActivities } from "./../utils/local-data"

const LogPage = () => {
    const breadcrumbData = [
        {
            label: "Notification",
            path: "/log",
            isCurrentPage: true,
        }
    ]

    const activities = JSON.parse(getActivities())
    const logData = activities.sort((a, b) => {
        return b["time"].localeCompare(a["time"]);
    }).map((x, i) => {
        return {
            ...x,
            no: i+1
        }
    });
    
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
            <DataTable columns={ columns } data={ logData }  />
        </>
    )
}

export default LogPage