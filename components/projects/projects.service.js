/**
 * Factory for getting my projects
 */

'use strict';

angular.module('jaimino')
  .factory('Projects', function () {
    var project = function(name, link, img, target){
        this.name = name;
        this.img = img;
        this.link = link;
        this.target = target;
    };
    var projects = [
        new project("Financial Advisor App", "https://github.com/jaaimino/financial-advisor-app", "assets/img/project_thumbs/finadvise_thumb.png", "_blank"),
        new project("Tastimals", "https://jaaimino.github.io/tastimals/", "assets/img/project_thumbs/tastimals_thumb.png", "_blank"),
        new project("Dogebook", "https://github.com/jaaimino/dogebook", "assets/img/project_thumbs/dogebook_thumb.png", "_blank"),
        new project("Gemini Simulator", "https://github.com/jaaimino/gemini-simulator", "assets/img/project_thumbs/gemini_thumb.png", "")
    ];
    var getProjects = function(){
        return projects;
    }
    // Public API here
    return {
        getProjects : getProjects
    };
  });
