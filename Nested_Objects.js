// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.



function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
}

const samplePerson = {
    name: 'shashank',
    address: {
        street: '123 Main St',
        city: 'Pune',
        state: 'Maharashtra'
    }
};

const result = extractNameAndStreet(samplePerson);
console.log(result); // { name: 'shashank', street: '123 Main St' }


// In this function:

// We use object destructuring to extract the name property directly from the person object.
// For the street property, we nest the destructuring within the address property using address: { street }.
// The resulting object result contains the extracted name and street properties.