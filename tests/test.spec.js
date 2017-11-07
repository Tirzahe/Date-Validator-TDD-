describe('isValidDate', function() {
  describe('hasValidLength', function(){
    it('has 8 or 10 characters', function(){
       expect(hasValidLength('03-13-1991')).toBe(true);
        expect(hasValidLength('03-13-91')).toBe(true);

      expect(hasValidLength('03-13-19911')).toBe(false); //11 chars
      expect(hasValidLength('03-13-199')).toBe(false); //9 chars
      expect(hasValidLength('03-13-1')).toBe(false); //7 chars
    });
  });
  describe('hasValidMonth', function(){
    it('Starts with 2 valid digits', function(){
      expect(hasValidMonth('01-12-01')).toBe(true);
      expect(hasValidMonth('02-12-01')).toBe(true);
      expect(hasValidMonth('03-12-19')).toBe(true);
      expect(hasValidMonth('04-12-01')).toBe(true);
      expect(hasValidMonth('05-12-01')).toBe(true);
      expect(hasValidMonth('06-12-01')).toBe(true);
      expect(hasValidMonth('07-12-01')).toBe(true);
      expect(hasValidMonth('08-12-01')).toBe(true);
      expect(hasValidMonth('09-12-01')).toBe(true);
      expect(hasValidMonth('10-12-01')).toBe(true);
      expect(hasValidMonth('11-12-01')).toBe(true);
      expect(hasValidMonth('12-12-01')).toBe(true);

      expect(hasValidMonth('3-12-19')).toBe(false);//has only 1 digit
      expect(hasValidMonth('MAR-12-1919')).toBe(false);//has letters
      expect(hasValidMonth('133-12-2014')).toBe(false); // has 3 digits
      expect(hasValidMonth('13-12-2014')).toBe(false); // has wrong digits
      expect(hasValidMonth('00-12-2014')).toBe(false); // has wrong digits
    });
    it('has delimeters "/", "-" or "." in index position 2 and 5 that are the same', function(){
      expect(hasValidDelimiters('03-12-09')).toBe(true); //has "-" for delimeter
      expect(hasValidDelimiters('03/12/09')).toBe(true); //has "/" for delimeter
      expect(hasValidDelimiters('03.12.09')).toBe(true); //has "-" for delimeter

      expect(hasValidDelimiters('03121909')).toBe(false); //has no delimeter
      expect(hasValidDelimiters('03*12*09')).toBe(false); //has invalid delimeter
      expect(hasValidDelimiters('03_12_09')).toBe(false); //has invalid delimeter
      expect(hasValidDelimiters('03\'12\'09')).toBe(false); //has invalid delimeter
      expect(hasValidDelimiters('03\\12\\09')).toBe(false); //has invalid delimeter

      expect(hasValidDelimiters('03-12/09')).toBe(false); //has two different delimeters

    });
  });
  describe('hasValidYear', function(){
    it('has two or four numbers in the index locations 6 & 7 or 6,7,8 & 9', function(){
      expect(hasValidYear('01-01-01')).toBe(true);
      expect(hasValidYear('01-01-2001')).toBe(true);

      expect(hasValidYear('01-01-0')).toBe(false);
      expect(hasValidYear('01-01-001')).toBe(false);
      expect(hasValidYear('01-01-0e')).toBe(false);
      expect(hasValidYear('01-01-200e')).toBe(false);
    });
  });
  describe('hasValidDays', function(){
    it('if the month is: 01,03,05,07,08,10,12 it will have a 2 digit number including and between 01-31 for the day in index positions 3 & 4', function(){
      expect(hasValidDay('01-01-01')).toBe(true);
      expect(hasValidDay('02-29-12')).toBe(true); // feb 29 days in a leap year
      expect(hasValidDay('01-31-2001')).toBe(true);
      expect(hasValidDay('04-30-2012')).toBe(true);

      expect(hasValidDay('01-1-01')).toBe(false); // has 1 digit in Day section
      expect(hasValidDay('01-0e-01')).toBe(false); // has letter in day section
      expect(hasValidDay('01-014-01')).toBe(false); // has 3 digits for day section (THIS TEST FAILS, WHY??)
      expect(hasValidDay('01-414-01')).toBe(false); // has 3 digits for day section (THIS TEST PASSES, why this and not the one above??)
      expect(hasValidDay('02-29-01')).toBe(false); // has 29 days in Feb non leap year
      expect(hasValidDay('02-30-12')).toBe(false); // has 30 days in Feb Leap year
      expect(hasValidDay('01-00-01')).toBe(false); // has 0 days
      expect(hasValidDay('01-32-01')).toBe(false); // has 32 days in Jan
      expect(hasValidDay('03-32-01')).toBe(false); // has 32 days in Mar
      expect(hasValidDay('05-32-01')).toBe(false); // has 32 days in May
      expect(hasValidDay('07-32-01')).toBe(false); // has 32 days in Jul
      expect(hasValidDay('08-32-01')).toBe(false); // has 32 days in Aug
      expect(hasValidDay('10-32-01')).toBe(false); // has 32 days in Oct
      expect(hasValidDay('12-32-01')).toBe(false); // has 32 days in Dec
      expect(hasValidDay('04-31-01')).toBe(false); // has 31 days in Apr
      expect(hasValidDay('06-31-01')).toBe(false); // has 31 days in Jun
      expect(hasValidDay('09-31-01')).toBe(false); // has 31 days in Sep
      expect(hasValidDay('11-31-01')).toBe(false); // has 31 days in Nov
    });
  });
});