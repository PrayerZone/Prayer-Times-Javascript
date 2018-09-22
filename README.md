# PrayerTimes
Using the Prayer Time API : https://prayertimes.date/api

Demo : https://prayertimes.date/widget

![Widget](https://raw.githubusercontent.com/PrayerZone/PrayerTimes/master/images/prayer-sample.png)

Add the CSS code inside the `<header></header>` of your HTML page or the link element above:

    <link href="https://prayertimes.date/css/widget.api.v1.min.css" rel="stylesheet" />

Add the Javascript code inside the `<body></body>` of your HTML page or the script above:

    <script src="https://prayertimes.date/js/widget.api.v1.min.js"></script>

Add the HTML code where you want to display the paryer times:

    <div style="margin:auto; border:1px solid #c0c0c0" id="prayer-container">
        <div class="prayer_time">Heures de Prière</div>
        <div id="prayer_city"></div>
        <div id="prayer_date"></div>
        <div id="prayer_clock"></div>
        <table>
            <tbody>
                <tr>
                    <td>Imsak</td>
                    <td id="Imsak"></td>
                </tr>
                <tr>
                    <td>Fajr</td>
                    <td id="Fajr"></td>
                </tr>
                <tr>
                    <td>Dhuhr</td>
                    <td id="Dhuhr"></td>
                </tr>
                <tr>
                    <td>Asr</td>
                    <td id="Asr"></td>
                </tr>
                <tr>
                    <td>Maghrib</td>
                    <td id="Maghrib"></td>
                </tr>
                <tr>
                    <td>Isha</td>
                    <td id="Isha"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        var api_url = 'https://api.pray.zone/v2/times/today.json?ip=auto';
        document.addEventListener("DOMContentLoaded", function () {
            PrayerTimesApi();
        });
    </script>
