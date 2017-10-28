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
    });
    it()
    // it('has 2 valid digits in the correct index locations 3 & 4, to create any number from 1-31, and will inly indicate the '), function(){
    //   expect(hasValidDay('01-01-2001')).toBe(true);
    //   expect(hasValidDay('02-28-2001')).toBe(true);

    //   expect(hasValidDay('01-1-2001')).toBe(false);
    //   expect(hasValidDay('01-1-2001')).toBe(false);
    //   expect(hasValidDay('01-1-2001')).toBe(false);
    //   expect(hasValidDay('01-1-2001')).toBe(false);
    // }
  });
  // describe('hasValidFormat', function(){
  //   it('has two digits for Month, two digits for day and two or four digits for year', function(){
  //     expect(hasValidFormat('03-12-19')).toBe(true);
  //     // expect(hasValidFormat('03-12-1919')).toBe(true);

  //     // expect(hasValidFormat('3-12-19')).toBe(false); // 1 digit for month
  //     // expect(hasValidFormat('030-12-19')).toBe(false); // 3 digits for month
  //     // expect(hasValidFormat('03-2-19')).toBe(false); // 1 digit for day
  //     // expect(hasValidFormat('03-112-19')).toBe(false);// 3 digits for day
  //     // expect(hasValidFormat('03-12-9')).toBe(false);// 1 digit for year
  //     // expect(hasValidFormat('03-12-191')).toBe(false); // 3 digits for year
  //     // expect(hasValidFormat('03-12-19191')).toBe(false); //5 digits for year
  //   });
  //   it('is only numbers and has "-", "/" or "." as seperators', function(){
  //     expect(hasValidFormat('03-12-19')).toBe(true);
  //     expect(hasValidFormat('03-12-1919')).toBe(true);

  //     expect(hasValidFormat('MAR-12-19')).toBe(false); // has letters
  //     expect(hasValidFormat('03121919')).toBe(false); // has no seperator
  //     expect(hasValidFormat('03_12_19')).toBe(false); // has invalid seperator
  //   });
  // });
});