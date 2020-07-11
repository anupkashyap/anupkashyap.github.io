"use strict";

var appRoot = document.getElementById("app");

var app = {
    title: "Indecision",
    options: ["One", "Two"]
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var newOption = e.target.elements.option.value;
    console.log(newOption);
    if (newOption) {
        app.options.push(newOption);
        e.target.elements.option.value = "";
    }
    renderApp();
};
var removeAll = function removeAll() {
    app.options = [];
    renderApp();
};
var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Indecision"
        ),
        React.createElement(
            "p",
            null,
            "Indecision app "
        ),
        React.createElement(
            "p",
            null,
            "Length= ",
            app.options.length
        ),
        React.createElement(
            "button",
            { id: "remove", className: "button", onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                { type: "submit", id: "submit", className: "button" },
                "Add"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
