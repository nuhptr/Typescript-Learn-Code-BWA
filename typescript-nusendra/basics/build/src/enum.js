"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = exports.Month = void 0;
// TODO: numeric enum
var Month;
(function (Month) {
    // custom index
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MEI"] = 5] = "MEI";
})(Month = exports.Month || (exports.Month = {}));
// TODO: string enum
var Day;
(function (Day) {
    // custom index
    Day["MON"] = "Monday";
    Day["TUE"] = "Tuesday";
    Day["WED"] = "Wednesday";
    Day["THR"] = "Thursday";
    Day["FRI"] = "Friday";
})(Day = exports.Day || (exports.Day = {}));
console.table(Month);
console.table(Day);
/*
───────┬────────┐
│ (idx) │ Values │
├───────┼────────┤
│ 1     │ "JAN"  │
│ 2     │ "FEB"  │
│ 3     │ "MAR"  │
│ 4     │ "APR"  │
│ 5     │ "MEI"  │
│ JAN   │ 1      │
│ FEB   │ 2      │
│ MAR   │ 3      │
│ APR   │ 4      │
│ MEI   │ 5      │
└───────┴────────┘
┌───────┬─────────────┐
│ (idx) │ Values      │
├───────┼─────────────┤
│ MON   │ "Monday"    │
│ TUE   │ "Tuesday"   │
│ WED   │ "Wednesday" │
│ THR   │ "Thursday"  │
│ FRI   │ "Friday"    │
*/
