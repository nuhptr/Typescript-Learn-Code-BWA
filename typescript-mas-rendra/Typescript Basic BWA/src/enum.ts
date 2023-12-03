// TODO: numeric enum
export enum Month {
   // custom index
   JAN = 1,
   FEB,
   MAR,
   APR,
   MEI,
}

// TODO: string enum
export enum Day {
   // custom index
   MON = "Monday",
   TUE = "Tuesday",
   WED = "Wednesday",
   THR = "Thursday",
   FRI = "Friday",
}

console.table(Month)
console.table(Day)

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
