// import { createNote } from "../utils/createNote"
// import repository from './repositoryObjs'
import { useDispatch } from "react-redux"

const mapDispatchToProps = {
    Save(data){
        return {
            type: 'ADD_NOTE',
            payload: data
        }
    },
    Update(obj){
        return {
            type: 'UPDATE_NOTE',
            payload: obj
        }
    },
    Delete(obj){
        return {
            type: 'DELETE_NOTE',
            payload: obj
          }
    }
}

function useRepository(){
    const dispatch = useDispatch()
    // const repos = repository()
    // const storedNotas = useSelector(state => state)

    const save = (obj) => {
        dispatch(mapDispatchToProps.Save(obj))
        // repos.saveData(storedNotas)
    }
    const update = (obj) => {
        dispatch(mapDispatchToProps.Update(obj))
        // repos.saveData(storedNotas)
    }
    const del = (obj) => {
        dispatch(mapDispatchToProps.Delete(obj))
        // repos.saveData(storedNotas)
    }
    return {
        save,
        update,
        del
    }
}
export default useRepository