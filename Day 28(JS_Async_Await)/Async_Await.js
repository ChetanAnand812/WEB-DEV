async function getData(){
    // Simulate getting data from a server
    return new Promise((resolve, regect) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main() {
    console.log("Loding modules")

    console.log("Do someting else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}

main()