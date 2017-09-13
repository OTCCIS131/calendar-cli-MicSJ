let year = moment().range('year');
_.forEach(Array.from(year.by('month')), month =>{   
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S  M  T  W  Th  F  S  ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()

    console.log(firstDay)
})



