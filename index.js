let year = moment().range('year');
_.forEach(Array.from(year.by('month')), month =>{   
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('')
})



