const API_LINK = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/indore?unitGroup=metric&key=PDB5PRE6K38449HEHJ82T2U8E&contentType=json"
const API_KEY = "PDB5PRE6K38449HEHJ82T2U8E"

// section-1

const body = document.querySelector("body")
const cityName = document.getElementById("city")
const currentDate = document.getElementById("currentdate")
const time = document.getElementById("time")
const condition = document.getElementById("condition")
const celcius = document.getElementById("celcius")
const lowTemp = document.getElementById("lowest-temp")
const highTemp = document.getElementById("highest-temp")
const feelsLike = document.getElementById("feelslike")
const sunRise = document.getElementById("sunrise")
const sunSet = document.getElementById("sunset")
const windSpeed = document.getElementById("windspeed")
const cloudCover = document.getElementById("cloudcover")
const visibility = document.getElementById("visibility")
const form = document.querySelector("form")
const input = document.querySelector("input")

// secton-2-selection
// const timeOne = document.getElementById("time-1")
// const timeTwo = document.getElementById("time-2")
// const timeThree = document.getElementById("time-3")
// const timeFour = document.getElementById("time-4")
// const timeFive = document.getElementById("time-5")
// const timeSix = document.getElementById("time-6")
// const timeSeven = document.getElementById("time-7")
// const timeEight = document.getElementById("time-8")
// const timeNine = document.getElementById("time-9")
// const timeTen = document.getElementById("time-10")
// const timeEleven = document.getElementById("time-11")
// const timeTwelve = document.getElementById("time-12")
// const timeThirteen = document.getElementById("time-13")
// const timeFourteen = document.getElementById("time-14")
// const timeFifteen = document.getElementById("time-15")
// const timeSixteen = document.getElementById("time-16")
// const timeSeventeen = document.getElementById("time-17")
// const timeEighteen = document.getElementById("time-18")
// const timeNineteen = document.getElementById("time-19")
// const timeTwenty = document.getElementById("time-20")
// const timeTwentyOne = document.getElementById("time-21")
// const timeTwentyTwo = document.getElementById("time-22")
// const timeTwentyThree = document.getElementById("time-23")
// const timeTwentyFour = document.getElementById("time-24")

const tempOne = document.getElementById("Temp-1")
const tempTwo = document.getElementById("Temp-2")
const tempThree = document.getElementById("Temp-3")
const tempFour = document.getElementById("Temp-4")
const tempFive = document.getElementById("Temp-5")
const tempSix = document.getElementById("Temp-6")
const tempSeven = document.getElementById("Temp-7")
const tempEight = document.getElementById("Temp-8")
const tempNine = document.getElementById("Temp-9")
const tempTen = document.getElementById("Temp-10")
const tempEleven = document.getElementById("Temp-11")
const tempTwelve = document.getElementById("Temp-12")
const tempThirteen = document.getElementById("Temp-13")
const tempFourteen = document.getElementById("Temp-14")
const tempFifteen = document.getElementById("Temp-15")
const tempSixteen = document.getElementById("Temp-16")
const tempSeventeen = document.getElementById("Temp-17")
const tempEighteen = document.getElementById("Temp-18")
const tempNineteen = document.getElementById("Temp-19")
const tempTwenty = document.getElementById("Temp-20")
const tempTwentyOne = document.getElementById("Temp-21")
const tempTwentyTwo = document.getElementById("Temp-22")
const tempTwentyThree = document.getElementById("Temp-23")
const tempTwentyFour = document.getElementById("Temp-24")

