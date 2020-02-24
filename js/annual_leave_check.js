$('.toggleBtn').click (function () {
    $('.toggleBox').slideToggle("slow", function () {
        $('.toggleBtn-icon-t').toggleClass('b')
    });

});
// var vacation_string = '{{$annual->annual_json}}';
// var vacations = JSON.parse(vacation_string.replace(/&quot;/g,'"'));
var year_month;
var date;
var full_date;
var vacation = [];

var app = new Vue({
    el: '#app',
    data: {
        istrue: 0,
        items: [
            {name:'全天'},
            {name:'上午'},
            {name:'下午'}
        ],
        calendars: [
            [
                {'date':'10/02','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'03','dateInfo':[{'G':"人事"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'04','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'05','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'06','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'07','dateInfo':[{'B':"特1"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'08','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},

            ],[
                {'date':'09','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'10','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'11','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'12','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'13','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'14','dateInfo':[{'B':"預1"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'15','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
            ],[
                {'date':'16','dateInfo':[{'B':"事1"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'17','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'18','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'19','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'20','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'21','dateInfo':[{'Br':"承保"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'22','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
            ],[
                {'date':'23','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'24','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'25','dateInfo':[{'Br':"發薪"}],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'26','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'27','dateInfo':[],'holiday':1,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'28','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
                {'date':'10/29','dateInfo':[],'holiday':0,'isSelected':0,'absence_form':0,'dateTime':"全天"},
            ],
        ]
    },
    // mounted:function(){
    //     this.calendars.forEach(function (calendarWeek) {
    //         calendarWeek.forEach(function(calendarDate){
    //             vacations.forEach(function (vacation) {
    //                 if(vacation.date === calendarDate.date){
    //                     calendarDate.isSelected = 1;
    //                     calendarDate.dateTime = vacation.dateTime;
    //                     calendarDate.absence_form = vacation.absence_form;
    //                 }
    //             })
    //         })
    //     })
    // },
    computed: {
        selectedDate: {
            get() {
                var result = this.calendars.reduce(function (previousValue, currentValue, currentIndex, array) {
                    return previousValue.concat(currentValue);
                }, []);

                return result.filter(function (Date) {
                    return Date.isSelected !== 0;
                })
            },
            //當要對computed的數值，要做變動時，要做get跟set
            set(value) {
            }
        }
    },
    methods:{
        checkIsHoliday(DateInfo){
            if(DateInfo.holiday === 1){
                return 'R';
            }
        },
        dateInfoKey(DateInfo){
            return Object.keys(DateInfo)[0];
        },
        dateInfoValue(DateInfo){
            let key = Object.keys(DateInfo)[0];
            return DateInfo[key];
        },
        dateClick(calendarDate){
            if(calendarDate.holiday !== 1){

                year_month = $('#year_month_select').val();
                full_date = year_month+'/'+calendarDate.date.slice(-2);
                selectedStatus = calendarDate.isSelected;

                if(selectedStatus === 1){
                    calendarDate.isSelected = 0;
                    let index = vacation.indexOf(full_date);
                    if (index > -1) {
                        vacation.splice(index, 1);
                    }
                }else{
                    calendarDate.isSelected = 1;
                    vacation.push(full_date);
                }
            }

            $('#annual_json').val(vacation.join());
        },
        dateTimeClick(calendarDate,index){
            if(index === 0){
                calendarDate.dateTime = "全天";
            }else if(index ===1){
                calendarDate.dateTime = "上午";
            }else{
                calendarDate.dateTime = "下午";
            }
        },
        dateTimeActive(calendarDate,index){
            var dateTime = calendarDate.dateTime;
            if(index === 0){
                if(dateTime === "全天")
                    return true;
            }else if(index ===1){
                if(dateTime === "上午")
                    return true;
            }else{
                if(dateTime === "下午")
                    return true;
            }
        },
        fullDate(Date){
            year_month = $('#year_month_select').val();
            full_date = year_month+'/'+Date.slice(-2);
            return full_date;
        }
    }
});

$('#collapse .plus').click(function () {
    $(this).toggleClass('d-none');
    $('#collapse .minus').toggleClass('d-none');
    $('#collapse-block').removeClass('d-none');
});

$('#collapse .minus').click(function () {
    $('#collapse .plus').toggleClass('d-none');
    $(this).toggleClass('d-none');
    $('#collapse-block').addClass('d-none');
});

$('.demo-version').click(function(){
    alert("體驗版暫不開放")
})