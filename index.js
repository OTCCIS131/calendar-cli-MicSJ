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
        firstDay()
        //let monthRange = month.range('month')
        //let firstDay = monthRange.start.day()
        function firstDay(){
            if(month.format('MMMM') == 'February'){
                paddedDays.unshift('  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'March'){
                paddedDays.unshift('  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'April'){
                paddedDays.unshift('  ', '  ', '  ', '  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'May'){
                paddedDays.unshift('  ')
            }
            if(month.format('MMMM') == 'June'){
                paddedDays.unshift('  ', '  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'July'){
                paddedDays.unshift('  ', '  ', '  ', '  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'August'){
                paddedDays.unshift('  ', '  ')
            }
            if(month.format('MMMM') == 'September'){
                paddedDays.unshift('  ', '  ', '  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'November'){
                paddedDays.unshift('  ', '  ', '  ')
            }
            if(month.format('MMMM') == 'December'){
                paddedDays.unshift('  ', '  ', '  ', '  ', '  ')
            }
        }

        let week = _.chunk(Array.from(paddedDays), 7)
        //foreach through the arrays to join weeks.join('  ')
        
        week = week.forEach(week => {
            console.log(_.join(week, '  '))
        });
    }