const iconOne = document.getElementById("icon-1")
const iconTwo = document.getElementById("icon-2")
const iconThree = document.getElementById("icon-3")
const iconFour = document.getElementById("icon-4")
const iconFive = document.getElementById("icon-5")
const iconSix = document.getElementById("icon-6")
const iconSeven = document.getElementById("icon-7")
const iconEight = document.getElementById("icon-8")
const iconNine = document.getElementById("icon-9")
const iconTen = document.getElementById("icon-10")
const iconEleven = document.getElementById("icon-11")
const iconTwelve = document.getElementById("icon-12")
const iconThirteen = document.getElementById("icon-13")
const iconFourteen = document.getElementById("icon-14")
const iconFifteen = document.getElementById("icon-15")
const iconSixteen = document.getElementById("icon-16")
const iconSeventeen = document.getElementById("icon-17")
const iconEighteen = document.getElementById("icon-18")
const iconNineteen = document.getElementById("icon-19")
const iconTwenty = document.getElementById("icon-20")
const iconTwentyOne = document.getElementById("icon-21")
const iconTwentyTwo = document.getElementById("icon-22")
const iconTwentyThree = document.getElementById("icon-23")
const iconTwentyFour = document.getElementById("icon-24")

// const dayOne = document.getElementById("day-1")
const dayTwo = document.getElementById("day-2")
const dayThree = document.getElementById("day-3")
const dayFour = document.getElementById("day-4")
const dayFive = document.getElementById("day-5")
const daySix = document.getElementById("day-6")
const daySeven = document.getElementById("day-7")
const dayEight = document.getElementById("day-8")
const dayNine = document.getElementById("day-9")
const dayTen = document.getElementById("day-10")
const dayEleven = document.getElementById("day-11")
const dayTwelve = document.getElementById("day-12")
const dayThirteen = document.getElementById("day-13")
const dayFourteen = document.getElementById("day-14")
const dayFifteen = document.getElementById("day-15")

// const tempDayOne = document.getElementById("temp-day-1")
const tempDayTwo = document.getElementById("temp-day-2")
const tempDayThree = document.getElementById("temp-day-3")
const tempDayFour = document.getElementById("temp-day-4")
const tempDayFive = document.getElementById("temp-day-5")
const tempDaySix = document.getElementById("temp-day-6")
const tempDaySeven = document.getElementById("temp-day-7")
const tempDayEight = document.getElementById("temp-day-8")
const tempDayNine = document.getElementById("temp-day-9")
const tempDayTen = document.getElementById("temp-day-10")
const tempDayEleven = document.getElementById("temp-day-11")
const tempDayTwelve = document.getElementById("temp-day-12")
const tempDayThirteen = document.getElementById("temp-day-13")
const tempDayFourteen = document.getElementById("temp-day-14")
const tempDayFifteen = document.getElementById("temp-day-15")

// const iconDayOne = document.getElementById("icon-day-1")
const iconDayTwo = document.getElementById("icon-day-2")
const iconDayThree = document.getElementById("icon-day-3")
const iconDayFour = document.getElementById("icon-day-4")
const iconDayFive = document.getElementById("icon-day-5")
const iconDaySix = document.getElementById("icon-day-6")
const iconDaySeven = document.getElementById("icon-day-7")
const iconDayEight = document.getElementById("icon-day-8")
const iconDayNine = document.getElementById("icon-day-9")
const iconDayTen = document.getElementById("icon-day-10")
const iconDayEleven = document.getElementById("icon-day-11")
const iconDayTwelve = document.getElementById("icon-day-12")
const iconDayThirteen = document.getElementById("icon-day-13")
const iconDayFourteen = document.getElementById("icon-day-14")
const iconDayFifteen = document.getElementById("icon-day-15")

const nextDayOne = document.getElementById("dayOne")
const nextDayTwo = document.getElementById("dayTwo")
const nextDayThree = document.getElementById("dayThree")
const nextDayFour = document.getElementById("dayFour")
const nextDayFive = document.getElementById("dayFive")
const nextDaySix = document.getElementById("daySix")
const nextDaySeven = document.getElementById("daySeven")
const nextDayEight = document.getElementById("dayEight")
const nextDayNine = document.getElementById("dayNine")
const nextDayTen = document.getElementById("dayTen")
const nextDayEleven = document.getElementById("dayEleven")
const nextDayTwelve = document.getElementById("dayTwelve")
const nextDayThirteen = document.getElementById("dayThirteen")
const nextDayFourteen = document.getElementById("dayFourteen")

