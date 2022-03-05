const promiseModule = () => {


    const getData = () => {
        const user = fetch('db.json');
        user
            .then(response => response.json())
            .then(data => {
                console.log(data)
                sendData(data)
            })
            .catch((e) => {
                console.log(e)
                console.log("Данные НЕ были получены, ошибка");
            })
    }

    const sendData = (user) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(response => {
                console.log("Данные успешно отправлены");
            })
            .catch((e) => {
                console.log(e)
                console.log("Данные НЕ отправлены, ошибка");
            })
    }

    getData()
}

export default promiseModule;