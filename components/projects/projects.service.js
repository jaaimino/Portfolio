/**
 * Factory for getting my projects
 */

'use strict';

angular.module('jaimino')
  .factory('Projects', function () {
    var project = function(name, link, img){
        this.name = name;
        this.img = img;
        this.link = link;
    };
    var projects = [
        new project("Nope", "/#/", "assets/img/project_thumbs/gemini_thumb.png"),
        new project("Test", "/#/", "assets/img/project_thumbs/gemini_thumb.png"),
        new project("Test", "/#/", "assets/img/project_thumbs/gemini_thumb.png"),
        new project("Test", "/#/", "assets/img/project_thumbs/gemini_thumb.png")
    ];
    var getProjects = function(){
        return projects;
    }
    // Public API here
    return {
        getProjects : getProjects
    };
  });
