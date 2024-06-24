const year = 366;

const day = ['วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัสบดี','วันศุกร์','วัยเสาร์','วันอาทิตย์'];
const month = ['มกราคม','กุมพาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
let count_day= 0;
let count_month =0;
let monthIndex = 0;
let money_total = 0;
let moneyMonth = 0;
// * Results
let result = [];
for(let y=1;y<=year;y++){
    // * Count Day 1 - 7
    count_day+=1;
    count_month+=1;
    if(count_day == 8){
        count_day = 1;  
    }
    if(count_month == 31){
        count_month = 1;
    }
    if(count_month == 30){
        monthIndex+=1;
    }
   
    if(day[count_day-1] == 'วันศุกร์' && count_month !== 1 && count_month !== 16){
        money_total+=8;
        moneyMonth+=8;
    }
    else if(count_month == 1 || count_month == 16){
        money_total+=10;
        moneyMonth+=10;
    }
    else {
        money_total+=5;
        moneyMonth+=5;
    }
    
    if(count_month == 30){
        if(monthIndex == 3 || monthIndex == 6 || monthIndex == 9 || monthIndex == 12){
            money_total+=100;
            moneyMonth+=100;
        }
        result = [...result,{month:month[monthIndex-1],ยอดรวมในเดือน:moneyMonth}];
        moneyMonth=0;
    }
    if(y == 366){
        result = [...result,{ยอดรวม1ปี:money_total}]
    }
}

console.log(result);
console.log("############## END ################");