When I started to use Typescript, I noticed that I was seeing types like any, unknown and never.They appear similar they have very different behaviours. Knowing about these types will help you create safer and cleaner Typescript code.

1. Any

This tells Typescript to not do any type checking on the value. You can assign any value and do almost anything with it.

let value: any = "Hello";
value = 123;
value.toUpperCase();

You will not get any warnings from TypeScript, however it can take away many of the benefits that Typescript provides.

2. Unknown
   This is similar to any but you need to ensure that you check the type before using it.

   let value: unknown = "Hello";

   This means it is much safer as Typescript will ensure you are handling your value correctly.

3. Never
   Never is a type used to represent a value that should never exist. This can often be seen in functions that will never return or exhaustive type checking.

function throwError(message: string): never {
throw new Error(message);
}

4. Why should we use unknown?
   I feel that we should use unknown as it keeps our safety checks in Typescript. When we are getting data from an API or user input we might not know what our value will be.

Using unknown means we will need to validate our data, whereas any will trust everything.

I try to avoid using any wherever I can. Using unknown gives us more flexibility but still keeping our type safet. Never can help us catch cases that should not be able to happen. Knowing which of these 3 to use will make Typescript much easier to use.
