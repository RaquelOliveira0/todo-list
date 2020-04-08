import React from 'react'
import IconButtom from '../template/iconButtom'

export default props =>{
    const renderRows = ()=>{
          const list = props.list || []
         return list.map(todo =>(
              <tr key={todo._id}>
                  <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                  <td>
                      <IconButtom styles="success" icon="check" hide={todo.done}
                      onClick={()=> props.handleMarkAsDone(todo)}>
                      </IconButtom>
                      <IconButtom styles="warning" icon="undo" hide={!todo.done}
                      onClick={()=> props.handleMarkAsPending(todo)}>
                      </IconButtom>
                      <IconButtom styles="danger" icon="trash-o" hide={!todo.done}
                       onClick={()=> props.handleRemove(todo)}></IconButtom>
                      </td>
              </tr>
          ))
        
    }
    return(
        <table className="table">
            <thead>
            <tr>
                <th>Descrição</th>
                <th className="tableActions">Ações</th>
            </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}