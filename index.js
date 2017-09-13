//require() - loads and caches modules
const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

//Create an object?
const moment = MomentRange.extendMoment(M)

let year = moment().range('year');
_.forEach(Array.from(year.by('month')), month =>{   
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S  M  T  W  Th  F  S  ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()

    console.log(firstDay)
})



