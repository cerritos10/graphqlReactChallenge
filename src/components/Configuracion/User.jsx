import "./Confi.css";


export const User = ({ user } ) =>{
    if (user ===null) return null

    return (
        <div>
            <h2 className="title">Information User</h2>
            {user.map(u => 
                
                <div key={u.id}>                {
                    u.id === "8cf8158f-16ea-4bf8-86be-767104709727"
                    ? <div class="CardC">
                        <div className="info"><span>Nombre: </span>{u.fullName}</div>
                        <div className="info"><span>Email: </span>{u.email}</div>   
                        <div className="info"><span>Tipo: </span>{u.type}</div>
                        <div className="info"><span>Create: </span>{u.createdAt}</div>
                        <div className="info"><span>Update: </span>{u.updatedAt}</div>
                    </div>
                    : ''
                }
                
                </div>)}
        </div>
    )
}