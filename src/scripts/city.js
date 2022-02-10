var cityList = [
    {
        "cityName": "Canberra",
        "cityState": "New South Wales",
        "link": "cities/canberra.html"
    },
    {
        "cityName": "Melbourne",
        "cityState": "Victoria",
        "link": "cities/melbourne.html"
    },
    {
        "cityName": "Sydney",
        "cityState": "New South Wales",
        "link": "cities/sydney.html"
    },
];

$(document).ready(() => {
    $("#cityListSearch").on("keyup", () => {
        FilterPatientListBasedOnLiveSearch($("#cityListSearch").val());
    });
});

function FilterPatientListBasedOnLiveSearch(filterVal) {
    filterVal = filterVal.toLowerCase();
    let trustArray = cityList.map((city) => {
        if (!filterVal || city.cityName.toLowerCase().indexOf(filterVal) !== -1 ||
            city.cityState.toLowerCase().indexOf(filterVal) !== -1) {
            return `
                <div class="card">
                    <div class="header">
                        <h2>${city.cityName}</h2>
                    </div>
                    <div class="body">
                        <p>${city.cityState}</p>
                    </div>
                    <div class="link">
                            <a href="${city.link}">Ver Mais</a>
                    </div>
                </div>
            `
        }
    });

    $('.middle').find('.content-cards').html(trustArray);
}