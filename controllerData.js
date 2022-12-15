module.exports = [
    {
        path: "/locations",
        data: require("./controllers/locations.controller.js"),
    },
    {
        path: "/machines",
        data: require("./controllers/machines.controller.js"),
    },
    {
        path: "/persons",
        data: require("./controllers/persons.controller.js"),
    },
    {
        path: "/plans",
        data: require("./controllers/plans.controller.js"),
    },
    {
        path: "/special-events",
        data: require("./controllers/special-events.controller.js"),
    }
]