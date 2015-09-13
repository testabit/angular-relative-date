var NOW = new Date(2013, 8, 7, 12, 0, 0)

describe('Filter: relativeDate', function() {
  var relativeDate

  beforeEach(function() {
    module('relativeDate', function($provide) {
      $provide.value('now', NOW)
    })

    inject(function(_$filter_) {
      relativeDate = _$filter_('relativeDate')
    })
  })

  it('Allows the `now` value to be set', function() {
    inject(function(now) {
      expect(now).toEqual(NOW)
    })
  })

  it('Has the correct response for each interval', function() {
    // Past
    expect(relativeDate(new Date(2013, 8, 7, 12, 0, 0))).toEqual('just now')
    expect(relativeDate(new Date(2013, 8, 7, 11, 59, 31))).toEqual('just now')
    expect(relativeDate(new Date(2013, 8, 7, 11, 59, 29))).toEqual('31 seconds ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 59, 01))).toEqual('59 seconds ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 59, 00))).toEqual('a minute ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 58, 01))).toEqual('a minute ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 58, 00))).toEqual('2 minutes ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 00, 01))).toEqual('59 minutes ago')
    expect(relativeDate(new Date(2013, 8, 7, 11, 00, 00))).toEqual('an hour ago')
    expect(relativeDate(new Date(2013, 8, 7, 10, 00, 01))).toEqual('an hour ago')
    expect(relativeDate(new Date(2013, 8, 7, 10, 00, 00))).toEqual('2 hours ago')
    expect(relativeDate(new Date(2013, 8, 6, 12, 00, 01))).toEqual('23 hours ago')
    expect(relativeDate(new Date(2013, 8, 6, 12, 00, 00))).toEqual('yesterday')
    expect(relativeDate(new Date(2013, 8, 6, 00, 00, 00))).toEqual('yesterday')
    expect(relativeDate(new Date(2013, 8, 5, 22, 59, 59))).toEqual('2 days ago')
    expect(relativeDate(new Date(2013, 8, 5, 10, 00, 00))).toEqual('2 days ago')
    expect(relativeDate(new Date(2013, 8, 1))).toEqual('6 days ago')
    expect(relativeDate(new Date(2013, 7, 31))).toEqual('a week ago')
    expect(relativeDate(new Date(2013, 7, 9))).toEqual('4 weeks ago')
    expect(relativeDate(new Date(2013, 7, 8))).toEqual('a month ago')
    expect(relativeDate(new Date(2013, 2, 1))).toEqual('6 months ago')
    expect(relativeDate(new Date(2012, 8, 7))).toEqual('a year ago')
    expect(relativeDate(new Date(2012, 3, 7))).toEqual('a year ago')
    expect(relativeDate(new Date(2011, 3, 7))).toEqual('over a year ago')

    // Future
    expect(relativeDate(new Date(2013, 8, 7, 12, 00, 31))).toEqual('31 seconds from now')
    expect(relativeDate(new Date(2013, 8, 7, 12, 00, 59))).toEqual('59 seconds from now')
    expect(relativeDate(new Date(2013, 8, 7, 12, 01, 00))).toEqual('a minute from now')
    expect(relativeDate(new Date(2013, 8, 7, 12, 01, 01))).toEqual('a minute from now')
    expect(relativeDate(new Date(2013, 8, 7, 12, 02, 00))).toEqual('2 minutes from now')
    expect(relativeDate(new Date(2013, 8, 7, 12, 59, 01))).toEqual('59 minutes from now')
    expect(relativeDate(new Date(2013, 8, 7, 13, 00, 00))).toEqual('an hour from now')
    expect(relativeDate(new Date(2013, 8, 7, 13, 00, 01))).toEqual('an hour from now')
    expect(relativeDate(new Date(2013, 8, 7, 14, 00, 00))).toEqual('2 hours from now')
    expect(relativeDate(new Date(2013, 8, 8, 11, 00, 01))).toEqual('23 hours from now')
    expect(relativeDate(new Date(2013, 8, 8, 12, 00, 00))).toEqual('tomorrow')
    expect(relativeDate(new Date(2013, 8, 8, 23, 59, 59))).toEqual('tomorrow')
    expect(relativeDate(new Date(2013, 8, 9, 00, 00, 00))).toEqual('2 days from now')
    expect(relativeDate(new Date(2013, 8, 10, 23, 59, 59))).toEqual('3 days from now')
    expect(relativeDate(new Date(2013, 8, 11, 00, 00, 01))).toEqual('4 days from now')
    expect(relativeDate(new Date(2013, 8, 13))).toEqual('6 days from now')
    expect(relativeDate(new Date(2013, 8, 14, 00, 00, 00))).toEqual('a week from now')
    expect(relativeDate(new Date(2013, 8, 14, 12, 00, 00))).toEqual('a week from now')
    expect(relativeDate(new Date(2013, 9, 5, 12, 00, 00))).toEqual('4 weeks from now')
    expect(relativeDate(new Date(2013, 9, 7, 12, 00, 00))).toEqual('a month from now')
    expect(relativeDate(new Date(2014, 2, 7, 12, 00, 00))).toEqual('6 months from now')
    expect(relativeDate(new Date(2014, 8, 7, 12, 00, 00))).toEqual('a year from now')
    expect(relativeDate(new Date(2015, 0, 7, 12, 00, 00))).toEqual('a year from now')
    expect(relativeDate(new Date(2015, 9, 7, 12, 00, 00))).toEqual('over a year from now')
  })
})

describe('Filter: relativeDate', function() {
  var relativeDate

  beforeEach(function() {
    module('relativeDate')

    inject(function(_$filter_) {
      relativeDate = _$filter_('relativeDate')
    })
  })

  it('Updates the value of NOW', function() {
    // Create a date 29 seconds ago (30 is the "just now" cutoff)
    var now = new Date(new Date() - 29000)
    var flag

    expect(relativeDate(now)).toEqual('just now')

    runs(function() {
      setTimeout(function() {
        flag = true
      }, 1001)
    })

    waitsFor(function() {
      return flag
    })

    runs(function() {
      expect(relativeDate(now)).toEqual('30 seconds ago')
    })
  })
})

describe('Filter: relativeDate', function() {
  var relativeDate

  beforeEach(function() {
    module('relativeDate', function($provide) {
      $provide.value('now', NOW)
      $provide.value('relativeDateTranslations', {
        weeks_ago: '{{time}}週間前',
        a_year_ago: '一年前',
        hours_from_now: '{{time}}時間今から'
      })
    })

    inject(function(_$filter_) {
      relativeDate = _$filter_('relativeDate')
    })
  })

  it('Performs simple translations', function() {
    expect(relativeDate(new Date(2013, 7, 9))).toEqual('4週間前')
    expect(relativeDate(new Date(2012, 8, 7))).toEqual('一年前')
    expect(relativeDate(new Date(2013, 8, 7, 14, 0, 0))).toEqual('2時間今から')
  })
})

describe('Filter: relativeDate', function() {
  var $scope

  beforeEach(function() {
    module('myApp', function($provide) {
      $provide.value('now', NOW)
    })

    inject(function($rootScope, $controller, $filter) {
      $scope = $rootScope.$new()
      $controller('TestCtrl', {
        $scope: $scope
      })
    })
  })

  describe('Integration with angular-translate', function() {
    it('Uses angular-translate when available', function() {
      expect($scope.fourWeeksAgo).toEqual('4週間前')
      expect($scope.aYearAgo).toEqual('一年前')
      expect($scope.twoHoursFromNow).toEqual('2時間今から')
    })
  })
})
