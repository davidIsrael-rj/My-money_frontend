export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return{
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}