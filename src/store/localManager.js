function repository(){
    let key = 'app.notas';

    const setKey = (newKey) => {
        key = newKey;
    }
    const getKey = () => key;
    const saveData = (data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    const getData = () => {
        return JSON.parse(localStorage.getItem(key));
    }
    const addElement = (element) => {
        const prev = getData();
        prev.push(element);
        saveData(prev);
    }
    const deleteElement = (id) => {
        const elementos = getData();
        const resultado = elementos.filter(element => element.id !== id);
        saveData(resultado);
    }
    return {
        setKey,
        getKey,
        saveData,
        getData,
        addElement,
        deleteElement
    }
}
// const repository = LocalRepository()

// let data = repository.getData();
// console.log(data)

export default repository;