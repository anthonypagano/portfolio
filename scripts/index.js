'use strict'

// functions to toggle nav elements
function watchProjectsToggleButton() {
    $('.projects-button').click(event => {
        $(".projects").fadeIn();
        $(".home").hide();
        $(".about").hide();
    });
}

function watchAboutToggleButton() {
    $('.about-button').click(event => {
        $(".about").fadeIn();
        $(".home").hide();
        $(".projects").hide();
    });
}

function watchHomeToggleButton() {
    $('.home-button').click(event => {
        $(".home").fadeIn();
        $(".projects").hide();
        $(".about").hide();
    });
}

$(function() {
    watchProjectsToggleButton();
    watchAboutToggleButton();
    watchHomeToggleButton();
  });