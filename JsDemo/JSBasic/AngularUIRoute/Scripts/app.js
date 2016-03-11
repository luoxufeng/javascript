var myapp=angular.module("myApp",["ui.router"]);
myapp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.when("","/pagetab");
	$stateProvider.state("pagetab",{
		url:"/pagetab",
		templateUrl:"pagetab.html"
	}).state("pagetab.page1",{
		url:"/page1",
		templateUrl:"page1.html"
	}).state("pagetab.page2",{
		url:"/page2",
		templateUrl:"page2.html"
	}).state("pagetab.page3",{
		url:"/page3",
		templateUrl:"page3.html"
	})
});