// For Next Day Temperature
let nextDays = 0
nextDayOne.addEventListener("click", getNextDayOne)
nextDayTwo.addEventListener("click", getNextDayTwo)
nextDayThree.addEventListener("click", getNextDayThree)
nextDayFour.addEventListener("click", getNextDayFour)
nextDayFive.addEventListener("click", getNextDayFive)
nextDaySix.addEventListener("click", getNextDaySix)
nextDaySeven.addEventListener("click", getNextDaySeven)
nextDayEight.addEventListener("click", getNextDayEight)
nextDayNine.addEventListener("click", getNextDayNine)
nextDayTen.addEventListener("click", getNextDayTen)
nextDayEleven.addEventListener("click", getNextDayEleven)
nextDayTwelve.addEventListener("click", getNextDayTwelve)
nextDayThirteen.addEventListener("click", getNextDayThirteen)
nextDayFourteen.addEventListener("click", getNextDayFourteen)

nextDayOne.addEventListener("click", getWeather)
nextDayTwo.addEventListener("click", getWeather)
nextDayThree.addEventListener("click", getWeather)
nextDayFour.addEventListener("click", getWeather)
nextDayFive.addEventListener("click", getWeather)
nextDaySix.addEventListener("click", getWeather)
nextDaySeven.addEventListener("click", getWeather)
nextDayEight.addEventListener("click", getWeather)
nextDayNine.addEventListener("click", getWeather)
nextDayTen.addEventListener("click", getWeather)
nextDayEleven.addEventListener("click", getWeather)
nextDayTwelve.addEventListener("click", getWeather)
nextDayThirteen.addEventListener("click", getWeather)
nextDayFourteen.addEventListener("click", getWeather)

let highTempValue = 0
function getNextDayOne() {
    let a = 1
    nextDays = a
    let b = 1
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}

