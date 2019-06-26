window.onload = function () {
    let wet1Grunt = document.querySelector('[name="wet-grunt"]'),
        dryGrunt = document.querySelector('[name="dry-grunt"]'),
        vlajnost = document.querySelector('[name="vlajnost"]'),
        whitePesok = document.querySelector('[name="white-pesok"]'),
        plotnostWetGrunt = document.querySelector('[name="plotnost-wet-grunt"]'),
        plotnostDryGrunt = document.querySelector('[name="plotnost-dry-grunt"]'),
        uplotnenie = document.querySelector('[name="uplotnenie"]'),
        btn = document.querySelector('button'),
        bak = document.querySelector('[name="bak"]'),
        bakPosle = document.querySelector('[name="bak-posle"]'),
        resBak = document.querySelector('[name="res"]'),
        maxPlotn = document.querySelector('[name="max-plotn"]')


    btn.addEventListener('click', function calc() {

        //Расчёт песка, засыпанного в лунку.

        let result = parseInt(bak.value) - (parseInt(bakPosle.value) + 1448)

        resBak.value = result

        // Основные расчёты

        whitePesok.value = result

        let res = ((parseInt(wet1Grunt.value) - parseInt(dryGrunt.value)) / parseInt(wet1Grunt.value)) * 100
        vlajnost.value = res.toFixed(2)

        let resPlotnostWetGrunt = (parseInt(wet1Grunt.value) / parseInt(whitePesok.value)) * 1.41
        plotnostWetGrunt.value = resPlotnostWetGrunt.toFixed(2)

        let perevodVlajnosti = (vlajnost.value / 100) + 1

        let plotnostCalcDryGrunt = plotnostWetGrunt.value / perevodVlajnosti
        plotnostDryGrunt.value = plotnostCalcDryGrunt.toFixed(2)

        let kefUpl = plotnostWetGrunt.value / parseInt(maxPlotn.value)
        uplotnenie.value = kefUpl.toFixed(2)

    })


}