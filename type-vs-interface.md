When I first started learning TypeScript I was confused between the use of type and interface. They look similar since they can be used to describe the shape of an object but after using TypeScript I have seen some key differences.

1. Interfaces

The main use of an interface is to define the shape of an object. This means that we know what properties and methods our object should contain.

interface User {
name: string;
age: number;
}

Something interesting about interfaces is that they allow us to declare them. This means that we can declare the same interface multiple times and TypeScript will merge them together.

2. Type Aliases

Type aliases can be used to assign a name to almost anything.

type User = {
name: string;
age: number;
};

type Status = "success" | "error" | "loading";

Interfaces can't be opened again after declaring them unlike interfaces. However they do allow us to use unions, intersections and other advanced types.

3. Which to use?

I feel that both types are very useful and you should use both.
Use interfaces to define the shape of an object, especially if you want to extend it.
Use types when using unions, primitive types, tuples or more advanced types.

As a beginner I like to use interfaces when defining object shapes and types when I need something more flexible. But honestly it's more important to be consistent in your project.
