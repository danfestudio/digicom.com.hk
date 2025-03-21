function getStyle(data, array) {

    // console.log('data', data)

    let breakpoints = [
        320,
        425,
        768,
        1024,
        1440,
    ]

    

    const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

    return mq
}

export default getStyle