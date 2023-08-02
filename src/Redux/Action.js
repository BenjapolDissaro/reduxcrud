import axios from "axios"
import { MAKE_REQUEST,FAIL_REQUEST, GET_USER_LIST, DELETE_USER,ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const geUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
export const Updateuser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}
export const FetchUserList=()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:8000/user').then(res=>{
                const userlist=res.data;
                dispatch(geUserList(userlist));
             }).catch(err=>{
                 dispatch(failRequest(err.message))
             })
        // },2000);
       
    }
}
export const Removeuser=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.delete('http://localhost:8000/user/'+code).then(res=>{
                // const userlist=res.data;
                dispatch(deleteUser());
             }).catch(err=>{
                 dispatch(failRequest(err.message))
             })
        // },2000);
       
    }
}
export const FunctionAddUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.post('http://localhost:8000/user',data).then(res=>{
                // const userlist=res.data;
                dispatch(addUser());
                toast.success('User Added')
             }).catch(err=>{
                 dispatch(failRequest(err.message))
             })
        // },2000);
       
    }
}
export const FunctionUpdateUser=(data,code)=>{
    // return (dispatch)=>{
    //     dispatch(makeRequest());
    //     // setTimeout(()=>{
    //         axios.put('http://localhost:8000/user/'+code,data).then(res=>{
    //             // const userlist=res.data;
    //             dispatch(Updateuser());
    //             toast.success('User Updated successfully.')
    //          }).catch(err=>{
    //              dispatch(failRequest(err.message))
    //          })
    //     // },2000);
       
    // }
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.put("http://localhost:8000/user/"+code,data).then(res=>{
            dispatch(Updateuser());
            toast.success('User edited successfully.')
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const FetchUserObj=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        // setTimeout(()=>{
            axios.get('http://localhost:8000/user/'+code).then(res=>{
                 const userlist=res.data;
                dispatch(getUserObj(userlist));
                toast.success('User Added')
                console.log('userlist is',userlist)
             }).catch(err=>{
                 dispatch(failRequest(err.message))
             })
        // },2000);
       
    }
}