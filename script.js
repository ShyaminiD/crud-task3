async function getUsers() {
    try {
        const data = await fetch("https://dog.ceo/api/breeds/list/all", {
            method: "GET"
        });
        const users = await data.json();
        console.log(users);
        console.log(Object.keys(users));
        console.log(Object.values(users));

        var l = Object.keys(Object.values(users)[0]).length
        console.log(l);
        createUser(users);
    } catch (err) {
        console.log("Error", err);
    }
}
getUsers();



function createUser(users) {
    for (const dogbreedname in Object.values(users)[0]) {
        console.log(`${dogbreedname}: ${Object.values(users)[0][dogbreedname]}`);
        const info = document.createElement("div");
        info.setAttribute("class", "container");
        info.innerHTML = `
        <div class ="dog-breed">
        <li>  ${dogbreedname}: ${Object.values(users)[0][dogbreedname]}
         <button onclick ="deletedog(value)" value =" ${dogbreedname}: ${Object.values(users)[0][dogbreedname]}"  class = "deletebreed">Delete breed</button> </li>
        
        <div>
           `;
        document.querySelector(".dog-list").append(info);
    }
}

async function deletedog(value) {
    console.log("Deleted Dog Breed " + " " + value);

    const data = await fetch(`https://dog.ceo/api/breeds/list/all/${value}`, {
        method: "DELETE"
    });
    const removeddog = await data.json();
    console.log(removeddog);
    getUsers();
}