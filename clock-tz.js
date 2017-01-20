angular.module("app").directive('clock-tz', function ($interval){
    return {
        template: '<style>.clock-circle{margin-top:15%!important;width:130px;height:130px;margin:0 auto;position:relative;border-radius:50%;box-shadow:0 1px 8px rgba(34,34,34,.3),inset 0 1px 8px rgba(34,34,34,.3)}.clock-face{width:100%;height:100%}.clock-hour,.clock-minute,.clock-second{width:0;height:0;position:absolute;top:50%;left:50%;background:{{ backgroundColor }}}.clock-hour{margin:-4px 0 -4px -25%;padding:4px 0 4px 25%;-webkit-transform-origin:100% 50%;-ms-transform-origin:100% 50%;transform-origin:100% 50%;border-radius:4px 0 0 4px}.clock-minute{margin:-40% -3px 0;padding:40% 3px 0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;border-radius:3px 3px 0 0}.clock-second{margin:-40% -1px 0 0;padding:40% 1px 0;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%}</style><div class="text-center">{{ zoneName }}</div><div class="clock-circle" style="border:8px solid {{ backgroundColor }};"><div class="clock-face"><div class="clock-hour" style="{{ styleHour }}; background: {{ backgroundColor }};"></div><div class="clock-minute" style="{{ styleMinute }}; background: {{ backgroundColor }};"></div><div class="clock-second" style="{{ styleSecond }}; background: {{ backgroundColor }};"></div><div style="position:absolute;top:50%;left:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:6px;content:\'\';display:block; background: {{ backgroundColor}}"></div></div></div>',
        restrict: 'E', 
        scope: {
            zone: '@', 
            color: '@' 
        }, 

        link: function(scope){            

            function formatZoneName(){
                var zone = scope.zone;
                var result = zone.split("/");
                result = result[result.length-1];
                result = result.split("_");
                scope.zoneName = result.join(" ");
                
                if(scope.color == null || scope.color == undefined || scope.color === "")
                {
                    scope.backgroundColor = "#14304f";
                }
                else{
                    scope.backgroundColor = scope.color;
                }
            }

            formatZoneName();

            function updateClock(){
                var now = moment.tz(scope.zone),
                    second = now.seconds() * 6,
                    minute = now.minutes() * 6 + second / 60,
                    hour = ((now.hours() % 12) / 12) * 360 + 90 + minute / 12;

                scope.styleHour     = "transform: rotate(" + hour + "deg)";
                scope.styleMinute   = "transform: rotate(" + minute + "deg)";
                scope.styleSecond   = "transform: rotate(" + second + "deg)";
            }

            $interval(function() {
                updateClock();
            }, 1000);
        }
    }
});