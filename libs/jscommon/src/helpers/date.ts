import { DateTime } from 'luxon';
import { DateRange } from '../typedef';

export function date2String(date: Date, format: string): string {
  if (!date || format === '') return '';

  const dateTime = DateTime.fromJSDate(new Date(date));
  const formattedDate = dateTime.toFormat(format);
  return formattedDate;
}

export function date2Day(date: Date): string {
  return date2String(date, 'dd');
}
export function date2Month(date: Date): string {
  return date2String(date, 'MM');
}
export function date2Year(date: Date): string {
  return date2String(date, 'yyyy');
}
export function date2MonthString(date: Date): string {
  return date2String(date, 'MMMM');
}

export function date2MonthStringShort(date: Date): string {
  return date2String(date, 'MMM');
}

export function sortDates(date1: Date, date2: Date): [Date, Date] {
  if (date1 > date2) {
    return [date2, date1]; // date1 est après date2
  } else if (date1 < date2) {
    return [date1, date2]; // date1 est avant date2
  } else {
    return [date1, date2]; // Les deux dates sont identiques
  }
}
export function daysBetweenDates(dateA: Date, dateB: Date): number {
  const date1 = new Date(dateA);
  const date2 = new Date(dateB);
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
}


/**
 * compare only days at midnight
 * @param currentDate 
 * @param dateRange 
 * @returns 
 */
export function isDateInRange(
  currentDate: Date,
  dateRange: DateRange
): boolean {

  currentDate.setHours(0, 0, 0, 0);
  dateRange.startDate.setHours(0, 0, 0, 0);
  dateRange.endDate.setHours(0, 0, 0, 0);

  return (

    
    currentDate >= dateRange.startDate &&
    currentDate <= dateRange.endDate
  );
}


export function adjustYear(year: number,yearMin : number): number {
  const currentYear: number = new Date().getFullYear();

  if (year < yearMin) {
      year = yearMin;
  } else if (year > currentYear) {
      year = currentYear;
  }

  return year;
}
