{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile(profile: Profile, updates: Partial<Profile>) : Profile {
        return { ...profile, ...updates };
    }

    const myProfile = { name: "Typescript", age: 25, email: "typescript@example.com" };
// console.log(updateProfile(myProfile, {name: "Zack", age: 23 }));

    //
}