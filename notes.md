#Routing Notes

an express router is like a component

we can break an express API into Routers

/api/hubs
/api/user
/api/messages
/api/lessons

REST.

a way to build flexibility

- everything is a Resource (resource thinking)

- Resources are accessed through a single URL. (only access users from the /api/users and not also /api/hubs)

a function has a name === an endpoint has a url
you execute(invoke) a function === you send a request to an endpoint

we can pass data to a function as arguments === we can send data to an endpoint(body, url parameter, query string, header)

a function can returna value === an endpoint can return a response