function getNextDayTwo() {
    let a = 2
    nextDays = a
    let b = 2
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayThree() {
    let a = 3
    nextDays = a
    let b = 3
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayFour() {
    let a = 4
    nextDays = a
    let b = 4
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayFive() {
    let a = 5
    nextDays = a
    let b = 5
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDaySix() {
    let a = 6
    nextDays = a
    let b = 6
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDaySeven() {
    let a = 7
    nextDays = a
    let b = 7
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayEight() {
    let a = 8
    nextDays = a
    let b = 8
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayNine() {
    let a = 9
    nextDays = a
    let b = 9
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayTen() {
    let a = 10
    nextDays = a
    let b = 10
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayEleven() {
    let a = 11
    nextDays = a
    let b = 11
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayTwelve() {
    let a = 12
    nextDays = a
    let b = 12
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayThirteen() {
    let a = 13
    nextDays = a
    let b = 13
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function getNextDayFourteen() {
    let a = 14
    nextDays = a
    let b = 14
    highTempValue = b
    function getWeather() {
        window.location.reload(true)
    }
    function getWeather() {
        window.location.reload(true)
    }
}
function deleteValue() {
    nextDays = 0
}
function tempDeleteValue() {
    highTempValue = 0
}


form.addEventListener("submit", tempDeleteValue)
form.addEventListener("submit", deleteValue)
form.addEventListener("submit", getWeather)
async function getWeather(e) {
    e.preventDefault()
    const forResponse = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?unitGroup=metric&key=${"PDB5PRE6K38449HEHJ82T2U8E"}&contentType=json`)
    const data = await forResponse.json()

    const resolvedAddress = data.resolvedAddress
    cityName.innerText = resolvedAddress

    const datetime = data.currentConditions.datetime
    time.innerText = datetime

    const dateCurrent = data.days[highTempValue].datetime
    currentDate.innerText = dateCurrent

    const conditions = data.days[highTempValue].icon
    condition.innerText = conditions

    const temp = data.days[highTempValue].temp
    celcius.innerText = `${temp}°C`

    const feelsLikeRes = data.days[highTempValue].feelslike
    feelsLike.innerText = `${feelsLikeRes}°C`

    const highTemperature = data.days[highTempValue].tempmax
    highTemp.innerText = highTemperature

    const lowTemperature = data.days[highTempValue].tempmin
    lowTemp.innerText = lowTemperature

    const sunRiseRes = data.days[highTempValue].sunrise
    sunRise.innerText = sunRiseRes

    const sunSetRes = data.days[highTempValue].sunset
    sunSet.innerText = sunSetRes

    const visibilityRes = data.days[highTempValue].visibility
    visibility.innerText = `${visibilityRes}%`

    const windSpeedRes = data.days[highTempValue].windspeed
    windSpeed.innerText = `${windSpeedRes} km/h`

    const cloudCoverRes = data.days[highTempValue].cloudcover
    cloudCover.innerText = `${cloudCoverRes}%`

    // SECTION-2
    // const dateTimeOne = data.days[0].hours[0].datetime
    // const dateTimeTwo = data.days[0].hours[1].datetime
    // const dateTimeThree = data.days[0].hours[2].datetime
    // const dateTimeFour = data.days[0].hours[3].datetime
    // const dateTimeFive = data.days[0].hours[4].datetime
    // const dateTimeSix = data.days[0].hours[5].datetime
    // const dateTimeSeven = data.days[0].hours[6].datetime
    // const dateTimeEight = data.days[0].hours[7].datetime
    // const dateTimeNine = data.days[0].hours[8].datetime
    // const dateTimeTen = data.days[0].hours[9].datetime
    // const dateTimeEleven = data.days[0].hours[10].datetime
    // const dateTimeTwelve = data.days[0].hours[11].datetime
    // const dateTimeThirteen = data.days[0].hours[12].datetime
    // const dateTimeFourteen = data.days[0].hours[13].datetime
    // const dateTimeFifteen = data.days[0].hours[14].datetime
    // const dateTimeSixteen = data.days[0].hours[15].datetime
    // const dateTimeSeventeen = data.days[0].hours[16].datetime
    // const dateTimeEighteen = data.days[0].hours[17].datetime
    // const dateTimeNineteen = data.days[0].hours[18].datetime
    // const dateTimeTwenty = data.days[0].hours[19].datetime
    // const dateTimeTwentyOne = data.days[0].hours[20].datetime
    // const dateTimeTwentyTwo = data.days[0].hours[21].datetime
    // const dateTimeTwentyThree = data.days[0].hours[22].datetime
    // const dateTimeTwentyFour = data.days[0].hours[23].datetime


    const tempOneRes = data.days[nextDays].hours[0].temp
    const tempTwoRes = data.days[nextDays].hours[1].temp
    const tempThreeRes = data.days[nextDays].hours[2].temp
    const tempFourRes = data.days[nextDays].hours[3].temp
    const tempFiveRes = data.days[nextDays].hours[4].temp
    const tempSixRes = data.days[nextDays].hours[5].temp
    const tempSevenRes = data.days[nextDays].hours[6].temp
    const tempEightRes = data.days[nextDays].hours[7].temp
    const tempNineRes = data.days[nextDays].hours[8].temp
    const tempTenRes = data.days[nextDays].hours[9].temp
    const tempElevenRes = data.days[nextDays].hours[10].temp
    const tempTwelveRes = data.days[nextDays].hours[11].temp
    const tempThirteenRes = data.days[nextDays].hours[12].temp
    const tempFourteenRes = data.days[nextDays].hours[13].temp
    const tempFifteenRes = data.days[nextDays].hours[14].temp
    const tempSixteenRes = data.days[nextDays].hours[15].temp
    const tempSeventeenRes = data.days[nextDays].hours[16].temp
    const tempEighteenRes = data.days[nextDays].hours[17].temp
    const tempNineteenRes = data.days[nextDays].hours[18].temp
    const tempTwentyRes = data.days[nextDays].hours[19].temp
    const tempTwentyOneRes = data.days[nextDays].hours[20].temp
    const tempTwentyTwoRes = data.days[nextDays].hours[21].temp
    const tempTwentyThreeRes = data.days[nextDays].hours[22].temp
    const tempTwentyFourRes = data.days[nextDays].hours[23].temp

    const iconOneRes = data.days[0].hours[0].icon
    const iconTwoRes = data.days[0].hours[1].icon
    const iconThreeRes = data.days[0].hours[2].icon
    const iconFourRes = data.days[0].hours[3].icon
    const iconFiveRes = data.days[0].hours[4].icon
    const iconSixRes = data.days[0].hours[5].icon
    const iconSevenRes = data.days[0].hours[6].icon
    const iconEightRes = data.days[0].hours[7].icon
    const iconNineRes = data.days[0].hours[8].icon
    const iconTenRes = data.days[0].hours[9].icon
    const iconElevenRes = data.days[0].hours[10].icon
    const iconTwelveRes = data.days[0].hours[11].icon
    const iconThirteenRes = data.days[0].hours[12].icon
    const iconFourteenRes = data.days[0].hours[13].icon
    const iconFifteenRes = data.days[0].hours[14].icon
    const iconSixteenRes = data.days[0].hours[15].icon
    const iconSeventeenRes = data.days[0].hours[16].icon
    const iconEighteenRes = data.days[0].hours[17].icon
    const iconNineteenRes = data.days[0].hours[18].icon
    const iconTwentyRes = data.days[0].hours[19].icon
    const iconTwentyOneRes = data.days[0].hours[20].icon
    const iconTwentyTwoRes = data.days[0].hours[21].icon
    const iconTwentyThreeRes = data.days[0].hours[22].icon
    const iconTwentyFourRes = data.days[0].hours[23].icon

    // const dateTimeDayOne = data.days[0].datetime
    const dateTimeDayTwo = data.days[1].datetime
    const dateTimeDayThree = data.days[2].datetime
    const dateTimeDayFour = data.days[3].datetime
    const dateTimeDayFive = data.days[4].datetime
    const dateTimeDaySix = data.days[5].datetime
    const dateTimeDaySeven = data.days[6].datetime
    const dateTimeDayEight = data.days[7].datetime
    const dateTimeDayNine = data.days[8].datetime
    const dateTimeDayTen = data.days[9].datetime
    const dateTimeDayEleven = data.days[10].datetime
    const dateTimeDayTwelve = data.days[11].datetime
    const dateTimeDayThirteen = data.days[12].datetime
    const dateTimeDayFourteen = data.days[13].datetime
    const dateTimeDayFifteen = data.days[14].datetime

    // const tempDayOneRes = data.days[0].temp
    const tempDayTwoRes = data.days[1].temp
    const tempDayThreeRes = data.days[2].temp
    const tempDayFourRes = data.days[3].temp
    const tempDayFiveRes = data.days[4].temp
    const tempDaySixRes = data.days[5].temp
    const tempDaySevenRes = data.days[6].temp
    const tempDayEightRes = data.days[7].temp
    const tempDayNineRes = data.days[8].temp
    const tempDayTenRes = data.days[9].temp
    const tempDayElevenRes = data.days[10].temp
    const tempDayTwelveRes = data.days[11].temp
    const tempDayThirteenRes = data.days[12].temp
    const tempDayFourteenRes = data.days[13].temp
    const tempDayFifteenRes = data.days[14].temp

    // const iconDayOneRes = data.days[0].icon
    const iconDayTwoRes = data.days[1].icon
    const iconDayThreeRes = data.days[2].icon
    const iconDayFourRes = data.days[3].icon
    const iconDayFiveRes = data.days[4].icon
    const iconDaySixRes = data.days[5].icon
    const iconDaySevenRes = data.days[6].icon
    const iconDayEightRes = data.days[7].icon
    const iconDayNineRes = data.days[8].icon
    const iconDayTenRes = data.days[9].icon
    const iconDayElevenRes = data.days[10].icon
    const iconDayTwelveRes = data.days[11].icon
    const iconDayThirteenRes = data.days[12].icon
    const iconDayFourteenRes = data.days[13].icon
    const iconDayFifteenRes = data.days[14].icon


    // timeOne.innerText = dateTimeOne
    // timeTwo.innerText = dateTimeTwo
    // timeThree.innerText = dateTimeThree
    // timeFour.innerText = dateTimeFour
    // timeFive.innerText = dateTimeFive
    // timeSix.innerText = dateTimeSix
    // timeSeven.innerText = dateTimeSeven
    // timeEight.innerText = dateTimeEight
    // timeNine.innerText = dateTimeNine
    // timeTen.innerText = dateTimeTen
    // timeEleven.innerText = dateTimeEleven
    // timeTwelve.innerText = dateTimeTwelve
    // timeThirteen.innerText = dateTimeThirteen
    // timeFourteen.innerText = dateTimeFourteen
    // timeFifteen.innerText = dateTimeFifteen
    // timeSixteen.innerText = dateTimeSixteen
    // timeSeventeen.innerText = dateTimeSeventeen
    // timeEighteen.innerText = dateTimeEighteen
    // timeNineteen.innerText = dateTimeNineteen
    // timeTwenty.innerText = dateTimeTwenty
    // timeTwentyOne.innerText = dateTimeTwentyOne
    // timeTwentyTwo.innerText = dateTimeTwentyTwo
    // timeTwentyThree.innerText = dateTimeTwentyThree
    // timeTwentyFour.innerText = dateTimeTwentyFour

    //  four hour temp.
    tempOne.innerText = tempOneRes
    tempTwo.innerText = tempTwoRes
    tempThree.innerText = tempThreeRes
    tempFour.innerText = tempFourRes
    tempFive.innerText = tempFiveRes
    tempSix.innerText = tempSixRes
    tempSeven.innerText = tempSevenRes
    tempEight.innerText = tempEightRes
    tempNine.innerText = tempNineRes
    tempTen.innerText = tempTenRes
    tempEleven.innerText = tempElevenRes
    tempTwelve.innerText = tempTwelveRes
    tempThirteen.innerText = tempThirteenRes
    tempFourteen.innerText = tempFourteenRes
    tempFifteen.innerText = tempFifteenRes
    tempSixteen.innerText = tempSixteenRes
    tempSeventeen.innerText = tempSeventeenRes
    tempEighteen.innerText = tempEighteenRes
    tempNineteen.innerText = tempNineteenRes
    tempTwenty.innerText = tempTwentyRes
    tempTwentyOne.innerText = tempTwentyOneRes
    tempTwentyTwo.innerText = tempTwentyTwoRes
    tempTwentyThree.innerText = tempTwentyThreeRes
    tempTwentyFour.innerText = tempTwentyFourRes

    iconOne.innerText = iconOneRes
    iconTwo.innerText = iconTwoRes
    iconThree.innerText = iconThreeRes
    iconFour.innerText = iconFourRes
    iconFive.innerText = iconFiveRes
    iconSix.innerText = iconSixRes
    iconSeven.innerText = iconSevenRes
    iconEight.innerText = iconEightRes
    iconNine.innerText = iconNineRes
    iconTen.innerText = iconTenRes
    iconEleven.innerText = iconElevenRes
    iconTwelve.innerText = iconTwelveRes
    iconThirteen.innerText = iconThirteenRes
    iconFourteen.innerText = iconFourteenRes
    iconFifteen.innerText = iconFifteenRes
    iconSixteen.innerText = iconSixteenRes
    iconSeventeen.innerText = iconSeventeenRes
    iconEighteen.innerText = iconEighteenRes
    iconNineteen.innerText = iconNineteenRes
    iconTwenty.innerText = iconTwentyRes
    iconTwentyOne.innerText = iconTwentyOneRes
    iconTwentyTwo.innerText = iconTwentyTwoRes
    iconTwentyThree.innerText = iconTwentyThreeRes
    iconTwentyFour.innerText = iconTwentyFourRes

    // dayOne.innerText = dateTimeDayOne
    dayTwo.innerText = dateTimeDayTwo
    dayThree.innerText = dateTimeDayThree
    dayFour.innerText = dateTimeDayFour
    dayFive.innerText = dateTimeDayFive
    daySix.innerText = dateTimeDaySix
    daySeven.innerText = dateTimeDaySeven
    dayEight.innerText = dateTimeDayEight
    dayNine.innerText = dateTimeDayNine
    dayTen.innerText = dateTimeDayTen
    dayEleven.innerText = dateTimeDayEleven
    dayTwelve.innerText = dateTimeDayTwelve
    dayThirteen.innerText = dateTimeDayThirteen
    dayFourteen.innerText = dateTimeDayFourteen
    dayFifteen.innerText = dateTimeDayFifteen

    // tempDayOne.innerText = tempDayOneRes 

    tempDayTwo.innerText = `${tempDayTwoRes}°C`
    tempDayThree.innerText = `${tempDayThreeRes}°C`
    tempDayFour.innerText = `${tempDayFourRes}°C`
    tempDayFive.innerText = `${tempDayFiveRes}°C`
    tempDaySix.innerText = `${tempDaySixRes}°C`
    tempDaySeven.innerText = `${tempDaySevenRes}°C`
    tempDayEight.innerText = `${tempDayEightRes}°C`
    tempDayNine.innerText = `${tempDayNineRes}°C`
    tempDayTen.innerText = `${tempDayTenRes}°C`
    tempDayEleven.innerText = `${tempDayElevenRes}°C`
    tempDayTwelve.innerText = `${tempDayTwelveRes}°C`
    tempDayThirteen.innerText = `${tempDayThirteenRes}°C`
    tempDayFourteen.innerText = `${tempDayFourteenRes}°C`
    tempDayFifteen.innerText = `${tempDayFifteenRes}°C`

    // iconDayOne.innerText = iconDayOneRes
    iconDayTwo.innerText = iconDayTwoRes
    iconDayThree.innerText = iconDayThreeRes
    iconDayFour.innerText = iconDayFourRes
    iconDayFive.innerText = iconDayFiveRes
    iconDaySix.innerText = iconDaySixRes
    iconDaySeven.innerText = iconDaySevenRes
    iconDayEight.innerText = iconDayEightRes
    iconDayNine.innerText = iconDayNineRes
    iconDayTen.innerText = iconDayTenRes
    iconDayEleven.innerText = iconDayElevenRes
    iconDayTwelve.innerText = iconDayTwelveRes
    iconDayThirteen.innerText = iconDayThirteenRes
    iconDayFourteen.innerText = iconDayFourteenRes
    iconDayFifteen.innerText = iconDayFifteenRes

    if (conditions === "clear-day") {
        body.setAttribute("class", "bg-image-2")
    }
    else if (conditions === "rain") {
        body.setAttribute("class", "bg-image-1")
    }
    else if (conditions === "partly-cloudy-day") {
        body.setAttribute("class", "bg-image-3")
    }
    else if (conditions === "clear-night") {
        body.setAttribute("class", "bg-image-3")
    }
    else if (conditions === "snow") {
        body.setAttribute("class", "bg-image-4")
    }
    else if (conditions === "fog") {
        body.setAttribute("class", "bg-image-5")
    }
    else if (conditions === "wind") {
        body.setAttribute("class", "bg-image-6")
    }
    else if (conditions === "partly-cloudy-night") {
        body.setAttribute("class", "bg-image-6")
    }
    else {
        body.setAttribute("class", "bg-image-2")
    }
}
