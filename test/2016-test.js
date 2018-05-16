describe('2017 年初的台灣', function() {
  describe('目標 1. 解決低薪問題', function() {
    describe('關鍵結果 1. 薪水在中位數（含）以下的人（經常性）月薪加薪 3% （含）以上', function() {
      it('中位數（第 5 十分位）加薪 3%', function() {
        assertSalaryIncreasement(4, 0.3);
      });
      it('第 4 十分位人加薪 3%', function() {
        assertSalaryIncreasement(3, 0.3);
      });
      it('第 3 十分位人加薪 3%', function() {
        assertSalaryIncreasement(2, 0.3);
      });
      it('第 2 十分位人加薪 3%', function() {
        assertSalaryIncreasement(1, 0.3);
      });
      it('第 1 十分位人加薪 3%', function() {
        assertSalaryIncreasement(0, 0.3);
      });
    });
  });

  function assertSalaryIncreasement(level, growthRate) {
    var salary2016 = salaryTenLevelsData.year2016[level];
    var salary2015 = salaryTenLevelsData.year2015[level];
    var result = new Number((salary2016 - salary2015) / salary2015);
    should.ok(result >= growthRate,
      '2016 年度月薪: ' + salary2016 + ', 2015 年度月薪: ' + salary2015 +
      ', 僅上升了 ' + String(result.toFixed(4) * 100) + ' %');
  }
});
