const getActivities = () => {
    return localStorage.getItem('activities')
}

const getToolActivities = () => {
    return localStorage.getItem('tool-activities')
}

const setActivities = (activities) => {
    let currentActivities = getActivities()
    if (currentActivities === undefined || currentActivities === null) {
        currentActivities = []
    } else {
        currentActivities = JSON.parse(currentActivities)
    }

    let result = currentActivities.concat(activities)
    localStorage.setItem('activities', JSON.stringify(result))
}

const setToolActivities = (activities) => {
    let currentToolActivities = getToolActivities()
    if (currentToolActivities === undefined || currentToolActivities === null) {
        currentToolActivities = activities
    } else {
        currentToolActivities = JSON.parse(currentToolActivities)
    }

    localStorage.setItem('tool-activities', JSON.stringify(currentToolActivities))
}

const setActivity = ({ user, action }) => {
    const today = new Date();
    const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()
    const second = today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds()
    const fullDate = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + date;
    const time = today.getHours() + ":" + today.getMinutes() + ":" + second;
    const dateTime = fullDate + ' ' + time;

    const data = {
        user: user,
        action: action,
        time: dateTime
    }

    let currentActivities = JSON.parse(getActivities())
    let result = currentActivities.concat(data)
    localStorage.setItem('activities', JSON.stringify(result))
}

const setToolActvity = (tools) => {
    localStorage.setItem('tool-activities', JSON.stringify(tools))
}

export {
    getActivities,
    getToolActivities,
    setActivities,
    setToolActivities,
    setActivity,
    setToolActvity
}