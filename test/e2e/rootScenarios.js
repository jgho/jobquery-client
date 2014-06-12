describe('jobQuery application', function(){

  describe('states', function(){

    it('should be accessible using ui-srefs', function(){
      browser.get('');

      element(by.css('a[href*="user"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/user');
      });

      element(by.css('a[href*="user/account"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/user/account');
      });

      element(by.css('a[href*="admin"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin');
      });

      element(by.css('a[href*="admin/candidates"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/candidates');
      });

      element(by.css('a[href*="admin/companies"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/companies');
      });

      element(by.css('a[href*="admin/messages"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/messages');
      });

      element(by.css('a[href*="admin/opportunities"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/opportunities');
      });

      element(by.css('a[href*="admin/scheduling"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/scheduling');
      });

      element(by.css('a[href*="admin/tags"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/tags');
      });

      element(by.css('a[href*="admin/account"]')).click();

      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/admin/account');
      });

    });

  });

  describe('home state', function(){

    it('should exist', function(){
      browser.get('');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/');
      });

    });
    
  });

  describe('404 state', function(){

    it('should exist', function(){
      browser.get('/404');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/404')
      });
    });

    it('should be redirected to when URL is unknown', function(){
      browser.get('/fjkdsljfkldsa');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/404');
      });
    });

  });

  describe('user state', function(){

    it('should exist', function(){
      browser.get('/user');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toBe('http://localhost:8000/user');
      });
    });

    describe('user.account state', function(){

      it('should exist', function(){
        browser.get('/user/account');
        browser.getLocationAbsUrl().then(function(url){
          expect(url).toBe('http://localhost:8000/user/account');
        });
      });

    });

  });

});