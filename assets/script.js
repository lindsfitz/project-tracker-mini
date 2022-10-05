var timeDisplay = $('#time');
var projectNameEl = $('#project-name-input')
var projectTypeEl = $('#project-type-input')
var projectDueDateEl = $('#due-date-input')
var projectRateEl = $('#hourly-rate-input')
var projectForm = $('#project-form')
var projectDisplayEl = $('#project-display')


function displayTime(){
    var now = moment().format('MMM, DD, YYYY hh:mm:ss')
    timeDisplay.text(now)
}


function addProjectData(event) {
    event.preventDefault()
    var projectName = projectNameEl.val()
    var projectType = projectTypeEl.val()
    var hourlyRate = projectRateEl.val()
    var dueDate = projectDueDateEl.val()

    var nameTdEl = $('<td>').text(projectName)
    var typeTdEl = $('<td>').text(projectType)
    var rateTdEl = $('<td>').text(hourlyRate)
    var dueDateEl = $('<td>').text(dueDate)

    var daysTillDue = moment(dueDate).diff(moment(), 'days');

    var daysTillEl = $('<td>').text(daysTillDue)

    var totalEarnings = (hourlyRate * 8) * daysTillDue

    var earningsEl = $('<td>').text(totalEarnings)

    var delBtn = $('<td>').text('X')

    var trEl = $('<tr>').append(nameTdEl,typeTdEl,rateTdEl,dueDateEl,daysTillEl,earningsEl, delBtn)

    projectDisplayEl.append(trEl)

}

function deleteRow(event){
    $(event.target).parent('tr').remove()
}

setInterval(displayTime, 1000)

projectDisplayEl.on('click', deleteRow)


projectForm.on('submit',addProjectData)