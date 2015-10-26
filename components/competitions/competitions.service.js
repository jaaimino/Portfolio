/**
 * Factory for getting my projects
 */

'use strict';

angular.module('jaimino')
  .factory('Competitions', function () {
    var project = function(name, host, date, link, img, target){
        this.name = name;
        this.host = host;
        this.date = date;
        this.img = img;
        this.link = link;
        this.target = target;
    };
    var competitions = [
        new project(
            "Code for Good Delaware", 
            "JPMorgan Chase & Co.", 
            "November 1st 2013", 
            "https://github.com/jaaimino/financial-advisor-app", 
            "http://www.udel.edu/udaily/2014/nov/images/codegoodtudentsa.jpg", 
            "_blank"
        ),
        new project(
            "Association for Computing Machinery Hackathon", 
            "University of Delaware", 
            "TBA", 
            "#", 
            "", 
            "_blank"
        ),
        new project(
            "Code for Good Delaware", 
            "JPMorgan Chase & Co.", 
            "March 8th 2013", 
            "http://www.udel.edu/udaily/2013/mar/code030813.html", 
            "http://www.udel.edu/udaily/2013/mar/images/CodeforGood1.jpg", 
            "_blank"
        ),
        //new project("Tastimals", "https://jaaimino.github.io/tastimals/", "assets/img/project_thumbs/tastimals_thumb.png", "_blank")
    ];
    var getCompetitions = function(){
        return competitions;
    }
    // Public API here
    return {
        getCompetitions : getCompetitions
    };
  });
