const Moment = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(Moment)

const now = moment()
let year = now.range('year')

for(const month of year.by('month'))
    {
        console.log(_.pad(month.format('MMMM'), 26, ' '))//grid 26 characters wide
        console.log('S   M   T   W   Th  F   S ')

        let days = Array.from(month.range('month').by('days'))

        let paddedDays = _.map(days, day => {
           let date = day.date()
           if (day.month() == 8 && day.date() == 10){
               date = chalk.cyan(date)
           }
           if (day.month() == 11 && day.date() == 23){
               date = chalk.cyan(date)
           }

           return _.padEnd(date, 2, ' ')
        })
        
        let monthRange = month.range('month')
        let firstDay = monthRange.start.day()

        for(let i = 0; i < firstDay; i++){
            paddedDays.unshift('  ')
        }

        let week = _.chunk(Array.from(paddedDays), 7)
        
        week = week.forEach(week => {
            console.log(_.join(week, '  '))
        });
    }