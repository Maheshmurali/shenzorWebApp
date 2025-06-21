type RouteAccessMap = {
    [key : string] : string[];
}

export const routerAccessMap:   RouteAccessMap = {
    "/admin(.*)" : ["admin"],
    "/clients(.*)" : ["admin"],
    "/partner(.*)" : ["admin"],
    "/order(.*)" : ["admin"],
    "/requests(.*)" : ["admin"],
    "/partner/[id]" : ["admin"],
    "/clents/[id]" : ["admin"],
    "/shop(.*)" : ["admin", "client"],
    "/creator(.*)" : ["admin", "client"],
    "/messages(.*)" : ["admin", "client"],
    "/profile(.*)" : ["admin", "client"],
}